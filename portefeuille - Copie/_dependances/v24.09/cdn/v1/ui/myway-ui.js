/*!
 * tooltip
 * https://github.com/angular-ui/bootstrap/tree/0.12.0/src/tooltip
 * Version: 0.12.0 - 2014-11-14
 * License: MIT
 */

/***
*  //MYWAY\\
*  - Ajout id pour accessibilité
*/

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider('$tooltip', function () {
    // The default options tooltip and popover.
    var defaultOptions = {
        placement: 'top',
        animation: true,
        popupDelay: 0
    };

    // Default hide triggers for each show trigger
    var triggerMap = {
        'mouseenter': 'mouseleave',
        'click': 'click',
        'focus': 'blur'
    };

    // The options specified to the provider globally.
    var globalOptions = {};

    /**
     * `options({})` allows global configuration of all tooltips in the
     * application.
     *
     *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
     *     // place tooltips left instead of top by default
     *     $tooltipProvider.options( { placement: 'left' } );
     *   });
     */
    this.options = function (value) {
        angular.extend(globalOptions, value);
    };

    /**
     * This allows you to extend the set of trigger mappings available. E.g.:
     *
     *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
     */
    this.setTriggers = function setTriggers(triggers) {
        angular.extend(triggerMap, triggers);
    };

    /**
     * This is a helper function for translating camel-case to snake-case.
     */
    function snake_case(name) {
        var regexp = /[A-Z]/g;
        var separator = '-';
        return name.replace(regexp, function (letter, pos) {
            return (pos ? separator : '') + letter.toLowerCase();
        });
    }

    /**
     * Returns the actual instance of the $tooltip service.
     * TODO support multiple triggers
     */
    this.$get = ['$window', '$compile', '$timeout', '$document', '$position', '$interpolate', function ($window, $compile, $timeout, $document, $position, $interpolate) {
        return function $tooltip(type, prefix, defaultTriggerShow) {
            var options = angular.extend({}, defaultOptions, globalOptions);

            /**
             * Returns an object of show and hide triggers.
             *
             * If a trigger is supplied,
             * it is used to show the tooltip; otherwise, it will use the `trigger`
             * option passed to the `$tooltipProvider.options` method; else it will
             * default to the trigger supplied to this directive factory.
             *
             * The hide trigger is based on the show trigger. If the `trigger` option
             * was passed to the `$tooltipProvider.options` method, it will use the
             * mapped trigger from `triggerMap` or the passed trigger if the map is
             * undefined; otherwise, it uses the `triggerMap` value of the show
             * trigger; else it will just use the show trigger.
             */
            function getTriggers(trigger) {
                var show = trigger || options.trigger || defaultTriggerShow;
                var hide = triggerMap[show] || show;
                return {
                    show: show,
                    hide: hide
                };
            }

            var directiveName = snake_case(type);

            var startSym = $interpolate.startSymbol();
            var endSym = $interpolate.endSymbol();
            var template =
              '<div ' + directiveName + '-popup ' +
                'id="' + startSym + 'id' + endSym + '" ' +
                'title="' + startSym + 'title' + endSym + '" ' +
                'content="' + startSym + 'content' + endSym + '" ' +
                'placement="' + startSym + 'placement' + endSym + '" ' +
                'animation="animation" ' +
                'is-open="isOpen"' +
                '>' +
              '</div>';

            return {
                restrict: 'EA',
                compile: function (tElem, tAttrs) {
                    var tooltipLinker = $compile(template);

                    return function link(scope, element, attrs) {
                        var tooltip;
                        var tooltipLinkedScope;
                        var transitionTimeout;
                        var popupTimeout;
                        var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
                        var triggers = getTriggers(undefined);
                        var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
                        var ttScope = scope.$new(true);

                        var positionTooltip = function () {

                            var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
                            ttPosition.top += 'px';
                            ttPosition.left += 'px';

                            // Now set the calculated positioning.
                            tooltip.css(ttPosition);
                        };

                        // By default, the tooltip is not open.
                        // TODO add ability to start tooltip opened
                        ttScope.isOpen = false;

                        function toggleTooltipBind() {
                            if (!ttScope.isOpen) {
                                showTooltipBind();
                            } else {
                                hideTooltipBind();
                            }
                        }

                        // Show the tooltip with delay if specified, otherwise show it immediately
                        function showTooltipBind() {
                            if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                                return;
                            }

                            prepareTooltip();

                            if (ttScope.popupDelay) {
                                // Do nothing if the tooltip was already scheduled to pop-up.
                                // This happens if show is triggered multiple times before any hide is triggered.
                                if (!popupTimeout) {
                                    popupTimeout = $timeout(show, ttScope.popupDelay, false);
                                    popupTimeout.then(function (reposition) { reposition(); });
                                }
                            } else {
                                show()();
                            }
                        }

                        function hideTooltipBind() {
                            scope.$apply(function () {
                                hide();
                            });
                        }

                        // Show the tooltip popup element.
                        function show() {

                            popupTimeout = null;

                            // If there is a pending remove transition, we must cancel it, lest the
                            // tooltip be mysteriously removed.
                            if (transitionTimeout) {
                                $timeout.cancel(transitionTimeout);
                                transitionTimeout = null;
                            }

                            // Don't show empty tooltips.
                            if (!ttScope.content) {
                                return angular.noop;
                            }

                            createTooltip();

                            // Set the initial positioning.
                            tooltip.css({ top: 0, left: 0, display: 'block' });

                            // Now we add it to the DOM because need some info about it. But it's not
                            // visible yet anyway.
                            if (appendToBody) {
                                $document.find('body').append(tooltip);
                            } else {
                                element.after(tooltip);
                            }

                            positionTooltip();

                            // And show the tooltip.
                            ttScope.isOpen = true;
                            ttScope.$digest(); // digest required as $apply is not called

                            // Return positioning function as promise callback for correct
                            // positioning after draw.
                            return positionTooltip;
                        }

                        // Hide the tooltip popup element.
                        function hide() {
                            // First things first: we don't show it anymore.
                            ttScope.isOpen = false;

                            //if tooltip is going to be shown after delay, we must cancel this
                            $timeout.cancel(popupTimeout);
                            popupTimeout = null;

                            // And now we remove it from the DOM. However, if we have animation, we
                            // need to wait for it to expire beforehand.
                            // FIXME: this is a placeholder for a port of the transitions library.
                            if (ttScope.animation) {
                                if (!transitionTimeout) {
                                    transitionTimeout = $timeout(removeTooltip, 500);
                                }
                            } else {
                                removeTooltip();
                            }
                        }

                        function createTooltip() {
                            // There can only be one tooltip element per directive shown at once.
                            if (tooltip) {
                                removeTooltip();
                            }
                            tooltipLinkedScope = ttScope.$new();
                            tooltip = tooltipLinker(tooltipLinkedScope, angular.noop);
                        }

                        function removeTooltip() {
                            transitionTimeout = null;
                            if (tooltip) {
                                tooltip.remove();
                                tooltip = null;
                            }
                            if (tooltipLinkedScope) {
                                tooltipLinkedScope.$destroy();
                                tooltipLinkedScope = null;
                            }
                        }

                        function prepareTooltip() {
                            prepPlacement();
                            prepId();
                            prepPopupDelay();
                        }

                        /**
                         * Observe the relevant attributes.
                         */
                        attrs.$observe(type, function (val) {
                            ttScope.content = val;

                            if (!val && ttScope.isOpen) {
                                hide();
                            }
                        });

                        attrs.$observe(prefix + 'Title', function (val) {
                            ttScope.title = val;
                        });

                        function prepPlacement() {
                            var val = attrs[prefix + 'Placement'];
                            ttScope.placement = angular.isDefined(val) ? val : options.placement;
                        }

                        function prepId() {
                            var val = attrs[prefix + 'Id'];
                            ttScope.id = angular.isDefined(val) ? val : "";

                            if (ttScope.id === "") {
                                console.warn("L'attribut tooltip-id n'est pas renseigné. Pour rendre accessible de composant il faut un attribut aria-describedby référencant l'id dans tooltip-id.")
                            }
                        }

                        function prepPopupDelay() {
                            var val = attrs[prefix + 'PopupDelay'];
                            var delay = parseInt(val, 10);
                            ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
                        }

                        var unregisterTriggers = function () {
                            element.unbind(triggers.show, showTooltipBind);
                            element.unbind(triggers.hide, hideTooltipBind);
                        };

                        function prepTriggers() {
                            var val = attrs[prefix + 'Trigger'];
                            unregisterTriggers();

                            triggers = getTriggers(val);

                            if (triggers.show === triggers.hide) {
                                element.bind(triggers.show, toggleTooltipBind);
                            } else {
                                element.bind(triggers.show, showTooltipBind);
                                element.bind(triggers.hide, hideTooltipBind);
                            }
                        }
                        prepTriggers();

                        var animation = scope.$eval(attrs[prefix + 'Animation']);
                        ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

                        var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
                        appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

                        // if a tooltip is attached to <body> we need to remove it on
                        // location change as its parent scope will probably not be destroyed
                        // by the change.
                        if (appendToBody) {
                            scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                                if (ttScope.isOpen) {
                                    hide();
                                }
                            });
                        }

                        // Make sure tooltip is destroyed and removed.
                        scope.$on('$destroy', function onDestroyTooltip() {
                            $timeout.cancel(transitionTimeout);
                            $timeout.cancel(popupTimeout);
                            unregisterTriggers();
                            removeTooltip();
                            ttScope = null;
                        });
                    };
                }
            };
        };
    }];
})

.directive('tooltipPopup', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: { content: '@', placement: '@', id: '@', animation: '&', isOpen: '&' },
        templateUrl: 'template/tooltip/tooltip-popup.html'
    };
})

.directive('tooltip', ['$tooltip', function ($tooltip) {
    return $tooltip('tooltip', 'tooltip', 'mouseenter');
}])

.directive('tooltipHtmlUnsafePopup', function () {
    return {
        restrict: 'EA',
        replace: true,
        scope: { content: '@', placement: '@', id: '@', animation: '&', isOpen: '&' },
        templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
    };
})

.directive('tooltipHtmlUnsafe', ['$tooltip', function ($tooltip) {
    return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
}]);
/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.11.2 - 2015-03-17T04:08:46.474Z
 * License: MIT
 */

/***
*  //MYWAY\\
*  - Amelioration perf dans la directive iuSelectChoices
*  - suppression du ng-if dans le ng-repeat
*/


(function () { 
"use strict";

var KEY = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    HOME: 36,
    END: 35,
    BACKSPACE: 8,
    DELETE: 46,
    COMMAND: 91,

    MAP: { 91 : "COMMAND", 8 : "BACKSPACE" , 9 : "TAB" , 13 : "ENTER" , 16 : "SHIFT" , 17 : "CTRL" , 18 : "ALT" , 19 : "PAUSEBREAK" , 20 : "CAPSLOCK" , 27 : "ESC" , 32 : "SPACE" , 33 : "PAGE_UP", 34 : "PAGE_DOWN" , 35 : "END" , 36 : "HOME" , 37 : "LEFT" , 38 : "UP" , 39 : "RIGHT" , 40 : "DOWN" , 43 : "+" , 44 : "PRINTSCREEN" , 45 : "INSERT" , 46 : "DELETE", 48 : "0" , 49 : "1" , 50 : "2" , 51 : "3" , 52 : "4" , 53 : "5" , 54 : "6" , 55 : "7" , 56 : "8" , 57 : "9" , 59 : ";", 61 : "=" , 65 : "A" , 66 : "B" , 67 : "C" , 68 : "D" , 69 : "E" , 70 : "F" , 71 : "G" , 72 : "H" , 73 : "I" , 74 : "J" , 75 : "K" , 76 : "L", 77 : "M" , 78 : "N" , 79 : "O" , 80 : "P" , 81 : "Q" , 82 : "R" , 83 : "S" , 84 : "T" , 85 : "U" , 86 : "V" , 87 : "W" , 88 : "X" , 89 : "Y" , 90 : "Z", 96 : "0" , 97 : "1" , 98 : "2" , 99 : "3" , 100 : "4" , 101 : "5" , 102 : "6" , 103 : "7" , 104 : "8" , 105 : "9", 106 : "*" , 107 : "+" , 109 : "-" , 110 : "." , 111 : "/", 112 : "F1" , 113 : "F2" , 114 : "F3" , 115 : "F4" , 116 : "F5" , 117 : "F6" , 118 : "F7" , 119 : "F8" , 120 : "F9" , 121 : "F10" , 122 : "F11" , 123 : "F12", 144 : "NUMLOCK" , 145 : "SCROLLLOCK" , 186 : ";" , 187 : "=" , 188 : "," , 189 : "-" , 190 : "." , 191 : "/" , 192 : "`" , 219 : "[" , 220 : "\\" , 221 : "]" , 222 : "'"
    },

    isControl: function (e) {
        var k = e.which;
        switch (k) {
        case KEY.COMMAND:
        case KEY.SHIFT:
        case KEY.CTRL:
        case KEY.ALT:
            return true;
        }

        if (e.metaKey) return true;

        return false;
    },
    isFunctionKey: function (k) {
        k = k.which ? k.which : k;
        return k >= 112 && k <= 123;
    },
    isVerticalMovement: function (k){
      return ~[KEY.UP, KEY.DOWN].indexOf(k);
    },
    isHorizontalMovement: function (k){
      return ~[KEY.LEFT,KEY.RIGHT,KEY.BACKSPACE,KEY.DELETE].indexOf(k);
    }
  };

/**
 * Add querySelectorAll() to jqLite.
 *
 * jqLite find() is limited to lookups by tag name.
 * TODO This will change with future versions of AngularJS, to be removed when this happens
 *
 * See jqLite.find - why not use querySelectorAll? https://github.com/angular/angular.js/issues/3586
 * See feat(jqLite): use querySelectorAll instead of getElementsByTagName in jqLite.find https://github.com/angular/angular.js/pull/3598
 */
if (angular.element.prototype.querySelectorAll === undefined) {
  angular.element.prototype.querySelectorAll = function(selector) {
    return angular.element(this[0].querySelectorAll(selector));
  };
}

/**
 * Add closest() to jqLite.
 */
if (angular.element.prototype.closest === undefined) {
  angular.element.prototype.closest = function( selector) {
    var elem = this[0];
    var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

    while (elem) {
      if (matchesSelector.bind(elem)(selector)) {
        return elem;
      } else {
        elem = elem.parentElement;
      }
    }
    return false;
  };
}

var latestId = 0;

var uis = angular.module('ui.select', [])

.constant('uiSelectConfig', {
  theme: 'bootstrap',
  searchEnabled: true,
  sortable: false,
  placeholder: '', // Empty by default, like HTML tag <select>
  refreshDelay: 1000, // In milliseconds
  closeOnSelect: true,
  generateId: function() {
    return latestId++;
  },
  appendToBody: false
})

// See Rename minErr and make it accessible from outside https://github.com/angular/angular.js/issues/6913
.service('uiSelectMinErr', function() {
  var minErr = angular.$$minErr('ui.select');
  return function() {
    var error = minErr.apply(this, arguments);
    var message = error.message.replace(new RegExp('\nhttp://errors.angularjs.org/.*'), '');
    return new Error(message);
  };
})

// Recreates old behavior of ng-transclude. Used internally.
.directive('uisTranscludeAppend', function () {
  return {
    link: function (scope, element, attrs, ctrl, transclude) {
        transclude(scope, function (clone) {
          element.append(clone);
        });
      }
    };
})

/**
 * Highlights text that matches $select.search.
 *
 * Taken from AngularUI Bootstrap Typeahead
 * See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L340
 */
.filter('highlight', function() {
  function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }

  return function(matchItem, query) {
    return query && matchItem ? matchItem.replace(new RegExp(escapeRegexp(query), 'gi'), '<span class="ui-select-highlight">$&</span>') : matchItem;
  };
})

/**
 * A read-only equivalent of jQuery's offset function: http://api.jquery.com/offset/
 *
 * Taken from AngularUI Bootstrap Position:
 * See https://github.com/angular-ui/bootstrap/blob/master/src/position/position.js#L70
 */
.factory('uisOffset',
  ['$document', '$window',
  function ($document, $window) {

  return function(element) {
    var boundingClientRect = element[0].getBoundingClientRect();
    return {
      width: boundingClientRect.width || element.prop('offsetWidth'),
      height: boundingClientRect.height || element.prop('offsetHeight'),
      top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
      left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
    };
  };
}]);

uis.directive('uiSelectChoices',
  ['uiSelectConfig', 'uisRepeatParser', 'uiSelectMinErr', '$compile',
  function(uiSelectConfig, RepeatParser, uiSelectMinErr, $compile) {

  return {
    restrict: 'EA',
    require: '^uiSelect',
    replace: true,
    transclude: true,
    templateUrl: function(tElement) {
      // Gets theme attribute from parent (ui-select)
      var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
      return theme + '/choices.tpl.html';
    },

    compile: function(tElement, tAttrs) {

      if (!tAttrs.repeat) throw uiSelectMinErr('repeat', "Expected 'repeat' expression.");

      return function link(scope, element, attrs, $select, transcludeFn) {

        // var repeat = RepeatParser.parse(attrs.repeat);
        var groupByExp = attrs.groupBy;

        $select.parseRepeatAttr(attrs.repeat, groupByExp); //Result ready at $select.parserResult

        $select.disableChoiceExpression = attrs.uiDisableChoice;
        $select.onHighlightCallback = attrs.onHighlight;

        if(groupByExp) {
          var groups = element.querySelectorAll('.ui-select-choices-group');
          if (groups.length !== 1) throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-group but got '{0}'.", groups.length);
          groups.attr('ng-repeat', RepeatParser.getGroupNgRepeatExpression());
        }

        var choices = element.querySelectorAll('.ui-select-choices-row');
        if (choices.length !== 1) {
          throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row but got '{0}'.", choices.length);
        }

        choices.attr('ng-repeat', RepeatParser.getNgRepeatExpression($select.parserResult.itemName, '$select.items', $select.parserResult.trackByExp, groupByExp))
            // MyWay - Optim list ng-if once and then ng-show ------------------------------------------------------
            .attr('ng-if', '::$select.open || undefined') //Prevent unnecessary DOM injections until select is open
            .attr('ng-show', '$select.open') //Prevent unnecessary rebuild since select has been open once
            // -----------------------------------------------------------------------------------------------------
            .attr('ng-mouseenter', '$select.setActiveItem('+$select.parserResult.itemName +')')
            .attr('ng-click', '$select.select(' + $select.parserResult.itemName + ',false,$event)');

        var rowsInner = element.querySelectorAll('.ui-select-choices-row-inner');
        if (rowsInner.length !== 1) throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row-inner but got '{0}'.", rowsInner.length);
        rowsInner.attr('uis-transclude-append', ''); //Adding uisTranscludeAppend directive to row element after choices element has ngRepeat

         $compile(element, transcludeFn)(scope); //Passing current transcludeFn to be able to append elements correctly from uisTranscludeAppend

        scope.$watch('$select.search', function(newValue) {
          if(newValue && !$select.open && $select.multiple) $select.activate(false, true);
          $select.activeIndex = $select.tagging.isActivated ? -1 : 0;
          $select.refresh(attrs.refresh);
        });

        attrs.$observe('refreshDelay', function() {
          // $eval() is needed otherwise we get a string instead of a number
          var refreshDelay = scope.$eval(attrs.refreshDelay);
          $select.refreshDelay = refreshDelay !== undefined ? refreshDelay : uiSelectConfig.refreshDelay;
        });
      };
    }
  };
}]);

/**
 * Contains ui-select "intelligence".
 *
 * The goal is to limit dependency on the DOM whenever possible and
 * put as much logic in the controller (instead of the link functions) as possible so it can be easily tested.
 */
uis.controller('uiSelectCtrl',
  ['$scope', '$element', '$timeout', '$filter', 'uisRepeatParser', 'uiSelectMinErr', 'uiSelectConfig',
  function($scope, $element, $timeout, $filter, RepeatParser, uiSelectMinErr, uiSelectConfig) {

  var ctrl = this;

  var EMPTY_SEARCH = '';

  ctrl.placeholder = uiSelectConfig.placeholder;
  ctrl.searchEnabled = uiSelectConfig.searchEnabled;
  ctrl.sortable = uiSelectConfig.sortable;
  ctrl.refreshDelay = uiSelectConfig.refreshDelay;

  ctrl.removeSelected = false; //If selected item(s) should be removed from dropdown list
  ctrl.closeOnSelect = true; //Initialized inside uiSelect directive link function
  ctrl.search = EMPTY_SEARCH;

  ctrl.activeIndex = 0; //Dropdown of choices
  ctrl.items = []; //All available choices

  ctrl.open = false;
  ctrl.focus = false;
  ctrl.disabled = false;
  ctrl.selected = undefined;

  ctrl.focusser = undefined; //Reference to input element used to handle focus events
  ctrl.resetSearchInput = true;
  ctrl.multiple = undefined; // Initialized inside uiSelect directive link function
  ctrl.disableChoiceExpression = undefined; // Initialized inside uiSelectChoices directive link function
  ctrl.tagging = {isActivated: false, fct: undefined};
  ctrl.taggingTokens = {isActivated: false, tokens: undefined};
  ctrl.lockChoiceExpression = undefined; // Initialized inside uiSelectMatch directive link function
  ctrl.clickTriggeredSelect = false;
  ctrl.$filter = $filter;

  ctrl.searchInput = $element.querySelectorAll('input.ui-select-search');
  if (ctrl.searchInput.length !== 1) {
    throw uiSelectMinErr('searchInput', "Expected 1 input.ui-select-search but got '{0}'.", ctrl.searchInput.length);
  }
  
  ctrl.isEmpty = function() {
    return angular.isUndefined(ctrl.selected) || ctrl.selected === null || ctrl.selected === '';
  };

  // Most of the time the user does not want to empty the search input when in typeahead mode
  function _resetSearchInput() {
    if (ctrl.resetSearchInput || (ctrl.resetSearchInput === undefined && uiSelectConfig.resetSearchInput)) {
      ctrl.search = EMPTY_SEARCH;
      //reset activeIndex
      if (ctrl.selected && ctrl.items.length && !ctrl.multiple) {
        ctrl.activeIndex = ctrl.items.indexOf(ctrl.selected);
      }
    }
  }

  // When the user clicks on ui-select, displays the dropdown list
  ctrl.activate = function(initSearchValue, avoidReset) {
    if (!ctrl.disabled  && !ctrl.open) {
      if(!avoidReset) _resetSearchInput();

      $scope.$broadcast('uis:activate');

      ctrl.open = true;

      ctrl.activeIndex = ctrl.activeIndex >= ctrl.items.length ? 0 : ctrl.activeIndex;

      // ensure that the index is set to zero for tagging variants
      // that where first option is auto-selected
      if ( ctrl.activeIndex === -1 && ctrl.taggingLabel !== false ) {
        ctrl.activeIndex = 0;
      }

      // Give it time to appear before focus
      $timeout(function() {
        ctrl.search = initSearchValue || ctrl.search;
        ctrl.searchInput[0].focus();
      });
    }
  };

  ctrl.findGroupByName = function(name) {
    return ctrl.groups && ctrl.groups.filter(function(group) {
      return group.name === name;
    })[0];
  };

  ctrl.parseRepeatAttr = function(repeatAttr, groupByExp) {
    function updateGroups(items) {
      ctrl.groups = [];
      angular.forEach(items, function(item) {
        var groupFn = $scope.$eval(groupByExp);
        var groupName = angular.isFunction(groupFn) ? groupFn(item) : item[groupFn];
        var group = ctrl.findGroupByName(groupName);
        if(group) {
          group.items.push(item);
        }
        else {
          ctrl.groups.push({name: groupName, items: [item]});
        }
      });
      ctrl.items = [];
      ctrl.groups.forEach(function(group) {
        ctrl.items = ctrl.items.concat(group.items);
      });
    }

    function setPlainItems(items) {
      ctrl.items = items;
    }

    ctrl.setItemsFn = groupByExp ? updateGroups : setPlainItems;

    ctrl.parserResult = RepeatParser.parse(repeatAttr);

    ctrl.isGrouped = !!groupByExp;
    ctrl.itemProperty = ctrl.parserResult.itemName;

    ctrl.refreshItems = function (data){
      data = data || ctrl.parserResult.source($scope);
      var selectedItems = ctrl.selected;
      //TODO should implement for single mode removeSelected
      if ((angular.isArray(selectedItems) && !selectedItems.length) || !ctrl.removeSelected) {
        ctrl.setItemsFn(data);
      }else{
        if ( data !== undefined ) {
          var filteredItems = data.filter(function(i) {return selectedItems.indexOf(i) < 0;});
          ctrl.setItemsFn(filteredItems);
        }
      }
    };

    // See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L259
    $scope.$watchCollection(ctrl.parserResult.source, function(items) {
      if (items === undefined || items === null) {
        // If the user specifies undefined or null => reset the collection
        // Special case: items can be undefined if the user did not initialized the collection on the scope
        // i.e $scope.addresses = [] is missing
        ctrl.items = [];
      } else {
        if (!angular.isArray(items)) {
          throw uiSelectMinErr('items', "Expected an array but got '{0}'.", items);
        } else {
          //Remove already selected items (ex: while searching)
          //TODO Should add a test
          ctrl.refreshItems(items);
          ctrl.ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
        }
      }
    });

  };

  var _refreshDelayPromise;

  /**
   * Typeahead mode: lets the user refresh the collection using his own function.
   *
   * See Expose $select.search for external / remote filtering https://github.com/angular-ui/ui-select/pull/31
   */
  ctrl.refresh = function(refreshAttr) {
    if (refreshAttr !== undefined) {

      // Debounce
      // See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L155
      // FYI AngularStrap typeahead does not have debouncing: https://github.com/mgcrea/angular-strap/blob/v2.0.0-rc.4/src/typeahead/typeahead.js#L177
      if (_refreshDelayPromise) {
        $timeout.cancel(_refreshDelayPromise);
      }
      _refreshDelayPromise = $timeout(function() {
        $scope.$eval(refreshAttr);
      }, ctrl.refreshDelay);
    }
  };

  ctrl.setActiveItem = function(item) {
    ctrl.activeIndex = ctrl.items.indexOf(item);
  };

  ctrl.isActive = function(itemScope) {
    if ( !ctrl.open ) {
      return false;
    }
    var itemIndex = ctrl.items.indexOf(itemScope[ctrl.itemProperty]);
    var isActive =  itemIndex === ctrl.activeIndex;

    if ( !isActive || ( itemIndex < 0 && ctrl.taggingLabel !== false ) ||( itemIndex < 0 && ctrl.taggingLabel === false) ) {
      return false;
    }

    if (isActive && !angular.isUndefined(ctrl.onHighlightCallback)) {
      itemScope.$eval(ctrl.onHighlightCallback);
    }

    return isActive;
  };

  ctrl.isDisabled = function(itemScope) {

    if (!ctrl.open) return;

    var itemIndex = ctrl.items.indexOf(itemScope[ctrl.itemProperty]);
    var isDisabled = false;
    var item;

    if (itemIndex >= 0 && !angular.isUndefined(ctrl.disableChoiceExpression)) {
      item = ctrl.items[itemIndex];
      isDisabled = !!(itemScope.$eval(ctrl.disableChoiceExpression)); // force the boolean value
      item._uiSelectChoiceDisabled = isDisabled; // store this for later reference
    }

    return isDisabled;
  };


  // When the user selects an item with ENTER or clicks the dropdown
  ctrl.select = function(item, skipFocusser, $event) {
    if (item === undefined || !item._uiSelectChoiceDisabled) {

      if ( ! ctrl.items && ! ctrl.search ) return;

      if (!item || !item._uiSelectChoiceDisabled) {
        if(ctrl.tagging.isActivated) {
          // if taggingLabel is disabled, we pull from ctrl.search val
          if ( ctrl.taggingLabel === false ) {
            if ( ctrl.activeIndex < 0 ) {
              item = ctrl.tagging.fct !== undefined ? ctrl.tagging.fct(ctrl.search) : ctrl.search;
              if (!item || angular.equals( ctrl.items[0], item ) ) {
                return;
              }
            } else {
              // keyboard nav happened first, user selected from dropdown
              item = ctrl.items[ctrl.activeIndex];
            }
          } else {
            // tagging always operates at index zero, taggingLabel === false pushes
            // the ctrl.search value without having it injected
            if ( ctrl.activeIndex === 0 ) {
              // ctrl.tagging pushes items to ctrl.items, so we only have empty val
              // for `item` if it is a detected duplicate
              if ( item === undefined ) return;

              // create new item on the fly if we don't already have one;
              // use tagging function if we have one
              if ( ctrl.tagging.fct !== undefined && typeof item === 'string' ) {
                item = ctrl.tagging.fct(ctrl.search);
                if (!item) return;
              // if item type is 'string', apply the tagging label
              } else if ( typeof item === 'string' ) {
                // trim the trailing space
                item = item.replace(ctrl.taggingLabel,'').trim();
              }
            }
          }
          // search ctrl.selected for dupes potentially caused by tagging and return early if found
          if ( ctrl.selected && angular.isArray(ctrl.selected) && ctrl.selected.filter( function (selection) { return angular.equals(selection, item); }).length > 0 ) {
            ctrl.close(skipFocusser);
            return;
          }
        }

        $scope.$broadcast('uis:select', item);

        var locals = {};
        locals[ctrl.parserResult.itemName] = item;

        $timeout(function(){
          ctrl.onSelectCallback($scope, {
            $item: item,
            $model: ctrl.parserResult.modelMapper($scope, locals)
          });
        });

        if (ctrl.closeOnSelect) {
          ctrl.close(skipFocusser);
        }
        if ($event && $event.type === 'click') {
          ctrl.clickTriggeredSelect = true;
        }
      }
    }
  };

  // Closes the dropdown
  ctrl.close = function(skipFocusser) {
    if (!ctrl.open) return;
    if (ctrl.ngModel && ctrl.ngModel.$setTouched) ctrl.ngModel.$setTouched();
    _resetSearchInput();
    ctrl.open = false;

    $scope.$broadcast('uis:close', skipFocusser);

  };

  ctrl.setFocus = function(){
    if (!ctrl.focus) ctrl.focusInput[0].focus();
  };

  ctrl.clear = function($event) {
    ctrl.select(undefined);
    $event.stopPropagation();
    ctrl.focusser[0].focus();
  };

  // Toggle dropdown
  ctrl.toggle = function(e) {
    if (ctrl.open) {
      ctrl.close();
      e.preventDefault();
      e.stopPropagation();
    } else {
      ctrl.activate();
    }
  };

  ctrl.isLocked = function(itemScope, itemIndex) {
      var isLocked, item = ctrl.selected[itemIndex];

      if (item && !angular.isUndefined(ctrl.lockChoiceExpression)) {
          isLocked = !!(itemScope.$eval(ctrl.lockChoiceExpression)); // force the boolean value
          item._uiSelectChoiceLocked = isLocked; // store this for later reference
      }

      return isLocked;
  };

  var sizeWatch = null;
  ctrl.sizeSearchInput = function() {

    var input = ctrl.searchInput[0],
        container = ctrl.searchInput.parent().parent()[0],
        calculateContainerWidth = function() {
          // Return the container width only if the search input is visible
          return container.clientWidth * !!input.offsetParent;
        },
        updateIfVisible = function(containerWidth) {
          if (containerWidth === 0) {
            return false;
          }
          var inputWidth = containerWidth - input.offsetLeft - 10;
          if (inputWidth < 50) inputWidth = containerWidth;
          ctrl.searchInput.css('width', inputWidth+'px');
          return true;
        };

    ctrl.searchInput.css('width', '10px');
    $timeout(function() { //Give tags time to render correctly
      if (sizeWatch === null && !updateIfVisible(calculateContainerWidth())) {
        sizeWatch = $scope.$watch(calculateContainerWidth, function(containerWidth) {
          if (updateIfVisible(containerWidth)) {
            sizeWatch();
            sizeWatch = null;
          }
        });
      }
    });
  };

  function _handleDropDownSelection(key) {
    var processed = true;
    switch (key) {
      case KEY.DOWN:
        if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        else if (ctrl.activeIndex < ctrl.items.length - 1) { ctrl.activeIndex++; }
        break;
      case KEY.UP:
        if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        else if (ctrl.activeIndex > 0 || (ctrl.search.length === 0 && ctrl.tagging.isActivated && ctrl.activeIndex > -1)) { ctrl.activeIndex--; }
        break;
      case KEY.TAB:
        if (!ctrl.multiple || ctrl.open) ctrl.select(ctrl.items[ctrl.activeIndex], true);
        break;
      case KEY.ENTER:
        if(ctrl.open && ctrl.activeIndex >= 0){
          ctrl.select(ctrl.items[ctrl.activeIndex]); // Make sure at least one dropdown item is highlighted before adding.
        } else {
          ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        }
        break;
      case KEY.ESC:
        ctrl.close();
        break;
      default:
        processed = false;
    }
    return processed;
  }

  // Bind to keyboard shortcuts
  ctrl.searchInput.on('keydown', function(e) {

    var key = e.which;

    // if(~[KEY.ESC,KEY.TAB].indexOf(key)){
    //   //TODO: SEGURO?
    //   ctrl.close();
    // }

    $scope.$apply(function() {

      var tagged = false;

      if (ctrl.items.length > 0 || ctrl.tagging.isActivated) {
        _handleDropDownSelection(key);
        if ( ctrl.taggingTokens.isActivated ) {
          for (var i = 0; i < ctrl.taggingTokens.tokens.length; i++) {
            if ( ctrl.taggingTokens.tokens[i] === KEY.MAP[e.keyCode] ) {
              // make sure there is a new value to push via tagging
              if ( ctrl.search.length > 0 ) {
                tagged = true;
              }
            }
          }
          if ( tagged ) {
            $timeout(function() {
              ctrl.searchInput.triggerHandler('tagged');
              var newItem = ctrl.search.replace(KEY.MAP[e.keyCode],'').trim();
              if ( ctrl.tagging.fct ) {
                newItem = ctrl.tagging.fct( newItem );
              }
              if (newItem) ctrl.select(newItem, true);
            });
          }
        }
      }

    });

    if(KEY.isVerticalMovement(key) && ctrl.items.length > 0){
      _ensureHighlightVisible();
    }

  });

  // If tagging try to split by tokens and add items
  ctrl.searchInput.on('paste', function (e) {

    if (e.originalEvent && e.originalEvent.clipboardData) {
        var data = e.originalEvent.clipboardData.getData('text/plain');
        if (data && data.length > 0 && ctrl.taggingTokens.isActivated && ctrl.tagging.fct) {
            var items = data.split(ctrl.taggingTokens.tokens[0]); // split by first token only
            if (items && items.length > 0) {
                angular.forEach(items, function (item) {
                    var newItem = ctrl.tagging.fct(item);
                    if (newItem) {
                        ctrl.select(newItem, true);
                    }
                });
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
  });

  ctrl.searchInput.on('tagged', function() {
    $timeout(function() {
      _resetSearchInput();
    });
  });

  // See https://github.com/ivaynberg/select2/blob/3.4.6/select2.js#L1431
  function _ensureHighlightVisible() {
    var container = $element.querySelectorAll('.ui-select-choices-content');
    var choices = container.querySelectorAll('.ui-select-choices-row');
    if (choices.length < 1) {
      throw uiSelectMinErr('choices', "Expected multiple .ui-select-choices-row but got '{0}'.", choices.length);
    }

    if (ctrl.activeIndex < 0) {
      return;
    }

    var highlighted = choices[ctrl.activeIndex];
    var posY = highlighted.offsetTop + highlighted.clientHeight - container[0].scrollTop;
    var height = container[0].offsetHeight;

    if (posY > height) {
      container[0].scrollTop += posY - height;
    } else if (posY < highlighted.clientHeight) {
      if (ctrl.isGrouped && ctrl.activeIndex === 0)
        container[0].scrollTop = 0; //To make group header visible when going all the way up
      else
        container[0].scrollTop -= highlighted.clientHeight - posY;
    }
  }

  $scope.$on('$destroy', function() {
    ctrl.searchInput.off('keyup keydown tagged blur paste');
  });

}]);

uis.directive('uiSelect',
  ['$document', 'uiSelectConfig', 'uiSelectMinErr', 'uisOffset', '$compile', '$parse', '$timeout',
  function($document, uiSelectConfig, uiSelectMinErr, uisOffset, $compile, $parse, $timeout) {

  return {
    restrict: 'EA',
    templateUrl: function(tElement, tAttrs) {
      var theme = tAttrs.theme || uiSelectConfig.theme;
      return theme + (angular.isDefined(tAttrs.multiple) ? '/select-multiple.tpl.html' : '/select.tpl.html');
    },
    replace: true,
    transclude: true,
    require: ['uiSelect', '^ngModel'],
    scope: true,

    controller: 'uiSelectCtrl',
    controllerAs: '$select',
    compile: function(tElement, tAttrs) {

      //Multiple or Single depending if multiple attribute presence
      if (angular.isDefined(tAttrs.multiple))
        tElement.append("<ui-select-multiple/>").removeAttr('multiple');
      else
        tElement.append("<ui-select-single/>");       

      return function(scope, element, attrs, ctrls, transcludeFn) {

        var $select = ctrls[0];
        var ngModel = ctrls[1];

        $select.generatedId = uiSelectConfig.generateId();
        $select.baseTitle = attrs.title || 'Select box';
        $select.focusserTitle = $select.baseTitle + ' focus';
        $select.focusserId = 'focusser-' + $select.generatedId;

        $select.closeOnSelect = function() {
          if (angular.isDefined(attrs.closeOnSelect)) {
            return $parse(attrs.closeOnSelect)();
          } else {
            return uiSelectConfig.closeOnSelect;
          }
        }();

        $select.onSelectCallback = $parse(attrs.onSelect);
        $select.onRemoveCallback = $parse(attrs.onRemove);
        
        //Set reference to ngModel from uiSelectCtrl
        $select.ngModel = ngModel;

        $select.choiceGrouped = function(group){
          return $select.isGrouped && group && group.name;
        };

        if(attrs.tabindex){
          attrs.$observe('tabindex', function(value) {
            $select.focusInput.attr("tabindex", value);
            element.removeAttr("tabindex");
          });
        }

        scope.$watch('searchEnabled', function() {
            var searchEnabled = scope.$eval(attrs.searchEnabled);
            $select.searchEnabled = searchEnabled !== undefined ? searchEnabled : uiSelectConfig.searchEnabled;
        });

        scope.$watch('sortable', function() {
            var sortable = scope.$eval(attrs.sortable);
            $select.sortable = sortable !== undefined ? sortable : uiSelectConfig.sortable;
        });

        attrs.$observe('disabled', function() {
          // No need to use $eval() (thanks to ng-disabled) since we already get a boolean instead of a string
          $select.disabled = attrs.disabled !== undefined ? attrs.disabled : false;
        });

        attrs.$observe('resetSearchInput', function() {
          // $eval() is needed otherwise we get a string instead of a boolean
          var resetSearchInput = scope.$eval(attrs.resetSearchInput);
          $select.resetSearchInput = resetSearchInput !== undefined ? resetSearchInput : true;
        });

        attrs.$observe('tagging', function() {
          if(attrs.tagging !== undefined)
          {
            // $eval() is needed otherwise we get a string instead of a boolean
            var taggingEval = scope.$eval(attrs.tagging);
            $select.tagging = {isActivated: true, fct: taggingEval !== true ? taggingEval : undefined};
          }
          else
          {
            $select.tagging = {isActivated: false, fct: undefined};
          }
        });

        attrs.$observe('taggingLabel', function() {
          if(attrs.tagging !== undefined )
          {
            // check eval for FALSE, in this case, we disable the labels
            // associated with tagging
            if ( attrs.taggingLabel === 'false' ) {
              $select.taggingLabel = false;
            }
            else
            {
              $select.taggingLabel = attrs.taggingLabel !== undefined ? attrs.taggingLabel : '(new)';
            }
          }
        });

        attrs.$observe('taggingTokens', function() {
          if (attrs.tagging !== undefined) {
            var tokens = attrs.taggingTokens !== undefined ? attrs.taggingTokens.split('|') : [',','ENTER'];
            $select.taggingTokens = {isActivated: true, tokens: tokens };
          }
        });
        
        //Automatically gets focus when loaded
        if (angular.isDefined(attrs.autofocus)){
          $timeout(function(){
            $select.setFocus();
          });
        }

        //Gets focus based on scope event name (e.g. focus-on='SomeEventName')
        if (angular.isDefined(attrs.focusOn)){
          scope.$on(attrs.focusOn, function() {
              $timeout(function(){
                $select.setFocus();
              });
          });
        }

        function onDocumentClick(e) {
          if (!$select.open) return; //Skip it if dropdown is close

          var contains = false;

          if (window.jQuery) {
            // Firefox 3.6 does not support element.contains()
            // See Node.contains https://developer.mozilla.org/en-US/docs/Web/API/Node.contains
            contains = window.jQuery.contains(element[0], e.target);
          } else {
            contains = element[0].contains(e.target);
          }

          if (!contains && !$select.clickTriggeredSelect) {
            //Will lose focus only with certain targets
            var focusableControls = ['input','button','textarea'];
            var targetScope = angular.element(e.target).scope(); //To check if target is other ui-select
            var skipFocusser = targetScope && targetScope.$select && targetScope.$select !== $select; //To check if target is other ui-select
            if (!skipFocusser) skipFocusser =  ~focusableControls.indexOf(e.target.tagName.toLowerCase()); //Check if target is input, button or textarea
            $select.close(skipFocusser);
            scope.$digest();
          }
          $select.clickTriggeredSelect = false;
        }

        // See Click everywhere but here event http://stackoverflow.com/questions/12931369
        $document.on('click', onDocumentClick);

        scope.$on('$destroy', function() {
          $document.off('click', onDocumentClick);
        });

        // Move transcluded elements to their correct position in main template
        transcludeFn(scope, function(clone) {
          // See Transclude in AngularJS http://blog.omkarpatil.com/2012/11/transclude-in-angularjs.html

          // One day jqLite will be replaced by jQuery and we will be able to write:
          // var transcludedElement = clone.filter('.my-class')
          // instead of creating a hackish DOM element:
          var transcluded = angular.element('<div>').append(clone);

          var transcludedMatch = transcluded.querySelectorAll('.ui-select-match');
          transcludedMatch.removeAttr('ui-select-match'); //To avoid loop in case directive as attr
          transcludedMatch.removeAttr('data-ui-select-match'); // Properly handle HTML5 data-attributes
          if (transcludedMatch.length !== 1) {
            throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-match but got '{0}'.", transcludedMatch.length);
          }
          element.querySelectorAll('.ui-select-match').replaceWith(transcludedMatch);

          var transcludedChoices = transcluded.querySelectorAll('.ui-select-choices');
          transcludedChoices.removeAttr('ui-select-choices'); //To avoid loop in case directive as attr
          transcludedChoices.removeAttr('data-ui-select-choices'); // Properly handle HTML5 data-attributes
          if (transcludedChoices.length !== 1) {
            throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-choices but got '{0}'.", transcludedChoices.length);
          }
          element.querySelectorAll('.ui-select-choices').replaceWith(transcludedChoices);
        });

        // Support for appending the select field to the body when its open
        var appendToBody = scope.$eval(attrs.appendToBody);
        if (appendToBody !== undefined ? appendToBody : uiSelectConfig.appendToBody) {
          scope.$watch('$select.open', function(isOpen) {
            if (isOpen) {
              positionDropdown();
            } else {
              resetDropdown();
            }
          });

          // Move the dropdown back to its original location when the scope is destroyed. Otherwise
          // it might stick around when the user routes away or the select field is otherwise removed
          scope.$on('$destroy', function() {
            resetDropdown();
          });
        }

        // Hold on to a reference to the .ui-select-container element for appendToBody support
        var placeholder = null,
            originalWidth = '';

        function positionDropdown() {
          // Remember the absolute position of the element
          var offset = uisOffset(element);

          // Clone the element into a placeholder element to take its original place in the DOM
          placeholder = angular.element('<div class="ui-select-placeholder"></div>');
          placeholder[0].style.width = offset.width + 'px';
          placeholder[0].style.height = offset.height + 'px';
          element.after(placeholder);

          // Remember the original value of the element width inline style, so it can be restored
          // when the dropdown is closed
          originalWidth = element[0].style.width;

          // Now move the actual dropdown element to the end of the body
          $document.find('body').append(element);

          element[0].style.position = 'absolute';
          element[0].style.left = offset.left + 'px';
          element[0].style.top = offset.top + 'px';
          element[0].style.width = offset.width + 'px';
        }

        function resetDropdown() {
          if (placeholder === null) {
            // The dropdown has not actually been display yet, so there's nothing to reset
            return;
          }

          // Move the dropdown element back to its original location in the DOM
          placeholder.replaceWith(element);
          placeholder = null;

          element[0].style.position = '';
          element[0].style.left = '';
          element[0].style.top = '';
          element[0].style.width = originalWidth;
        }
      };
    }
  };
}]);

uis.directive('uiSelectMatch', ['uiSelectConfig', function(uiSelectConfig) {
  return {
    restrict: 'EA',
    require: '^uiSelect',
    replace: true,
    transclude: true,
    templateUrl: function(tElement) {
      // Gets theme attribute from parent (ui-select)
      var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
      var multi = tElement.parent().attr('multiple');
      return theme + (multi ? '/match-multiple.tpl.html' : '/match.tpl.html');
    },
    link: function(scope, element, attrs, $select) {
      $select.lockChoiceExpression = attrs.uiLockChoice;
      attrs.$observe('placeholder', function(placeholder) {
        $select.placeholder = placeholder !== undefined ? placeholder : uiSelectConfig.placeholder;
      });

      function setAllowClear(allow) {
        $select.allowClear = (angular.isDefined(allow)) ? (allow === '') ? true : (allow.toLowerCase() === 'true') : false;
      }

      attrs.$observe('allowClear', setAllowClear);
      setAllowClear(attrs.allowClear);

      if($select.multiple){
        $select.sizeSearchInput();
      }

    }
  };
}]);

uis.directive('uiSelectMultiple', ['uiSelectMinErr','$timeout', function(uiSelectMinErr, $timeout) {
  return {
    restrict: 'EA',
    require: ['^uiSelect', '^ngModel'],

    controller: ['$scope','$timeout', function($scope, $timeout){

      var ctrl = this,
          $select = $scope.$select,
          ngModel;

      //Wait for link fn to inject it 
      $scope.$evalAsync(function(){ ngModel = $scope.ngModel; });

      ctrl.activeMatchIndex = -1;

      ctrl.updateModel = function(){
        ngModel.$setViewValue(Date.now()); //Set timestamp as a unique string to force changes
        ctrl.refreshComponent();
      };

      ctrl.refreshComponent = function(){
        //Remove already selected items
        //e.g. When user clicks on a selection, the selected array changes and 
        //the dropdown should remove that item
        $select.refreshItems();
        $select.sizeSearchInput();
      };

      // Remove item from multiple select
      ctrl.removeChoice = function(index){

        var removedChoice = $select.selected[index];

        // if the choice is locked, can't remove it
        if(removedChoice._uiSelectChoiceLocked) return;

        var locals = {};
        locals[$select.parserResult.itemName] = removedChoice;

        $select.selected.splice(index, 1);
        ctrl.activeMatchIndex = -1;
        $select.sizeSearchInput();

        // Give some time for scope propagation.
        $timeout(function(){
          $select.onRemoveCallback($scope, {
            $item: removedChoice,
            $model: $select.parserResult.modelMapper($scope, locals)
          });
        });

        ctrl.updateModel();

      };

      ctrl.getPlaceholder = function(){
        //Refactor single?
        if($select.selected.length) return;
        return $select.placeholder;
      };


    }],
    controllerAs: '$selectMultiple',

    link: function(scope, element, attrs, ctrls) {

      var $select = ctrls[0];
      var ngModel = scope.ngModel = ctrls[1];
      var $selectMultiple = scope.$selectMultiple;

      //$select.selected = raw selected objects (ignoring any property binding)

      $select.multiple = true;
      $select.removeSelected = true;

      //Input that will handle focus
      $select.focusInput = $select.searchInput;

      //From view --> model
      ngModel.$parsers.unshift(function () {
        var locals = {},
            result,
            resultMultiple = [];
        for (var j = $select.selected.length - 1; j >= 0; j--) {
          locals = {};
          locals[$select.parserResult.itemName] = $select.selected[j];
          result = $select.parserResult.modelMapper(scope, locals);
          resultMultiple.unshift(result);
        }
        return resultMultiple;
      });

      // From model --> view
      ngModel.$formatters.unshift(function (inputValue) {
        var data = $select.parserResult.source (scope, { $select : {search:''}}), //Overwrite $search
            locals = {},
            result;
        if (!data) return inputValue;
        var resultMultiple = [];
        var checkFnMultiple = function(list, value){
          if (!list || !list.length) return;
          for (var p = list.length - 1; p >= 0; p--) {
            locals[$select.parserResult.itemName] = list[p];
            result = $select.parserResult.modelMapper(scope, locals);
            if($select.parserResult.trackByExp){
                var matches = /\.(.+)/.exec($select.parserResult.trackByExp);
                if(matches.length>0 && result[matches[1]] == value[matches[1]]){
                    resultMultiple.unshift(list[p]);
                    return true;
                }
            }
            if (angular.equals(result,value)){
              resultMultiple.unshift(list[p]);
              return true;
            }
          }
          return false;
        };
        if (!inputValue) return resultMultiple; //If ngModel was undefined
        for (var k = inputValue.length - 1; k >= 0; k--) {
          //Check model array of currently selected items 
          if (!checkFnMultiple($select.selected, inputValue[k])){
            //Check model array of all items available
            if (!checkFnMultiple(data, inputValue[k])){
              //If not found on previous lists, just add it directly to resultMultiple
              resultMultiple.unshift(inputValue[k]);
            }
          }
        }
        return resultMultiple;
      });
      
      //Watch for external model changes 
      scope.$watchCollection(function(){ return ngModel.$modelValue; }, function(newValue, oldValue) {
        if (oldValue != newValue){
          ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
          $selectMultiple.refreshComponent();
        }
      });

      ngModel.$render = function() {
        // Make sure that model value is array
        if(!angular.isArray(ngModel.$viewValue)){
          // Have tolerance for null or undefined values
          if(angular.isUndefined(ngModel.$viewValue) || ngModel.$viewValue === null){
            $select.selected = [];
          } else {
            throw uiSelectMinErr('multiarr', "Expected model value to be array but got '{0}'", ngModel.$viewValue);
          }
        }
        $select.selected = ngModel.$viewValue;
        scope.$evalAsync(); //To force $digest
      };

      scope.$on('uis:select', function (event, item) {
        $select.selected.push(item);
        $selectMultiple.updateModel();
      });

      scope.$on('uis:activate', function () {
        $selectMultiple.activeMatchIndex = -1;
      });

      scope.$watch('$select.disabled', function(newValue, oldValue) {
        // As the search input field may now become visible, it may be necessary to recompute its size
        if (oldValue && !newValue) $select.sizeSearchInput();
      });

      $select.searchInput.on('keydown', function(e) {
        var key = e.which;
        scope.$apply(function() {
          var processed = false;
          // var tagged = false; //Checkme
          if(KEY.isHorizontalMovement(key)){
            processed = _handleMatchSelection(key);
          }
          if (processed  && key != KEY.TAB) {
            //TODO Check si el tab selecciona aun correctamente
            //Crear test
            e.preventDefault();
            e.stopPropagation();
          }
        });
      });
      function _getCaretPosition(el) {
        if(angular.isNumber(el.selectionStart)) return el.selectionStart;
        // selectionStart is not supported in IE8 and we don't want hacky workarounds so we compromise
        else return el.value.length;
      }
      // Handles selected options in "multiple" mode
      function _handleMatchSelection(key){
        var caretPosition = _getCaretPosition($select.searchInput[0]),
            length = $select.selected.length,
            // none  = -1,
            first = 0,
            last  = length-1,
            curr  = $selectMultiple.activeMatchIndex,
            next  = $selectMultiple.activeMatchIndex+1,
            prev  = $selectMultiple.activeMatchIndex-1,
            newIndex = curr;

        if(caretPosition > 0 || ($select.search.length && key == KEY.RIGHT)) return false;

        $select.close();

        function getNewActiveMatchIndex(){
          switch(key){
            case KEY.LEFT:
              // Select previous/first item
              if(~$selectMultiple.activeMatchIndex) return prev;
              // Select last item
              else return last;
              break;
            case KEY.RIGHT:
              // Open drop-down
              if(!~$selectMultiple.activeMatchIndex || curr === last){
                $select.activate();
                return false;
              }
              // Select next/last item
              else return next;
              break;
            case KEY.BACKSPACE:
              // Remove selected item and select previous/first
              if(~$selectMultiple.activeMatchIndex){
                $selectMultiple.removeChoice(curr);
                return prev;
              }
              // Select last item
              else return last;
              break;
            case KEY.DELETE:
              // Remove selected item and select next item
              if(~$selectMultiple.activeMatchIndex){
                $selectMultiple.removeChoice($selectMultiple.activeMatchIndex);
                return curr;
              }
              else return false;
          }
        }

        newIndex = getNewActiveMatchIndex();

        if(!$select.selected.length || newIndex === false) $selectMultiple.activeMatchIndex = -1;
        else $selectMultiple.activeMatchIndex = Math.min(last,Math.max(first,newIndex));

        return true;
      }

      $select.searchInput.on('keyup', function(e) {

        if ( ! KEY.isVerticalMovement(e.which) ) {
          scope.$evalAsync( function () {
            $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
          });
        }
        // Push a "create new" item into array if there is a search string
        if ( $select.tagging.isActivated && $select.search.length > 0 ) {

          // return early with these keys
          if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || KEY.isVerticalMovement(e.which) ) {
            return;
          }
          // always reset the activeIndex to the first item when tagging
          $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
          // taggingLabel === false bypasses all of this
          if ($select.taggingLabel === false) return;

          var items = angular.copy( $select.items );
          var stashArr = angular.copy( $select.items );
          var newItem;
          var item;
          var hasTag = false;
          var dupeIndex = -1;
          var tagItems;
          var tagItem;

          // case for object tagging via transform `$select.tagging.fct` function
          if ( $select.tagging.fct !== undefined) {
            tagItems = $select.$filter('filter')(items,{'isTag': true});
            if ( tagItems.length > 0 ) {
              tagItem = tagItems[0];
            }
            // remove the first element, if it has the `isTag` prop we generate a new one with each keyup, shaving the previous
            if ( items.length > 0 && tagItem ) {
              hasTag = true;
              items = items.slice(1,items.length);
              stashArr = stashArr.slice(1,stashArr.length);
            }
            newItem = $select.tagging.fct($select.search);
            newItem.isTag = true;
            // verify the the tag doesn't match the value of an existing item
            if ( stashArr.filter( function (origItem) { return angular.equals( origItem, $select.tagging.fct($select.search) ); } ).length > 0 ) {
              return;
            }
            newItem.isTag = true;
          // handle newItem string and stripping dupes in tagging string context
          } else {
            // find any tagging items already in the $select.items array and store them
            tagItems = $select.$filter('filter')(items,function (item) {
              return item.match($select.taggingLabel);
            });
            if ( tagItems.length > 0 ) {
              tagItem = tagItems[0];
            }
            item = items[0];
            // remove existing tag item if found (should only ever be one tag item)
            if ( item !== undefined && items.length > 0 && tagItem ) {
              hasTag = true;
              items = items.slice(1,items.length);
              stashArr = stashArr.slice(1,stashArr.length);
            }
            newItem = $select.search+' '+$select.taggingLabel;
            if ( _findApproxDupe($select.selected, $select.search) > -1 ) {
              return;
            }
            // verify the the tag doesn't match the value of an existing item from
            // the searched data set or the items already selected
            if ( _findCaseInsensitiveDupe(stashArr.concat($select.selected)) ) {
              // if there is a tag from prev iteration, strip it / queue the change
              // and return early
              if ( hasTag ) {
                items = stashArr;
                scope.$evalAsync( function () {
                  $select.activeIndex = 0;
                  $select.items = items;
                });
              }
              return;
            }
            if ( _findCaseInsensitiveDupe(stashArr) ) {
              // if there is a tag from prev iteration, strip it
              if ( hasTag ) {
                $select.items = stashArr.slice(1,stashArr.length);
              }
              return;
            }
          }
          if ( hasTag ) dupeIndex = _findApproxDupe($select.selected, newItem);
          // dupe found, shave the first item
          if ( dupeIndex > -1 ) {
            items = items.slice(dupeIndex+1,items.length-1);
          } else {
            items = [];
            items.push(newItem);
            items = items.concat(stashArr);
          }
          scope.$evalAsync( function () {
            $select.activeIndex = 0;
            $select.items = items;
          });
        }
      });
      function _findCaseInsensitiveDupe(arr) {
        if ( arr === undefined || $select.search === undefined ) {
          return false;
        }
        var hasDupe = arr.filter( function (origItem) {
          if ( $select.search.toUpperCase() === undefined || origItem === undefined ) {
            return false;
          }
          return origItem.toUpperCase() === $select.search.toUpperCase();
        }).length > 0;

        return hasDupe;
      }
      function _findApproxDupe(haystack, needle) {
        var dupeIndex = -1;
        if(angular.isArray(haystack)) {
          var tempArr = angular.copy(haystack);
          for (var i = 0; i <tempArr.length; i++) {
            // handle the simple string version of tagging
            if ( $select.tagging.fct === undefined ) {
              // search the array for the match
              if ( tempArr[i]+' '+$select.taggingLabel === needle ) {
              dupeIndex = i;
              }
            // handle the object tagging implementation
            } else {
              var mockObj = tempArr[i];
              mockObj.isTag = true;
              if ( angular.equals(mockObj, needle) ) {
              dupeIndex = i;
              }
            }
          }
        }
        return dupeIndex;
      }

      $select.searchInput.on('blur', function() {
        $timeout(function() {
          $selectMultiple.activeMatchIndex = -1;
        });
      });

    }
  };
}]);
uis.directive('uiSelectSingle', ['$timeout','$compile', function($timeout, $compile) {
  return {
    restrict: 'EA',
    require: ['^uiSelect', '^ngModel'],
    link: function(scope, element, attrs, ctrls) {

      var $select = ctrls[0];
      var ngModel = ctrls[1];

      //From view --> model
      ngModel.$parsers.unshift(function (inputValue) {
        var locals = {},
            result;
        locals[$select.parserResult.itemName] = inputValue;
        result = $select.parserResult.modelMapper(scope, locals);
        return result;
      });

      //From model --> view
      ngModel.$formatters.unshift(function (inputValue) {
        var data = $select.parserResult.source (scope, { $select : {search:''}}), //Overwrite $search
            locals = {},
            result;
        if (data){
          var checkFnSingle = function(d){
            locals[$select.parserResult.itemName] = d;
            result = $select.parserResult.modelMapper(scope, locals);
            return result == inputValue;
          };
          //If possible pass same object stored in $select.selected
          if ($select.selected && checkFnSingle($select.selected)) {
            return $select.selected;
          }
          for (var i = data.length - 1; i >= 0; i--) {
            if (checkFnSingle(data[i])) return data[i];
          }
        }
        return inputValue;
      });

      //Update viewValue if model change
      scope.$watch('$select.selected', function(newValue) {
        if (ngModel.$viewValue !== newValue) {
          ngModel.$setViewValue(newValue);
        }
      });

      ngModel.$render = function() {
        $select.selected = ngModel.$viewValue;
      };

      scope.$on('uis:select', function (event, item) {
        $select.selected = item;
      });

      scope.$on('uis:close', function (event, skipFocusser) {
        $timeout(function(){
          $select.focusser.prop('disabled', false);
          if (!skipFocusser) $select.focusser[0].focus();
        },0,false);
      });

      scope.$on('uis:activate', function () {
        focusser.prop('disabled', true); //Will reactivate it on .close()
      });

      //Idea from: https://github.com/ivaynberg/select2/blob/79b5bf6db918d7560bdd959109b7bcfb47edaf43/select2.js#L1954
      var focusser = angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");
      $compile(focusser)(scope);
      $select.focusser = focusser;

      //Input that will handle focus
      $select.focusInput = focusser;

      element.parent().append(focusser);
      focusser.bind("focus", function(){
        scope.$evalAsync(function(){
          $select.focus = true;
        });
      });
      focusser.bind("blur", function(){
        scope.$evalAsync(function(){
          $select.focus = false;
        });
      });
      focusser.bind("keydown", function(e){

        if (e.which === KEY.BACKSPACE) {
          e.preventDefault();
          e.stopPropagation();
          $select.select(undefined);
          scope.$apply();
          return;
        }

        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
          return;
        }

        if (e.which == KEY.DOWN  || e.which == KEY.UP || e.which == KEY.ENTER || e.which == KEY.SPACE){
          e.preventDefault();
          e.stopPropagation();
          $select.activate();
        }

        scope.$digest();
      });

      focusser.bind("keyup input", function(e){

        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || e.which == KEY.ENTER || e.which === KEY.BACKSPACE) {
          return;
        }

        $select.activate(focusser.val()); //User pressed some regular key, so we pass it to the search input
        focusser.val('');
        scope.$digest();

      });


    }
  };
}]);
// Make multiple matches sortable
uis.directive('uiSelectSort', ['$timeout', 'uiSelectConfig', 'uiSelectMinErr', function($timeout, uiSelectConfig, uiSelectMinErr) {
  return {
    require: '^uiSelect',
    link: function(scope, element, attrs, $select) {
      if (scope[attrs.uiSelectSort] === null) {
        throw uiSelectMinErr('sort', "Expected a list to sort");
      }

      var options = angular.extend({
          axis: 'horizontal'
        },
        scope.$eval(attrs.uiSelectSortOptions));

      var axis = options.axis,
        draggingClassName = 'dragging',
        droppingClassName = 'dropping',
        droppingBeforeClassName = 'dropping-before',
        droppingAfterClassName = 'dropping-after';

      scope.$watch(function(){
        return $select.sortable;
      }, function(n){
        if (n) {
          element.attr('draggable', true);
        } else {
          element.removeAttr('draggable');
        }
      });

      element.on('dragstart', function(e) {
        element.addClass(draggingClassName);

        (e.dataTransfer || e.originalEvent.dataTransfer).setData('text/plain', scope.$index);
      });

      element.on('dragend', function() {
        element.removeClass(draggingClassName);
      });

      var move = function(from, to) {
        /*jshint validthis: true */
        this.splice(to, 0, this.splice(from, 1)[0]);
      };

      var dragOverHandler = function(e) {
        e.preventDefault();

        var offset = axis === 'vertical' ? e.offsetY || e.layerY || (e.originalEvent ? e.originalEvent.offsetY : 0) : e.offsetX || e.layerX || (e.originalEvent ? e.originalEvent.offsetX : 0);

        if (offset < (this[axis === 'vertical' ? 'offsetHeight' : 'offsetWidth'] / 2)) {
          element.removeClass(droppingAfterClassName);
          element.addClass(droppingBeforeClassName);

        } else {
          element.removeClass(droppingBeforeClassName);
          element.addClass(droppingAfterClassName);
        }
      };

      var dropTimeout;

      var dropHandler = function(e) {
        e.preventDefault();

        var droppedItemIndex = parseInt((e.dataTransfer || e.originalEvent.dataTransfer).getData('text/plain'), 10);

        // prevent event firing multiple times in firefox
        $timeout.cancel(dropTimeout);
        dropTimeout = $timeout(function() {
          _dropHandler(droppedItemIndex);
        }, 20);
      };

      var _dropHandler = function(droppedItemIndex) {
        var theList = scope.$eval(attrs.uiSelectSort),
          itemToMove = theList[droppedItemIndex],
          newIndex = null;

        if (element.hasClass(droppingBeforeClassName)) {
          if (droppedItemIndex < scope.$index) {
            newIndex = scope.$index - 1;
          } else {
            newIndex = scope.$index;
          }
        } else {
          if (droppedItemIndex < scope.$index) {
            newIndex = scope.$index;
          } else {
            newIndex = scope.$index + 1;
          }
        }

        move.apply(theList, [droppedItemIndex, newIndex]);

        scope.$apply(function() {
          scope.$emit('uiSelectSort:change', {
            array: theList,
            item: itemToMove,
            from: droppedItemIndex,
            to: newIndex
          });
        });

        element.removeClass(droppingClassName);
        element.removeClass(droppingBeforeClassName);
        element.removeClass(droppingAfterClassName);

        element.off('drop', dropHandler);
      };

      element.on('dragenter', function() {
        if (element.hasClass(draggingClassName)) {
          return;
        }

        element.addClass(droppingClassName);

        element.on('dragover', dragOverHandler);
        element.on('drop', dropHandler);
      });

      element.on('dragleave', function(e) {
        if (e.target != element) {
          return;
        }
        element.removeClass(droppingClassName);
        element.removeClass(droppingBeforeClassName);
        element.removeClass(droppingAfterClassName);

        element.off('dragover', dragOverHandler);
        element.off('drop', dropHandler);
      });
    }
  };
}]);

/**
 * Parses "repeat" attribute.
 *
 * Taken from AngularJS ngRepeat source code
 * See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L211
 *
 * Original discussion about parsing "repeat" attribute instead of fully relying on ng-repeat:
 * https://github.com/angular-ui/ui-select/commit/5dd63ad#commitcomment-5504697
 */

uis.service('uisRepeatParser', ['uiSelectMinErr','$parse', function(uiSelectMinErr, $parse) {
  var self = this;

  /**
   * Example:
   * expression = "address in addresses | filter: {street: $select.search} track by $index"
   * itemName = "address",
   * source = "addresses | filter: {street: $select.search}",
   * trackByExp = "$index",
   */
  self.parse = function(expression) {

    var match = expression.match(/^\s*(?:([\s\S]+?)\s+as\s+)?([\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

    if (!match) {
      throw uiSelectMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
              expression);
    }

    return {
      itemName: match[2], // (lhs) Left-hand side,
      source: $parse(match[3]),
      trackByExp: match[4],
      modelMapper: $parse(match[1] || match[2])
    };

  };

  self.getGroupNgRepeatExpression = function() {
    return '$group in $select.groups';
  };

  self.getNgRepeatExpression = function(itemName, source, trackByExp, grouped) {
    var expression = itemName + ' in ' + (grouped ? '$group.items' : source);
    if (trackByExp) {
      expression += ' track by ' + trackByExp;
    }

    return expression;
  };
}]);

}());
angular.module("ui.select").run(["$templateCache", function($templateCache) {$templateCache.put("bootstrap/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content dropdown-menu\" role=\"listbox\" ng-show=\"$select.items.length > 0\"><li class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\"><div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\"></div><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\"></div><div id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\"><a href=\"javascript:void(0)\" class=\"ui-select-choices-row-inner\"></a></div></li></ul>");
$templateCache.put("bootstrap/match-multiple.tpl.html","<span class=\"ui-select-match\"><span ng-repeat=\"$item in $select.selected\"><span class=\"ui-select-match-item btn btn-default btn-xs\" tabindex=\"-1\" type=\"button\" ng-disabled=\"$select.disabled\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span class=\"close ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&nbsp;&times;</span> <span uis-transclude-append=\"\"></span></span></span></span>");
$templateCache.put("bootstrap/match.tpl.html","<div class=\"ui-select-match\" ng-hide=\"$select.open\" ng-disabled=\"$select.disabled\" ng-class=\"{\'btn-default-focus\':$select.focus}\"><span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" aria-label=\"{{ $select.baseTitle }} activate\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" style=\"outline: 0;\"><span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span> <i class=\"caret pull-right\" ng-click=\"$select.toggle($event)\"></i> <a ng-show=\"$select.allowClear && !$select.isEmpty()\" aria-label=\"{{ $select.baseTitle }} clear\" style=\"margin-right: 10px\" ng-click=\"$select.clear($event)\" class=\"btn btn-xs btn-link pull-right\"><i class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></i></a></span></div>");
$templateCache.put("bootstrap/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\" ng-class=\"{open: $select.open}\"><div><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" class=\"ui-select-search input-xs\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-click=\"$select.activate()\" ng-model=\"$select.search\" role=\"combobox\" aria-label=\"{{ $select.baseTitle }}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div></div>");
$templateCache.put("bootstrap/select.tpl.html","<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\"><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"off\" tabindex=\"-1\" aria-expanded=\"true\" aria-label=\"{{ $select.baseTitle }}\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"form-control ui-select-search\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-show=\"$select.searchEnabled && $select.open\"><div class=\"ui-select-choices\"></div></div>");
$templateCache.put("select2/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content select2-results\"><li class=\"ui-select-choices-group\" ng-class=\"{\'select2-result-with-children\': $select.choiceGrouped($group) }\"><div ng-show=\"$select.choiceGrouped($group)\" class=\"ui-select-choices-group-label select2-result-label\" ng-bind=\"$group.name\"></div><ul role=\"listbox\" id=\"ui-select-choices-{{ $select.generatedId }}\" ng-class=\"{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }\"><li role=\"option\" id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}\"><div class=\"select2-result-label ui-select-choices-row-inner\"></div></li></ul></li></ul>");
$templateCache.put("select2/match-multiple.tpl.html","<span class=\"ui-select-match\"><li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"$item in $select.selected\" ng-class=\"{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span uis-transclude-append=\"\"></span> <a href=\"javascript:;\" class=\"ui-select-match-close select2-search-choice-close\" ng-click=\"$selectMultiple.removeChoice($index)\" tabindex=\"-1\"></a></li></span>");
$templateCache.put("select2/match.tpl.html","<a class=\"select2-choice ui-select-match\" ng-class=\"{\'select2-default\': $select.isEmpty()}\" ng-click=\"$select.toggle($event)\" aria-label=\"{{ $select.baseTitle }} select\"><span ng-show=\"$select.isEmpty()\" class=\"select2-chosen\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"select2-chosen\" ng-transclude=\"\"></span> <abbr ng-if=\"$select.allowClear && !$select.isEmpty()\" class=\"select2-search-choice-close\" ng-click=\"$select.clear($event)\"></abbr> <span class=\"select2-arrow ui-select-toggle\"><b></b></span></a>");
$templateCache.put("select2/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple select2 select2-container select2-container-multi\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}\"><ul class=\"select2-choices\"><span class=\"ui-select-match\"></span><li class=\"select2-search-field\"><input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"select2-input ui-select-search\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-model=\"$select.search\" ng-click=\"$select.activate()\" style=\"width: 34px;\" ondrop=\"return false;\"></li></ul><div class=\"select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"ui-select-choices\"></div></div></div>");
$templateCache.put("select2/select.tpl.html","<div class=\"ui-select-container select2 select2-container\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}\"><div class=\"ui-select-match\"></div><div class=\"select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"select2-search\" ng-show=\"$select.searchEnabled\"><input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"ui-select-search select2-input\" ng-model=\"$select.search\"></div><div class=\"ui-select-choices\"></div></div></div>");
$templateCache.put("selectize/choices.tpl.html","<div ng-show=\"$select.open\" class=\"ui-select-choices selectize-dropdown single\"><div class=\"ui-select-choices-content selectize-dropdown-content\"><div class=\"ui-select-choices-group optgroup\" role=\"listbox\"><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label optgroup-header\" ng-bind=\"$group.name\"></div><div role=\"option\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\"><div class=\"option ui-select-choices-row-inner\" data-selectable=\"\"></div></div></div></div></div>");
$templateCache.put("selectize/match.tpl.html","<div ng-hide=\"($select.open || $select.isEmpty())\" class=\"ui-select-match\" ng-transclude=\"\"></div>");
$templateCache.put("selectize/select.tpl.html","<div class=\"ui-select-container selectize-control single\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.activate()\"><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"off\" tabindex=\"-1\" class=\"ui-select-search ui-select-toggle\" ng-click=\"$select.toggle($event)\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-hide=\"!$select.searchEnabled || ($select.selected && !$select.open)\" ng-disabled=\"$select.disabled\" aria-label=\"{{ $select.baseTitle }}\"></div><div class=\"ui-select-choices\"></div></div>");}]);
/* Extract from UIBootstrap v0.14.3 */
/* https://github.com/angular-ui/bootstrap/blob/0.14.3/src/dateparser/dateparser.js */

angular.module('ui.bootstrap.dateparser')

.service('uibDateParser', ['$log', '$locale', 'orderByFilter', function ($log, $locale, orderByFilter) {
    // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
    var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

    var localeId;
    var formatCodeToRegex;

    this.init = function () {
        localeId = $locale.id;

        this.parsers = {};

        formatCodeToRegex = {
            'yyyy': {
                regex: '\\d{4}',
                apply: function (value) { this.year = +value; }
            },
            'yy': {
                regex: '\\d{2}',
                apply: function (value) { this.year = +value + 2000; }
            },
            'y': {
                regex: '\\d{1,4}',
                apply: function (value) { this.year = +value; }
            },
            'MMMM': {
                regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
                apply: function (value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
            },
            'MMM': {
                regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
                apply: function (value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
            },
            'MM': {
                regex: '0[1-9]|1[0-2]',
                apply: function (value) { this.month = value - 1; }
            },
            'M': {
                regex: '[1-9]|1[0-2]',
                apply: function (value) { this.month = value - 1; }
            },
            'dd': {
                regex: '[0-2][0-9]{1}|3[0-1]{1}',
                apply: function (value) { this.date = +value; }
            },
            'd': {
                regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
                apply: function (value) { this.date = +value; }
            },
            'EEEE': {
                regex: $locale.DATETIME_FORMATS.DAY.join('|')
            },
            'EEE': {
                regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
            },
            'HH': {
                regex: '(?:0|1)[0-9]|2[0-3]',
                apply: function (value) { this.hours = +value; }
            },
            'hh': {
                regex: '0[0-9]|1[0-2]',
                apply: function (value) { this.hours = +value; }
            },
            'H': {
                regex: '1?[0-9]|2[0-3]',
                apply: function (value) { this.hours = +value; }
            },
            'h': {
                regex: '[0-9]|1[0-2]',
                apply: function (value) { this.hours = +value; }
            },
            'mm': {
                regex: '[0-5][0-9]',
                apply: function (value) { this.minutes = +value; }
            },
            'm': {
                regex: '[0-9]|[1-5][0-9]',
                apply: function (value) { this.minutes = +value; }
            },
            'sss': {
                regex: '[0-9][0-9][0-9]',
                apply: function (value) { this.milliseconds = +value; }
            },
            'ss': {
                regex: '[0-5][0-9]',
                apply: function (value) { this.seconds = +value; }
            },
            's': {
                regex: '[0-9]|[1-5][0-9]',
                apply: function (value) { this.seconds = +value; }
            },
            'a': {
                regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
                apply: function (value) {
                    if (this.hours === 12) {
                        this.hours = 0;
                    }

                    if (value === 'PM') {
                        this.hours += 12;
                    }
                }
            }
        };
    };

    this.init();

    function createParser(format) {
        var map = [], regex = format.split('');

        angular.forEach(formatCodeToRegex, function (data, code) {
            var index = format.indexOf(code);

            if (index > -1) {
                format = format.split('');

                regex[index] = '(' + data.regex + ')';
                format[index] = '$'; // Custom symbol to define consumed part of format
                for (var i = index + 1, n = index + code.length; i < n; i++) {
                    regex[i] = '';
                    format[i] = '$';
                }
                format = format.join('');

                map.push({ index: index, apply: data.apply });
            }
        });

        return {
            regex: new RegExp('^' + regex.join('') + '$'),
            map: orderByFilter(map, 'index')
        };
    }

    this.parse = function (input, format, baseDate) {
        if (!angular.isString(input) || !format) {
            return input;
        }

        format = $locale.DATETIME_FORMATS[format] || format;
        format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

        if ($locale.id !== localeId) {
            this.init();
        }

        if (!this.parsers[format]) {
            this.parsers[format] = createParser(format);
        }

        var parser = this.parsers[format],
            regex = parser.regex,
            map = parser.map,
            results = input.match(regex);

        if (results && results.length) {
            var fields, dt;
            if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
                fields = {
                    year: baseDate.getFullYear(),
                    month: baseDate.getMonth(),
                    date: baseDate.getDate(),
                    hours: baseDate.getHours(),
                    minutes: baseDate.getMinutes(),
                    seconds: baseDate.getSeconds(),
                    milliseconds: baseDate.getMilliseconds()
                };
            } else {
                if (baseDate) {
                    $log.warn('dateparser:', 'baseDate is not a valid date');
                }
                fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
            }

            for (var i = 1, n = results.length; i < n; i++) {
                var mapper = map[i - 1];
                if (mapper.apply) {
                    mapper.apply.call(fields, results[i]);
                }
            }

            if (isValid(fields.year, fields.month, fields.date)) {
                if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
                    dt = new Date(baseDate);
                    dt.setFullYear(fields.year, fields.month, fields.date,
                      fields.hours, fields.minutes, fields.seconds,
                      fields.milliseconds || 0);
                } else {
                    dt = new Date(fields.year, fields.month, fields.date,
                      fields.hours, fields.minutes, fields.seconds,
                      fields.milliseconds || 0);
                }
            }

            return dt;
        }
    };

    // Check if date is valid for specific month (and year for February).
    // Month: 0 = Jan, 1 = Feb, etc
    function isValid(year, month, date) {
        if (date < 1) {
            return false;
        }

        if (month === 1 && date > 28) {
            return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
        }

        if (month === 3 || month === 5 || month === 8 || month === 10) {
            return date < 31;
        }

        return true;
    }
}]);

/* Deprecated dateparser below */

angular.module('ui.bootstrap.dateparser')

.value('$dateParserSuppressWarning', false)

.service('dateParser', ['$log', '$dateParserSuppressWarning', 'uibDateParser', function ($log, $dateParserSuppressWarning, uibDateParser) {
    if (!$dateParserSuppressWarning) {
        $log.warn('dateParser is now deprecated. Use uibDateParser instead.');
    }

    angular.extend(this, uibDateParser);
}]);
angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods for working with the DOM.
 * It is meant to be used where we need to absolute-position elements in
 * relation to another element (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$uibPosition', ['$document', '$window', function ($document, $window) {
      /**
       * Used by scrollbarWidth() function to cache scrollbar's width.
       * Do not access this variable directly, use scrollbarWidth() instead.
       */
      var SCROLLBAR_WIDTH;
      var OVERFLOW_REGEX = {
          normal: /(auto|scroll)/,
          hidden: /(auto|scroll|hidden)/
      };
      var PLACEMENT_REGEX = {
          auto: /\s?auto?\s?/i,
          primary: /^(top|bottom|left|right)$/,
          secondary: /^(top|bottom|left|right|center)$/,
          vertical: /^(top|bottom)$/
      };

      return {

          /**
           * Provides a raw DOM element from a jQuery/jQLite element.
           *
           * @param {element} elem - The element to convert.
           *
           * @returns {element} A HTML element.
           */
          getRawNode: function (elem) {
              return elem[0] || elem;
          },

          /**
           * Provides a parsed number for a style property.  Strips
           * units and casts invalid numbers to 0.
           *
           * @param {string} value - The style value to parse.
           *
           * @returns {number} A valid number.
           */
          parseStyle: function (value) {
              value = parseFloat(value);
              return isFinite(value) ? value : 0;
          },

          /**
           * Provides the closest positioned ancestor.
           *
           * @param {element} element - The element to get the offest parent for.
           *
           * @returns {element} The closest positioned ancestor.
           */
          offsetParent: function (elem) {
              elem = this.getRawNode(elem);

              var offsetParent = elem.offsetParent || $document[0].documentElement;

              function isStaticPositioned(el) {
                  return ($window.getComputedStyle(el).position || 'static') === 'static';
              }

              while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
                  offsetParent = offsetParent.offsetParent;
              }

              return offsetParent || $document[0].documentElement;
          },

          /**
           * Provides the scrollbar width, concept from TWBS measureScrollbar()
           * function in https://github.com/twbs/bootstrap/blob/master/js/modal.js
           *
           * @returns {number} The width of the browser scollbar.
           */
          scrollbarWidth: function () {
              if (angular.isUndefined(SCROLLBAR_WIDTH)) {
                  var scrollElem = angular.element('<div style="position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;"></div>');
                  $document.find('body').append(scrollElem);
                  SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
                  SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
                  scrollElem.remove();
              }

              return SCROLLBAR_WIDTH;
          },

          /**
           * Provides the closest scrollable ancestor.
           * A port of the jQuery UI scrollParent method:
           * https://github.com/jquery/jquery-ui/blob/master/ui/scroll-parent.js
           *
           * @param {element} elem - The element to find the scroll parent of.
           * @param {boolean=} [includeHidden=false] - Should scroll style of 'hidden' be considered,
           *   default is false.
           *
           * @returns {element} A HTML element.
           */
          scrollParent: function (elem, includeHidden) {
              elem = this.getRawNode(elem);

              var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
              var documentEl = $document[0].documentElement;
              var elemStyle = $window.getComputedStyle(elem);
              var excludeStatic = elemStyle.position === 'absolute';
              var scrollParent = elem.parentElement || documentEl;

              if (scrollParent === documentEl || elemStyle.position === 'fixed') {
                  return documentEl;
              }

              while (scrollParent.parentElement && scrollParent !== documentEl) {
                  var spStyle = $window.getComputedStyle(scrollParent);
                  if (excludeStatic && spStyle.position !== 'static') {
                      excludeStatic = false;
                  }

                  if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
                      break;
                  }
                  scrollParent = scrollParent.parentElement;
              }

              return scrollParent;
          },

          /**
           * Provides read-only equivalent of jQuery's position function:
           * http://api.jquery.com/position/ - distance to closest positioned
           * ancestor.  Does not account for margins by default like jQuery position.
           *
           * @param {element} elem - The element to caclulate the position on.
           * @param {boolean=} [includeMargins=false] - Should margins be accounted
           * for, default is false.
           *
           * @returns {object} An object with the following properties:
           *   <ul>
           *     <li>**width**: the width of the element</li>
           *     <li>**height**: the height of the element</li>
           *     <li>**top**: distance to top edge of offset parent</li>
           *     <li>**left**: distance to left edge of offset parent</li>
           *   </ul>
           */
          position: function (elem, includeMagins) {
              elem = this.getRawNode(elem);

              var elemOffset = this.offset(elem);
              if (includeMagins) {
                  var elemStyle = $window.getComputedStyle(elem);
                  elemOffset.top -= this.parseStyle(elemStyle.marginTop);
                  elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
              }
              var parent = this.offsetParent(elem);
              var parentOffset = { top: 0, left: 0 };

              if (parent !== $document[0].documentElement) {
                  parentOffset = this.offset(parent);
                  parentOffset.top += parent.clientTop - parent.scrollTop;
                  parentOffset.left += parent.clientLeft - parent.scrollLeft;
              }

              return {
                  width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
                  height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
                  top: Math.round(elemOffset.top - parentOffset.top),
                  left: Math.round(elemOffset.left - parentOffset.left)
              };
          },

          /**
           * Provides read-only equivalent of jQuery's offset function:
           * http://api.jquery.com/offset/ - distance to viewport.  Does
           * not account for borders, margins, or padding on the body
           * element.
           *
           * @param {element} elem - The element to calculate the offset on.
           *
           * @returns {object} An object with the following properties:
           *   <ul>
           *     <li>**width**: the width of the element</li>
           *     <li>**height**: the height of the element</li>
           *     <li>**top**: distance to top edge of viewport</li>
           *     <li>**right**: distance to bottom edge of viewport</li>
           *   </ul>
           */
          offset: function (elem) {
              elem = this.getRawNode(elem);

              var elemBCR = elem.getBoundingClientRect();
              return {
                  width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
                  height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
                  top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
                  left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
              };
          },

          /**
           * Provides offset distance to the closest scrollable ancestor
           * or viewport.  Accounts for border and scrollbar width.
           *
           * Right and bottom dimensions represent the distance to the
           * respective edge of the viewport element.  If the element
           * edge extends beyond the viewport, a negative value will be
           * reported.
           *
           * @param {element} elem - The element to get the viewport offset for.
           * @param {boolean=} [useDocument=false] - Should the viewport be the document element instead
           * of the first scrollable element, default is false.
           * @param {boolean=} [includePadding=true] - Should the padding on the offset parent element
           * be accounted for, default is true.
           *
           * @returns {object} An object with the following properties:
           *   <ul>
           *     <li>**top**: distance to the top content edge of viewport element</li>
           *     <li>**bottom**: distance to the bottom content edge of viewport element</li>
           *     <li>**left**: distance to the left content edge of viewport element</li>
           *     <li>**right**: distance to the right content edge of viewport element</li>
           *   </ul>
           */
          viewportOffset: function (elem, useDocument, includePadding) {
              elem = this.getRawNode(elem);
              includePadding = includePadding !== false ? true : false;

              var elemBCR = elem.getBoundingClientRect();
              var offsetBCR = { top: 0, left: 0, bottom: 0, right: 0 };

              var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
              var offsetParentBCR = offsetParent.getBoundingClientRect();

              offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
              offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
              if (offsetParent === $document[0].documentElement) {
                  offsetBCR.top += $window.pageYOffset;
                  offsetBCR.left += $window.pageXOffset;
              }
              offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
              offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;

              if (includePadding) {
                  var offsetParentStyle = $window.getComputedStyle(offsetParent);
                  offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
                  offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
                  offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
                  offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
              }

              return {
                  top: Math.round(elemBCR.top - offsetBCR.top),
                  bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
                  left: Math.round(elemBCR.left - offsetBCR.left),
                  right: Math.round(offsetBCR.right - elemBCR.right)
              };
          },

          /**
           * Provides an array of placement values parsed from a placement string.
           * Along with the 'auto' indicator, supported placement strings are:
           *   <ul>
           *     <li>top: element on top, horizontally centered on host element.</li>
           *     <li>top-left: element on top, left edge aligned with host element left edge.</li>
           *     <li>top-right: element on top, lerightft edge aligned with host element right edge.</li>
           *     <li>bottom: element on bottom, horizontally centered on host element.</li>
           *     <li>bottom-left: element on bottom, left edge aligned with host element left edge.</li>
           *     <li>bottom-right: element on bottom, right edge aligned with host element right edge.</li>
           *     <li>left: element on left, vertically centered on host element.</li>
           *     <li>left-top: element on left, top edge aligned with host element top edge.</li>
           *     <li>left-bottom: element on left, bottom edge aligned with host element bottom edge.</li>
           *     <li>right: element on right, vertically centered on host element.</li>
           *     <li>right-top: element on right, top edge aligned with host element top edge.</li>
           *     <li>right-bottom: element on right, bottom edge aligned with host element bottom edge.</li>
           *   </ul>
           * A placement string with an 'auto' indicator is expected to be
           * space separated from the placement, i.e: 'auto bottom-left'  If
           * the primary and secondary placement values do not match 'top,
           * bottom, left, right' then 'top' will be the primary placement and
           * 'center' will be the secondary placement.  If 'auto' is passed, true
           * will be returned as the 3rd value of the array.
           *
           * @param {string} placement - The placement string to parse.
           *
           * @returns {array} An array with the following values
           * <ul>
           *   <li>**[0]**: The primary placement.</li>
           *   <li>**[1]**: The secondary placement.</li>
           *   <li>**[2]**: If auto is passed: true, else undefined.</li>
           * </ul>
           */
          parsePlacement: function (placement) {
              var autoPlace = PLACEMENT_REGEX.auto.test(placement);
              if (autoPlace) {
                  placement = placement.replace(PLACEMENT_REGEX.auto, '');
              }

              placement = placement.split('-');

              placement[0] = placement[0] || 'top';
              if (!PLACEMENT_REGEX.primary.test(placement[0])) {
                  placement[0] = 'top';
              }

              placement[1] = placement[1] || 'center';
              if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
                  placement[1] = 'center';
              }

              if (autoPlace) {
                  placement[2] = true;
              } else {
                  placement[2] = false;
              }

              return placement;
          },

          /**
           * Provides coordinates for an element to be positioned relative to
           * another element.  Passing 'auto' as part of the placement parameter
           * will enable smart placement - where the element fits. i.e:
           * 'auto left-top' will check to see if there is enough space to the left
           * of the hostElem to fit the targetElem, if not place right (same for secondary
           * top placement).  Available space is calculated using the viewportOffset
           * function.
           *
           * @param {element} hostElem - The element to position against.
           * @param {element} targetElem - The element to position.
           * @param {string=} [placement=top] - The placement for the targetElem,
           *   default is 'top'. 'center' is assumed as secondary placement for
           *   'top', 'left', 'right', and 'bottom' placements.  Available placements are:
           *   <ul>
           *     <li>top</li>
           *     <li>top-right</li>
           *     <li>top-left</li>
           *     <li>bottom</li>
           *     <li>bottom-left</li>
           *     <li>bottom-right</li>
           *     <li>left</li>
           *     <li>left-top</li>
           *     <li>left-bottom</li>
           *     <li>right</li>
           *     <li>right-top</li>
           *     <li>right-bottom</li>
           *   </ul>
           * @param {boolean=} [appendToBody=false] - Should the top and left values returned
           *   be calculated from the body element, default is false.
           *
           * @returns {object} An object with the following properties:
           *   <ul>
           *     <li>**top**: Value for targetElem top.</li>
           *     <li>**left**: Value for targetElem left.</li>
           *     <li>**placement**: The resolved placement.</li>
           *   </ul>
           */
          positionElements: function (hostElem, targetElem, placement, appendToBody) {
              hostElem = this.getRawNode(hostElem);
              targetElem = this.getRawNode(targetElem);

              // need to read from prop to support tests.
              var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
              var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');

              placement = this.parsePlacement(placement);

              var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
              var targetElemPos = { top: 0, left: 0, placement: '' };

              if (placement[2]) {
                  var viewportOffset = this.viewportOffset(hostElem);

                  var targetElemStyle = $window.getComputedStyle(targetElem);
                  var adjustedSize = {
                      width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
                      height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
                  };

                  placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' :
                                 placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' :
                                 placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' :
                                 placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' :
                                 placement[0];

                  placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' :
                                 placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' :
                                 placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' :
                                 placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' :
                                 placement[1];

                  if (placement[1] === 'center') {
                      if (PLACEMENT_REGEX.vertical.test(placement[0])) {
                          var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
                          if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
                              placement[1] = 'left';
                          } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
                              placement[1] = 'right';
                          }
                      } else {
                          var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
                          if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
                              placement[1] = 'top';
                          } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
                              placement[1] = 'bottom';
                          }
                      }
                  }
              }

              switch (placement[0]) {
                  case 'top':
                      targetElemPos.top = hostElemPos.top - targetHeight;
                      break;
                  case 'bottom':
                      targetElemPos.top = hostElemPos.top + hostElemPos.height;
                      break;
                  case 'left':
                      targetElemPos.left = hostElemPos.left - targetWidth;
                      break;
                  case 'right':
                      targetElemPos.left = hostElemPos.left + hostElemPos.width;
                      break;
              }

              switch (placement[1]) {
                  case 'top':
                      targetElemPos.top = hostElemPos.top;
                      break;
                  case 'bottom':
                      targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
                      break;
                  case 'left':
                      targetElemPos.left = hostElemPos.left;
                      break;
                  case 'right':
                      targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
                      break;
                  case 'center':
                      if (PLACEMENT_REGEX.vertical.test(placement[0])) {
                          targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
                      } else {
                          targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
                      }
                      break;
              }

              targetElemPos.top = Math.round(targetElemPos.top);
              targetElemPos.left = Math.round(targetElemPos.left);
              targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];

              return targetElemPos;
          },

          /**
          * Provides a way for positioning tooltip & dropdown
          * arrows when using placement options beyond the standard
          * left, right, top, or bottom.
          *
          * @param {element} elem - The tooltip/dropdown element.
          * @param {string} placement - The placement for the elem.
          */
          positionArrow: function (elem, placement) {
              elem = this.getRawNode(elem);

              var isTooltip = true;

              var innerElem = elem.querySelector('.tooltip-inner');
              if (!innerElem) {
                  isTooltip = false;
                  innerElem = elem.querySelector('.popover-inner');
              }
              if (!innerElem) {
                  return;
              }

              var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
              if (!arrowElem) {
                  return;
              }

              placement = this.parsePlacement(placement);
              if (placement[1] === 'center') {
                  // no adjustment necessary - just reset styles
                  angular.element(arrowElem).css({ top: '', bottom: '', right: '', left: '', margin: '' });
                  return;
              }

              var borderProp = 'border-' + placement[0] + '-width';
              var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];

              var borderRadiusProp = 'border-';
              if (PLACEMENT_REGEX.vertical.test(placement[0])) {
                  borderRadiusProp += placement[0] + '-' + placement[1];
              } else {
                  borderRadiusProp += placement[1] + '-' + placement[0];
              }
              borderRadiusProp += '-radius';
              var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];

              var arrowCss = {
                  top: 'auto',
                  bottom: 'auto',
                  left: 'auto',
                  right: 'auto',
                  margin: 0
              };

              switch (placement[0]) {
                  case 'top':
                      arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
                      break;
                  case 'bottom':
                      arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
                      break;
                  case 'left':
                      arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
                      break;
                  case 'right':
                      arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
                      break;
              }

              arrowCss[placement[1]] = borderRadius;

              angular.element(arrowElem).css(arrowCss);
          }
      };
  }]);

/* Deprecated position below */

angular.module('ui.bootstrap.position')

.value('$positionSuppressWarning', false)

.service('$position', ['$log', '$positionSuppressWarning', '$uibPosition', function ($log, $positionSuppressWarning, $uibPosition) {
    if (!$positionSuppressWarning) {
        $log.warn('$position is now deprecated. Use $uibPosition instead.');
    }

    angular.extend(this, $uibPosition);
}]);
/* Extract from UIBootstrap v0.14.3 */
/* https://github.com/angular-ui/bootstrap/blob/0.14.3/src/datepicker/datepicker.js */

angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])

.value('$datepickerSuppressError', true)

.constant('uibDatepickerConfig', {
    formatDay: 'dd',
    formatMonth: 'MMMM',
    formatYear: 'yyyy',
    formatDayHeader: 'EEE',
    formatDayTitle: 'MMMM yyyy',
    formatMonthTitle: 'yyyy',
    datepickerMode: 'day',
    minMode: 'day',
    maxMode: 'year',
    showWeeks: true,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null,
    shortcutPropagation: false
})

.controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerSuppressError', 'dateParser',
 function ($scope, $attrs, $parse, $interpolate, $log, dateFilter, datepickerConfig, $datepickerSuppressError, dateParser) {
    var self = this,
        ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

    // Modes chain
    this.modes = ['day', 'month', 'year'];

    // Configuration attributes
    angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
                     'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation', 'hasStringModel'], function (key, index) {
                         self[key] = angular.isDefined($attrs[key]) ? (index < 6 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
                     });

    // Watchable date attributes
    angular.forEach(['minDate', 'maxDate'], function (key) {
        if ($attrs[key]) {
            $scope.$parent.$watch($parse($attrs[key]), function (value) {
                self[key] = value ? new Date(value) : null;
                self.refreshView();
            });
        } else {
            self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
        }
    });

    angular.forEach(['minMode', 'maxMode'], function (key) {
        if ($attrs[key]) {
            $scope.$parent.$watch($parse($attrs[key]), function (value) {
                self[key] = angular.isDefined(value) ? value : $attrs[key];
                $scope[key] = self[key];
                if ((key == 'minMode' && self.modes.indexOf($scope.datepickerMode) < self.modes.indexOf(self[key])) || (key == 'maxMode' && self.modes.indexOf($scope.datepickerMode) > self.modes.indexOf(self[key]))) {
                    $scope.datepickerMode = self[key];
                }
            });
        } else {
            self[key] = datepickerConfig[key] || null;
            $scope[key] = self[key];
        }
    });

    $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
    $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

    //CUSTOM: WeekClick
    $scope.clicableWeek = false;

    if (angular.isDefined($scope.$parent.clickSemaine) && $scope.$parent.clickSemaine !== null) {
        //boolean utilisé dans le template pour conditionner le clic du n° de semaine 
        $scope.clicableWeek = true;
        //On définit la fonciton appelé par le template lors du click sur le n° de semaine
        $scope.onWeekClickFunction = function (week) {
            $scope.select(week.date);//Mise à jour du model

            var year = week.date.getFullYear(),
                isoWeek = year + "-W" + ("0" + week.weekOfYear).slice(-2);
            //Appel de la fonction donnée sur l'attribut "click-semaine"
            $scope.$parent.clickSemaine(
                {$date: week.date,
                 $isoWeek: isoWeek,
                 $year: year,
                 $weekOfYear: week.weekOfYear
            });
        }
    }
    //Fin ajout CUSTOM

    if (angular.isDefined($attrs.initDate)) {
        this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
        $scope.$parent.$watch($attrs.initDate, function (initDate) {
            if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
                self.activeDate = initDate;
                self.refreshView();
            }
        });
    } else {
        this.activeDate = new Date();
    }

    $scope.isActive = function (dateObject) {
        if (self.compare(dateObject.date, self.activeDate) === 0) {
            $scope.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };

    this.init = function (ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_;

        ngModelCtrl.$render = function () {
            self.render();
        };

        self.render(); //Fix myway : no ngModelCtrl.$render executed when datepicjker is closed.
    };

    this.render = function () {
        if (ngModelCtrl.$viewValue) {
            var date = dateParser.parse(ngModelCtrl.$viewValue, "dd/MM/yyyy", new Date(0, 0, 0, 0, 0, 0, 0)),
            //var date = new Date(ngModelCtrl.$viewValue),
                isValid = !isNaN(date);

            if (isValid) {
                this.activeDate = date;
            } else if (!$datepickerSuppressError) {
                $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
            }
        }
        this.refreshView();
    };

    this.refreshView = function () {
        if (this.element) {
            this._refreshView();

            var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
            ngModelCtrl.$setValidity('dateDisabled', !date || (this.element && !this.isDisabled(date)));
        }
    };

    this.createDateObject = function (date, format) {
        var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
        return {
            date: date,
            label: dateFilter(date, format),
            selected: model && this.compare(date, model) === 0,
            disabled: this.isDisabled(date),
            current: this.compare(date, new Date()) === 0,
            customClass: this.customClass(date)
        };
    };

    this.isDisabled = function (date) {
        return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({ date: date, mode: $scope.datepickerMode })));
    };

    this.customClass = function (date) {
        return $scope.customClass({ date: date, mode: $scope.datepickerMode });
    };

    // Split array into smaller arrays
    this.split = function (arr, size) {
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };

    $scope.select = function (date) {
        if ($scope.datepickerMode === self.minMode) {
            var dt = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            ngModelCtrl.$setViewValue(dt);
            ngModelCtrl.$render();
        } else {
            self.activeDate = date;
            $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
        }
    };

    $scope.move = function (direction) {
        var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
            month = self.activeDate.getMonth() + direction * (self.step.months || 0);
        self.activeDate.setFullYear(year, month, 1);
        self.refreshView();
    };

    $scope.toggleMode = function (direction) {
        direction = direction || 1;

        if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
            return;
        }

        $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
    };

    // Key event mapper
    $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

    var focusElement = function () {
        self.element[0].focus();
    };

    // Listen for focus requests from popup directive
    $scope.$on('uib:datepicker.focus', focusElement);

    $scope.keydown = function (evt) {
        var key = $scope.keys[evt.which];

        if (!key || evt.shiftKey || evt.altKey) {
            return;
        }

        evt.preventDefault();
        if (!self.shortcutPropagation) {
            evt.stopPropagation();
        }

        if (key === 'enter' || key === 'space') {
            if (self.isDisabled(self.activeDate)) {
                return; // do nothing
            }
            $scope.select(self.activeDate);
        } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
            $scope.toggleMode(key === 'up' ? 1 : -1);
        } else {
            self.handleKeyDown(key, evt);
            self.refreshView();
        }
    };
}])

.controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function (scope, $element, dateFilter) {
    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    this.step = { months: 1 };
    this.element = $element;
    function getDaysInMonth(year, month) {
        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
    }

    this.init = function (ctrl) {
        angular.extend(ctrl, this);
        scope.showWeeks = ctrl.showWeeks;
        ctrl.refreshView();
    };

    this.getDates = function (startDate, n) {
        var dates = new Array(n), current = new Date(startDate), i = 0, date;
        while (i < n) {
            date = new Date(current);
            dates[i++] = date;
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };

    this._refreshView = function () {
        var year = this.activeDate.getFullYear(),
          month = this.activeDate.getMonth(),
          firstDayOfMonth = new Date(this.activeDate);

        firstDayOfMonth.setFullYear(year, month, 1);

        var difference = this.startingDay - firstDayOfMonth.getDay(),
          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference,
          firstDate = new Date(firstDayOfMonth);

        if (numDisplayedFromPreviousMonth > 0) {
            firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }

        // 42 is the number of days on a six-month calendar
        var days = this.getDates(firstDate, 42);
        for (var i = 0; i < 42; i++) {
            days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
                secondary: days[i].getMonth() !== month,
                uid: scope.uniqueId + '-' + i
            });
        }

        scope.labels = new Array(7);
        for (var j = 0; j < 7; j++) {
            scope.labels[j] = {
                abbr: dateFilter(days[j].date, this.formatDayHeader),
                full: dateFilter(days[j].date, 'EEEE')
            };
        }

        scope.title = dateFilter(this.activeDate, this.formatDayTitle);
        scope.rows = this.split(days, 7);

        if (scope.showWeeks) {
            scope.weekNumbers = [];
            var thursdayIndex = (4 + 7 - this.startingDay) % 7,
                numWeeks = scope.rows.length;
            for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                scope.weekNumbers.push(
                  getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
            }
        }
    };

    this.compare = function (date1, date2) {
        return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
    };

    function getISO8601WeekNumber(date) {
        var checkDate = new Date(date);
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
        var time = checkDate.getTime();
        checkDate.setMonth(0); // Compare with Jan 1
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
    }

    this.handleKeyDown = function (key, evt) {
        var date = this.activeDate.getDate();

        if (key === 'left') {
            date = date - 1;   // up
        } else if (key === 'up') {
            date = date - 7;   // down
        } else if (key === 'right') {
            date = date + 1;   // down
        } else if (key === 'down') {
            date = date + 7;
        } else if (key === 'pageup' || key === 'pagedown') {
            var month = this.activeDate.getMonth() + (key === 'pageup' ? -1 : 1);
            this.activeDate.setMonth(month, 1);
            date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
        } else if (key === 'home') {
            date = 1;
        } else if (key === 'end') {
            date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
        }
        this.activeDate.setDate(date);
    };
}])



.directive('uibDatepicker', function () {
    return {
        replace: true,
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
        },
        scope: {
            datepickerMode: '=?',
            dateDisabled: '&',
            customClass: '&',
            shortcutPropagation: '&?'
        },
        require: ['uibDatepicker', '^ngModel'],
        controller: 'UibDatepickerController',
        controllerAs: 'datepicker',
        link: function (scope, element, attrs, ctrls) {
            var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

            datepickerCtrl.init(ngModelCtrl);
        }
    };
})

.directive('uibDaypicker', function () {
    return {
        replace: true,
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || 'uib/template/datepicker/day.html';
        },
        require: ['^?uibDatepicker', 'uibDaypicker', '^?datepicker'],
        controller: 'UibDaypickerController',
        link: function (scope, element, attrs, ctrls) {
            var datepickerCtrl = ctrls[0] || ctrls[2],
              daypickerCtrl = ctrls[1];

            daypickerCtrl.init(datepickerCtrl);
        }
    };
})



.constant('uibDatepickerPopupConfig', {
    datepickerPopup: 'yyyy-MM-dd',
    datepickerPopupTemplateUrl: 'uib/template/datepicker/popup.html',
    datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
    html5Types: {
        date: 'yyyy-MM-dd',
        'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
        'month': 'yyyy-MM'
    },
    currentText: 'Today',
    clearText: 'Clear',
    closeText: 'Done',
    closeOnDateSelection: true,
    appendToBody: false,
    showButtonBar: false,
    onOpenFocus: true
})

.controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout',
function (scope, element, attrs, $compile, $parse, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout) {
    var self = this;
    var cache = {},
      isHtml5DateInput = false;
    var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
      datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl,
      ngModel, $popup;

    scope.watchData = {};

    this.init = function (_ngModel_) {
        ngModel = _ngModel_;
        closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection;
        appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
        onOpenFocus = angular.isDefined(attrs.onOpenFocus) ? scope.$parent.$eval(attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
        datepickerPopupTemplateUrl = angular.isDefined(attrs.datepickerPopupTemplateUrl) ? attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl;
        datepickerTemplateUrl = angular.isDefined(attrs.datepickerTemplateUrl) ? attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;

        scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

        if (datepickerPopupConfig.html5Types[attrs.type]) {
            dateFormat = datepickerPopupConfig.html5Types[attrs.type];
            isHtml5DateInput = true;
        } else {
            dateFormat = attrs.datepickerPopup || attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
            attrs.$observe('uibDatepickerPopup', function (value, oldValue) {
                var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
                // Invalidate the $modelValue to ensure that formatters re-run
                // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
                if (newDateFormat !== dateFormat) {
                    dateFormat = newDateFormat;
                    ngModel.$modelValue = null;

                    if (!dateFormat) {
                        throw new Error('uibDatepickerPopup must have a date format specified.');
                    }
                }
            });
        }

        if (!dateFormat) {
            throw new Error('uibDatepickerPopup must have a date format specified.');
        }

        if (isHtml5DateInput && attrs.datepickerPopup) {
            throw new Error('HTML5 date input types do not support custom formats.');
        }

        // popup element used to display calendar
        popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
        popupEl.attr({
            'ng-model': 'date',
            'ng-change': 'dateSelection(date)',
            'template-url': datepickerPopupTemplateUrl
        });

        // datepicker element
        datepickerEl = angular.element(popupEl.children()[0]);
        datepickerEl.attr('template-url', datepickerTemplateUrl);

        if (isHtml5DateInput) {
            if (attrs.type === 'month') {
                datepickerEl.attr('datepicker-mode', '"month"');
                datepickerEl.attr('min-mode', 'month');
            }
        }

        if (attrs.datepickerOptions) {
            var options = scope.$parent.$eval(attrs.datepickerOptions);
            if (options && options.initDate) {
                scope.initDate = options.initDate;
                datepickerEl.attr('init-date', 'initDate');
                delete options.initDate;
            }
            angular.forEach(options, function (value, option) {
                datepickerEl.attr(cameltoDash(option), value);
            });
        }

        angular.forEach(['minMode', 'maxMode', 'minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation', 'hasStringModel'], function (key) {
            if (attrs[key]) {
                var getAttribute = $parse(attrs[key]);
                scope.$parent.$watch(getAttribute, function (value) {
                    scope.watchData[key] = value;
                    if (key === 'minDate' || key === 'maxDate') {
                        cache[key] = new Date(value);
                    }
                    if (key === 'hasStringModel') {
                        self[key]= angular.isDefined(value) ? scope.$parent.$eval(value): false;
                    }
                });
                datepickerEl.attr(cameltoDash(key), 'watchData.' + key);

                // Propagate changes from datepicker to outside
                if (key === 'datepickerMode') {
                    var setAttribute = getAttribute.assign;
                    scope.$watch('watchData.' + key, function (value, oldvalue) {
                        if (angular.isFunction(setAttribute) && value !== oldvalue) {
                            setAttribute(scope.$parent, value);
                        }
                    });
                }
            }
        });
        if (attrs.dateDisabled) {
            datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
        }

        if (attrs.showWeeks) {
            datepickerEl.attr('show-weeks', attrs.showWeeks);
        }

        if (attrs.customClass) {
            datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
        }
        if (attrs.hasStringModel) {
            self['hasStringModel']= angular.isDefined(attrs.hasStringModel) ? scope.$parent.$eval(attrs.hasStringModel): false;
        }
        if (!isHtml5DateInput) {
            // Internal API to maintain the correct ng-invalid-[key] class
            ngModel.$$parserName = 'date';
            ngModel.$validators.date = validator;
            ngModel.$parsers.unshift(parseDate);
            ngModel.$formatters.push(function (value) {
                //Myway hack
                if (angular.isString(value)) {
                    self.hasStringModel = true;
                }
                scope.date = value;
                return ngModel.$isEmpty(value) ? value: dateFilter(value, dateFormat);
            });
        } else {
            ngModel.$formatters.push(function (value) {
                scope.date = value;
                return value;
            });
        }

        // Detect changes in the view from the text box
        ngModel.$viewChangeListeners.push(function () {
            scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date);
        });

        element.bind('keydown', inputKeydownBind);

        $popup = $compile(popupEl)(scope);
        // Prevent jQuery cache memory leak (template is now redundant after linking)
        popupEl.remove();

        if (appendToBody) {
            $document.find('body').append($popup);
            /*
            scope.scrollable = $position.scrollParent(element);
            if (scope.scrollable !== null) {
                angular.element(scope.scrollable).append($popup);
            } else {
                $document.find('body').append($popup);
            }*/
        } else {
            element.after($popup);
        }

        scope.$on('$destroy', function () {
            if (scope.isOpen === true) {
                if (!$rootScope.$$phase) {
                    scope.$apply(function () {
                        scope.isOpen = false;
                    });
                }
            }

            $popup.remove();
            element.unbind('keydown', inputKeydownBind);
            $document.unbind('click', documentClickBind);
        });
    };

    scope.getText = function (key) {
        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
    };

    scope.isDisabled = function (date) {
        if (date === 'today') {
            date = new Date();
        }

        return ((scope.watchData.minDate && scope.compare(date, cache.minDate) < 0) ||
          (scope.watchData.maxDate && scope.compare(date, cache.maxDate) > 0));
    };

    scope.compare = function (date1, date2) {
        return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
    };

    // Inner change
    scope.dateSelection = function (dt) {
        if (angular.isDefined(dt)) {
            scope.date = dt;
        }
        var date = scope.date ? dateFilter(scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
        element.val(date);
        ngModel.$setViewValue(date);

        if (closeOnDateSelection) {
            scope.isOpen = false;
            element[0].focus();
        }
    };

    scope.keydown = function (evt) {
        if (evt.which === 27) {
            scope.isOpen = false;
            element[0].focus();
        }
    };

    scope.select = function (date) {
        if (date === 'today') {
            var today = new Date();
            if (angular.isDate(scope.date)) {
                date = new Date(scope.date);
                date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
            } else {
                date = new Date(today.setHours(0, 0, 0, 0));
            }
        }
        scope.dateSelection(date);
    };

    scope.close = function () {
        scope.isOpen = false;
        element[0].focus();
    };

    //Calcul l'offsetTop d'un élément par rapport à un conteneur parent
    function getOffsetTopToParent(target, parent) {
        var offsetTop = target.offsetTop;
        while (target = target.offsetParent) {
            if (parent) {
                if (target === parent) {
                    break;
                }
            }
            offsetTop += target.offsetTop;
        }
        return offsetTop || 0;
    };

    scope.$watch('isOpen', function (value) {
        if (value) {
            /*
            var scrollablePosition = $position.offset(scope.scrollable);
            
            scope.position = appendToBody ? $position.offset(element) : $position.position(element);
            var posTop = getOffsetTopToParent(element[0], scope.scrollable);
            scope.position.top = posTop + element.prop('offsetHeight');
            scope.position.left = scope.position.left - scrollablePosition.left;
            */
            scope.position = appendToBody ? $position.offset(element) : $position.position(element);
            scope.position.top = scope.position.top + element.prop('offsetHeight');

            
            $timeout(function () {
                if (onOpenFocus) {
                    scope.$broadcast('uib:datepicker.focus');
                }
                $document.bind('click', documentClickBind);
            }, 0, false);
        } else {
            $document.unbind('click', documentClickBind);
        }
    });

    function cameltoDash(string) {
        return string.replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase(); });
    }

    function parseDate(viewValue) {
        if (angular.isNumber(viewValue)) {
            // presumably timestamp to date object
            viewValue = new Date(viewValue);
        }

        if (!viewValue) {
            return null;
        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
            // MYWAY gérer les dates de type Date et string
            if (self.hasStringModel) {
                return viewValue;
            } else {
                var ds = (viewValue).toISOString();
                var result = ds.substr(8, 2) + "/" + ds.substr(5, 2) + "/" + ds.substr(0, 4);
                return result;
            }
        } else if (angular.isString(viewValue)) {
            var date = dateParser.parse(viewValue, dateFormat, scope.date);
            if (isNaN(date)) {
                return undefined;
            } else {
                if (!self.hasStringModel) {
                    return date;
                } else {
                    // MYWAY gérer les dates de type Date et string
                    var result = date.getFullYear() + "-" + format2Digit((date.getMonth() + 1)) + "-" +format2Digit(date.getDate());
                    return result;
                }
        }
        } else {
            return undefined;
        }
    }

    function format2Digit(month) {
                    return month > 9 ? "" + month : "0" + month;
    }
    function validator(modelValue, viewValue) {
        var value = modelValue || viewValue;

        if (!attrs.ngRequired && !value) {
            return true;
        }

        if (angular.isNumber(value)) {
            value = new Date(value);
        }
        if (!value) {
            return true;
        } else if (angular.isDate(value) && !isNaN(value)) {
            return true;
        } else if (angular.isString(value)) {
            var df = dateFormat;
            if (modelValue) {
                //On est dans le cas ou le model est de type string
                df = "yyyy-MM-dd";
            }
            var date = dateParser.parse(value, df);
            return !isNaN(date);
        } else {
            return false;
        }
    }


    function documentClickBind(event) {
        var popup = $popup[0];
        var dpContainsTarget = element[0].contains(event.target);
        // The popup node may not be an element node
        // In some browsers (IE) only element nodes have the 'contains' function
        var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
        if (scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
            scope.$apply(function () {
                scope.isOpen = false;
            });
        }
    }

    function inputKeydownBind(evt) {
        if (evt.which === 27 && scope.isOpen) {
            evt.preventDefault();
            evt.stopPropagation();
            scope.$apply(function () {
                scope.isOpen = false;
            });
            element[0].focus();
        } else if (evt.which === 40 && !scope.isOpen) {
            evt.preventDefault();
            evt.stopPropagation();
            scope.$apply(function () {
                scope.isOpen = true;
            });
        }
    }
}])

.directive('uibDatepickerPopup', function () {
    return {
        require: ['ngModel', 'uibDatepickerPopup'],
        controller: 'UibDatepickerPopupController',
        scope: {
            isOpen: '=?',
            currentText: '@',
            clearText: '@',
            closeText: '@',
            dateDisabled: '&',
            customClass: '&',
            clickSemaine: "&?" ///CUSTOM: WeekClick

        },
        link: function (scope, element, attrs, ctrls) {
            var ngModel = ctrls[0],
              ctrl = ctrls[1];
            if (!("clickSemaine" in attrs)) {
                scope.clickSemaine = null;
            }
            ctrl.init(ngModel);
        }
    };
})

.directive('uibDatepickerPopupWrap', function () {
    return {
        replace: true,
        transclude: true,
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || 'template/datepicker/popup.html';
        }
    };
});

/* Deprecated datepicker below */

angular.module('ui.bootstrap.datepicker')

.value('$datepickerSuppressWarning', false)

.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerSuppressError', '$datepickerSuppressWarning', function ($scope, $attrs, $parse, $interpolate, $log, dateFilter, datepickerConfig, $datepickerSuppressError, $datepickerSuppressWarning) {
    if (!$datepickerSuppressWarning) {
        $log.warn('DatepickerController is now deprecated. Use UibDatepickerController instead.');
    }

    var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

    this.modes = ['day', 'month', 'year'];

    angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
      'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function (key, index) {
          self[key] = angular.isDefined($attrs[key]) ? (index < 6 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
      });

    angular.forEach(['minDate', 'maxDate'], function (key) {
        if ($attrs[key]) {
            $scope.$parent.$watch($parse($attrs[key]), function (value) {
                self[key] = value ? new Date(value) : null;
                self.refreshView();
            });
        } else {
            self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
        }
    });

    angular.forEach(['minMode', 'maxMode'], function (key) {
        if ($attrs[key]) {
            $scope.$parent.$watch($parse($attrs[key]), function (value) {
                self[key] = angular.isDefined(value) ? value : $attrs[key];
                $scope[key] = self[key];
                if ((key == 'minMode' && self.modes.indexOf($scope.datepickerMode) < self.modes.indexOf(self[key])) || (key == 'maxMode' && self.modes.indexOf($scope.datepickerMode) > self.modes.indexOf(self[key]))) {
                    $scope.datepickerMode = self[key];
                }
            });
        } else {
            self[key] = datepickerConfig[key] || null;
            $scope[key] = self[key];
        }
    });

    $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
    $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

    if (angular.isDefined($attrs.initDate)) {
        this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
        $scope.$parent.$watch($attrs.initDate, function (initDate) {
            if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
                self.activeDate = initDate;
                self.refreshView();
            }
        });
    } else {
        this.activeDate = new Date();
    }

    $scope.isActive = function (dateObject) {
        if (self.compare(dateObject.date, self.activeDate) === 0) {
            $scope.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };

    this.init = function (ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_;

        ngModelCtrl.$render = function () {
            self.render();
        };
    };

    this.render = function () {
        if (ngModelCtrl.$viewValue) {
            var date = new Date(ngModelCtrl.$viewValue),
              isValid = !isNaN(date);

            if (isValid) {
                this.activeDate = date;
            } else if (!$datepickerSuppressError) {
                $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
            }
        }
        this.refreshView();
    };

    this.refreshView = function () {
        if (this.element) {
            this._refreshView();

            var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
            ngModelCtrl.$setValidity('dateDisabled', !date || (this.element && !this.isDisabled(date)));
        }
    };

    this.createDateObject = function (date, format) {
        var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
        return {
            date: date,
            label: dateFilter(date, format),
            selected: model && this.compare(date, model) === 0,
            disabled: this.isDisabled(date),
            current: this.compare(date, new Date()) === 0,
            customClass: this.customClass(date)
        };
    };

    this.isDisabled = function (date) {
        return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({ date: date, mode: $scope.datepickerMode })));
    };

    this.customClass = function (date) {
        return $scope.customClass({ date: date, mode: $scope.datepickerMode });
    };

    // Split array into smaller arrays
    this.split = function (arr, size) {
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };

    this.fixTimeZone = function (date) {
        var hours = date.getHours();
        date.setHours(hours === 23 ? hours + 2 : 0);
    };

    $scope.select = function (date) {
        if ($scope.datepickerMode === self.minMode) {
            var dt = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            ngModelCtrl.$setViewValue(dt);
            ngModelCtrl.$render();
        } else {
            self.activeDate = date;
            $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
        }
    };

    $scope.move = function (direction) {
        var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
          month = self.activeDate.getMonth() + direction * (self.step.months || 0);
        self.activeDate.setFullYear(year, month, 1);
        self.refreshView();
    };

    $scope.toggleMode = function (direction) {
        direction = direction || 1;

        if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
            return;
        }

        $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
    };

    // Key event mapper
    $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

    var focusElement = function () {
        self.element[0].focus();
    };

    $scope.$on('uib:datepicker.focus', focusElement);

    $scope.keydown = function (evt) {
        var key = $scope.keys[evt.which];

        if (!key || evt.shiftKey || evt.altKey) {
            return;
        }

        evt.preventDefault();
        if (!self.shortcutPropagation) {
            evt.stopPropagation();
        }

        if (key === 'enter' || key === 'space') {
            if (self.isDisabled(self.activeDate)) {
                return; // do nothing
            }
            $scope.select(self.activeDate);
        } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
            $scope.toggleMode(key === 'up' ? 1 : -1);
        } else {
            self.handleKeyDown(key, evt);
            self.refreshView();
        }
    };
}])

.directive('datepicker', ['$log', '$datepickerSuppressWarning', function ($log, $datepickerSuppressWarning) {
    return {
        replace: true,
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || 'template/datepicker/datepicker.html';
        },
        scope: {
            datepickerMode: '=?',
            dateDisabled: '&',
            customClass: '&',
            shortcutPropagation: '&?'
        },
        require: ['datepicker', '^ngModel'],
        controller: 'DatepickerController',
        controllerAs: 'datepicker',
        link: function (scope, element, attrs, ctrls) {
            if (!$datepickerSuppressWarning) {
                $log.warn('datepicker is now deprecated. Use uib-datepicker instead.');
            }

            var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

            datepickerCtrl.init(ngModelCtrl);
        }
    };
}])

.directive('daypicker', ['$log', '$datepickerSuppressWarning', function ($log, $datepickerSuppressWarning) {
    return {
        replace: true,
        templateUrl: 'template/datepicker/day.html',
        require: ['^datepicker', 'daypicker'],
        controller: 'UibDaypickerController',
        link: function (scope, element, attrs, ctrls) {
            if (!$datepickerSuppressWarning) {
                $log.warn('daypicker is now deprecated. Use uib-daypicker instead.');
            }

            var datepickerCtrl = ctrls[0],
              daypickerCtrl = ctrls[1];

            daypickerCtrl.init(datepickerCtrl);
        }
    };
}])

.directive('monthpicker', ['$log', '$datepickerSuppressWarning', function ($log, $datepickerSuppressWarning) {
    return {
        replace: true,
        templateUrl: 'template/datepicker/month.html',
        require: ['^datepicker', 'monthpicker'],
        controller: 'UibMonthpickerController',
        link: function (scope, element, attrs, ctrls) {
            if (!$datepickerSuppressWarning) {
                $log.warn('monthpicker is now deprecated. Use uib-monthpicker instead.');
            }

            var datepickerCtrl = ctrls[0],
              monthpickerCtrl = ctrls[1];

            monthpickerCtrl.init(datepickerCtrl);
        }
    };
}])

.directive('yearpicker', ['$log', '$datepickerSuppressWarning', function ($log, $datepickerSuppressWarning) {
    return {
        replace: true,
        templateUrl: 'template/datepicker/year.html',
        require: ['^datepicker', 'yearpicker'],
        controller: 'UibYearpickerController',
        link: function (scope, element, attrs, ctrls) {
            if (!$datepickerSuppressWarning) {
                $log.warn('yearpicker is now deprecated. Use uib-yearpicker instead.');
            }

            var ctrl = ctrls[0];
            angular.extend(ctrl, ctrls[1]);
            ctrl.yearpickerInit();

            ctrl.refreshView();
        }
    };
}])

.directive('datepickerPopup', ['$log', '$datepickerSuppressWarning', function ($log, $datepickerSuppressWarning) {
    return {
        require: ['ngModel', 'datepickerPopup'],
        controller: 'UibDatepickerPopupController',
        scope: {
            isOpen: '=?',
            currentText: '@',
            clearText: '@',
            closeText: '@',
            dateDisabled: '&',
            customClass: '&'
        },
        link: function (scope, element, attrs, ctrls) {
            if (!$datepickerSuppressWarning) {
                $log.warn('datepicker-popup is now deprecated. Use uib-datepicker-popup instead.');
            }

            var ngModel = ctrls[0],
              ctrl = ctrls[1];

            ctrl.init(ngModel);
        }
    };
}])

.directive('datepickerPopupWrap', ['$log', '$datepickerSuppressWarning', function ($log, $datepickerSuppressWarning) {
    return {
        replace: true,
        transclude: true,
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || 'template/datepicker/popup.html';
        },
        link: function () {
            if (!$datepickerSuppressWarning) {
                $log.warn('datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.');
            }
        }
    };
}]);
(function( factory ) {
	if (typeof define !== 'undefined' && define.amd) {
		define([], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory();
	} else {
		window.scrollMonitor = factory();
	}
})(function() {

	var scrollTop = function() {
		return window.pageYOffset ||
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
	};

	var exports = {};

	var watchers = [];

	var VISIBILITYCHANGE = 'visibilityChange';
	var ENTERVIEWPORT = 'enterViewport';
	var FULLYENTERVIEWPORT = 'fullyEnterViewport';
	var EXITVIEWPORT = 'exitViewport';
	var PARTIALLYEXITVIEWPORT = 'partiallyExitViewport';
	var LOCATIONCHANGE = 'locationChange';
	var STATECHANGE = 'stateChange';

	var eventTypes = [
		VISIBILITYCHANGE,
		ENTERVIEWPORT,
		FULLYENTERVIEWPORT,
		EXITVIEWPORT,
		PARTIALLYEXITVIEWPORT,
		LOCATIONCHANGE,
		STATECHANGE
	];

	var defaultOffsets = {top: 0, bottom: 0};

	var getViewportHeight = function() {
		return window.innerHeight || document.documentElement.clientHeight;
	};

	var getDocumentHeight = function() {
		// jQuery approach
		// whichever is greatest
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.documentElement.clientHeight
		);
	};

	exports.viewportTop = null;
	exports.viewportBottom = null;
	exports.documentHeight = null;
	exports.viewportHeight = getViewportHeight();

	var previousDocumentHeight;
	var latestEvent;

	var calculateViewportI;
	function calculateViewport() {
		exports.viewportTop = scrollTop();
		exports.viewportBottom = exports.viewportTop + exports.viewportHeight;
		exports.documentHeight = getDocumentHeight();
		if (exports.documentHeight !== previousDocumentHeight) {
			calculateViewportI = watchers.length;
			while( calculateViewportI-- ) {
				watchers[calculateViewportI].recalculateLocation();
			}
			previousDocumentHeight = exports.documentHeight;
		}
	}

	function recalculateWatchLocationsAndTrigger() {
		exports.viewportHeight = getViewportHeight();
		calculateViewport();
		updateAndTriggerWatchers();
	}

	var recalculateAndTriggerTimer;
	function debouncedRecalcuateAndTrigger() {
		clearTimeout(recalculateAndTriggerTimer);
		recalculateAndTriggerTimer = setTimeout( recalculateWatchLocationsAndTrigger, 100 );
	}

	var updateAndTriggerWatchersI;
	function updateAndTriggerWatchers() {
		// update all watchers then trigger the events so one can rely on another being up to date.
		updateAndTriggerWatchersI = watchers.length;
		while( updateAndTriggerWatchersI-- ) {
			watchers[updateAndTriggerWatchersI].update();
		}

		updateAndTriggerWatchersI = watchers.length;
		while( updateAndTriggerWatchersI-- ) {
			watchers[updateAndTriggerWatchersI].triggerCallbacks();
		}

	}

	function ElementWatcher( watchItem, offsets ) {
		var self = this;

		this.watchItem = watchItem;

		if (!offsets) {
			this.offsets = defaultOffsets;
		} else if (offsets === +offsets) {
			this.offsets = {top: offsets, bottom: offsets};
		} else {
			this.offsets = {
				top: offsets.top || defaultOffsets.top,
				bottom: offsets.bottom || defaultOffsets.bottom
			};
		}

		this.callbacks = {}; // {callback: function, isOne: true }

		for (var i = 0, j = eventTypes.length; i < j; i++) {
			self.callbacks[eventTypes[i]] = [];
		}

		this.locked = false;

		var wasInViewport;
		var wasFullyInViewport;
		var wasAboveViewport;
		var wasBelowViewport;

		var listenerToTriggerListI;
		var listener;
		function triggerCallbackArray( listeners ) {
			if (listeners.length === 0) {
				return;
			}
			listenerToTriggerListI = listeners.length;
			while( listenerToTriggerListI-- ) {
				listener = listeners[listenerToTriggerListI];
				listener.callback.call( self, latestEvent );
				if (listener.isOne) {
					listeners.splice(listenerToTriggerListI, 1);
				}
			}
		}
		this.triggerCallbacks = function triggerCallbacks() {

			if (this.isInViewport && !wasInViewport) {

				triggerCallbackArray( this.callbacks[ENTERVIEWPORT] );
			}
			if (this.isFullyInViewport && !wasFullyInViewport) {
				triggerCallbackArray( this.callbacks[FULLYENTERVIEWPORT] );
			}


			if (this.isAboveViewport !== wasAboveViewport &&
				this.isBelowViewport !== wasBelowViewport) {

				triggerCallbackArray( this.callbacks[VISIBILITYCHANGE] );

				// if you skip completely past this element
				if (!wasFullyInViewport && !this.isFullyInViewport) {
					
					triggerCallbackArray( this.callbacks[FULLYENTERVIEWPORT] );
					triggerCallbackArray( this.callbacks[PARTIALLYEXITVIEWPORT] );
				}
				if (!wasInViewport && !this.isInViewport) {
					triggerCallbackArray( this.callbacks[ENTERVIEWPORT] );
					triggerCallbackArray( this.callbacks[EXITVIEWPORT] );
				}
			}

			if (!this.isFullyInViewport && wasFullyInViewport) {
				triggerCallbackArray( this.callbacks[PARTIALLYEXITVIEWPORT] );
			}
			if (!this.isInViewport && wasInViewport) {
				triggerCallbackArray( this.callbacks[EXITVIEWPORT] );
			}
			if (this.isInViewport !== wasInViewport) {
				triggerCallbackArray( this.callbacks[VISIBILITYCHANGE] );
			}
			switch( true ) {
				case wasInViewport !== this.isInViewport:
				case wasFullyInViewport !== this.isFullyInViewport:
				case wasAboveViewport !== this.isAboveViewport:
				case wasBelowViewport !== this.isBelowViewport:
					triggerCallbackArray( this.callbacks[STATECHANGE] );
			}

			wasInViewport = this.isInViewport;
			wasFullyInViewport = this.isFullyInViewport;
			wasAboveViewport = this.isAboveViewport;
			wasBelowViewport = this.isBelowViewport;

		};

		this.recalculateLocation = function() {
			if (this.locked) {
				return;
			}
			var previousTop = this.top;
			var previousBottom = this.bottom;
			if (this.watchItem.nodeName) { // a dom element
				var cachedDisplay = this.watchItem.style.display;
				if (cachedDisplay === 'none') {
					this.watchItem.style.display = '';
				}

				var boundingRect = this.watchItem.getBoundingClientRect();
				this.top = boundingRect.top + exports.viewportTop;
				this.bottom = boundingRect.bottom + exports.viewportTop;

				if (cachedDisplay === 'none') {
					this.watchItem.style.display = cachedDisplay;
				}

			} else if (this.watchItem === +this.watchItem) { // number
				if (this.watchItem > 0) {
					this.top = this.bottom = this.watchItem;
				} else {
					this.top = this.bottom = exports.documentHeight - this.watchItem;
				}

			} else { // an object with a top and bottom property
				this.top = this.watchItem.top;
				this.bottom = this.watchItem.bottom;
			}

			this.top -= this.offsets.top;
			this.bottom += this.offsets.bottom;
			this.height = this.bottom - this.top;

			if ( (previousTop !== undefined || previousBottom !== undefined) && (this.top !== previousTop || this.bottom !== previousBottom) ) {
				triggerCallbackArray( this.callbacks[LOCATIONCHANGE] );
			}
		};

		this.recalculateLocation();
		this.update();

		wasInViewport = this.isInViewport;
		wasFullyInViewport = this.isFullyInViewport;
		wasAboveViewport = this.isAboveViewport;
		wasBelowViewport = this.isBelowViewport;
	}

	ElementWatcher.prototype = {
		on: function( event, callback, isOne ) {
			console.log('on:'+event === ENTERVIEWPORT && this.isInViewport);

			// trigger the event if it applies to the element right now.
			switch( true ) {
				case event === VISIBILITYCHANGE && !this.isInViewport && this.isAboveViewport:
				case event === ENTERVIEWPORT && this.isInViewport:
				case event === FULLYENTERVIEWPORT && this.isFullyInViewport:
				case event === EXITVIEWPORT && this.isAboveViewport && !this.isInViewport:
				case event === PARTIALLYEXITVIEWPORT && this.isAboveViewport:
					callback.call( this, latestEvent );
					if (isOne) {
						return;
					}
			}

			if (this.callbacks[event]) {
				this.callbacks[event].push({callback: callback, isOne: isOne||false});
			} else {
				throw new Error('Tried to add a scroll monitor listener of type '+event+'. Your options are: '+eventTypes.join(', '));
			}
		},
		off: function( event, callback ) {
			if (this.callbacks[event]) {
				for (var i = 0, item; item = this.callbacks[event][i]; i++) {
					if (item.callback === callback) {
						this.callbacks[event].splice(i, 1);
						break;
					}
				}
			} else {
				throw new Error('Tried to remove a scroll monitor listener of type '+event+'. Your options are: '+eventTypes.join(', '));
			}
		},
		one: function( event, callback ) {
			this.on( event, callback, true);
		},
		recalculateSize: function() {
			this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom;
			this.bottom = this.top + this.height;
		},
		update: function() {
			var rect = this.watchItem.getBoundingClientRect();
			this.top = rect.top;
			this.bottom = rect.bottom;
			this.isAboveViewport = this.top < exports.viewportTop;
			this.isBelowViewport = this.bottom > exports.viewportBottom;

			this.isInViewport = (this.top <= exports.viewportBottom && this.bottom >= exports.viewportTop);
			this.isFullyInViewport = (this.top >= exports.viewportTop && this.bottom <= exports.viewportBottom) ||
								 (this.isAboveViewport && this.isBelowViewport);

		},
		destroy: function() {
			var index = watchers.indexOf(this),
				self  = this;
			watchers.splice(index, 1);
			for (var i = 0, j = eventTypes.length; i < j; i++) {
				self.callbacks[eventTypes[i]].length = 0;
			}
		},
		// prevent recalculating the element location
		lock: function() {
			this.locked = true;
		},
		unlock: function() {
			this.locked = false;
		}
	};

	var eventHandlerFactory = function (type) {
		return function( callback, isOne ) {
			this.on.call(this, type, callback, isOne);
		};
	};

	for (var i = 0, j = eventTypes.length; i < j; i++) {
		var type =  eventTypes[i];
		ElementWatcher.prototype[type] = eventHandlerFactory(type);
	}

	try {
		calculateViewport();
	} catch (e) {
		try {
			window.$(calculateViewport);
		} catch (e) {
			throw new Error('If you must put scrollMonitor in the <head>, you must use jQuery.');
		}
	}

	function scrollMonitorListener(event) {
		latestEvent = event;
		calculateViewport();
		updateAndTriggerWatchers();
	}

    if (window.addEventListener) {
        var elem = document.querySelector('.zone-travail') || document.querySelector('.container-fluid');
		if(typeof elem !== 'undefined' && elem !== null)
		{
			elem.addEventListener('scroll', scrollMonitorListener);
		}
		else
		{
			window.addEventListener('scroll', scrollMonitorListener);
		}
		
		window.addEventListener('resize', debouncedRecalcuateAndTrigger);
	} else {
		// Old IE support
		window.attachEvent('onscroll', scrollMonitorListener);
		window.attachEvent('onresize', debouncedRecalcuateAndTrigger);
	}

	exports.beget = exports.create = function( element, offsets ) {

		if (typeof element === 'string') {
			element = document.querySelector(element);
		} else if (element && element.length > 0) {
			element = element[0];
		}

		var watcher = new ElementWatcher( element, offsets );
		watchers.push(watcher);
		watcher.update();
		return watcher;
	};

	exports.update = function() {
		latestEvent = null;
		calculateViewport();
		updateAndTriggerWatchers();
	};
	exports.recalculateLocations = function() {
		exports.documentHeight = 0;
		exports.update();
	};

	return exports;
});
/**
 * Généré par : ITGCE\S0077949
 * Changeset TFS : undefined
 * Etiquette TFS : undefined
 * Déclenchement : undefined
 */
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angularjs\angular.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angularjs\angular-route.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\bootstrap\bootstrap.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\angular-ui-bootstrap\angular-ui-bootstrap.d.ts" />
/// <reference path="//myway-atelier\DeclarationsTS\v1\third-party\tinymce\tinymce.d.ts" />
/// <reference path="..\..\lib\scrollMonitor\scrollMonitor.d.ts" /> 

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * @ngdoc overview
         * @name myway.ui
         * @description Bibliotheque de composants graphiques réutilisables du framework MyWay
         */
        var scripts = document.getElementsByTagName("script");
        var currentScriptPath = scripts[scripts.length - 1].src;
        UI.hostName = currentScriptPath.substr(0, currentScriptPath.indexOf("/cdn") + 4);
        var Constants = (function () {
            function Constants() {
            }
            Constants.TEMPLATE_PATH = currentScriptPath.substring(0, currentScriptPath.lastIndexOf("/") + 1);
            Constants.VERSION = "v1.9.0";
            Constants.CLAVIER_KEYCODE = {
                RETOUR: 8,
                TAB: 9,
                ENTRER: 13,
                ECHAP: 27,
                ESPACE: 32,
                FIN: 35,
                ORIGINE: 36,
                FLECHE_GAUCHE: 37,
                FLECHE_HAUT: 38,
                FLECHE_DROITE: 39,
                FLECHE_BAS: 40,
                SUPPRIMER: 46
            };
            return Constants;
        })();
        UI.Constants = Constants;
        /**
         * Injecte les composant présent dans la librairie myway-ui-addons
         */
        /*
        loadjscssfile("../cdn/v1/ui-addons/myway-ui-addons.js", "js");
        loadjscssfile("../cdn/v1/ui-addons/myway-ui-addons.css", "css");
        */
        console.log("MyWay.UI hostname = " + UI.hostName);
        if (UI.hostName.indexOf("http://") >= 0) {
            loadjscssfile(UI.hostName + "/v1/ui-addons/myway-ui-addons.js", "js");
            loadjscssfile(UI.hostName + "/v1/ui-addons/myway-ui-addons.css", "css");
        }
        // Utilisation de librairie externe ui-select et angular-scroll (duScroll).
        // Elle sont dans le lrépertoire lib 
        UI.module = angular.module("myway.ui", ["ui.select"]);
        //Choix du theme pour la librairie ui-select.
        UI.module.config(["uiSelectConfig", function (uiSelectConfig) {
                uiSelectConfig.theme = "bootstrap";
                uiSelectConfig.resetSearchInput = true;
                uiSelectConfig.infiniteScrollStep = 50;
            }]);
        //Config du ngAnimate. Seuls les éléments ayant cette classe seront inspecter par le module ngAnimate. On gagne en perfomance !
        UI.module.config(["$animateProvider", function configureAnimate($animateProvider) {
                $animateProvider.classNameFilter(/\banimated\b/);
            }
        ]);
        UI.module.run(['$anchorScroll', function ($anchorScroll) {
                var header = document.getElementsByTagName("header");
                if (header.length > 0) {
                    $anchorScroll.yOffset = header[0].scrollHeight;
                }
                else {
                    $anchorScroll.yOffset = 10;
                }
            }]);
        // set up a Run Block  
        UI.module.run(["$rootScope", "$timeout", function _forceAutofocus($rootScope, $timeout) {
                // tell Angular to call this function when a route change completes  
                $rootScope.$on("$routeChangeSuccess", function () {
                    // Le contenu du $timeout sera exécuté après le $digest.
                    $timeout(function () {
                        // Ce code recherche l'élément de la vue ayant l'attribut autofocus et lui donne le focus. 
                        var elements = document.querySelectorAll("[autofocus]");
                        if (elements && elements.length > 1) {
                            throw new Error("MyWay.UI : Plusieurs élements avec l'attributs autofocus trouvés. Seul un élément par vue doit avoir l'attribut autofocus.");
                        }
                        else if (elements && elements.length === 1) {
                        }
                    });
                });
            }]);
        /*
        * Permet d'injecter un fichier css ou un fichier js dans le head du DOM
        */
        function loadjscssfile(filename, filetype) {
            if (filetype === "js") {
                var filejs = document.createElement("script");
                filejs.setAttribute("type", "text/javascript");
                filejs.setAttribute("src", filename);
                if (typeof filejs !== "undefined") {
                    document.getElementsByTagName("head")[0].appendChild(filejs);
                }
            }
            else if (filetype === "css") {
                var filecss = document.createElement("link");
                filecss.setAttribute("rel", "stylesheet");
                filecss.setAttribute("type", "text/css");
                filecss.setAttribute("href", filename);
                if (typeof filecss !== "undefined") {
                    document.getElementsByTagName("head")[0].appendChild(filecss);
                }
            }
        }
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Normalise le string en paramètre pour être utilisé en tant qu'id html (minuscules séparés par des tirets).
         */
        function mwNormalizeId() {
            return function (str) {
                return str && str.toLowerCase().replace(/[^\w.:]+/g, "-").replace(/^[^A-Za-z]+/g, "");
            };
        }
        UI.module.filter("mwNormalizeId", mwNormalizeId);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwGenerateurIdService = (function () {
            function MwGenerateurIdService() {
            }
            MwGenerateurIdService.prototype.suffixerId = function (element, baseId) {
                //si un id est présent sur l'élément, on préfixe/suffixe tous les id du composant par cet id
                angular.forEach(element[0].querySelectorAll("[id]"), baseId ? ajouterId : supprimerId);
                function ajouterId(elem) {
                    var e = angular.element(elem);
                    e.attr("id", e.attr("id") + "-" + baseId);
                }
                function supprimerId(elem) {
                    angular.element(elem).removeAttr("id");
                }
            };
            return MwGenerateurIdService;
        })();
        UI.module.service("MwGenerateurIdService", [MwGenerateurIdService]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwResizeService = (function () {
            function MwResizeService($document, $timeout, $log) {
                this.$document = $document;
                this.$timeout = $timeout;
                this.$log = $log;
            }
            MwResizeService.prototype.resizeMain = function () {
                var elementScroll = this.$document[0].querySelector(".page");
                var elementResize = this.$document[0].querySelector("main");
                var distanceScroll;
                var valeurOriginaleOverflowY;
                if (!elementScroll || !elementResize) {
                    this.$log.error("Les éléments .page et/ou main ne sont pas définis.");
                    return;
                }
                elementScroll.style.overflowY = "hidden";
                //timeout pour laisser angular finir de construire le dom pour pouvoir calculer les bonnes dimensions
                this.$timeout(function () {
                    elementResize.style.height = "100%";
                    distanceScroll = elementScroll.scrollHeight - elementScroll.clientHeight;
                    elementResize.style.height = "calc(100% - " + distanceScroll + "px)";
                    elementScroll.style.overflowY = "";
                }, 50, false);
            };
            MwResizeService.prototype.getDistanceElementMainBottom = function (element, marginBottom) {
                var mainElement = this.$document[0].querySelector("main");
                if (element && mainElement) {
                    var bottomElement = element[0].getBoundingClientRect().bottom;
                    return mainElement.getBoundingClientRect().bottom - bottomElement - (marginBottom ? marginBottom : 0);
                }
                return 0;
            };
            return MwResizeService;
        })();
        UI.module.service("MwResizeService", ["$document", "$timeout", "$log", MwResizeService]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwScrollService = (function () {
            function MwScrollService() {
            }
            MwScrollService.prototype.getScroll = function () {
                return this.scroll;
            };
            MwScrollService.prototype.setScroll = function (scroll) {
                this.scroll = scroll;
                return this.scroll;
            };
            return MwScrollService;
        })();
        UI.module.service("MwScrollService", MwScrollService);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwTuilePanelEditionService = (function () {
            function MwTuilePanelEditionService() {
                this.modeEdition = [];
            }
            MwTuilePanelEditionService.prototype.getModeEdition = function () {
                return this.modeEdition;
            };
            MwTuilePanelEditionService.prototype.getModeEditionTuile = function (id) {
                var pos = this.modeEdition.map(function (e) { return e.id; }).indexOf(id);
                return this.modeEdition[pos] && this.modeEdition[pos].edition ? this.modeEdition[pos].edition : false;
            };
            MwTuilePanelEditionService.prototype.setModeEdition = function (modeEdition) {
                var pos = this.modeEdition.map(function (e) { return e.id; }).indexOf(modeEdition.id);
                if (pos !== -1) {
                    this.modeEdition[pos] = modeEdition;
                }
                else {
                    this.modeEdition.push(modeEdition);
                }
                return this.modeEdition;
            };
            return MwTuilePanelEditionService;
        })();
        UI.module.service("MwTuilePanelEditionService", MwTuilePanelEditionService);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        'use strict';
        /**
         * Directive pour surcharger l'élément natif body.
         * La directive va permettre d'ajouter un indicateur visuel qui s'affiche au chargement de la page lorsque celle ci est scrollable.
         * L'indicateur doit disparaitre dès la première action de scroll.
         */
        function body($compile, $rootScope) {
            return {
                restrict: 'E',
                link: function (scope, element) {
                    // Positionne une classe pour identifier les projets ancien modèle
                    if (document.getElementsByTagName('mw-zone-travail').length > 0) {
                        element.addClass('mw-modele-v0');
                    }
                    // Début de la gestion de l'indicateur de scroll
                    var previousScrollTop = window.pageYOffset || 0, scrollYDirection;
                    element.append($compile(angular.element('<div ng-show="watchForScroll" class="scroller-indicator animate-show animated icon itce-arrow-down" aria-hidden="true"></div>'))(scope));
                    var onScroll = function () {
                        scrollYDirection = window.pageYOffset - previousScrollTop > 0 ? 'bottom' : 'top';
                        previousScrollTop = window.pageYOffset;
                        if (scrollYDirection === 'bottom') {
                            angular.element(window).unbind('scroll', onScroll);
                            scope.$evalAsync(function () {
                                scope.watchForScroll = false;
                            });
                        }
                    };
                    function initShowIndicator() {
                        angular.element(document).ready(function () {
                            if (scope.watchForScroll = document.body.scrollHeight > window.innerHeight) {
                                angular.element(window).bind('scroll', onScroll);
                            }
                        });
                    }
                    // Abonnement à l'évènement changement de route
                    // Réactiver à chaque changement de page
                    var deregistration = $rootScope.$on('$routeChangeSuccess', initShowIndicator);
                    // Suppression des abonnements à la destruction 
                    scope.$on('$destroy', function () {
                        if (scope.watchForScroll) {
                            angular.element(window).unbind('scroll', onScroll);
                        }
                        deregistration();
                    });
                }
            };
        }
        UI.module.directive('body', ['$compile', '$rootScope', body]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function body() {
            return {
                restrict: "E",
                link: function (scope, element, attrs) {
                    if (document.getElementsByTagName("mw-zone-travail").length > 0) {
                        element.addClass("mw-modele-v0");
                    }
                }
            };
        }
        UI.body = body;
        ;
        UI.module.directive("body", [body]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Cette directive doit permettre de gèrer un masque de saisie
         * et la validation de la date entre min et max si présent.
         */
        UI.module.directive("mwDateLegere", ["$filter", "uibDateParser", "$parse", function ($filter, dateParser, $parse) {
                return {
                    restrict: "A",
                    require: "^ngModel",
                    link: function (scope, element, attrs, ctrls) {
                        var ngModelCtrl = ctrls;
                        var hasDatepicker = false;
                        var masque = "jj/mm/aaaa";
                        var minDate = null;
                        var maxDate = null;
                        var hasStringModel = false;
                        var requiredField = false;
                        attrs.$observe('ngRequired', function (value) {
                            requiredField = (value === "true");
                        });
                        /*
                        try {
                            new Date().toLocaleString("i");
                        } catch (e) {
                            if (e​.name === "RangeError") {
                                throw new Error("MyWay.UI.mw-date-legere : Le navigateur ne supporte pas l'option Locale sur le type Date.");
                            };
                        }
                        */
                        if ("uibDatepickerPopup" in attrs || "DatepickerPopup" in attrs) {
                            ngModelCtrl.$parsers.shift(); //enlève le parser du datepicker
                            ngModelCtrl.$formatters.shift(); //enlève le formatter du datepicker
                            ngModelCtrl.$validators["date"] = null;
                            hasDatepicker = true;
                        }
                        if ("minDate" in attrs) {
                            scope.$watch($parse(attrs["minDate"]), function (value) {
                                minDate = value ? new Date(value) : null;
                            });
                            scope.$watch($parse(attrs["maxDate"]), function (value) {
                                maxDate = value ? new Date(value) : null;
                            });
                        }
                        if ("hasStringModel" in attrs) {
                            scope.$watch($parse(attrs["hasStringModel"]), function (value) {
                                hasStringModel = value || true;
                            });
                        }
                        /**
                         * Reformate la vue avec le masque
                         */
                        function render(viewValue) {
                            var result = masque.split(""); //Le masque est séparé en autant de caratères dans un tabelau
                            if (viewValue == null) {
                                viewValue = "";
                            }
                            viewValue = viewValue.replace(/[^\d]/g, ""); //On enlève tout ce qui n'est pas un digit
                            var size = viewValue.length;
                            var c = 0;
                            //On remplace le pattern du masque par les caratères de la vue.
                            for (var x = 0; x < size; x++) {
                                if (x === 2 || x === 4) {
                                    c++; //on saute les caratères slash
                                }
                                result[c] = viewValue.charAt(x);
                                c++;
                            }
                            //Par sécurité on élimine les éventuels caratères en trop
                            result.splice(10);
                            viewValue = result.join("");
                            if (viewValue === masque) {
                                viewValue = "";
                            }
                            //On sauvegarde la position du curseur
                            //var selectionStart = (<HTMLInputElement> element[0]).selectionStart;
                            var selectionEnd = element[0].selectionEnd;
                            var selectionStart = element[0].selectionStart;
                            element.val(viewValue);
                            //On repositionne le curseur avant modification de la vue
                            element[0].selectionStart = selectionStart;
                        }
                        /**
                         * Cette fonction est appelé lorsque le modele à changé. Elle format le modele pour l'affichage dans la vue.
                         */
                        function format(value) {
                            var result = $filter("date")(value, "dd/MM/yyyy");
                            return result;
                        }
                        function setCaretPosition(elem, caretPos) {
                            if (elem !== null) {
                                if (elem.createTextRange) {
                                    var range = elem.createTextRange();
                                    range.move('character', caretPos);
                                    range.select();
                                }
                                else {
                                    if (elem.setSelectionRange) {
                                        elem.focus();
                                        elem.setSelectionRange(caretPos, caretPos);
                                    }
                                    else
                                        elem.focus();
                                }
                            }
                        }
                        /**
                         * Cette fonction est appelée lorsque la vue à changée.
                         * Elle met à jour le modele si la vue correspond à une date sinon la méthode render reformat la vue avec le masque.
                         */
                        function parse(viewValue) {
                            var monsc = scope;
                            if (!viewValue) {
                                render("");
                                return null;
                            }
                            else {
                                //if (angular.isDate(viewValue)) {
                                //   viewValue = format(<Date> viewValue);
                                //}
                                //enlève tous les caractères autres que chiffre
                                viewValue = viewValue.replace(new RegExp("[^(0-9)]", "g"), "");
                                var dateTmp = dateParser.parse(viewValue.substr(0, 8), "ddMMyyyy", new Date());
                                render(viewValue.substr(0, 8));
                                //Mise à jour du model sinon le calendrier n'est pas a jour
                                ngModelCtrl.$viewValue = element.val();
                                if (isNaN(dateTmp)) {
                                    ngModelCtrl.$setValidity("date", false);
                                    return null;
                                }
                                else {
                                    if (!hasStringModel) {
                                        return dateTmp;
                                    }
                                    else {
                                        var result = dateTmp.getFullYear() + "-" + format2Digit((dateTmp.getMonth() + 1)) + "-" + format2Digit(dateTmp.getDate());
                                        return result;
                                    }
                                }
                            }
                        }
                        function format2Digit(month) {
                            return month > 9 ? "" + month : "0" + month;
                        }
                        /**
                         * Fonction de validation appélé par ngModelCtrls
                         */
                        function validator(modelValue, viewValue) {
                            //console.debug("date-legere validator viewValue=" + viewValue);
                            if (viewValue) {
                                viewValue = viewValue.replace(new RegExp("[^(0-9)]", "g"), "");
                            }
                            var value = modelValue || viewValue;
                            if (!requiredField && !value) {
                                return true;
                            }
                            if (angular.isNumber(value)) {
                                value = new Date(value);
                            }
                            if (!value) {
                                return true;
                            }
                            else if (angular.isDate(value) && !isNaN(value)) {
                                if ((minDate && compare(value, minDate) < 0) || (maxDate && compare(value, maxDate) > 0)) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                            else if (angular.isString(value)) {
                                var date = dateParser.parse(value, "yyyy-MM-dd", new Date());
                                return !isNaN(date);
                            }
                            else {
                                return false;
                            }
                        }
                        function required_validator(modelValue, viewValue) {
                            requiredField = attrs["required"] ? true : false;
                            if (viewValue) {
                                viewValue = viewValue.replace(new RegExp("[^(0-9)]", "g"), "");
                            }
                            if (!viewValue && requiredField) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        }
                        element.bind("focus", function (event) {
                            element.attr("placeholder", masque);
                        });
                        element.bind("blur", function (event) {
                            element.removeAttr("placeholder");
                        });
                        /**
                         * Interception de l'évènement keydown pour filtrer les touches proscrites et gérer la position du curseur
                         * - seules les caratères numériques sont pris en compte
                         * - cependant les lettre associé au ctrl sont prise en compte également (ex Ctrl C ou ctrl V)
                         */
                        element.bind("keydown", function (event) {
                            var viewValue = element.val();
                            var selectionStart = element[0].selectionStart;
                            //console.log("date legere keydown " + event.which);
                            if (event.which < 48 && event.which !== 32) {
                                //ni lettre ni chiffre : backspace	8 tab	9 enter	13 shift	16 ctrl	17 alt	18 
                                //pause /break	19 caps lock	20 escape	27 page up	33 page down	34 end	35 home	36 left arrow	37 
                                //up arrow	38 right arrow	39 down arrow	40 insert	45 delete
                                if (event.which === 8) {
                                    //Dan sle cas du retour chariot, on saut le slash
                                    if (selectionStart === 4 || selectionStart === 7) {
                                        selectionStart = selectionStart - 2;
                                        element[0].selectionStart = selectionStart;
                                    }
                                }
                            }
                            else if ((event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)) {
                                //Le curseur se trouve devant un slash il faut donc l'avancer de un
                                if (selectionStart >= 10) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    return;
                                }
                                if (selectionStart === 2 || selectionStart === 5) {
                                    selectionStart = selectionStart + 1;
                                    element[0].selectionStart = selectionStart;
                                }
                            }
                            else if (event.which >= 65 && event.which <= 90) {
                                //lettres                       
                                if (!event.ctrlKey) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    return;
                                }
                            }
                        });
                        if (ngModelCtrl) {
                            ngModelCtrl.$formatters.push(format);
                            ngModelCtrl.$parsers.push(parse);
                            ngModelCtrl.$validators["date"] = validator;
                            ngModelCtrl.$validators["required"] = required_validator;
                        }
                        function compare(date1, date2) {
                            if (!date2) {
                                return 0;
                            }
                            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0, 0);
                            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0, 0);
                            return (d1.getTime() - d2.getTime());
                        }
                    } //fin du link
                };
            }]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwCalendrier() {
            return {
                restrict: "E",
                templateUrl: "calendrier/calendrier-view.html",
                scope: {
                    dateSelectionnee: "=ngModel",
                    showWeeks: "@",
                    minDate: "@",
                    maxDate: "@",
                    onChange: "&",
                    onWeekClick: "&",
                    minDateDt: "=?",
                    maxDateDt: "=?"
                },
                transclude: true,
                link: function (scope, element, attrs, ctrls) {
                    var _this = this;
                    // Champ date
                    scope.dateOptions = {
                        formatYear: "yy",
                        startingDay: 1,
                        showWeeks: scope.showWeeks //indique si les N) de semaine sont affiché ou pas.
                    };
                    // init min and max date
                    if (angular.isUndefined(attrs.minDateDt) && attrs.minDate) {
                        var date = Date.parse(scope.minDate);
                        scope.minDateDt = !isNaN(date) ? new Date(date) : null;
                    }
                    if (angular.isUndefined(attrs.maxDateDt) && attrs.maxDate) {
                        var date = Date.parse(scope.maxDate);
                        scope.maxDateDt = !isNaN(date) ? new Date(date) : null;
                    }
                    scope.onWeekClickFunction = function (week) {
                        var propagate = _this.onWeekClick({ $date: week.date, $isoWeek: week.isoWeek, $year: week.year, $weekOfYear: week.weekOfYear });
                    };
                    //Positionne la variable opened à true pour ouvrir le calendrier. Activé par le clic sur le bouton.
                    scope.openCalendar = function ($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        scope.opened = !scope.opened;
                    };
                }
            };
        }
        UI.module.directive("mwCalendrier", mwCalendrier);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

// Surcharge des templates pour le calendrier
// nouvelle version: uib
angular.module("ui.bootstrap.datepicker").run(["$templateCache", function ($templateCache) {
        $templateCache.put("uib/template/datepicker/datepicker.html", "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" ng-keydown=\"keydown($event)\">" +
            "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"-1\"></uib-daypicker>" +
            "</div>");
    }
]);
angular.module("ui.bootstrap.datepicker").run(["$templateCache", function ($templateCache) {
        $templateCache.put("uib/template/datepicker/popup.html", "<div><ul class=\"uib-datepicker-popup dropdown-menu calendrier-popup\" role=\"presentation\" dropdown-nested ng-if=\"isOpen\" style=\"display: block\" ng-style=\"{top: position.top+\'px\', left: position.left+\'px\'}\"" +
            "ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">" +
            "<li ng-transclude></li>" +
            "<li ng-if=\"showButtonBar\"><a href=\"\" class=\"hcenter btn-today\" ng-click=\"select(\'today\')\">Aujourd'hui</a></li>" +
            "</ul></div>");
    }]);
angular.module("ui.bootstrap.datepicker").run(["$templateCache", function ($templateCache) {
        $templateCache.put("uib/template/datepicker/day.html", "<table role=\"grid\" class=\"calendrier-jour\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">" +
            "<thead>" +
            " <tr class=\"fond\">" +
            "<th><button type=\"button\" class=\"btn btn-success btn-sm pull-left btn-cal\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon itce-chevron-left\"></i></button></th>" +
            "<th colspan=\"{{showWeeks? 6 : 5}}\" class=\"text-center\">" +
            //'<button id="{{::uniqueId}}-title" role= "heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" 
            // ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;" > ' +
            "<strong>{{title}}</strong>" +
            //'</button >' +
            "</th> " +
            "<th><button type=\"button\" class=\"btn btn-success btn-sm pull-right btn-cal\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon itce-chevron-right\"></i></button></th>" +
            "</tr>" +
            "<tr>" +
            "<th ng-if=\"showWeeks\" class=\"text-center\"></th>" +
            "<th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr.substring(0,1)}}</small></th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<tr ng-repeat=\"row in rows track by $index\">" +
            "<td ng-if=\"::showWeeks\" class=\"text-center h6\">" +
            //Le n° de semaine est disabled si le 1er jour de la semaine est disabled.
            "<em ng-if=\"::clicableWeek\"><button ng-disabled=\" row[0].disabled\" ng-click=\"onWeekClickFunction({date: row[0].date, weekOfYear: weekNumbers[$index]})\"" +
            "class=\"btn btn-default btn-sm btn-week\">s.{{ weekNumbers[$index] }}</button></em>" +
            "<em ng-if=\"::!clicableWeek\">s.{{ weekNumbers[$index] }}</em>" +
            "</button>" +
            "</td > " +
            "<td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">" +
            "<button  type=\"button\" style=\"min-width:100%;\" class=\"btn btn-primary btn-sm\" ng-class=\"{\'btn-info\': dt.selected, active: isActive(dt), \'btn-jour\': dt.current}\" " +
            "ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled \" tabindex=\"-1\"><span ng-class=\"::{\'text-muted\': dt.secondary, \'text-info\': dt.current}\">" +
            "{{::dt.label}}</span></button>" +
            "</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>");
    }]);
// Ancien datepicker
angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/datepicker/datepicker.html", "<div ng-switch=\"datepickerMode\" ng-keydown=\"keydown($event)\">\n" +
            "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" +
            "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" +
            "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" +
            "</div>");
    }]);
angular.module("template/datepicker/day.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/datepicker/day.html", "<table class=\"calendrier-jour\" role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" " +
            " aria-activedescendant=\"{{activeDateId}}\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th><button type=\"button\" class=\"btn btn-success btn-sm pull-left btn-cal\" ng-click=\"move(-1)\" tabindex=\"-1\">" +
            "<span class=\"icon itce-chevron-left\"></span></button></th>\n" +
            "      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" " +
            "                                            aria-atomic=\"true\" type=\"button\" class=\"btn btn-success btn-sm\" " +
            " ng-click=\"toggleMode()\" tabindex=\"-1\" " +
            "                                            style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
            "      <th><button type=\"button\" class=\"btn btn-success btn-sm pull-right btn-cal\" ng-click=\"move(1)\" tabindex=\"-1\">" +
            "<span class=\"icon itce-chevron-right\"></span></button></th>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" +
            "      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">" +
            "          {{label.abbr.substring(0,1)}}</small></th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr ng-repeat=\"row in rows track by $index\">\n" +
            "      <td ng-show=\"showWeeks\"  class=\"text-center blaba h6\" ><em data-date=\"{{ row[0].date }}\">{{ row[0].date|date:'ww' }}</em></td>\n" +
            "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" " +
            "aria-disabled=\"{{!!dt.disabled}}\">\n" +
            "        <button type=\"button\" style=\"width:180%;\" class=\"btn btn-sm\" " +
            " ng-class=\"{active: isActive(dt),'btn-jour': dt.current}\" " +
            "ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span " +
            " ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>\n" +
            "");
    }]);
angular.module("template/datepicker/month.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/datepicker/month.html", "<table  class=\"calendrier-jour\" role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" " +
            " aria-activedescendant=\"{{activeDateId}}\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th class=\"fond\"><button type=\"button\" class=\"btn  btn-success btn-sm pull-left btn-cal\" " +
            " ng-click=\"move(-1)\" tabindex=\"-1\"><span class=\"icon itce-chevron-left\"></span></button></th>\n" +
            "      <th ><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" " +
            " type=\"button\" class=\"btn  btn-success btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\">" +
            " <strong>{{title}}</strong></button></th>\n" +
            "      <th class=\"fond\"><button type=\"button\" class=\"btn   btn-success btn-sm pull-right btn-cal\" " +
            " ng-click=\"move(1)\" tabindex=\"-1\"><span class=\"icon itce-chevron-right\"></span></button></th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr ng-repeat=\"row in rows track by $index\">\n" +
            "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" " +
            " aria-disabled=\"{{!!dt.disabled}}\">\n" +
            "        <button type=\"button\" style=\"width:100%;\" class=\"btn \" " +
            " ng-class=\"{'btn-info': dt.selected, active: isActive(dt),'btn-jour': dt.current}\" " +
            " ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">" +
            " {{::dt.label}}</span></button>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>\n" +
            "");
    }]);
angular.module("template/datepicker/year.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/datepicker/year.html", "<table  class=\"calendrier-jour\" role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" " +
            " aria-activedescendant=\"{{activeDateId}}\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th class=\"fond\"><button type=\"button\" class=\"btn  btn-success  btn-sm pull-left btn-cal\" ng-click=\"move(-1)\" " +
            " tabindex=\"-1\"><span class=\"icon itce-chevron-left\"></span></button></th>\n" +
            "      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" " +
            " type=\"button\" class=\"btn  btn-success btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\">" +
            " <strong>{{title}}</strong></button></th>\n" +
            "      <th class=\"fond\"><button type=\"button\" class=\"btn   btn-success btn-sm pull-right btn-cal\" ng-click=\"move(1)\" " +
            " tabindex=\"-1\"><span class=\" icon itce-chevron-right\"></span></button></th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr ng-repeat=\"row in rows track by $index\">\n" +
            "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" " +
            "role=\"gridcell\" id=\"{{::dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
            "        <button type=\"button\" style=\"width:100%;\" class=\"btn\" " +
            " ng-class=\"{'btn-info': dt.selected, active: isActive(dt),'btn-jour': dt.current}}\" " +
            " ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\">" +
            " <span ng-class=\"{'text-info': dt.current}\">" +
            " {{::dt.label}}</span></button>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>\n" +
            "");
    }]);
angular.module("template/datepicker/popup.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/datepicker/popup.html", "<ul class=\"dropdown-menu calendrier-popup\" role=\"presentation\" " +
            " ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\" " +
            " ng-keydown=\"keydown($event)\">\n" +
            "	<li ng-transclude></li>\n" +
            "	<li role=\"presentation\" ng-if=\"showButtonBar\" style=\"padding:0.625rem 0.5625rem 0.125rem\">\n" +
            "		<span class=\"btn-group\">\n" +
            "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\">{{ getText('current') }}</button>\n" +
            "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
            "		</span>\n" +
            "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
            "	</li>\n" +
            "</ul>\n" +
            "");
    }]);

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var InputDateController = (function () {
            function InputDateController($scope, $filter, $element) {
                // Booléen mis en place pour ne pas appelé la fonction on-change lors de l'initialisation
                this.firstModelRender = true;
                this.reset = function () {
                    this.maDate = null;
                    this.ngModelCtrl.$setViewValue(null);
                    this.ngModelCtrl.$render();
                    this.onChangeFunction();
                };
                this.$scope = $scope;
                this.required = $scope.required || false;
                this.id = $scope.id || "0";
                this.errMsg = $scope.errmsg || "Date invalide";
                this.name = $scope.name;
                this.element = $element;
                this.$filter = $filter;
                // Champ date
                this.dateOptions = {
                    formatYear: "yy",
                    startingDay: 1,
                    showWeeks: $scope.showWeeks && $scope.showWeeks !== "false" ? "true" : "false" //indique si les N) de semaine sont affiché ou pas.
                };
                this.onChangeFunction = function () {
                    if ($scope.onChange) {
                        $scope.onChange();
                    }
                    if ($scope.ngChange) {
                        $scope.ngChange();
                    }
                };
                this.hasFocus = false;
                this.ngFocusFunction = $scope.ngFocus;
                this.ngBlurFunction = $scope.ngBlur;
                this.minDate = null;
                this.maxDate = null;
                if ($scope.minDateDt) {
                    this.minDate = $scope.minDateDt;
                }
                else if ($scope.minDate) {
                    this.minDate = new Date($scope.minDate);
                }
                if ($scope.maxDateDt) {
                    this.maxDate = $scope.maxDateDt;
                }
                else if ($scope.maxDate) {
                    this.maxDate = new Date($scope.maxDate);
                }
            }
            /**
             * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
             * C'est par lui qu'on va manipuler la donnée de notre directive.
             */
            InputDateController.prototype.init = function (ngModelCtrl) {
                var _this = this;
                this.ngModelCtrl = ngModelCtrl;
                //Mise à jour de la date du champ input (string) lorsque le modèle du calendrier (Date) change.
                this.ngModelCtrl.$render = function () {
                    _this.updateModelFromPopIn();
                    // Solution transitoire pour ne pas appeler la fonction on-change à l'initialisation de la directive
                    if (_this.firstModelRender) {
                        _this.firstModelRender = false;
                    }
                    else {
                        _this.onChangeFunction();
                    }
                };
            };
            // Méthode pour la gestion de la modification du modèle depuis la pop-up UI-Boostrap
            InputDateController.prototype.updateModelFromPopIn = function () {
                if (angular.isDate(this.ngModelCtrl.$modelValue)) {
                    this.maDate = this.convertDateToString(this.ngModelCtrl.$modelValue);
                }
                else if (angular.isString(this.ngModelCtrl.$modelValue)) {
                    var date = new Date(this.ngModelCtrl.$modelValue);
                    this.maDate = this.convertDateToString(date);
                }
            };
            // Méthode de conversion de la date du modèle en une chaîne de caractère pour l'input de la directive
            InputDateController.prototype.convertDateToString = function (date) {
                var localDate = new Date(date.getTime());
                localDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                var localDateStrg = localDate.toJSON().slice(0, 10);
                return localDateStrg.substr(8, 2) + localDateStrg.substr(5, 2) + localDateStrg.substr(0, 4);
            };
            InputDateController.prototype.toJSONLocal = function (date) {
                var local = new Date(date);
                //local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                return local.toJSON().slice(0, 10);
            };
            InputDateController.prototype.isValidDate = function (date) {
                var re = /^(\d{1,2})(\d{1,2})(\d{4})$/; //format jjmmyyyy
                var regs;
                if (date) {
                    if (date.indexOf("Na") === -1) {
                        if (date !== "") {
                            if (regs = date.match(re)) {
                                // day value between 1 and 31
                                if (regs[1] < 1 || regs[1] > 31) {
                                    return false;
                                }
                                // month value between 1 and 12
                                if (regs[2] < 1 || regs[2] > 12) {
                                    return false;
                                }
                            }
                            else {
                                return false;
                            }
                            var dt = new Date(date.substring(4, 8) + "-" + date.substring(2, 4) + "-" + date.substring(0, 2));
                            var month = dt.getMonth() - 1;
                            if (month === parseInt(date.substring(2, 4), 10) - 1) {
                                return false;
                            }
                            return true;
                        }
                    }
                }
                return true;
            };
            InputDateController.prototype.isValid = function () {
                if (this.maDate) {
                    return this.isValidDate(this.maDate);
                }
                return true;
            };
            InputDateController.prototype.onInputChange = function () {
                if (!this.hasFocus) {
                    return;
                }
                if (this.maDate) {
                    var date = this.maDate;
                    if (this.isValidDate(date)) {
                        var dt = new Date(date.substring(4, 8) + "-" + date.substring(2, 4) + "-" + date.substring(0, 2));
                        this.ngModelCtrl.$setViewValue(dt);
                        this.onChangeFunction();
                    }
                }
                else {
                    this.ngModelCtrl.$setViewValue(undefined);
                    this.onChangeFunction();
                }
            };
            //Sur le focus du champ input, il faut ajouter l'attribut placeholder
            InputDateController.prototype.onFocus = function ($event) {
                var el = $event.target;
                angular.element(el).attr("placeholder", "jj/mm/aaaa");
                this.hasFocus = true;
                if (this.ngFocusFunction) {
                    this.ngFocusFunction();
                }
            };
            //Sur le blur du champ input, il faut enlever l'attribut placeholder et réinitialiser les modèles si elle est invalide.
            InputDateController.prototype.onBlur = function ($event) {
                var el = $event.target;
                angular.element(el).removeAttr("placeholder");
                this.hasFocus = false;
                if (!this.isValidDate(this.maDate)) {
                    this.maDate = null;
                    this.ngModelCtrl.$setViewValue(undefined);
                    this.onChangeFunction();
                }
                if (this.ngBlurFunction) {
                    this.ngBlurFunction();
                }
            };
            //Positionne la variable opened à true pour ouvrir le calendrier. Activé par le clic sur le bouton.
            InputDateController.prototype.openCalendar = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.opened = true;
                //utilisé par le ng-if pour ne pas afficher directement dansle DOM directement la popup datepicker.  
                //Quand il passe a true, il s'affiche dans le dom.
                this.openedOnce = true;
            };
            return InputDateController;
        })();
        UI.InputDateController = InputDateController;
        UI.module.controller("InputDateController", ["$scope", "$filter", "$element", InputDateController]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        UI.module.directive("mwInputdate", ["$filter", function ($filter) {
                return {
                    restrict: "E",
                    replace: true,
                    require: ["^mwInputdate", "ngModel"],
                    templateUrl: "datepicker/input-date-view.html",
                    controller: "InputDateController",
                    controllerAs: "InputDateController",
                    scope: {
                        ngModel: "=",
                        required: "=",
                        id: "@",
                        name: "@",
                        errmsg: "@",
                        onChange: "&",
                        ngChange: "&",
                        ngFocus: "&",
                        ngBlur: "&",
                        mwDisabled: "=",
                        minDate: "@",
                        maxDate: "@",
                        showWeeks: "@",
                        onWeekClick: "&",
                        minDateDt: "=",
                        maxDateDt: "="
                    },
                    link: function (scope, element, attrs, ctrls) {
                        var controller = ctrls[0], ngModelCtrl = ctrls[1];
                        if (ngModelCtrl) {
                            //On fournit le controller de ngModel à notre controlleur.
                            controller.init(ngModelCtrl);
                        }
                        else {
                            throw new Error("L'attribut ngModel est obligatoire.");
                        }
                    }
                };
            }]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        UI.module.directive("mwWeekButtons", ["$parse", "dateFilter", function ($parse, dateFilter) {
                return {
                    restrict: "C",
                    link: function (scope, element, attributes) {
                        var onWeekClick;
                        if (attributes.onWeekClick) {
                            onWeekClick = $parse(attributes.onWeekClick);
                        }
                        setTimeout(function () {
                            var calendar = element[0];
                            while (calendar && (calendar.nodeType !== Node.ELEMENT_NODE || calendar.getElementsByTagName("table").length === 0)) {
                                calendar = calendar.nextSibling;
                            }
                            if (calendar) {
                                angular.element(calendar.querySelectorAll("table tr > td:first-child em")).bind("click touchstart", function () {
                                    var propagate;
                                    var date = null;
                                    if (onWeekClick) {
                                        var button = this.parentNode.parentNode.querySelector("button:not([disabled])");
                                        if (button) {
                                            var dt = $parse(this.getAttribute("data-date"))(scope);
                                            date = new Date(dt);
                                            var week = dateFilter(date, "ww");
                                            var isoWeek = dateFilter(date, "yyyy-Www");
                                            button.click();
                                            setTimeout(function () {
                                                propagate = onWeekClick(scope, { $date: date, $isoWeek: isoWeek, $year: date.getFullYear(), $weekOfYear: 0 | week });
                                                console.log("weekClick propagate " + propagate);
                                            }, 100);
                                        }
                                        else {
                                            var input = calendar.parentNode.querySelector("input");
                                            input.click();
                                        }
                                    }
                                });
                            }
                        }, 1);
                    }
                };
            }]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        'use strict';
        /**
         * Affiche un div 'Élément non disponible' au survol d'un élément ayant un attribut ou une classe 'disabled'
         */
        function disabled(handledByNgDisabled) {
            if (handledByNgDisabled === void 0) { handledByNgDisabled = false; }
            return {
                restrict: 'AC',
                link: function (scope, element, attrs) {
                    var valDisabled = attrs.ngDisabled || attrs.disabled;
                    scope.$watch(valDisabled, function (newVal) {
                        if (!newVal && !attrs.disabled) {
                            return;
                        }
                        var node = element[0], 
                        //tooltipClassName = 'disabled-element-tooltip',
                        tag = node.tagName.toLowerCase();
                        var el;
                        //tooltip = <HTMLElement>document.getElementsByClassName(tooltipClassName)[0],
                        // Create tooltip if not exists
                        //if (!tooltip) {
                        //    tooltip = <HTMLElement>document.createElement('DIV');
                        //    tooltip.className = tooltipClassName;
                        //    tooltip.innerHTML = 'Élément non disponible';
                        //    document.body.appendChild(tooltip);
                        //}
                        //function displayTooltip(e: JQueryEventObject) {
                        //    // If element disabled state is handled by ngDisabled directive : check whether attribute/class exists
                        //    if (handledByNgDisabled && !element.hasClass('disabled') && !element.attr('disabled')) {
                        //        return;
                        //    }
                        //    const offset = 12;
                        //    tooltip.style.left = e.clientX + (e.clientX / window.innerWidth > .5
                        //        ? -tooltip.offsetWidth - offset
                        //        : offset) + 'px';
                        //    tooltip.style.top = e.clientY + window.pageYOffset + (e.clientY / window.innerHeight > .5
                        //        ? -tooltip.offsetHeight - offset
                        //        : offset) + 'px';
                        //    tooltip.style.display = 'block';
                        //}
                        //function hideTooltip() {
                        //    tooltip.style.display = 'none';
                        //}
                        if (tag === 'button' || tag === 'input') {
                            // On ne peut pas attacher d'événement souris sur un bouton désactivé
                            // On attache les événement sur un div qui entourera le bouton
                            var wrapper = document.createElement('DIV');
                            wrapper.className = 'disabled disabled-myway';
                            if ((node.getAttribute('type') || '').toLowerCase() === 'checkbox') {
                                var parent = element[0].parentNode;
                                var dom = parent.parentNode;
                                if (dom.className.indexOf('disabled-myway') === -1 &&
                                    (dom.className.indexOf('disabled') !== -1 || newVal || newVal === '' || angular.isUndefined(newVal))) {
                                    parent.parentNode.insertBefore(wrapper, parent);
                                    wrapper.appendChild(parent);
                                }
                                else {
                                    if (!newVal && newVal !== '' && dom.className.indexOf('disabled-myway') !== -1) {
                                        var fragment = document.createDocumentFragment();
                                        while (dom.firstChild) {
                                            fragment.appendChild(dom.firstChild);
                                        }
                                        dom.parentNode.replaceChild(fragment, dom);
                                    }
                                }
                            }
                            else if ((node.getAttribute('type') || '').toLowerCase() === 'radio') {
                                var dom = node.parentNode;
                                if (dom.className.indexOf('disabled-myway') === -1 && (newVal || newVal === '' || angular.isUndefined(newVal))) {
                                    node.parentNode.insertBefore(wrapper, node);
                                    var nextSibling = node.nextElementSibling;
                                    wrapper.appendChild(node);
                                    wrapper.appendChild(nextSibling);
                                }
                                else {
                                    if (!newVal && newVal !== '' && dom.className.indexOf('disabled-myway') !== -1) {
                                        var fragment = document.createDocumentFragment();
                                        while (dom.firstChild) {
                                            fragment.appendChild(dom.firstChild);
                                        }
                                        dom.parentNode.replaceChild(fragment, dom);
                                    }
                                }
                            }
                            else {
                                var dom = node.parentNode;
                                if (dom.className.indexOf('disabled-myway') === -1 && (newVal || newVal === '' || angular.isUndefined(newVal))) {
                                    node.parentNode.insertBefore(wrapper, node);
                                    wrapper.appendChild(node);
                                }
                                else {
                                    if (!newVal && newVal !== '' && dom.className.indexOf('disabled-myway') !== -1) {
                                        var fragment = document.createDocumentFragment();
                                        while (dom.firstChild) {
                                            fragment.appendChild(dom.firstChild);
                                        }
                                        dom.parentNode.replaceChild(fragment, dom);
                                    }
                                }
                            }
                            el = angular.element(wrapper);
                        }
                        else {
                            el = element;
                        }
                        //el.bind('mouseover', displayTooltip);
                        //el.bind('mousemove', displayTooltip);
                        //el.bind('mouseout', hideTooltip);
                    });
                }
            };
        }
        // Certains éléments ont l'attribut disabled placé grâce à la directive ngDisabled
        UI.module.directive('ngDisabled', [disabled.bind(null, true)]);
        UI.module.directive('disabled', [disabled]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * @ngdoc directive
         * @name myway.ui.directive.dropdown
         * @scope
         * @restrict A
         *
         * @description
         * Cette directive permet de naviguer au clavier dans une liste déroulante dropdown (pour rappel, dropdown est une directive angular-ui).
         * Elle remplace l'attribut keybord-nav de la directive dropdown.
         * Elle prend en compte la navigation par les flèches une fois la liste ouverte.
         * Elle rend le focus au bouton lors de la fermeture de la liste
         * @element ANY
         * @priority 0
         *
         * @example
         */
        function dropdown() {
            return {
                priority: 1001,
                restrict: "A",
                link: function (scope, element, attrs, ctrl) {
                    var elementFocusIndex = -1;
                    var elementListeCible = "button";
                    if (attrs["dropdown"].length > 0) {
                        elementListeCible = attrs["dropdown"];
                    }
                    /**
                     * Interception de 'évènement keydown pour gérer le déplacement du focus par les touches flèches haut et bas.
                     */
                    element.bind("keydown", function ($event) {
                        focusSuivant($event);
                    });
                    /**
                     * Le clic sur le bouton ferme ou ouvre la liste déroulante
                     */
                    element.bind("click", function () {
                        elementFocusIndex = -1;
                        if (element.hasClass("open")) {
                            //Rend le focus au bouton lorsqu'on ferme la liste
                            var bouton = element.find("button");
                            bouton[0].focus();
                        }
                        else {
                            console.log("liste deroulante not open");
                        }
                    });
                    // Suppression des events à la destruction du scope
                    scope.$on("$destroy", function () {
                        element.unbind("keydown");
                        element.unbind("click");
                    });
                    /**
                     * Méthode appelé sur l'évènement keydown pour gèrer le déplacement du focus via les touche flèches haut et flèche bas.
                     * La touche Echap ferme la liste et redonne le focus au bouton déclencheur.
                     */
                    function focusSuivant($event) {
                        switch ($event.keyCode) {
                            case MyWay.UI.Constants.CLAVIER_KEYCODE.ECHAP:
                                var bouton = element.find("button");
                                bouton[0].focus();
                                break;
                            case MyWay.UI.Constants.CLAVIER_KEYCODE.FLECHE_HAUT:
                                elementFocusIndex--;
                                deplacerFocus();
                                break;
                            case MyWay.UI.Constants.CLAVIER_KEYCODE.FLECHE_BAS:
                                elementFocusIndex++;
                                deplacerFocus();
                                break;
                            case MyWay.UI.Constants.CLAVIER_KEYCODE.TAB:
                                if ($event.shiftKey) {
                                    elementFocusIndex--;
                                }
                                else {
                                    elementFocusIndex++;
                                }
                                break;
                        }
                        /**
                         * Deplace le focus sur les élements de la liste
                         */
                        function deplacerFocus() {
                            var listeElementsLien = element[0].querySelectorAll(".dropdown-menu [ng-click]");
                            $event.preventDefault();
                            $event.stopPropagation();
                            elementFocusIndex = (elementFocusIndex + listeElementsLien.length) % listeElementsLien.length;
                            listeElementsLien[elementFocusIndex].focus();
                        }
                    } // fin fonction focusSuivant
                }
            };
        }
        UI.module.directive("dropdown", [dropdown]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var HorizontalPanelCtrl = (function () {
            function HorizontalPanelCtrl($scope, element) {
                this.$scope = $scope;
            }
            HorizontalPanelCtrl.prototype.onClickLeft = function ($event) {
                var parent = null;
                if ($event.target.tagName === "SPAN") {
                    parent = angular.element($event.target.parentNode.parentNode);
                }
                else {
                    parent = angular.element($event.target.parentNode);
                }
                var scrollLeft = parent[0].scrollLeft;
                parent[0].scrollLeft = scrollLeft - 100;
            };
            HorizontalPanelCtrl.prototype.onClickRight = function ($event) {
                var parent = null;
                if ($event.target.tagName === "SPAN") {
                    parent = angular.element($event.target.parentNode.parentNode);
                }
                else {
                    parent = angular.element($event.target.parentNode);
                }
                var scrollLeft = parent[0].scrollLeft;
                parent[0].scrollLeft = scrollLeft + 100;
            };
            HorizontalPanelCtrl.$inject = [
                "$scope"
            ];
            return HorizontalPanelCtrl;
        })();
        UI.HorizontalPanelCtrl = HorizontalPanelCtrl;
        UI.module.controller("HorizontalPanelCtrl", HorizontalPanelCtrl);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function HorizontalPanel() {
            return {
                restrict: "E",
                //replace: true,
                templateUrl: "horizontalPanel/horizontalPanel-view.html",
                controller: "HorizontalPanelCtrl",
                controllerAs: "mwHorizontalPanelCtrl",
                transclude: true,
                scope: {
                    id: "@"
                },
                link: function ($scope, element, attrs, ctrls) {
                    //Calcul de la largeur du conteneur des colonnes .
                    setTimeout(function () {
                        //var navcol = element.children().children().children()[2];
                        var navcol = $(element[0].querySelector(".navcol"));
                        var colonnes = $(navcol).children().children();
                        var navcolWidth = 0;
                        for (var i = 0; i < colonnes.length; i++) {
                            navcolWidth += angular.element(colonnes[i])[0].clientWidth;
                        }
                        $(navcol).css("width", navcolWidth + "px");
                    }, 100);
                }
            };
        }
        UI.HorizontalPanel = HorizontalPanel;
        ;
        UI.module.directive("mwHorizontalPanel", [HorizontalPanel]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwEmbedController = (function () {
            function MwEmbedController($scope) {
                this.$scope = $scope;
                this.src = $scope.src;
                this.width = $scope.width;
                this.height = $scope.height;
                this.alt = $scope.alt;
            }
            MwEmbedController.$inject = [
                "$scope"
            ];
            return MwEmbedController;
        })();
        UI.MwEmbedController = MwEmbedController;
        UI.module.controller("MwEmbedController", MwEmbedController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwEmbed() {
            return {
                templateUrl: "embed/embed-view.html",
                controller: "MwEmbedController",
                controllerAs: "MwEmbedController",
                restrict: "E",
                replace: true,
                scope: {
                    src: "=",
                    width: "=",
                    height: "=",
                    alt: "="
                }
            };
        }
        UI.mwEmbed = mwEmbed;
        ;
        UI.module.directive("mwEmbed", mwEmbed);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));
/*
module MyWay.UI {
    'use strict';
    module.directive('embed', function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                scope.$watch(
                    function () {
                        return attrs.embedSrc;
                    },
                    function () {
                        element.attr('src', attrs.embedSrc);
                    }
                    );
            }
        };
    });
}
*/

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwIntegerpickerController = (function () {
            function MwIntegerpickerController($scope) {
                var _this = this;
                this.step = $scope.step || 1;
                this.min = $scope.min || 0;
                this.max = $scope.max || Infinity;
                this.required = $scope.required || false;
                this.id = $scope.id || "0";
                this.value = 1;
                $scope.$watch(function () { return _this.ngModelCtrl.$modelValue; }, function () {
                    _this.value = parseFloat(_this.ngModelCtrl.$modelValue);
                });
                this.onChange = function () {
                    if ($scope.onChange) {
                        $scope.onChange();
                    }
                    if ($scope.ngChange) {
                        $scope.ngChange();
                    }
                };
                this.ngFocus = $scope.ngFocus;
                this.ngBlur = $scope.ngBlur;
            }
            /**
             * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
             * C'est par lui qu'on va manipuler la donnée de notre directive.
             */
            MwIntegerpickerController.prototype.init = function (_ngModelCtrl) {
                var _this = this;
                this.ngModelCtrl = _ngModelCtrl;
                this.ngModelCtrl.$render = function () {
                    _this.value = parseFloat(_this.ngModelCtrl.$modelValue);
                };
            };
            /**
             * Incrémente la données
             */
            MwIntegerpickerController.prototype.incremente = function () {
                this.value = parseFloat(this.ngModelCtrl.$modelValue);
                if (this.max < (this.value + this.step)) {
                    return this.max;
                }
                else {
                    this.value = this.value + this.step;
                }
                this.ngModelCtrl.$setViewValue(this.value);
                this.onChange();
            };
            /**
             * Décrémente la données
             */
            MwIntegerpickerController.prototype.decremente = function () {
                this.value = parseFloat(this.ngModelCtrl.$modelValue);
                if (this.min > (this.value - this.step)) {
                    return this.min;
                }
                else {
                    this.value = this.value - this.step;
                }
                this.ngModelCtrl.$setViewValue(this.value);
                this.onChange();
            };
            MwIntegerpickerController.prototype.handelKey = function (event) {
                //fléche haut
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.FLECHE_HAUT) {
                    this.incremente();
                    event.preventDefault();
                    event.stopPropagation();
                }
                else if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.FLECHE_BAS) {
                    //fléche bas
                    this.decremente();
                    event.preventDefault();
                    event.stopPropagation();
                }
                else if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.FIN) {
                    //touche fin
                    this.ngModelCtrl.$setViewValue(this.min);
                    this.value = this.min;
                    event.preventDefault();
                    event.stopPropagation();
                }
                else if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ORIGINE) {
                    //touche origine
                    this.ngModelCtrl.$setViewValue(this.max);
                    this.value = this.max;
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
            MwIntegerpickerController.$inject = [
                "$scope",
                "$filter"
            ];
            return MwIntegerpickerController;
        })();
        UI.MwIntegerpickerController = MwIntegerpickerController;
        UI.module.controller("mwIntegerpickerController", MwIntegerpickerController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwIntegerpicker() {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "integerPicker/integer-picker-view.html",
                controller: "mwIntegerpickerController",
                controllerAs: "mwIntegerPickerCtrl",
                //On a besoin du controller de notre directive plus le controlleur de la directive ngModel
                require: ["^mwIntegerpicker", "^ngModel"],
                scope: {
                    ngModel: "=",
                    step: "=?",
                    min: "=?",
                    max: "=?",
                    id: "@",
                    required: "@",
                    onChange: "&",
                    ngChange: "&",
                    ngFocus: "&",
                    ngBlur: "&",
                    mwDisabled: "@"
                },
                link: function (scope, elem, attributes, ctrls) {
                    //Le premier controller est celui de notre directive, Le second est celui de la directive ngModel.
                    var controller = ctrls[0], ngModelCtrl = ctrls[1];
                    if (ngModelCtrl) {
                        //On fournit le controller de ngModel à notre controlleur.
                        controller.init(ngModelCtrl);
                    }
                    else {
                        throw new Error("l'attribut ngModel est obligatoire.");
                    }
                }
            };
        }
        UI.mwIntegerpicker = mwIntegerpicker;
        ;
        UI.module.directive("mwIntegerpicker", mwIntegerpicker);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Directive pour surcharger l'élément natif label.
         * La directive va permettre d'ajouter la classe "asterisque" si l'élément visé par le label est obligatoire.
         * La directive va permettre de générer l'évènement de focus sur l'élément cible du label en cas de non prise en compte nativement.
         */
        function label($window, $timeout) {
            return {
                restrict: "E",
                link: function (scope, element, attrs) {
                    // Test de l'abscence de l'attribut for
                    if (!attrs.for) {
                        return;
                    }
                    else {
                        $timeout(function () {
                            var target = element[0].control ? element[0].control : $window.document.getElementById(attrs.for);
                            // Test de l'existence de l'élément visé
                            if (target) {
                                // Test de la prise en compte du focus sur la cible au clic natif
                                if (!element[0].control) {
                                    element.bind("click", function () {
                                        target.focus();
                                    });
                                }
                                // Ajout de la classe asterisque si champs obligatoire
                                if (target.hasAttribute("required")) {
                                    element.addClass("asterisque");
                                }
                            }
                            // Suppression de l'event à la destruction du scope
                            scope.$on("$destroy", function () {
                                element.unbind("click");
                            });
                        }, 100);
                    }
                }
            };
        }
        UI.module.directive("label", ["$window", "$timeout", label]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var ModalDefaultController = (function () {
            function ModalDefaultController($modalInstance, popupOptions, element) {
                this.$modalInstance = $modalInstance;
                this.popupOptions = popupOptions;
                this.checkParam();
                this.styleFooter = popupOptions.size === "sm" ? "col-md-12" : "col-md-offset-9 col-md-3";
                this.validateur = false;
                /*this.$modalInstance.opened.then(function () {
                    var elm = angular.element(document.querySelector('.container-fluid'));
                    elm.attr('aria-hidden', 'true');
                });*/
            }
            ModalDefaultController.prototype.checkParam = function () {
                if (!this.popupOptions) {
                    throw new Error("ModalService ModalDefaultController : Pas de modele affectée à la modale.");
                }
                if (!this.popupOptions.headerText) {
                    throw new Error("ModalService ModalDefaultController : la propriete headerText doit être renseigné");
                }
                /*
                if (!this.popupOptions.bodyText) {
                    throw new Error("ModalService ModalDefaultController : la propriete bodyText doit être renseigné");
                }*/
                //if (!this.popupOptions.closeButtonText) {
                //    throw new Error("ModalService ModalDefaultController : la propriete closeButtonText doit être renseigné");
                //}
            };
            ModalDefaultController.prototype.annuler = function () {
                this.$modalInstance.dismiss();
                var elm = angular.element(document.querySelector(".container-fluid"));
                elm.removeAttr("aria-hidden");
            };
            ModalDefaultController.prototype.valider = function () {
                this.$modalInstance.close(this.popupOptions);
                var elm = angular.element(document.querySelector(".container-fluid"));
                elm.removeAttr("aria-hidden");
            };
            ModalDefaultController.prototype.handelKey = function (event) {
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ENTRER && !this.validateur) {
                    this.valider();
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.TAB) {
                    this.validateur = true;
                }
            };
            ModalDefaultController.$inject = [
                "$modalInstance",
                "popupOptions"
            ];
            return ModalDefaultController;
        })();
        UI.ModalDefaultController = ModalDefaultController;
        UI.module.controller("ModalDefaultController", ModalDefaultController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var ModalPDFController = (function () {
            function ModalPDFController($modalInstance, popupOptions, $window, $sce, $parse) {
                this.$modalInstance = $modalInstance;
                this.popupOptions = popupOptions;
                this.checkParam();
                this.styleFooter = popupOptions.size === "sm" ? "col-md-12" : "col-md-offset-9 col-md-3";
                this.window = $window;
                this.sce = $sce;
                this.parse = $parse;
                this.pdfURL = this.sce.trustAsResourceUrl(popupOptions.pdfUrl);
                //console.debug("popupOptions.pdfUrl.indexOf('blob')" + popupOptions.pdfUrl.indexOf("blob"));
                if (popupOptions.pdfUrl.indexOf("blob") !== -1) {
                    this.isBlob = true;
                }
                else {
                    this.isBlob = false;
                }
            }
            ModalPDFController.prototype.checkParam = function () {
                if (!this.popupOptions) {
                    throw new Error("ModalService ModalPDFController : Pas de modele affectée à la modale.");
                }
                if (!this.popupOptions.headerText) {
                    throw new Error("ModalService ModalPDFController : la propriete headerText doit être renseigné");
                }
                //if (!this.popupOptions.closeButtonText) {
                //    throw new Error("ModalService ModalPDFController : la propriete closeButtonText doit être renseigné");
                //}
            };
            ModalPDFController.prototype.annuler = function () {
                this.$modalInstance.dismiss();
                var elm = angular.element(document.querySelector(".container-fluid"));
                elm.removeAttr("aria-hidden");
            };
            ModalPDFController.prototype.valider = function () {
                this.$modalInstance.close(this.popupOptions);
                var elm = angular.element(document.querySelector(".container-fluid"));
                elm.removeAttr("aria-hidden");
            };
            ModalPDFController.prototype.openPDFinWindow = function () {
                //console.debug("DEBUG ModalPDFController.openPDFWindow pdfURL=" + this.pdfURL);
                this.window.open(this.pdfURL);
                this.$modalInstance.dismiss();
                var elm = angular.element(document.querySelector(".container-fluid"));
                elm.removeAttr("aria-hidden");
            };
            ModalPDFController.$inject = [
                "$modalInstance",
                "popupOptions",
                "$window",
                "$sce",
                "$parse"
            ];
            return ModalPDFController;
        })();
        UI.module.controller("ModalPDFController", ModalPDFController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        UI.module.directive("modalContent", function () {
            return {
                restrict: "C",
                link: function (scope, elm) {
                    var open = angular.element(document.querySelector(".modal")).hasClass("in");
                    if (open) {
                    }
                    elm.on("keyup", function (evt) {
                        if (evt.which === 9) {
                            var tababbleSelector = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
                            var children = this.querySelectorAll(tababbleSelector);
                            var first = children[0];
                            var last = children[children.length - 1];
                            var onFirstWithShift = evt.target === first && evt.shiftKey;
                            var onLastNoShift = evt.target === last && !evt.shiftKey;
                            if (onFirstWithShift || onLastNoShift) {
                                evt.preventDefault();
                            }
                        }
                    });
                    elm.on("keydown", function (evt) {
                        if (evt.which === 9) {
                            var tababbleSelector = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
                            var children = this.querySelectorAll(tababbleSelector);
                            var first = children[0];
                            var last = children[children.length - 1];
                            if (evt.target === first && evt.shiftKey) {
                                // user is going from first to last
                                evt.preventDefault();
                                last.focus();
                            }
                            else if (evt.target === last && !evt.shiftKey) {
                                // uesr is going from last to first
                                evt.preventDefault();
                                first.focus();
                            }
                        }
                    });
                }
            };
        });
        UI.module.directive("modal", function () {
            return {
                restrict: "E",
                link: function (scope, elm) {
                    //console.log(elm);
                }
            };
        });
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var ModalExitController = (function () {
            function ModalExitController($modalInstance, element) {
                this.$modalInstance = $modalInstance;
                this.avecEnregistrement = true;
                this.validateur = false;
            }
            ModalExitController.prototype.annuler = function () {
                this.$modalInstance.dismiss();
                var elm = angular.element(document.querySelector(".container-fluid"));
                elm.removeAttr("aria-hidden");
            };
            ModalExitController.prototype.sansEnregistrer = function () {
                this.$modalInstance.close(false);
                var elm = angular.element(document.querySelector(".container-fluid"));
                elm.removeAttr("aria-hidden");
            };
            ModalExitController.prototype.enregistrer = function () {
                this.$modalInstance.close(true);
                var elm = angular.element(document.querySelector(".container-fluid"));
                elm.removeAttr("aria-hidden");
            };
            ModalExitController.prototype.handelKey = function (event) {
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ENTRER && !this.validateur) {
                    this.annuler();
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.TAB) {
                    this.validateur = true;
                }
            };
            ModalExitController.$inject = [
                "$modalInstance",
                "popupOptions"
            ];
            return ModalExitController;
        })();
        UI.ModalExitController = ModalExitController;
        UI.module.controller("ModalExitController", ModalExitController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        (function (TYPE_POPUP_ERREUR) {
            TYPE_POPUP_ERREUR[TYPE_POPUP_ERREUR["BLOQUANT"] = 0] = "BLOQUANT";
            TYPE_POPUP_ERREUR[TYPE_POPUP_ERREUR["NON_BLOQUANT"] = 1] = "NON_BLOQUANT";
            TYPE_POPUP_ERREUR[TYPE_POPUP_ERREUR["CHOIX"] = 2] = "CHOIX";
        })(UI.TYPE_POPUP_ERREUR || (UI.TYPE_POPUP_ERREUR = {}));
        var TYPE_POPUP_ERREUR = UI.TYPE_POPUP_ERREUR;
        ;
        var ModalService = (function () {
            function ModalService($modal, $templateCache, $sce) {
                this.$templateCache = $templateCache;
                this.$sce = $sce;
                this.$modal = $modal;
            }
            /**
             *  Cette méthode permet d'afficher une fenêtre de type popup (avec un bouton de fermeture).
             */
            ModalService.prototype.showPopup = function (popupOptions, erreur) {
                var modalOptions = {
                    templateUrl: erreur ? "modal/modal-erreur-popup-view.html" : "modal/modal-default-popup-view.html",
                    controller: "ModalDefaultController",
                    controllerAs: "modalCtrl",
                    backdrop: "static",
                    keyboard: true,
                    modalFade: true,
                    size: popupOptions.size || "md",
                    resolve: {
                        popupOptions: function () {
                            return angular.copy(popupOptions);
                        }
                    }
                };
                // Si le bodyText contient du html (pour le saut à la ligne) alors il faut indiquer que le html est sain avec la fonction suivante.
                popupOptions.bodyText = this.$sce.trustAsHtml(popupOptions.bodyText);
                var lastFocus = document.activeElement;
                var header = angular.element(document.querySelector("header"));
                header.attr("aria-hidden", "true");
                var sidebar = angular.element(document.querySelector(".sidebar"));
                sidebar.attr("aria-hidden", "true");
                var main = angular.element(document.querySelector("main"));
                main.attr("aria-hidden", "true");
                var footer = angular.element(document.querySelector("footer"));
                footer.attr("aria-hidden", "true");
                this.$templateCache.put("template/modal/window.html", "<div tabindex=\"-1\" id=\"popup\" role=\"alertdialog\" aria-labelledby=\"mw-modal-entete\" aria-describedby=\"mw-modal-corps\" " +
                    "class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
                    "    <div class=\"modal-dialog  {{size ? 'modal-' + size : ''}}\">" +
                    "       <div class=\"modal-content\" modal-transclude></div>" +
                    "    </div>\n" +
                    "</div>");
                var modalIns = this.$modal.open(modalOptions);
                modalIns.result.finally(function () {
                    header.removeAttr("aria-hidden");
                    sidebar.removeAttr("aria-hidden");
                    main.removeAttr("aria-hidden");
                    footer.removeAttr("aria-hidden");
                    angular.element(lastFocus)[0].focus();
                });
                return modalIns.result;
            };
            /**
             *  Cette méthode permet d'afficher une fenêtre de confirmation avec un bouton action et un bouton annulation.
             */
            ModalService.prototype.showConfirm = function (confirmOptions) {
                var modalOptions = {
                    templateUrl: "modal/modal-default-confirm-view.html",
                    controller: "ModalDefaultController",
                    controllerAs: "modalCtrl",
                    backdrop: "static",
                    keyboard: true,
                    modalFade: true,
                    size: confirmOptions.size || "md",
                    resolve: {
                        popupOptions: function () {
                            return angular.copy(confirmOptions);
                        }
                    }
                };
                // Si le bodyText contient du html (pour le saut à la ligne) alors il faut indiquer que le html est sain avec la fonction suivante.
                confirmOptions.bodyText = this.$sce.trustAsHtml(confirmOptions.bodyText);
                var lastFocus = document.activeElement;
                var header = angular.element(document.querySelector("header"));
                header.attr("aria-hidden", "true");
                var sidebar = angular.element(document.querySelector(".sidebar"));
                sidebar.attr("aria-hidden", "true");
                var main = angular.element(document.querySelector("main"));
                main.attr("aria-hidden", "true");
                var footer = angular.element(document.querySelector("footer"));
                footer.attr("aria-hidden", "true");
                this.$templateCache.put("template/modal/window.html", "<div tabindex=\"-1\" id=\"popup\" role=\"alertdialog\" aria-labelledby=\"mw-modal-entete\" aria-describedby=\"mw-modal-corps\" " +
                    "class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
                    "    <div class=\"modal-dialog  {{size ? 'modal-' + size : ''}}\">" +
                    "       <div class=\"modal-content\" modal-transclude></div>" +
                    "    </div>\n" +
                    "</div>");
                var modalIns = this.$modal.open(modalOptions);
                modalIns.result.finally(function () {
                    header.removeAttr("aria-hidden");
                    sidebar.removeAttr("aria-hidden");
                    main.removeAttr("aria-hidden");
                    footer.removeAttr("aria-hidden");
                    angular.element(lastFocus)[0].focus();
                });
                return modalIns.result;
            };
            /*
             * Wrapper de la méthode open du service $modal de angular-ui bootstrap
             *
             * param : angular.ui.bootstrap.IModalSettings
             * les champs 'controller' et 'templateUrl' sont obligatoire.
             *
             */
            ModalService.prototype.showModal = function (modalOptions) {
                if (!modalOptions.controller) {
                    throw new Error("modalService.showModal : controller doit être renseigné");
                }
                if (!modalOptions.templateUrl) {
                    throw new Error("modalService.showModal : templateUrl doit être renseigné");
                }
                var lastFocus = document.activeElement;
                var header = angular.element(document.querySelector("header"));
                header.attr("aria-hidden", "true");
                var sidebar = angular.element(document.querySelector(".sidebar"));
                sidebar.attr("aria-hidden", "true");
                var main = angular.element(document.querySelector("main"));
                main.attr("aria-hidden", "true");
                var footer = angular.element(document.querySelector("footer"));
                footer.attr("aria-hidden", "true");
                this.$templateCache.put("template/modal/window.html", "<div tabindex=\"-1\" id=\"popupCustom\" role=\"dialog\" aria-labelledby=\"mw-modal-entete\" " +
                    "class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
                    "    <div class=\"modal-dialog  {{size ? 'modal-' + size : ''}}\">" +
                    "       <div class=\"modal-content\" modal-transclude></div>" +
                    "    </div>\n" +
                    "</div>");
                var modalIns = this.$modal.open(modalOptions);
                modalIns.result.finally(function () {
                    header.removeAttr("aria-hidden");
                    sidebar.removeAttr("aria-hidden");
                    main.removeAttr("aria-hidden");
                    footer.removeAttr("aria-hidden");
                    angular.element(lastFocus)[0].focus();
                });
                var modal = angular.element(document.querySelector("modal"));
                return modalIns.result;
            };
            /*
             * Wrapper de la méthode open du service $modal de angular-ui bootstrap
             *
             * param : angular.ui.bootstrap.IModalSettings
             * les champs 'controller' et 'templateUrl' sont obligatoire.
             *
             */
            ModalService.prototype.showPDF = function (modalPdfOptions) {
                var modalOptions = {
                    templateUrl: "modal/modal-default-pdf-view.html",
                    controller: "ModalPDFController",
                    controllerAs: "modalCtrl",
                    backdrop: "static",
                    keyboard: true,
                    modalFade: true,
                    size: modalPdfOptions.size || "md",
                    resolve: {
                        popupOptions: function () {
                            return angular.copy(modalPdfOptions);
                        }
                    }
                };
                var lastFocus = document.activeElement;
                var header = angular.element(document.querySelector("header"));
                header.attr("aria-hidden", "true");
                var sidebar = angular.element(document.querySelector(".sidebar"));
                sidebar.attr("aria-hidden", "true");
                var main = angular.element(document.querySelector("main"));
                main.attr("aria-hidden", "true");
                var footer = angular.element(document.querySelector("footer"));
                footer.attr("aria-hidden", "true");
                this.$templateCache.put("template/modal/window.html", "<div tabindex=\"-1\" id=\"popup\" role=\"alertdialog\" aria-labelledby=\"mw-modal-entete\" aria-describedby=\"mw-modal-corps\" " +
                    "class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
                    "    <div class=\"modal-dialog  {{size ? 'modal-' + size : ''}}\">" +
                    "       <div class=\"modal-content\" modal-transclude></div>" +
                    "    </div>\n" +
                    "</div>");
                var modalIns = this.$modal.open(modalOptions);
                modalIns.result.finally(function () {
                    header.removeAttr("aria-hidden");
                    sidebar.removeAttr("aria-hidden");
                    main.removeAttr("aria-hidden");
                    footer.removeAttr("aria-hidden");
                    angular.element(lastFocus)[0].focus();
                });
                return modalIns.result;
            };
            ModalService.prototype.showErreur = function (type, titre, message, boutonPrincipal, boutonSecondaire) {
                var iconErreur = "itce-ban";
                if (type === TYPE_POPUP_ERREUR.CHOIX) {
                    var confirmOptions = {
                        actionButtonText: boutonPrincipal || "Continuer",
                        closeButtonText: boutonSecondaire || "Fermer",
                        headerText: "Erreur " + titre,
                        iconName: iconErreur,
                        bodyText: message,
                        size: "md"
                    };
                    return this.showConfirm(confirmOptions);
                }
                else {
                    var popupOptions = {
                        closeButtonText: "Fermer",
                        headerText: "Erreur " + titre,
                        iconName: iconErreur,
                        bodyText: message,
                        size: "md"
                    };
                    return this.showPopup(popupOptions, true);
                }
            };
            ModalService.prototype.showExit = function () {
                var modalOptions = {
                    templateUrl: "modal/modal-exit-view.html",
                    controller: "ModalExitController",
                    controllerAs: "modalCtrl",
                    windowClass: "app-modal-window-MEG",
                    backdrop: true,
                    keyboard: true,
                    modalFade: true,
                    size: "md",
                    resolve: {
                        popupOptions: function () {
                            return angular.copy({});
                        }
                    }
                };
                return this.showModal(modalOptions);
            };
            return ModalService;
        })();
        UI.ModalService = ModalService;
        /*
        module.factory('mwModal', function () {
           var injector = angular.injector(['ng']);
            var $modal: angular.ui.bootstrap.IModalService = injector.get('$modal');
              return new ModalService($modal);
   
       });*/
        UI.module.service("modalService", ["$modal", "$templateCache", "$sce", ModalService]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Énumération sur l'état global de l'accordéon
         */
        var EtatGlobal = (function () {
            function EtatGlobal() {
            }
            EtatGlobal.mixte = "mixte";
            EtatGlobal.ouvert = "ouvert";
            EtatGlobal.ferme = "ferme";
            return EtatGlobal;
        })();
        UI.EtatGlobal = EtatGlobal;
        /**
         * Classe AccordeonController
         * Contrôlleur de la directive mv-accordeon
         */
        var AccordeonController = (function () {
            function AccordeonController($scope) {
                this.$scope = $scope;
                /*
                 * Objet contenant les objets scope des panneaux rétractables identifiés par leurs identifiants du DOM
                 */
                this.mapCtrlHretractable = {};
            }
            /*
             * Fonction pour l'ajout du contrôleur d'un panneau rétractable
             * Paramètres :
             * - id (String) : identifiant du panneau
             * - ctrl (HRetractableController) : ctrl du panneau ajouté
             */
            AccordeonController.prototype.ajouterPanneauRetractable = function (id, ctrl) {
                var _this = this;
                // Formatage de l'identifiant (présence d'un caractère espace non voulu)
                var idFormate = id.trim();
                // Ajout du ctrl à la map des ctrl
                this.mapCtrlHretractable[idFormate] = ctrl;
                // Gestion de l'ouverture des panneaux à l'initialisation
                // Par priorité décroissante : présence d'un identifiant de panneau ouvert par défaut, présence d'un état global défini, par gestion manuelle de l'état des panneaux
                if (this.idPanneauDefaut === idFormate) {
                    this.mapCtrlHretractable[idFormate].open = true;
                    this.etatGlobal = EtatGlobal.mixte;
                }
                else if (this.etatGlobal === EtatGlobal.ouvert) {
                    this.mapCtrlHretractable[idFormate].open = true;
                }
                else if (this.etatGlobal === EtatGlobal.ferme) {
                    this.mapCtrlHretractable[idFormate].open = false;
                }
                else {
                    this.etatGlobal = this.verifierFermetureGlobale() ? EtatGlobal.ferme : EtatGlobal.mixte;
                }
                // Écoute de la modification de l'état d'ouverture du panneau
                this.mapCtrlHretractable[idFormate].$scope.$watch(function () {
                    return _this.mapCtrlHretractable[idFormate].open;
                }, function (newEtat, oldEtat) {
                    if (newEtat !== oldEtat) {
                        // Dans le cas d'une ouverture de panneau
                        if (newEtat) {
                            // Vérification du mode de fermeture automatique et d'un état différent d'une ouverture globale (cas d'une ouverture globale manuelle)
                            if (_this.fermetureAutomatique && _this.etatGlobal !== EtatGlobal.ouvert) {
                                _this.fermerPanneauxRetractable(idFormate);
                            }
                            _this.etatGlobal = _this.verifierOuvertureGlobale() ? EtatGlobal.ouvert : EtatGlobal.mixte;
                        }
                        else {
                            _this.etatGlobal = _this.verifierFermetureGlobale() ? EtatGlobal.ferme : EtatGlobal.mixte;
                        }
                    }
                });
            };
            /**
             * Fonction pour la vérification de la fermeture de l'ensemble des panneaux
             */
            AccordeonController.prototype.verifierFermetureGlobale = function () {
                var check = true;
                angular.forEach(this.mapCtrlHretractable, function (value, key) {
                    if (value.open) {
                        check = false;
                    }
                });
                return check;
            };
            /**
             * Fonction pour la vérification de l'ouverture de l'ensemble des panneaux
             */
            AccordeonController.prototype.verifierOuvertureGlobale = function () {
                var check = true;
                angular.forEach(this.mapCtrlHretractable, function (value, key) {
                    if (!value.open) {
                        check = false;
                    }
                });
                return check;
            };
            /*
             * Fonction pour la fermeture des panneaux
             * Paramètres :
             * - id (String) : identifiant du panneau qui doit rester ouvert
             */
            AccordeonController.prototype.fermerPanneauxRetractable = function (id) {
                // Parcours de l'ensemble des scopes et fermeture si différent de l'identifiant du panneau ouvert
                angular.forEach(this.mapCtrlHretractable, function (value, key) {
                    if (key !== id && value.open) {
                        value.toggleOpen();
                    }
                });
            };
            AccordeonController.$inject = ["$scope"];
            return AccordeonController;
        })();
        UI.AccordeonController = AccordeonController;
        UI.module.controller("AccordeonController", AccordeonController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Directive mw-accordeon
         * Conteneur de composants mw-hretractable permettant d'ajouter une logique de fermuture d'un groupe de panneaux
         */
        function mwAccordeon() {
            return {
                restrict: "AE",
                templateUrl: "mw-accordeon/mw-accordeon-view.html",
                scope: {
                    idPanneauDefaut: "@",
                    fermetureAutomatique: "=?",
                    etatGlobal: "=?"
                },
                controller: "AccordeonController",
                controllerAs: "accordeonCtrl",
                bindToController: true,
                transclude: true,
                link: function (scope, element, attributes) {
                    scope.$watch(function () {
                        return scope.accordeonCtrl.etatGlobal;
                    }, function (newEtat, oldEtat) {
                        if (newEtat !== oldEtat) {
                            switch (scope.accordeonCtrl.etatGlobal) {
                                // Cas d'une ouverture globale
                                case UI.EtatGlobal.ouvert:
                                    angular.forEach(scope.accordeonCtrl.mapCtrlHretractable, function (value, key) {
                                        value.open = true;
                                    });
                                    break;
                                // Cas d'une fermeture global
                                case UI.EtatGlobal.ferme:
                                    angular.forEach(scope.accordeonCtrl.mapCtrlHretractable, function (value, key) {
                                        value.open = false;
                                    });
                                    break;
                                default:
                                    break;
                            }
                        }
                    });
                }
            };
        }
        UI.module.directive("mwAccordeon", mwAccordeon);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwAutocompletionController = (function () {
            function MwAutocompletionController($scope) {
                this.$scope = $scope;
                // INITIALISATION 
                $scope.liste = null;
                $scope.limitSearch = "10";
                $scope.placeholder = "null";
                $scope.id = "id";
                $scope.obligatoire = false;
                // Recuperation de l'application 
                $scope.liste = $scope.data.liste;
                $scope.limitSearch = $scope.data.limitSearch;
                $scope.obligatoire = $scope.data.obligatoire;
                $scope.id = $scope.data.id;
                $scope.valueinput = $scope.data.dataInput;
                $scope.placeholder = $scope.data.placeholder;
                // Function
                // action sur le keyUp 
                $scope.keyupsearch = function () {
                    setTimeout($scope.search, 300);
                };
                // ouverture de la liste en appliquent le filter 
                $scope.search = function () {
                    $scope.query = $scope.valueinput;
                    $scope.showDropdown = true;
                };
                // fermeture de la liste sur l'action, du clik 
                $scope.select = function (name) {
                    $scope.showDropdown = false;
                    $scope.valueinput = name;
                };
            }
            MwAutocompletionController.$inject = [
                "$scope",
            ];
            return MwAutocompletionController;
        })();
        UI.MwAutocompletionController = MwAutocompletionController;
        UI.module.controller("MwAutocompletionController", MwAutocompletionController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwAutocompletion() {
            return {
                restrict: "E",
                templateUrl: "mw-autocompletion/mw-autocompletion-view.html",
                controller: "MwAutocompletionController",
                controllerAs: "mwAutocompletionController",
                transclude: true,
                scope: {
                    data: "="
                }
            };
        }
        UI.mwAutocompletion = mwAutocompletion;
        ;
        UI.module.directive("mwAutocompletion", mwAutocompletion);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwAutoselect($window) {
            return {
                restrict: "A",
                link: function (scope, element, attributes) {
                    // Méthode pour tester si la valeur du champs est sélectionnée
                    var getIsSelection = function () {
                        if (!element || !element[0]) {
                            return false;
                        }
                        return element[0] && element[0].selectionStart !== undefined && element[0].selectionEnd !== undefined && (element[0].selectionStart !== element[0].selectionEnd);
                    };
                    // Méthode pour la sélection de la valeur du champs
                    var selectValue = function () {
                        if (element && element[0] && !getIsSelection()) {
                            var inputElement = element[0];
                            inputElement.select();
                        }
                    };
                    // Méthode pour le déplacement du curseur selon la touche pressée
                    /* En attente retour ergo
                    var changeSelectionRange: Function = (eventObject: JQueryEventObject) => {
                        if (element && element[0] && getIsSelection()) {
                            var inputElement: HTMLInputElement = element[0];
                            if (eventObject.keyCode === Constants.CLAVIER_KEYCODE.FLECHE_HAUT) {
                                inputElement.setSelectionRange(0, 0);
                            } else if (eventObject.keyCode === Constants.CLAVIER_KEYCODE.FLECHE_BAS) {
                                inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length);
                            }
                        }
                    };
                    */
                    // Écoute de l'évènement de Focus pour sélection de la valeur du champs
                    element.on("focus", selectValue);
                    // Écoute de l'évènement de KeyDown pour modification de placement du curseur
                    // element.on("keydown", changeSelectionRange); En attente retour ergo
                    // Écoute de la destruction du scope de la directive
                    scope.$on("$destroy", function () {
                        element.unbind("focus", selectValue);
                        // element.unbind("keydown", changeSelectionRange); En attente retour ergo
                    });
                }
            };
        }
        UI.module.directive("mwAutoselect", ["$window", mwAutoselect]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

"use strict";
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        var MwBoutonListeActionsController = (function () {
            function MwBoutonListeActionsController($scope) {
                this.$scope = $scope;
                this.sens = (this.position === "haut") ? "up" : "down";
                this.ouvert = false;
            }
            MwBoutonListeActionsController.prototype.afficherDropdown = function () {
                this.sens = (this.position === "haut") ? "down" : "up";
                this.ouvert = true;
            };
            MwBoutonListeActionsController.prototype.cacherDropdown = function () {
                this.sens = (this.position === "haut") ? "up" : "down";
                this.ouvert = false;
            };
            MwBoutonListeActionsController.prototype.getSens = function () {
                return this.sens;
            };
            MwBoutonListeActionsController.prototype.toggle = function (open) {
                if (open) {
                    this.afficherDropdown();
                }
                else {
                    this.cacherDropdown();
                }
            };
            MwBoutonListeActionsController.$inject = ["$scope"];
            return MwBoutonListeActionsController;
        })();
        UI.MwBoutonListeActionsController = MwBoutonListeActionsController;
        UI.module.controller("MwBoutonListeActionsController", MwBoutonListeActionsController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

"use strict";
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        function mwBoutonListeActions() {
            return {
                restrict: "E",
                transclude: true,
                templateUrl: "mw-bouton-liste-actions/mw-bouton-liste-actions-view.html",
                controller: "MwBoutonListeActionsController",
                controllerAs: "mwBoutonListeActionsCtrl",
                bindToController: true,
                scope: {
                    id: "@",
                    titre: "@",
                    data: "=",
                    modele: "@",
                    position: "@?",
                    isDisabled: "="
                },
                compile: function (element, attrs) {
                    var baseId = attrs["id"];
                    //si un id est présent sur l'élément, on préfixe tous les id du composant par cet id
                    angular.forEach(element[0].querySelectorAll("[id]"), baseId ? prefixId : removeId);
                    function prefixId(elem) {
                        var e = angular.element(elem);
                        e.attr("id", baseId + "-" + e.attr("id"));
                    }
                    function removeId(elem) {
                        angular.element(elem).removeAttr("id");
                    }
                    return function (scope, element) {
                        // Lorsque le volet se ferme, le focus doit retourner sur le bouton (accessibilité);
                        scope.focusBouton = focusBouton;
                        scope.goToTop = function () {
                            var rect = element[0].parentElement ? element[0].parentElement.getBoundingClientRect() :
                                element[0].getBoundingClientRect();
                            var clh = (window.innerHeight || document.documentElement.clientHeight);
                            var header = document.getElementsByTagName('header');
                            var footer = document.getElementsByTagName('footer');
                            clh = header[0] && header[0].offsetHeight ? clh - header[0].offsetHeight : clh;
                            clh = footer[0] && footer[0].offsetHeight ? clh - footer[0].offsetHeight : clh;
                            if (rect.bottom >= clh) {
                                return true;
                            }
                            return false;
                        };
                        function focusBouton() {
                            var bouton = element.find("button");
                            bouton[0].focus();
                        }
                    };
                }
            };
        }
        UI.mwBoutonListeActions = mwBoutonListeActions;
        ;
        UI.module.directive("mwBoutonListeActions", ["$timeout", "$document", mwBoutonListeActions]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwButton() {
            return {
                templateUrl: "mw-button/mw-button-view.html",
                restrict: "E",
                replace: true,
                scope: {
                    texte: "@",
                    modele: "@",
                    etat: "&",
                    icone: "@"
                }
            };
        }
        UI.mwButton = mwButton;
        ;
        UI.module.directive("mwButton", mwButton);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * @description : Cette directive doit être posé sur l'élément qui à un moment du scroll doit devenir fixe.
         * C'est le cas par exemple de la navigation (div.sidebar).
         *
         */
        function MwAffix() {
            return {
                restrict: "A",
                link: function (scope, element, attrs, ctrl) {
                    var offsetTop = 130;
                    /**
                     * Fonction appelée lorsque l'élément scrollable envoi un évènement scroll.
                     */
                    var onScroll = function (event) {
                        if (attrs["mwAffix"].length > 0) {
                            try {
                                offsetTop = parseInt(attrs["mwAffix"], 10);
                            }
                            catch (err) {
                                throw new Error("[MyWay.UI.mwAffix ] Erreur lors de la récupération de la valeur de mwAffix " + err);
                            }
                        }
                        var fixedPosition = element[0].offsetTop - offsetTop;
                        // Lorsque que la hauteur sur html et body sont à 100%, tout les navigateurs n'interprete pas le scrolltop au même endroit.
                        // En effet, IE positionne la propriété sur le html alors que chrome la positionne sur le body ! D'où la récupèration du scrolltop sur l'un ou l'autre.
                        var scrolltop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                        if (scrolltop > offsetTop) {
                            if (element.css("position") !== "fixed") {
                                element.css("position", "fixed");
                                element.css("top", fixedPosition + "px");
                            }
                        }
                        else {
                            if (element.css("position") !== "absolute") {
                                element[0].style.removeProperty("top");
                                element.css("position", "absolute");
                            }
                        }
                    };
                    /**
                     * Abonnement à l'évènement scroll
                     */
                    angular.element(document).ready(function () {
                        onScroll(null); // appel initiale pour éviter que la nav soit posé n'importe ou 
                        /*
                        angular.element(document).bind("scroll", (event: JQueryEventObject): void => {
                            onScroll(event);
                        });*/
                        angular.element(window).bind("scroll", function (event) {
                            onScroll(event);
                        });
                    });
                    // Suppression des events à la destruction du scope
                    scope.$on("$destroy", function () {
                        angular.element(document).unbind("scroll");
                    });
                }
            };
        }
        ;
        UI.module.directive("mwAffix", [MwAffix]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

"use strict";
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        var MwBoutonVoletController = (function () {
            function MwBoutonVoletController($scope, $element, $document) {
                var _this = this;
                this.$scope = $scope;
                this.$element = $element;
                this.$document = $document;
                var $button = $element.children("button");
                $scope.gauche = -1 !== ["left", "gauche"].indexOf($scope.position);
                $scope.droite = -1 !== ["right", "droite"].indexOf($scope.position);
                $scope.bas = -1 !== ["bottom", "bas"].indexOf($scope.position) || !$scope.position;
                $scope.haut = -1 !== ["top", "haut"].indexOf($scope.position);
                $scope.fermer = $scope.close = function () {
                    $scope.opened = false;
                };
                $scope.opened = false;
                var close = function (event) {
                    if ($element.hasClass("open") && (!event || !_this.containsChild($element[0], event.target))) {
                        $button.triggerHandler("click");
                    }
                };
                switch ($scope.autoClose) {
                    case "exterieur":
                    case "clic-exterieur":
                    case "outside":
                        $document.bind("click", close);
                        $scope.$on("$destroy", function () {
                            $document.unbind("click", close);
                        });
                        break;
                    case "jamais":
                    case "non":
                    case "no":
                        break;
                    case "toujours":
                    case "oui":
                    case "yes":
                    default:
                        $button.on("blur", close.bind(this, false));
                        break;
                }
                $scope.modele || ($scope.modele = "principale");
            }
            MwBoutonVoletController.prototype.containsChild = function (parent, child) {
                for (; child.nodeType !== Node.DOCUMENT_NODE; child = child.parentNode) {
                    if (child === parent) {
                        return true;
                    }
                }
                return false;
            };
            MwBoutonVoletController.$inject = ["$scope", "$element", "$document"];
            return MwBoutonVoletController;
        })();
        UI.MwBoutonVoletController = MwBoutonVoletController;
        UI.module.controller("MwBoutonVoletController", MwBoutonVoletController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

"use strict";
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        function mwBoutonVolet() {
            return {
                templateUrl: "mw-bouton-volet/mw-bouton-volet-view.html",
                restrict: "E",
                replace: true,
                transclude: true,
                controller: "MwBoutonVoletController",
                scope: {
                    id: "@",
                    opened: "=?ouvert",
                    autoClose: "@fermetureAuto",
                    closeButton: "@boutonFermer",
                    position: "@",
                    texte: "@",
                    modele: "@",
                    etat: "&"
                },
                link: function (scope, element, attrs, ctrl) {
                    /*
                        * Lorsque le volet se ferme, le focus doit retourner sur le bouton (accessibilité);
                        */
                    scope.focusBouton = focusBouton;
                    function focusBouton() {
                        var bouton = element.find("button");
                        bouton[0].focus();
                    }
                }
            };
        }
        UI.mwBoutonVolet = mwBoutonVolet;
        ;
        UI.module.directive("mwBoutonVolet", mwBoutonVolet);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwButtonIcone() {
            return {
                templateUrl: "mw-button-icone/mw-button-icone-view.html",
                restrict: "E",
                replace: true,
                scope: {
                    texte: "@",
                    taille: "@",
                    icone: "@",
                    etat: "&"
                }
            };
        }
        UI.mwButtonIcone = mwButtonIcone;
        ;
        UI.module.directive("mwButtonIcone", mwButtonIcone);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Directive mw-chargement. Attribut
         * Mettant en place le chargement court. Prend en attribut un booléen ou une promesse.
         * Permet de bloquer l'élément de la directive de toutes interactions utilisateurs.
         * Permet d'afficher un style avec une icône d'attente.
         */
        function mwChargement($q, $templateCache, $compile) {
            // Set de fonction pour bloquer un élément et tous ces enfants des intéractions utilisateurs
            var setBackupTabindex = function (element) {
                angular.forEach(element[0].querySelectorAll("[tabindex]"), function (element) {
                    var e = angular.element(element);
                    e.attr("data-tabindex-backup", e.attr("tabindex"));
                });
            };
            var setFocusable = function (element, isFocusable) {
                if (isFocusable) {
                    element.find("*").removeAttr("tabindex");
                }
                else {
                    element.find("*").attr("tabindex", "-1");
                }
            };
            var backTabindex = function (element) {
                setFocusable(element, true);
                angular.forEach(element[0].querySelectorAll("[data-tabindex-backup]"), function (element) {
                    var e = angular.element(element);
                    e.attr("tabindex", e.attr("data-tabindex-backup"));
                });
            };
            // Fin du set de fonction
            // Définition de la fonction de post-link
            var link = function (scope, element, attributes) {
                // Déclaration d'une variable tampon pour la gestion des promises
                var currentValue;
                var top;
                top = "";
                if (attributes["mwChargementTop"]) {
                    top = attributes["mwChargementTop"];
                }
                var idElement = element.attr("id");
                //TODO rnedre obligatoire l'utilisation d'un id sur l'élément qui porte la directive
                /*
                if (!idElement) {
                    throw new Error("MyWay.UI.mwChargement : L'id est obligatoire sur l'élément porteur de la directive.");
                }*/
                // Méthode pour l'activation du chargement
                var activerChargement = function () {
                    // Ajout du spinner
                    var wrapper = angular.element($templateCache.get("mw-chargement/spinner.html"));
                    $compile(wrapper)(scope);
                    //TODO ajouter le wrapper avec un after. Mais nécessite de modifier la recherche pour utiliser des ID.
                    element.append(wrapper);
                    // Activation du style du chargement
                    element.addClass("mw-chargement");
                    element.addClass("modal-open");
                    element.attr("aria-busy", "true");
                    //Si une hauteur est donné, on modifie la position verticale.
                    if (top.length > 0) {
                        var spinner = element[0].getElementsByClassName("spinner");
                        if (spinner.length > 0) {
                            angular.forEach(spinner, function (el) {
                                angular.element(el).css("top", top);
                            });
                        }
                    }
                    // Les éléments wrappés sont rendu non-atteignable via le clavier
                    setFocusable(element, false);
                };
                // Méthode pour la désactivation du chargement
                var desactiverChargement = function () {
                    // Suppression du spinner
                    var listeDiv = angular.element(element[0]).find("div");
                    angular.forEach(listeDiv, function (div) {
                        if (angular.element(div).hasClass("spinner")) {
                            angular.element(div).remove();
                        }
                    });
                    // Suppression guidage accessible
                    var guidage = element[0].getElementsByClassName("hide-a11y");
                    angular.forEach(guidage, function (span) {
                        angular.element(span).remove();
                    });
                    // Désactivation du style du chargement
                    element.removeClass("mw-chargement");
                    element.removeClass("modal-open");
                    element.attr("aria-busy", "false");
                    // Les éléments wrappés sont remis dans leurs états initiaux
                    backTabindex(element);
                };
                // Observation de l'attribut du DOM, gardé à fin de rétrocompatibilité, ne prend pas en charge les promises
                attributes.$observe("mwChargement", function (value) {
                    if (value === "false") {
                        desactiverChargement();
                    }
                    else if (value === "true") {
                        activerChargement();
                    }
                });
                //  Écoute des variations de l'attribut mwChargement
                scope.$watch(attributes.mwChargement, function (value) {
                    currentValue = value;
                    if (value === false) {
                        desactiverChargement();
                    }
                    else if (value === true) {
                        activerChargement();
                    }
                    else {
                        activerChargement();
                        $q.when(value).finally(function () {
                            if (value === currentValue) {
                                desactiverChargement();
                            }
                        });
                    }
                });
            };
            return {
                restrict: "A",
                compile: function (element, attributes) {
                    setBackupTabindex(element);
                    return link;
                }
            };
        }
        UI.mwChargement = mwChargement;
        UI.module.directive("mwChargement", ["$q", "$templateCache", "$compile", mwChargement]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwChargementLong($timeout, $document) {
            return {
                restrict: "E",
                transclude: true,
                scope: {
                    texte: "@?",
                    etat: "=",
                    annuler: "&?",
                    visible: "=",
                    id: "@"
                },
                templateUrl: "mw-chargement-long/mw-chargement-long-view.html",
                compile: function (element, attrs) {
                    var baseId = attrs["id"], modal, boutonAnnuler, elementToFocus;
                    //si un id est présent sur l'élément, on préfixe tous les id du composant par cet id
                    angular.forEach(element[0].querySelectorAll("[id]"), baseId ? prefixId : removeId);
                    function prefixId(elem) {
                        var e = angular.element(elem);
                        e.attr("id", baseId + "-" + e.attr("id"));
                    }
                    function removeId(elem) {
                        angular.element(elem).removeAttr("id");
                    }
                    return function (scope, element, attributes) {
                        scope.getPourcentage = function () {
                            return Math.round(100 * Math.min(1, Math.max(0, scope.etat)));
                        };
                        if (!attributes["annuler"]) {
                            scope.annuler = null;
                        }
                        scope.$on("$destroy", enleverFocus);
                        element.on("keydown keypress", function (evt) {
                            if (element && element[0]) {
                                modal = element[0].querySelector(".mw-chargement-long");
                                if (modal) {
                                    boutonAnnuler = modal.querySelector("button");
                                    elementToFocus = boutonAnnuler ? boutonAnnuler : modal;
                                    elementToFocus.tabIndex = 0;
                                    switch (evt.which) {
                                        //ECHAP
                                        case 27:
                                            evt.preventDefault();
                                            evt.stopPropagation();
                                            if (scope.annuler) {
                                                scope.$apply(function () {
                                                    scope.annuler();
                                                    scope.visible = false;
                                                });
                                            }
                                            break;
                                        //TAB
                                        case 9:
                                            evt.preventDefault();
                                            evt.stopPropagation();
                                            //on force le focus soit sur le bouton annuler s'il existe, sinon sur la modal
                                            elementToFocus.focus();
                                            break;
                                    }
                                }
                            }
                        });
                        function enleverFocus() {
                            if (modal) {
                                modal.tabIndex = -1;
                            }
                        }
                    };
                }
            };
        }
        UI.module.directive("mwChargementLong", ["$timeout", "$document", mwChargementLong]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwCheckbox = (function () {
            function MwCheckbox($scope) {
                this.$scope = $scope;
            }
            MwCheckbox.$inject = [
                "$scope"
            ];
            return MwCheckbox;
        })();
        UI.MwCheckbox = MwCheckbox;
        UI.module.controller("MwCheckbox", MwCheckbox);
        var MwSimpleCheckboxCtrl = (function () {
            function MwSimpleCheckboxCtrl($scope) {
                this.$scope = $scope;
            }
            MwSimpleCheckboxCtrl.prototype.onChange = function () {
                this.$scope.onChange();
            };
            MwSimpleCheckboxCtrl.$inject = [
                "$scope",
            ];
            return MwSimpleCheckboxCtrl;
        })();
        UI.MwSimpleCheckboxCtrl = MwSimpleCheckboxCtrl;
        UI.module.controller("MwSimpleCheckboxCtrl", MwSimpleCheckboxCtrl);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwCheckbox() {
            return {
                restrict: "E",
                transclude: true,
                templateUrl: "mw-checkbox/mw-checkbox-view.html",
                controller: "MwCheckbox",
                controllerAs: "mwCheckbox",
                scope: {
                    data: "=",
                    id: "@",
                    orientation: "@"
                }
            };
        }
        UI.mwCheckbox = mwCheckbox;
        ;
        UI.module.directive("mwCheckbox", mwCheckbox);
        /**
         * Code extrait de Angular-ui : https://github.com/angular-ui/ui-indeterminate/blob/master/src/indeterminate.js
         *
         * Provides an easy way to toggle a checkboxes indeterminate property
         *
         * @example <input type="checkbox" ui-indeterminate="isUnkown">
         */
        function mwIndeterminate() {
            return {
                compile: function (tElm, tAttrs) {
                    if (!tAttrs.type || tAttrs.type.toLowerCase() !== "checkbox") {
                        return angular.noop;
                    }
                    return function ($scope, elm, attrs) {
                        $scope.$watch(attrs.mwIndeterminate, function (newVal) {
                            elm[0].indeterminate = !!newVal;
                        });
                    };
                }
            };
        }
        UI.mwIndeterminate = mwIndeterminate;
        ;
        UI.module.directive("mwIndeterminate", mwIndeterminate);
        function mwSimpleCheckbox() {
            return {
                restrict: "E",
                transclude: true,
                templateUrl: "mw-checkbox/mw-simple-checkbox-view.html",
                controller: "MwSimpleCheckboxCtrl",
                controllerAs: "mwSimpleCheckboxCtrl",
                scope: {
                    model: "=",
                    indeterminate: "=",
                    id: "@",
                    label: "@",
                    isDisabled: "=",
                    onChange: "&"
                }
            };
        }
        UI.mwSimpleCheckbox = mwSimpleCheckbox;
        ;
        UI.module.directive("mwSimpleCheckbox", mwSimpleCheckbox);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Directive qui permet de modifier la propriété inderterminate d'une case à cocher
         */
        function mwIndeterminateTroisEtats($compile) {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    // Initialisation de la propriété indeterminate 
                    element[0].indeterminate = scope.$eval(attrs["indeterminate"]);
                    // Modifier la propriété indeterminate sur le changement de l'attribut indeterminate
                    scope.$watch(function () { return attrs["indeterminate"]; }, function (newValue, oldValue) {
                        if (oldValue !== newValue) {
                            element[0].indeterminate = newValue;
                            $compile(element)(scope);
                        }
                    });
                }
            };
        }
        UI.mwIndeterminateTroisEtats = mwIndeterminateTroisEtats;
        UI.module.directive("mwIndeterminateTroisEtats", ["$compile", mwIndeterminateTroisEtats]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        UI.module.directive("mwClearButton", [
            "$compile",
            "$timeout",
            function ($compile, $timeout) {
                return {
                    require: "ngModel",
                    scope: {},
                    link: function (scope, el, attrs, ngModelCtrl) {
                        // limit to input element of specific types
                        var inputTypes = /text|search|tel|url|email|password|number/i;
                        if (el[0].nodeName !== "INPUT" && el[0].nodeName !== "TEXTAREA") {
                            throw new Error("mwClearButton is limited to input elements");
                        }
                        if (el[0].nodeName === "INPUT" && attrs.type === undefined) {
                            !!console.error
                                ? console.error("[ERROR][MyWay.UI][mwClearButton] Aucun type définit pour l'input " +
                                    el[0].nodeName +
                                    ". La directive mw-clear-button ne peut pas fonctionner correctement.")
                                : console.log("[ERROR][MyWay.UI][mwClearButton] Aucun type définit pour l'input " +
                                    el[0].nodeName +
                                    ". La directive mw-clear-button ne peut pas fonctionner correctement.");
                        }
                        if (el[0].nodeName === "INPUT" && !inputTypes.test(attrs.type)) {
                            !!console.error
                                ? console.error("[ERROR][MyWay.UI][mwClearButton] Le type définit pour l'input " +
                                    el[0].nodeName +
                                    " est " +
                                    attrs.type +
                                    ". La directive mw-clear-button ne peut pas fonctionner correctement. Seuls les types text|search|tel|url|email|password|number sont pris en charge.")
                                : console.log("[ERROR][MyWay.UI][mwClearButton] Le type définit pour l'input " +
                                    el[0].nodeName +
                                    " est " +
                                    attrs.type +
                                    ". La directive mw-clear-button ne peut pas fonctionner correctement. Seuls les types text|search|tel|url|email|password|number sont pris en charge.");
                            throw new Error("mwClearButton input type for mwClearButton: " + attrs.type);
                        }
                        var idStr = attrs.id ? 'id="' + attrs.id + '-mwClearButton"' : "";
                        var nameStr = attrs.name ? 'name="' + attrs.name + '-mwClearButton"' : "";
                        var labelnomsupprimer = el[0].parentNode.previousElementSibling
                            ? "Effacer le champ : " + el[0].parentNode.previousElementSibling.textContent
                            : "";
                        var wrapper = angular.element('<div class="form-control-wrapper">');
                        var button = $compile('<button ng-show="enabled" type="button" class="adobe-blank form-control-icon resetbt" ng-click="reset()" title="' +
                            labelnomsupprimer +
                            '" ' +
                            idStr +
                            " " +
                            nameStr +
                            ' ><span aria-hidden="true" class="myanimate icon itce-times-circle"></span></button>')(scope);
                        el.wrap(wrapper);
                        el.after(button);
                        scope.reset = function resetInput() {
                            if (!el[0].disabled) {
                                el.val("");
                                ngModelCtrl.$setViewValue(null);
                                ngModelCtrl.$render();
                                $timeout(function () {
                                    el[0].focus();
                                }, 0, false);
                            }
                        };
                        el.bind("input", function () {
                            scope.enabled = !el[0].disabled ? !ngModelCtrl.$isEmpty(el.val()) : false;
                        });
                        var modelValueSub = scope.$watch(function getModelValue() { return ngModelCtrl.$modelValue; }, function onChangeModelValue(newVal) {
                            if (el[0].disabled || ((!newVal || newVal === "") && scope.enabled)) {
                                scope.enabled = false;
                            }
                            else if (!el[0].disabled && newVal && newVal !== "" && !scope.enabled) {
                                scope.enabled = true;
                            }
                        });
                        var disabledInputSub = scope.$watch(function getDisabledState() { return el[0].disabled; }, function onChangeDisabledState(isDisabled) {
                            if (isDisabled || ((!ngModelCtrl.$modelValue || ngModelCtrl.$modelValue === "") && scope.enabled)) {
                                scope.enabled = false;
                            }
                            else if (!isDisabled && ngModelCtrl.$modelValue && ngModelCtrl.$modelValue !== "" && !scope.enabled) {
                                scope.enabled = true;
                            }
                        });
                        scope.$on("$destroy", function () {
                            !!modelValueSub && modelValueSub();
                            !!disabledInputSub && disabledInputSub();
                        });
                    },
                };
            },
        ]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var DatatableColumn = (function () {
            function DatatableColumn(field) {
                this.field = field;
                this.orderable = false;
                this.filterable = false;
            }
            return DatatableColumn;
        })();
        UI.DatatableColumn = DatatableColumn;
        UI.module.controller("datatableColumn", DatatableColumn);
        var Datatable = (function () {
            function Datatable(filterFilter, orderByFilter) {
                this.items = this.filteredItems = this.orderedItems = this.displayedItems = this.selectedItems = [];
                this.filter = {};
                this.order = {};
                this.filterFilter = filterFilter;
                this.orderByFilter = orderByFilter;
                this.orderable = false;
                this.filterable = false;
                this.datatableColumnList = [];
            }
            // Inititiation de la liste Items
            Datatable.prototype.setItems = function (items) {
                this.items = items;
                this.refreshFilteredItems();
                var datatableSelection = new DatatableSelection();
                datatableSelection.calculatePartialSelected(this.selectedItems, this.orderedItems);
            };
            Datatable.prototype.refreshFilteredItems = function () {
                this.filteredItems = this.items;
                if (this.filter.expression) {
                    this.filteredItems = this.filterFilter(this.filteredItems, this.filter.expression, this.filter.comparator);
                }
                this.refreshOrderedItems();
            };
            Datatable.prototype.refreshOrderedItems = function () {
                this.orderedItems = this.filteredItems;
                if (this.order.expression) {
                    this.orderedItems = this.orderByFilter(this.orderedItems, this.order.expression, this.order.reverse);
                }
                this.refreshDisplayedItems();
            };
            Datatable.prototype.refreshDisplayedItems = function () {
                this.displayedItems = this.orderedItems;
            };
            // Inititiation de la liste selectedItems
            Datatable.prototype.setSelectedItems = function (selectedItems) {
                this.selectedItems = selectedItems;
                var datatableSelection = new DatatableSelection();
                datatableSelection.calculatePartialSelected(this.selectedItems, this.orderedItems);
            };
            // Récupérer datatableColumn by field
            Datatable.prototype.getDatatableColumn = function (field) {
                this.datatableColumnList.forEach(function (datatableColumn) {
                    if (datatableColumn.field === field) {
                        return datatableColumn;
                    }
                });
            };
            // Enregistrement des options pour les colonnes
            Datatable.prototype.registerDatatableColumn = function (datatableColumn) {
                this.datatableColumnList.push(datatableColumn);
            };
            // Changement de la valeur de la propriétés ordre pour toutes les colonnes
            Datatable.prototype.setDatatableColumnOrderable = function (orderable) {
                this.datatableColumnList.forEach(function (datatableColumn) {
                    datatableColumn.orderable = orderable;
                });
            };
            // Changement de la valeur de la propriétés filtre pour toutes les colonnes
            Datatable.prototype.setDatatableColumnFilterable = function (filterable) {
                this.datatableColumnList.forEach(function (datatableColumn) {
                    datatableColumn.filterable = filterable;
                });
            };
            Datatable.$inject = ["filterFilter", "orderByFilter", "limitToFilter"];
            return Datatable;
        })();
        UI.Datatable = Datatable;
        UI.module.controller("datatable", Datatable);
        var DatatableSelection = (function () {
            function DatatableSelection() {
                this.isAllSelected = false;
                this.isPartialSelected = false;
            }
            // Calcule la valeur de la case à cocher globale
            DatatableSelection.prototype.calculatePartialSelected = function (selectedItems, orderedItems) {
                if (selectedItems.length !== orderedItems.length && selectedItems.length !== 0) {
                    return true;
                }
                else {
                    this.isPartialSelected = false;
                    if (this.isAllSelected = (selectedItems.length === 0)) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            };
            // Fonction pour ajouter ou supprimer tout les items de la liste des items cochés
            DatatableSelection.prototype.setAllNoneSelected = function (selectedItems, orderedItems) {
                if (!this.isAllSelected) {
                    selectedItems = angular.copy(orderedItems);
                    this.isAllSelected = true;
                }
                else {
                    selectedItems = [];
                    this.isAllSelected = false;
                }
                this.calculatePartialSelected(selectedItems, orderedItems);
            };
            return DatatableSelection;
        })();
        UI.DatatableSelection = DatatableSelection;
        UI.module.controller("datatableSelection", DatatableSelection);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var DatatableColumnOptions = (function () {
            function DatatableColumnOptions(field) {
                this.field = field;
                this.orderable = false;
                this.filterable = false;
            }
            return DatatableColumnOptions;
        })();
        UI.DatatableColumnOptions = DatatableColumnOptions;
        var DatatableOptions = (function () {
            function DatatableOptions() {
                this.orderable = false;
                this.filterable = false;
                this.datatableColumnOptionsList = [];
            }
            // En registrement des options pour les colonnes
            DatatableOptions.prototype.registerDatatableColumnOptions = function (datatableColumOptions) {
                this.datatableColumnOptionsList.push(datatableColumOptions);
            };
            // Changement de la valeur de la propriétés ordre pour toutes les colonnes
            DatatableOptions.prototype.setDatatableColumnOptionsOrderable = function (orderable) {
                this.datatableColumnOptionsList.forEach(function (datatableColumOptions) {
                    datatableColumOptions.orderable = orderable;
                });
            };
            // Changement de la valeur de la propriétés filtre pour toutes les colonnes
            DatatableOptions.prototype.setDatatableColumnOptionsFilterable = function (filterable) {
                this.datatableColumnOptionsList.forEach(function (datatableColumOptions) {
                    datatableColumOptions.filterable = filterable;
                });
            };
            return DatatableOptions;
        })();
        UI.DatatableOptions = DatatableOptions;
        var MwDatatable = (function () {
            function MwDatatable(filterFilter, orderByFilter) {
                this.items = this.filteredItems = this.orderedItems = this.displayedItems = this.selectedItems = [];
                this.filter = {};
                this.order = {};
                this.pagination = { pageIndex: 1, pageSize: 0, pageNumber: 0 };
                this.numberOfPages = 0;
                this.filterFilter = filterFilter;
                this.orderByFilter = orderByFilter;
                this.datatableOptions = new DatatableOptions();
                this.isAllSelected = false;
                this.isPartialSelected = false;
                this.selectionMode = "single";
            }
            // Inititiation de la liste Items
            MwDatatable.prototype.setItems = function (items) {
                this.items = items;
                this.refreshFilteredItems();
                this.calculatePartialSelected();
            };
            // Inititiation de la liste selectedItems
            MwDatatable.prototype.setSelectedItems = function (selectedItems) {
                this.selectedItems = selectedItems;
                this.calculatePartialSelected();
            };
            // Calcule la valeur de la case à cocher globale
            MwDatatable.prototype.calculatePartialSelected = function () {
                if (this.selectedItems.length !== this.orderedItems.length && this.selectedItems.length !== 0) {
                    this.isPartialSelected = true;
                }
                else {
                    this.isPartialSelected = false;
                    this.isAllSelected = (this.selectedItems.length === 0) ? false : true;
                }
            };
            // Fonction pour ajouter ou supprimer tout les items de la liste des items cochés
            MwDatatable.prototype.setAllNoneSelected = function () {
                if (!this.isAllSelected) {
                    this.selectedItems = angular.copy(this.orderedItems);
                    this.isAllSelected = true;
                }
                else {
                    this.selectedItems = [];
                    this.isAllSelected = false;
                }
                this.calculatePartialSelected();
            };
            // Fonction pour ajouter ou supprimer un item de la liste des items cochés
            MwDatatable.prototype.changeSelectedItemValue = function (item) {
                // TODO : Lancer événement
                // Ajouter/supprimer à la liste des lignes cochées
                if (!this.contains(this.selectedItems, item)) {
                    this.selectedItems.push(item);
                }
                else {
                    var index = this.containsIndex(this.selectedItems, item);
                    if (index !== -1) {
                        this.selectedItems.splice(index, 1);
                    }
                }
                this.calculatePartialSelected();
            };
            // Fonction pour définir les valeurs pour la pagination
            MwDatatable.prototype.setPagination = function (pageSize, pageNumber) {
                this.pagination.pageSize = pageSize;
                this.pagination.pageNumber = pageNumber;
            };
            MwDatatable.prototype.refreshFilteredItems = function () {
                this.filteredItems = this.items;
                if (this.filter.expression) {
                    this.filteredItems = this.filterFilter(this.filteredItems, this.filter.expression, this.filter.comparator);
                }
                this.refreshOrderedItems();
            };
            MwDatatable.prototype.refreshOrderedItems = function () {
                this.orderedItems = this.filteredItems;
                if (this.order.expression) {
                    this.orderedItems = this.orderByFilter(this.orderedItems, this.order.expression, this.order.reverse);
                }
                this.refreshDisplayedItems();
            };
            MwDatatable.prototype.refreshDisplayedItems = function () {
                this.displayedItems = this.orderedItems;
                // Calculer les items à afficher
                var begin = (this.pagination.pageIndex - 1) * this.pagination.pageSize;
                var end = begin + this.pagination.pageSize;
                this.displayedItems = this.displayedItems.slice(begin, end);
                // Calculer nombre de page
                this.refreshPageNumber();
            };
            MwDatatable.prototype.refreshPageNumber = function () {
                var cal = Math.ceil((this.orderedItems.length / this.pagination.pageSize));
                this.numberOfPages = (cal !== 0) ? cal : 1;
            };
            MwDatatable.prototype.clearFilter = function () {
                this.filter = {};
                this.refreshFilteredItems();
            };
            MwDatatable.prototype.filterBy = function (field, customExpression, comparator) {
                this.filter.field = field;
                this.filter.customExpression = customExpression;
                this.filter.comparator = comparator;
                this.refreshFilteredItems();
            };
            MwDatatable.prototype.setFilterValue = function (value) {
                this.filter.value = value;
                this.filter.expression = this.filter.customExpression && this.filter.customExpression(value);
                this.refreshFilteredItems();
            };
            MwDatatable.prototype.orderBy = function (field, expression, reverse) {
                this.order.field = field;
                this.order.expression = expression || field;
                this.order.reverse = reverse;
                this.refreshOrderedItems();
            };
            MwDatatable.prototype.contains = function (arr, obj) {
                for (var i = 0; i < arr.length; i++) {
                    if (angular.equals(obj, arr[i])) {
                        return true;
                    }
                }
                return false;
            };
            MwDatatable.prototype.containsIndex = function (arr, obj) {
                for (var i = 0; i < arr.length; i++) {
                    if (angular.equals(obj, arr[i])) {
                        return i;
                    }
                }
                return -1;
            };
            MwDatatable.$inject = ["filterFilter", "orderByFilter", "limitToFilter"];
            return MwDatatable;
        })();
        UI.MwDatatable = MwDatatable;
        UI.module.controller("mwDatatable", MwDatatable);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function datatable($parse, $templateCache, $compile, $log) {
            return {
                restrict: "A",
                controller: "datatable",
                controllerAs: "datatableCtrl",
                link: function (scope, element, attrs, ctrl) {
                    // Données
                    scope.$watchCollection(attrs.items, function (newValue, oldValue) {
                        ctrl.setItems(newValue);
                    });
                    scope.$watchCollection(attrs.selectedItems, function (newValue, oldValue) {
                        ctrl.setSelectedItems(newValue);
                    });
                    // Copie du controleur Datatable dans scope
                    if (attrs.datatable) {
                        $parse(attrs.datatable).assign(scope, ctrl);
                    }
                }
            };
        }
        UI.datatable = datatable;
        ;
        UI.module.directive("datatable", ["$parse", "$templateCache", "$compile", datatable]);
        function datatableField() {
            return {
                restrict: "A",
                require: "^datatable",
                link: function (scope, element, attrs, ctrl) {
                    // Objet des options des colonnes
                    var datatableColumn = new UI.DatatableColumn(attrs.mwDatatableField);
                    ctrl.registerDatatableColumn(datatableColumn);
                }
            };
        }
        UI.datatableField = datatableField;
        ;
        UI.module.directive("datatableField", datatableField);
        function filterable($templateCache, $compile) {
            return {
                restrict: "A",
                priority: 1009,
                require: "^datatable",
                link: function (scope, element, attrs, ctrl) {
                    // Objet des options des colonnes
                    var datatableColumn = ctrl.getDatatableColumn(attrs.mwDatatableField);
                    if (angular.isDefined(datatableColumn)) {
                        datatableColumn.filterable = attrs.filterable;
                    }
                    //Template
                    var filter = angular.element($templateCache.get("mw-datatable/mw-datatable-filtre-view.html"));
                    $compile(filter)(scope);
                    element.append(filter);
                }
            };
        }
        UI.filterable = filterable;
        ;
        UI.module.directive("filterable", ["$templateCache", "$compile", filterable]);
        function orderable($templateCache, $compile) {
            return {
                restrict: "A",
                priority: 1010,
                require: "^datatable",
                link: function (scope, element, attrs, ctrl) {
                    console.log("orderable", element);
                    // Objet des options des colonnes
                    var datatableColumn = new UI.DatatableColumn(attrs.mwDatatableField);
                    ctrl.registerDatatableColumn(datatableColumn);
                    var order = angular.element($templateCache.get("mw-datatable/mw-datatable-tri-view.html"));
                    $compile(order)(scope);
                    element.append(order);
                }
            };
        }
        UI.orderable = orderable;
        ;
        UI.module.directive("orderable", ["$templateCache", "$compile", orderable]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwDatatable($parse, $templateCache, $compile, $log) {
            return {
                restrict: "A",
                controller: "mwDatatable",
                controllerAs: "mwDatatableCtrl",
                link: function (scope, element, attrs, ctrl) {
                    // Données
                    scope.$watchCollection(attrs.selectedItems, function (newValue, oldValue) {
                        ctrl.setSelectedItems(newValue);
                    });
                    scope.$watchCollection(attrs.items, function (newValue, oldValue) {
                        ctrl.setItems(newValue);
                    });
                    // Traiment changement valeur ordre global
                    scope.$watch(function () { return attrs.orderable; }, function (newValue, oldValue) {
                        if (oldValue !== newValue) {
                            ctrl.datatableOptions.orderable = newValue;
                            ctrl.datatableOptions.setDatatableColumnOptionsOrderable(ctrl.datatableOptions.orderable);
                        }
                    });
                    // Traitement changement valeur filtre global
                    scope.$watch(function () { return attrs.filterable; }, function (newValue, oldValue) {
                        if (oldValue !== newValue) {
                            ctrl.datatableOptions.filterable = newValue;
                            ctrl.datatableOptions.setDatatableColumnOptionsFilterable(ctrl.datatableOptions.orderable);
                        }
                    });
                    // Initialisation de la pagination
                    if (attrs.pageSize && attrs.pageNumber) {
                        ctrl.setPagination(parseInt(attrs.pageSize), parseInt(attrs.pageNumber));
                    }
                    scope.$watch(function () { return ctrl.pagination.pageIndex; }, function (newValue, oldValue) {
                        if (oldValue !== newValue) {
                            ctrl.refreshDisplayedItems();
                        }
                    });
                    // Traitement de la selection multi-lignes 
                    scope.$watch(function () { return ctrl.selectionMode; }, function (newValue, oldValue) {
                        if (oldValue !== newValue) {
                            ctrl.selectionMode = newValue;
                        }
                    });
                    // Copie du controleur mwDatatable dans scope
                    if (attrs.mwDatatable) {
                        $parse(attrs.mwDatatable).assign(scope, ctrl);
                    }
                }
            };
        }
        UI.mwDatatable = mwDatatable;
        ;
        UI.module.directive("mwDatatable", ["$parse", "$templateCache", "$compile", mwDatatable]);
        function mwDatatableField($parse, $templateCache, $compile) {
            return {
                restrict: "A",
                require: "^mwDatatable",
                link: function (scope, element, attrs, ctrl) {
                    var wrapper;
                    // Objet des options des colonnes
                    var datatableColumnOptions = new UI.DatatableColumnOptions(attrs.mwDatatableField);
                    datatableColumnOptions.orderable = scope.$eval(attrs["orderable"]);
                    datatableColumnOptions.filterable = scope.$eval(attrs["filterable"]);
                    ctrl.datatableOptions.registerDatatableColumnOptions(datatableColumnOptions);
                    if (attrs.hasOwnProperty("filterable")) {
                        //Template
                        wrapper = angular.element($templateCache.get("mw-datatable/mw-datatable-filtre-view.html"));
                        $compile(wrapper)(scope);
                        element.append(wrapper);
                        // Traiter le changement de la valeur du filtre global
                        scope.$watch(function () { return ctrl.datatableOptions.filterable; }, function (newValue, oldValue) {
                            if (oldValue !== newValue) {
                                if (angular.isDefined(scope.$eval(newValue || attrs.filterable))) {
                                    bindUnbindClickFilter(scope, $compile, wrapper, attrs, ctrl, datatableColumnOptions, $parse, scope.$eval(newValue || attrs.filterable));
                                }
                            }
                        });
                        // Traitement de la valeur du filtre local à l'initialisation
                        bindUnbindClickFilter(scope, $compile, wrapper, attrs, ctrl, datatableColumnOptions, $parse, scope.$eval(attrs.filterable));
                        // Suppression des events à la destruction du scope
                        scope.$on("$destroy", function () {
                            element.unbind("click");
                        });
                    }
                    if (attrs.hasOwnProperty("orderable")) {
                        //Template
                        wrapper = angular.element($templateCache.get("mw-datatable/mw-datatable-tri-view.html"));
                        $compile(wrapper)(scope);
                        element.append(wrapper);
                        // Traiter le changement de la valeur d'ordre global
                        scope.$watch(function () { return ctrl.datatableOptions.orderable; }, function (newValue, oldValue) {
                            if (oldValue !== newValue) {
                                if (angular.isDefined(scope.$eval(newValue || attrs.orderable))) {
                                    bindUnbindClickOrder(scope, $compile, element, attrs, ctrl, datatableColumnOptions, $parse, scope.$eval(newValue || attrs.orderable));
                                }
                            }
                        });
                        // Traitement de la valeur d'ordre local à l'initialisation
                        bindUnbindClickOrder(scope, $compile, element, attrs, ctrl, datatableColumnOptions, $parse, scope.$eval(attrs.orderable));
                        // Suppression des events à la destruction du scope
                        scope.$on("$destroy", function () {
                            element.unbind("click");
                        });
                    }
                }
            };
        }
        UI.mwDatatableField = mwDatatableField;
        ;
        UI.module.directive("mwDatatableField", ["$parse", "$templateCache", "$compile", mwDatatableField]);
        function mwDatatableFilters($parse) {
            return {
                restrict: "A",
                require: "^mwDatatable",
                link: function (scope, element, attrs, ctrl) {
                    var fields = {};
                    angular.forEach(element.find("*"), function (el) {
                        var element = angular.element(el);
                        var field = element.attr("field");
                        if (field) {
                            fields[field] = element;
                        }
                    });
                    // TODO : template
                    var searchInput = angular.element("<input type=\"text\">");
                    searchInput.bind("input", function () {
                        ctrl.setFilterValue(searchInput.val());
                        scope.$apply();
                    });
                    scope.$watch(function () {
                        return ctrl.filter.field;
                    }, function (field) {
                        if (!field || !fields[field]) {
                            element.addClass("ng-hide");
                            // Sur la fermeture de la ligne de filtre, l'icone du filtre ne doit plus être actif
                            var listeButton = angular.element(element.parent()).find("button");
                            angular.forEach(listeButton, function (button) {
                                if (angular.element(button).hasClass("btn-filtre")) {
                                    angular.element(button).removeClass("actif");
                                }
                            });
                        }
                        else {
                            element.removeClass("ng-hide");
                            searchInput.val("");
                            ctrl.setFilterValue();
                            fields[field].append(searchInput);
                            searchInput[0].focus();
                        }
                    });
                    // Suppression des events à la destruction du scope
                    scope.$on("$destroy", function () {
                        element.unbind("input");
                    });
                }
            };
        }
        UI.mwDatatableFilters = mwDatatableFilters;
        ;
        UI.module.directive("mwDatatableFilters", ["$parse", mwDatatableFilters]);
        function mwDatatableSelection($compile, $templateCache) {
            return {
                restrict: "A",
                require: "^mwDatatable",
                templateUrl: getSelectionTemplate,
                link: function (scope, element, attrs, ctrl) { }
            };
        }
        UI.mwDatatableSelection = mwDatatableSelection;
        ;
        UI.module.directive("mwDatatableSelection", ["$compile", "$templateCache", mwDatatableSelection]);
        // Récupération du template case à cocher en fonction du type (entête ou ligne)
        function getSelectionTemplate(tElement, tAttrs) {
            return (tElement[0].nodeName === "TH") ? "mw-datatable/mw-datatable-checkbox-head-view.html" : "mw-datatable/mw-datatable-checkbox-body-view.html";
        }
        ;
        // Fonction d'ajout ou de suppression de l'événement click sur le header (et le bouton) de la colonne (pour le tri) + style
        function bindUnbindClickOrder(scope, $compile, element, attrs, ctrl, datatableColumnOptions, $parse, isBind) {
            var buttonActif;
            // Récupération du bouton tri et affichage du bouton en fonction de isBind (correspond à l'affichage bouton ou non)
            var listeButton = angular.element(element).find("button");
            angular.forEach(listeButton, function (button) {
                if (angular.element(button).hasClass("btn-tri")) {
                    buttonActif = button;
                    angular.element(button).attr("ng-show", isBind.toString());
                    $compile(button)(scope);
                }
            });
            if (isBind) {
                element.bind("click", function () {
                    // Rends tout les boutons non actifs
                    var listeTh = angular.element(element[0].parentNode).find("th");
                    angular.forEach(listeTh, function (th) {
                        var listeButton = angular.element(th).find("button");
                        angular.forEach(listeButton, function (button) {
                            if (angular.element(button).hasClass("btn-tri")) {
                                angular.element(button).removeClass("actif");
                            }
                        });
                    });
                    // Rends le bouton cliqué actif
                    angular.element(buttonActif).addClass("actif");
                    var expression = attrs.orderExpression && $parse(attrs.orderExpression)(scope);
                    var reverse = datatableColumnOptions.field === ctrl.order.field && !ctrl.order.reverse;
                    ctrl.orderBy(datatableColumnOptions.field, expression, reverse);
                    scope.$apply();
                    event.stopPropagation();
                });
            }
            else {
                element.unbind("click");
            }
        }
        // Fonction d'ajout ou de suppression de l'événement click sur le header (et le bouton) de la colonne (pour le filtre) + style
        function bindUnbindClickFilter(scope, $compile, element, attrs, ctrl, datatableColumnOptions, $parse, isBind) {
            // Récupération du bouton filtre et affichage du bouton en fonction de isBind (correspond à l'affichage bouton ou non)
            angular.element(element).attr("ng-show", isBind.toString());
            $compile(element)(scope);
            if (isBind) {
                element.bind("click", function () {
                    // Rends tout les boutons non actifs
                    var listeTh = angular.element(element[0].parentNode).find("th");
                    angular.forEach(listeTh, function (th) {
                        var listeButton = angular.element(th).find("button");
                        angular.forEach(listeButton, function (button) {
                            if (angular.element(button).hasClass("btn-filtre")) {
                                angular.element(button).removeClass("actif");
                            }
                        });
                    });
                    // Rends le bouton cliqué actif
                    element.addClass("actif");
                    if (datatableColumnOptions.field === ctrl.filter.field) {
                        ctrl.clearFilter();
                    }
                    else {
                        var customExpression = getCustomExpression(scope);
                        var comparator;
                        ctrl.filterBy(datatableColumnOptions.field, customExpression, comparator);
                    }
                    scope.$apply();
                    event.stopPropagation();
                });
            }
            else {
                element.unbind("click");
            }
            function getCustomExpression(scope) {
                if (attrs.filterExpression) {
                    var customExpression = $parse(attrs.filterExpression);
                    return function (value) {
                        return customExpression(scope, { mwFilterValue: value });
                    };
                }
                else {
                    var fieldSetter = $parse(datatableColumnOptions.field);
                    return function (value) {
                        var customExpression = {};
                        fieldSetter.assign(customExpression, value);
                        return customExpression;
                    };
                }
            }
        }
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Énumération listant les état possible du composant.
         *
         */
        (function (ComboboxState) {
            ComboboxState[ComboboxState["onInit"] = 0] = "onInit";
            ComboboxState[ComboboxState["onFocus"] = 1] = "onFocus";
            ComboboxState[ComboboxState["onClick"] = 2] = "onClick";
            ComboboxState[ComboboxState["onSelect"] = 3] = "onSelect";
            ComboboxState[ComboboxState["onClose"] = 4] = "onClose";
            ComboboxState[ComboboxState["onOpen"] = 5] = "onOpen";
            ComboboxState[ComboboxState["onQuit"] = 6] = "onQuit";
            ComboboxState[ComboboxState["onGetMatchesAsync"] = 7] = "onGetMatchesAsync";
        })(UI.ComboboxState || (UI.ComboboxState = {}));
        var ComboboxState = UI.ComboboxState;
        /**
         * Controleur de la directive mw-combobox
         */
        var ComboboxController = (function () {
            /**
             * Constructeur
             */
            function ComboboxController(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, comboboxParser) {
                var _this = this;
                this.originalScope = originalScope;
                this.element = element;
                this.$parse = $parse;
                this.$q = $q;
                this.$timeout = $timeout;
                this.$position = $position;
                this.HOT_KEYS = [9, 13, 27, 38, 40];
                this.eventDebounceTime = 200;
                /**
                 * Recalcule le contenu de la liste filtré par la valeur du champ
                 */
                this.getMatchesAsync = function (inputValue, evt) {
                    var _this = this;
                    var locals = { $viewValue: inputValue };
                    this.isLoadingSetter(this.originalScope, true);
                    this.isNoResultsSetter(this.originalScope, false);
                    this.$q.when(this.parserResult.source(this.originalScope, locals)).then(function (matches) {
                        //it might happen that several async queries were in progress if a user were typing fast
                        //but we are interested only in responses that correspond to the current view value
                        _this.resultGetMatches.matches = matches;
                        _this.resultGetMatches.locals = locals;
                        var onCurrentRequest = inputValue === _this.modelCtrl.$viewValue;
                        if (onCurrentRequest) {
                            if (matches && matches.length > 0) {
                                _this.scope.activeIdx = _this.focusFirst ? 0 : -1;
                                _this.isNoResultsSetter(_this.originalScope, false);
                                _this.scope.matches.length = 0;
                                //transform labels
                                var limit = Math.min(_this.originalScope.$pageCount * _this.itemPerPage, matches.length);
                                var activeIdx = -1;
                                if (inputValue && inputValue.length > 0) {
                                    matches.some(function (match, index) {
                                        if (typeof match.label !== "undefined" && inputValue.toUpperCase() === match.label.toUpperCase()) {
                                            _this.scope.activeIdx = activeIdx = index;
                                            return true;
                                        }
                                    });
                                }
                                if (limit <= activeIdx) {
                                    limit = Math.min(activeIdx + 1 + _this.itemPerPage, matches.length);
                                    _this.originalScope.$pageCount = Math.ceil(limit / _this.itemPerPage);
                                }
                                for (var i = 0; i < limit; i++) {
                                    locals[_this.parserResult.itemName] = matches[i];
                                    _this.scope.matches.push({
                                        id: _this.getMatchId(i),
                                        label: _this.parserResult.viewMapper(_this.scope, locals),
                                        model: matches[i]
                                    });
                                }
                                _this.scope.query = inputValue;
                                //position pop-up with matches - we need to re-calculate its position each time we are opening a window
                                //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
                                //due to other elements being rendered
                                _this.recalculatePosition();
                                _this.element.attr("aria-expanded", true);
                                //Select the single remaining option if user input matches
                                if (_this.selectOnExact && _this.scope.matches.length > 0 && _this.inputIsExactMatch(inputValue, 0)) {
                                    if (angular.isNumber(_this.scope.debounceUpdate) || angular.isObject(_this.scope.debounceUpdate)) {
                                        _this.$$debounce(function () {
                                            this.scope.select(0, evt);
                                        }, angular.isNumber(_this.scope.debounceUpdate)
                                            ? _this.scope.debounceUpdate
                                            : _this.scope.debounceUpdate["default"]);
                                    }
                                    else {
                                        _this.scope.select(0, evt);
                                    }
                                }
                                if (_this.showHint) {
                                    var firstLabel = _this.scope.matches[0].label;
                                    if (angular.isString(inputValue) &&
                                        inputValue.length > 0 &&
                                        firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
                                        _this.hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
                                    }
                                    else {
                                        _this.hintInputElem.val("");
                                    }
                                }
                                //Scroll to the activated match
                                _this.$timeout(function () {
                                    var target = _this.popUpEl[0].querySelectorAll(".mw-combobox-match")[_this.scope.activeIdx];
                                    if (target) {
                                        target.parentNode.scrollTop = target.offsetTop;
                                    }
                                }, 300);
                            }
                            else {
                                _this.scope.matches = [];
                                _this.resetMatches();
                                _this.isNoResultsSetter(_this.originalScope, true);
                            }
                            //même si pas de liste on recalcule pour afficher le guidage
                            _this.recalculatePosition();
                        }
                        if (onCurrentRequest) {
                            _this.isLoadingSetter(_this.originalScope, false);
                        }
                    }, function () {
                        this.resetMatches();
                        this.isLoadingSetter(this.originalScope, false);
                        this.isNoResultsSetter(this.originalScope, true);
                    });
                }; //FIN getMatchesAsync
                //Gestionde la pagination
                this.originalScope.$pageCount = 2;
                //Sauvegarde du resultat du recalcul de la liste
                this.resultGetMatches = {
                    matches: [],
                    locals: {}
                };
                this.state = ComboboxState.onInit;
                //SUPPORTED ATTRIBUTES (OPTIONS)
                //Nombre minimal de caractères à saisir avant que la directive lance le filtrage de la liste
                // ATTENTION : Comme la liste s'ouvre sur focus même lorsqu'il n'y a aucune saisie, plus besoin de gérer cet attribut !
                /*this.minLength = this.originalScope.$eval(attrs.mwComboboxMinLength);
                if (!this.minLength && this.minLength !== 0) {
                    this.minLength = 1;
                }
    
                this.originalScope.$watch(attrs.mwComboboxMinLength, function (newVal: any) {
                    this.minLength = !newVal && newVal !== 0 ? 1 : newVal;
                });*/
                this.minLength = 0;
                //Temps d'attente minimum après que le dernier caractères soit saisi pour lancer le filtrage de la liste
                this.waitTime = this.originalScope.$eval(attrs.mwComboboxWaitMs) || 0;
                //Element par page de scroll
                this.itemPerPage =
                    (attrs.mwComboboxItemPerPage || "").toLowerCase() === "infinity"
                        ? Infinity
                        : this.originalScope.$eval(attrs.mwComboboxItemPerPage) || 8;
                //Faut-il restreindre la valeur du modele uniquement à une valeur de la liste?
                this.isAutocomplete =
                    this.originalScope.$eval(attrs.mwComboboxAutocomplete) === true ||
                        this.originalScope.$eval(attrs.mwComboboxEditable) === true;
                this.originalScope.$watchGroup([attrs.mwComboboxAutocomplete, attrs.mwComboboxEditable], function (newValues) {
                    _this.isAutocomplete = newValues[0] === true || newValues[1] === true;
                });
                //liaison vers une variable qui indique si le recalcul de la liste est en cours.
                this.isLoadingSetter = $parse(attrs.mwComboboxLoading).assign || angular.noop;
                //a function to determine if an event should cause selection
                this.isSelectEvent = attrs.mwComboboxShouldSelect
                    ? $parse(attrs.mwComboboxShouldSelect)
                    : function (scope, vals) {
                        var evt = vals.$event;
                        return evt.which === 13 || evt.which === 9;
                    };
                /**
                 * une fonction utilisée dans filterPredicateWrapper
                 */
                this.filterPredicate = attrs.mwComboboxFilterPredicate ? $parse(attrs.mwComboboxFilterPredicate) : null;
                /**
                 * la fonction prédicat passée au filtre angularJs
                 */
                this.filterPredicateWrapper = function (item) {
                    return _this.filterPredicate
                        ? _this.filterPredicate(_this.originalScope, {
                            $event: {
                                viewValue: _this.modelCtrl.$viewValue,
                                item: item
                            }
                        })
                        : true;
                };
                // défintion de la fonction prédicat pour le filtre personnalisé
                this.originalScope.filterPredicateWrapper = this.filterPredicateWrapper.bind(this);
                //a callback executed when a match is selected
                this.onSelectCallback = $parse(attrs.mwComboboxOnSelect);
                //a callback executed when a bottomAction on popup is clicked
                this.onBottomActionCallback = $parse(attrs.mwComboboxOnBottomAction);
                // Click action on magnifying glass
                this.autocompleteAction = attrs.mwComboboxAutocompleteAction && $parse(attrs.mwComboboxAutocompleteAction);
                var autocompleteActionIsDefined = true;
                if (typeof this.autocompleteAction !== "function") {
                    autocompleteActionIsDefined = false;
                    this.autocompleteAction = angular.noop;
                }
                //Sur la perte de focus, sélection de l'élément actif?
                this.isSelectOnBlur = angular.isDefined(attrs.mwComboboxSelectOnBlur)
                    ? this.originalScope.$eval(attrs.mwComboboxSelectOnBlur)
                    : false;
                //Liaison vers une variable qui indique si aucun résultat n'a été trouvé
                this.isNoResultsSetter = $parse(attrs.mwComboboxNoResults).assign || angular.noop;
                this.inputFormatter = attrs.mwComboboxInputFormatter ? $parse(attrs.mwComboboxInputFormatter) : undefined;
                this.appendToBody = attrs.mwComboboxAppendToBody ? this.originalScope.$eval(attrs.mwComboboxAppendToBody) : false;
                this.appendTo = attrs.mwComboboxAppendTo ? this.originalScope.$eval(attrs.mwComboboxAppendTo) : null;
                this.focusFirst = angular.isDefined(attrs.mwComboboxFocusFirst) ? this.originalScope.$eval(attrs.mwComboboxFocusFirst) : true;
                //Sélectionne automatiquement l'élément lorsqu'il y a qu'un seul résultat correspond à la saisie de l'utilisateur.
                this.selectOnExact = attrs.mwComboboxSelectOnExact ? this.originalScope.$eval(attrs.mwComboboxSelectOnExact) : false;
                //Liaison vers une variable qui indique si la popup est ouverte.
                this.isOpenSetter = $parse(attrs.mwComboboxIsOpen).assign || angular.noop;
                //Affiche la potentielle sélection qui correspond le mieux à la saisie en cours.
                // ATTENTION : foncitonnalité non prise en compte car elle pose des problèmes sur l'affichage du bouton.
                //this.showHint = this.originalScope.$eval(attrs.mwComboboxShowHint) || false;
                this.showHint = false;
                //INTERNAL VARIABLES
                //model setter executed upon match selection
                this.parsedModel = $parse(attrs.ngModel);
                this.invokeModelSetter = $parse(attrs.ngModel + "($$$p)");
                this.$setModelValue = function (scope, newValue) {
                    if (angular.isFunction(this.parsedModel(this.originalScope)) &&
                        this.ngModelOptions &&
                        this.ngModelOptions.$options &&
                        this.ngModelOptions.$options.getterSetter) {
                        return this.invokeModelSetter(scope, { $$$p: newValue });
                    }
                    return this.parsedModel.assign(scope, newValue);
                };
                //expressions utilisés par la directive mw-combobox
                this.originalParserResult = comboboxParser.parse(attrs.mwCombobox);
                this.filterParserResult = comboboxParser.parse(attrs.mwCombobox + " | filter:" + (this.filterPredicate ? "filterPredicateWrapper" : "$viewValue"));
                this.parserResult = this.originalParserResult;
                //Used to avoid bug in iOS webview where iOS keyboard does not fire
                //mousedown & mouseup events
                //Issue #3699
                var selected;
                //create a child this.scope for the mw-combobox directive so we are not polluting original this.scope
                //with mw-combobox-specific data (matches, query etc.)
                this.scope = this.originalScope.$new();
                this.offDestroy = this.originalScope.$on("$destroy", function () {
                    _this.scope.$destroy();
                });
                this.scope.$on("$destroy", this.offDestroy);
                // WAI-ARIA
                this.popupId = "combobox-" + this.scope.$id + "-" + Math.floor(Math.random() * 10000);
                element.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": false,
                    "aria-owns": this.popupId
                });
                this.scope.open = false;
                this.scope.toggleOpen = function () {
                    $timeout(function () {
                        var scopeWasClosed = !_this.scope.open;
                        switch (_this.state) {
                            case ComboboxState.onInit:
                                _this.scope.open = true;
                                break;
                            case ComboboxState.onFocus:
                                _this.scope.open = true;
                                break;
                            case ComboboxState.onOpen:
                                _this.scope.open = true;
                                _this.state = ComboboxState.onFocus;
                                break;
                            case ComboboxState.onClose:
                                _this.parserResult = _this.originalParserResult;
                                _this.scope.open = false;
                                _this.state = ComboboxState.onFocus;
                                break;
                            case ComboboxState.onSelect:
                                _this.state = ComboboxState.onFocus;
                                break;
                            case ComboboxState.onQuit:
                                _this.parserResult = _this.originalParserResult;
                                _this.scope.open = false;
                                break;
                            case ComboboxState.onGetMatchesAsync:
                                _this.scope.open = true;
                                _this.state = ComboboxState.onFocus;
                                break;
                        }
                        if (!_this.isAutocomplete && _this.scope.open && scopeWasClosed) {
                            element[0].select();
                        }
                        _this.scope.$digest();
                    }, 0, true);
                };
                // Create html button if no autocomplete or action on autocomplete exists
                if (!this.isAutocomplete || autocompleteActionIsDefined) {
                    var boutonId = "combobox-btn" + this.scope.$id + "-" + Math.floor(Math.random() * 10000);
                    var textAction, iconAction;
                    if (!this.isAutocomplete) {
                        this.scope.onClickBtn = function () {
                            //return focus to the input element before blur pending was executed
                            // use timeout to avoid $rootScope:inprog error
                            if (_this.scope.open) {
                                _this.state = ComboboxState.onClose;
                            }
                            else {
                                _this.state = ComboboxState.onOpen;
                            }
                            $timeout(function () {
                                _this.element[0].focus();
                            }, 0, false);
                        };
                        textAction = "Ouvrir ou fermer liste";
                        iconAction = "chevron-down";
                    }
                    else {
                        this.scope.onClickBtn = function (evt) {
                            _this.autocompleteAction(_this.originalScope, {
                                $event: evt
                            });
                        };
                        textAction = "Rechercher";
                        iconAction = "search";
                    }
                    this.boutonEl = angular.element("<span class=\"btn btn-success form-control-feedback\" ng-click=\"onClickBtn()\">\n                        <mw-button-icone texte=\"" + textAction + "\" taille=\"sm\" icone=\"icone itce-" + iconAction + " icodate\" id=\"" + boutonId + "\"></mw-button-icone>\n                    </span>");
                }
                //add read-only input to show hint
                if (this.showHint) {
                    this.inputsContainer = angular.element("<div></div>");
                    this.inputsContainer.css("position", "relative");
                    element.after(this.inputsContainer);
                    this.hintInputElem = element.clone();
                    this.hintInputElem.attr("placeholder", "");
                    this.hintInputElem.attr("tabindex", "-1");
                    this.hintInputElem.val("");
                    this.hintInputElem.css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        "border-color": "transparent",
                        "box-shadow": "none",
                        opacity: 1,
                        background: "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
                        color: "#999"
                    });
                    element.css({
                        position: "relative",
                        "vertical-align": "top",
                        "background-color": "transparent"
                    });
                    if (this.hintInputElem.attr("id")) {
                        this.hintInputElem.removeAttr("id"); // remove duplicate id if present.
                    }
                    this.inputsContainer.append(this.hintInputElem);
                    this.hintInputElem.after(element);
                }
                //pop-up element used to display matches
                this.popUpEl = angular.element("<div mw-combobox-popup></div>");
                this.popUpEl.attr({
                    id: this.popupId,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx, evt)",
                    "move-in-progress": "moveInProgress",
                    "prevent-blur": "preventBlur",
                    query: "query",
                    position: "position",
                    "assign-is-open": "assignIsOpen(isOpen)",
                    debounce: "debounceUpdate",
                    open: "open"
                });
                //Guidage lorsque la liste est vide
                var guidageId = "combobox-guidage-" + this.scope.$id + "-" + Math.floor(Math.random() * 10000);
                this.guidageEl = angular.element("<div mw-combobox-guidage></div>");
                this.guidageEl.attr({
                    id: guidageId,
                    matches: "matches",
                    "move-in-progress": "moveInProgress",
                    "guidage-position": "position",
                    "is-autocomplete": this.isAutocomplete,
                    open: "open"
                });
                //custom item template
                if (angular.isDefined(attrs.mwComboboxTemplateUrl)) {
                    this.popUpEl.attr("template-url", attrs.mwComboboxTemplateUrl);
                }
                if (angular.isDefined(attrs.mwComboboxPopupTemplateUrl)) {
                    this.popUpEl.attr("popup-template-url", attrs.mwComboboxPopupTemplateUrl);
                }
                /**
                 * Gestion du lien action en fin de liste
                 */
                this.scope.withBottomAction = false;
                if (angular.isDefined(attrs.mwComboboxOnBottomAction)) {
                    this.popUpEl.attr("on-bottom-action", "onBottomAction(evt)");
                    this.popUpEl.attr("with-bottom-action", "withBottomAction");
                    this.popUpEl.attr("text-bottom-action", "textBottomAction");
                    this.guidageEl.attr("on-bottom-action", "onBottomAction(evt)");
                    this.guidageEl.attr("with-bottom-action", "withBottomAction");
                    this.guidageEl.attr("text-bottom-action", "textBottomAction");
                    this.scope.withBottomAction = true;
                    if (angular.isDefined(attrs.mwComboboxTextBottomAction)) {
                        this.scope.textBottomAction = attrs.mwComboboxTextBottomAction;
                    }
                    else {
                        this.scope.textBottomAction = "Saisir un nouvel élément";
                    }
                    this.scope.onBottomAction = function (evt) {
                        _this.state = ComboboxState.onSelect;
                        _this.resetMatches();
                        _this.hasFocus = false;
                        selected = false;
                        _this.onBottomActionCallback(_this.originalScope, {
                            $event: evt
                        });
                        //return focus to the input element if a match was selected via a mouse click event
                        // use timeout to avoid $rootScope:inprog error
                        if (_this.scope.$eval(attrs.mwComboboxFocusOnSelect) !== false) {
                            $timeout(function () {
                                element[0].focus();
                            }, 0, false);
                        }
                    };
                }
                //Ajoute ou non le scroll à la popup
                //if (angular.isDefined(attrs.mwComboboxWithScroll)) {
                this.popUpEl.attr("has-scroll", "hasScroll");
                this.scope.hasScroll = true; //this.scope.$eval(attrs.mwComboboxWithScroll) !== false;
                //Fonction appelée par la directive popup pour incrémenter le nombre de page.
                this.popUpEl.attr("increment-page", "incrementPage(callback)");
                this.scope.incrementPage = function (callback) {
                    _this.originalScope.$pageCount = _this.originalScope.$pageCount + 1;
                    if (_this.scope.$eval(attrs.mwComboboxRefreshListOnPageInc) === true) {
                        _this.scope.$evalAsync(function () {
                            _this.getMatchesAsync(_this.modelCtrl.$viewValue, null);
                            _this.scope.$evalAsync(callback);
                        });
                    }
                    else {
                        var limit = Math.min(_this.originalScope.$pageCount * _this.itemPerPage, _this.resultGetMatches.matches.length);
                        _this.scope.matches.splice(0, _this.scope.matches.length);
                        _this.resultGetMatches.matches.slice(0, limit).forEach(function (match, i) {
                            _this.resultGetMatches.locals[_this.parserResult.itemName] = match;
                            _this.scope.matches.push({
                                id: _this.getMatchId(i),
                                label: _this.parserResult.viewMapper(_this.scope, _this.resultGetMatches.locals),
                                model: match
                            });
                        });
                        if (!$rootScope.$$phase) {
                            _this.scope.$digest();
                        }
                        _this.scope.$evalAsync(callback.bind(null, limit < _this.resultGetMatches.matches.length));
                    }
                };
                //}
                // Indicate that the specified match is the active (pre-selected) item in the list owned by this combobox.
                // This attribute is added or removed automatically when the `activeIdx` changes.
                this.scope.$watch("activeIdx", function (index) {
                    if (index < 0) {
                        element.removeAttr("aria-activedescendant");
                    }
                    else {
                        element.attr("aria-activedescendant", _this.getMatchId(index));
                    }
                });
                this.inputIsExactMatch = function (inputValue, index) {
                    if (_this.scope.matches.length > index &&
                        angular.isDefined(inputValue) &&
                        _this.scope.matches[index] &&
                        typeof _this.scope.matches[index].label !== "undefined") {
                        return inputValue.toUpperCase() === _this.scope.matches[index].label.toUpperCase();
                    }
                };
                // bind events only if appendToBody params exist - performance feature
                if (this.appendToBody) {
                    angular.element($window).on("resize", this.fireRecalculating);
                    $document.find("body").on("scroll", this.fireRecalculating);
                }
                // Declare the debounced function outside recalculating for
                // proper debouncing
                this.debouncedRecalculate = $$debounce(function () {
                    // if popup is visible
                    if (_this.scope.matches.length) {
                        _this.recalculatePosition();
                    }
                    _this.recalculatePosition();
                    _this.scope.moveInProgress = false;
                }, this.eventDebounceTime);
                // Default progress type
                this.scope.moveInProgress = false;
                //we need to propagate user"s query so we can higlight matches
                this.scope.query = undefined;
                this.scope.matches = [];
                this.resetMatches();
                this.scope.assignIsOpen = function (isOpen) {
                    _this.isOpenSetter(_this.originalScope, isOpen);
                };
                this.scope.select = function (activeIdx, evt) {
                    _this.state = ComboboxState.onSelect;
                    //called from within the $digest() cycle
                    var locals = {};
                    var model, item;
                    selected = true;
                    locals[_this.parserResult.itemName] = item = _this.scope.matches[activeIdx].model;
                    model = _this.parserResult.modelMapper(_this.originalScope, locals);
                    if (!_this.isAutocomplete) {
                        _this.previousSelection = model;
                    }
                    _this.$setModelValue(_this.originalScope, model);
                    _this.modelCtrl.$setValidity("editable", true);
                    _this.modelCtrl.$setValidity("parse", true);
                    _this.onSelectCallback(_this.originalScope, {
                        $item: item,
                        $model: model,
                        $label: _this.parserResult.viewMapper(_this.originalScope, locals),
                        $event: evt
                    });
                    if (_this.isAutocomplete) {
                        _this.autocompleteAction(_this.originalScope, {
                            $event: evt
                        });
                    }
                    _this.resetMatches();
                    //return focus to the input element if a match was selected via a mouse click event
                    // use timeout to avoid $rootScope:inprog error
                    if (_this.scope.$eval(attrs.mwComboboxFocusOnSelect) !== false) {
                        $timeout(function () {
                            element[0].focus();
                        }, 0, false);
                    }
                };
                if (element.attr("readonly")) {
                    element.on("focus", function () {
                        element[0].blur();
                    });
                }
                //Evite de coller n'importe quoi dans l'input si l'utilisateur fait un drag and drop.
                element.on("drop", function (evt) {
                    evt.preventDefault();
                    return false;
                });
                //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
                element.on("keydown", function (evt) {
                    if (_this.isAutocomplete && evt.which === 13 && _this.scope.matches.length === 0) {
                        _this.scope.open = false; //La selection par clic ferme la liste donc il faut faire de même par clavier.
                        _this.scope.$apply(function () {
                            if (angular.isNumber(_this.scope.debounceUpdate) || angular.isObject(_this.scope.debounceUpdate)) {
                                $$debounce(function () {
                                    _this.autocompleteAction(_this.originalScope, {
                                        $event: evt
                                    });
                                }, angular.isNumber(_this.scope.debounceUpdate)
                                    ? _this.scope.debounceUpdate
                                    : _this.scope.debounceUpdate["default"]);
                            }
                            else {
                                _this.autocompleteAction(_this.originalScope, {
                                    $event: evt
                                });
                            }
                        });
                        return;
                    }
                    //combobox is open and an "interesting" key was pressed
                    if (_this.scope.matches.length === 0 || _this.HOT_KEYS.indexOf(evt.which) === -1) {
                        if (_this.scope.matches.length === 0 && (evt.which === 9 || evt.which === 27)) {
                            //il faut fermer le guidage car lors d'une action clavier il n'y a pas eu de blur donc pas de fermeture.
                            _this.state = ComboboxState.onClose;
                            _this.scope.toggleOpen();
                        }
                        else if (_this.HOT_KEYS.indexOf(evt.which) === -1) {
                            _this.parserResult = _this.filterParserResult;
                        }
                        return;
                    }
                    var shouldSelect = _this.isSelectEvent(_this.originalScope, { $event: evt });
                    /**
                     * if there"s nothing selected (i.e. focusFirst) and enter or tab is hit
                     * or
                     * shift + tab is pressed to bring focus to the previous element
                     * then clear the results
                     */
                    if ((_this.scope.activeIdx === -1 && shouldSelect) || (evt.which === 9 && !!evt.shiftKey)) {
                        _this.resetMatches();
                        _this.state = ComboboxState.onClose;
                        _this.scope.toggleOpen();
                        _this.scope.$digest();
                        return;
                    }
                    evt.preventDefault();
                    var target;
                    switch (evt.which) {
                        case 27:
                            evt.stopPropagation();
                            _this.resetMatches();
                            _this.originalScope.$digest();
                            break;
                        case 38:
                            _this.scope.activeIdx = (_this.scope.activeIdx > 0 ? _this.scope.activeIdx : _this.scope.matches.length) - 1;
                            _this.scope.$digest();
                            target = _this.popUpEl[0].querySelectorAll(".mw-combobox-match")[_this.scope.activeIdx];
                            target.parentNode.scrollTop = target.offsetTop;
                            break;
                        case 40:
                            _this.scope.activeIdx =
                                (_this.scope.activeIdx + 1) %
                                    (_this.scope.withBottomAction ? _this.scope.matches.length + 1 : _this.scope.matches.length);
                            _this.scope.$digest();
                            target = _this.popUpEl[0].querySelectorAll(".mw-combobox-match")[_this.scope.activeIdx];
                            target.parentNode.scrollTop = target.offsetTop;
                            break;
                        default:
                            if (_this.scope.withBottomAction && _this.scope.activeIdx === _this.scope.matches.length) {
                                _this.scope.open = false; //La selection par clic ferme la liste donc il faut faire de même par clavier.
                                _this.state = ComboboxState.onClose;
                                _this.scope.toggleOpen();
                                _this.scope.onBottomAction(evt);
                            }
                            else if (shouldSelect) {
                                _this.scope.open = false; //La selection par clic ferme la liste donc il faut faire de même par clavier.
                                _this.scope.$apply(function () {
                                    if (angular.isNumber(_this.scope.debounceUpdate) || angular.isObject(_this.scope.debounceUpdate)) {
                                        $$debounce(function () {
                                            this.scope.select(this.scope.activeIdx, evt);
                                        }, angular.isNumber(_this.scope.debounceUpdate)
                                            ? _this.scope.debounceUpdate
                                            : _this.scope.debounceUpdate["default"]);
                                    }
                                    else {
                                        _this.scope.select(_this.scope.activeIdx, evt);
                                    }
                                });
                            }
                    }
                });
                if (this.isAutocomplete) {
                    element.on("input", function (evt) {
                        var model = evt.target.value;
                        _this.$setModelValue(_this.originalScope, model);
                        _this.modelCtrl.$setValidity("editable", true);
                        _this.modelCtrl.$setValidity("parse", true);
                    });
                }
                element.bind("focus", function (evt) {
                    _this.hasFocus = true;
                    if (!_this.isAutocomplete) {
                        if (_this.minLength === 0) {
                            //On recalcule la liste même s'il y a une valeur puisque le focus ouvre la liste.
                            $timeout(function () {
                                _this.getMatchesAsync(_this.modelCtrl.$viewValue, evt);
                            }, 0);
                        }
                        switch (_this.state) {
                            case ComboboxState.onInit:
                            case ComboboxState.onQuit:
                                _this.state = ComboboxState.onFocus;
                                _this.scope.toggleOpen();
                                break;
                            case ComboboxState.onSelect:
                                _this.state = ComboboxState.onClose;
                                _this.scope.toggleOpen();
                                //Pour re caculer la liste après sélection pour la prochaine ouverture.
                                $timeout(function () {
                                    _this.originalScope.$pageCount = 2;
                                    _this.getMatchesAsync(_this.modelCtrl.$viewValue, evt);
                                }, 200);
                                break;
                            case ComboboxState.onClose: //retour focus après click sur le bouton chevron pour fermer la liste
                            case ComboboxState.onOpen: //retour focus après click sur le bouton chevron pour ouvrir la liste
                            case ComboboxState.onFocus:
                                _this.scope.toggleOpen();
                                break;
                            default:
                                break;
                        }
                    }
                    evt.stopPropagation();
                    $timeout(function () {
                        element.bind("click", function () {
                            _this.state = _this.scope.open ? ComboboxState.onClose : ComboboxState.onOpen;
                            _this.scope.toggleOpen();
                        });
                    }, 500);
                });
                element.bind("blur", function (evt) {
                    if (_this.isSelectOnBlur && _this.scope.matches.length && _this.scope.activeIdx !== -1 && !selected) {
                        selected = true;
                        _this.scope.$apply(function () {
                            if (angular.isObject(_this.scope.debounceUpdate) && angular.isNumber(_this.scope.debounceUpdate.blur)) {
                                $$debounce(function () {
                                    _this.scope.select(_this.scope.activeIdx, evt);
                                }, _this.scope.debounceUpdate.blur);
                            }
                            else {
                                _this.scope.select(_this.scope.activeIdx, evt);
                            }
                        });
                    }
                    if (!_this.isAutocomplete && _this.modelCtrl.$error.editable) {
                        if (!_this.scope.preventBlur) {
                            if (typeof _this.previousSelection === "undefined") {
                                _this.modelCtrl.$setViewValue();
                                element.val("");
                            }
                            else {
                                _this.$setModelValue(_this.originalScope, _this.previousSelection);
                            }
                        }
                        _this.scope.$apply(function () {
                            // Reset validity as we are clearing
                            _this.modelCtrl.$setValidity("editable", true);
                            _this.modelCtrl.$setValidity("parse", true);
                        });
                    }
                    _this.hasFocus = false;
                    selected = false;
                    element.unbind("click");
                });
                // Keep reference to click handler to unbind it.
                var dismissClickHandler = function (evt) {
                    // Issue #3973
                    // Firefox treats right click as a click on document
                    if (element[0] !== evt.target && evt.which !== 3) {
                        //Ce n'est plus matches qui pilote l'ouverture ou non de la liste
                        _this.resetMatches();
                        _this.parserResult = _this.originalParserResult;
                        _this.scope.open = false; // Tout clic en dehors de l"input ferme la liste. Le focus repris la re ouvrira si besoin.
                        if (!$rootScope.$$phase) {
                            _this.originalScope.$digest();
                        }
                    }
                };
                $document.on("click", dismissClickHandler);
                var $guidage = $compile(this.guidageEl)(this.scope);
                if (this.appendToBody) {
                    $document.find("body").append($guidage);
                }
                else if (this.appendTo) {
                    angular.element(this.appendTo).eq(0).append($guidage);
                }
                else {
                    element.after($guidage);
                }
                var $popup = $compile(this.popUpEl)(this.scope);
                if (this.appendToBody) {
                    $document.find("body").append($popup);
                }
                else if (this.appendTo) {
                    angular.element(this.appendTo).eq(0).append($popup);
                }
                else {
                    element.after($popup);
                }
                var $bouton;
                if (this.boutonEl) {
                    $bouton = $compile(this.boutonEl)(this.scope);
                    $popup.after($bouton);
                    if (!element.parent().hasClass("has-feedback")) {
                        element.parent().addClass("has-feedback");
                    }
                }
                this.originalScope.$on("$destroy", function () {
                    $document.off("click", dismissClickHandler);
                    if (_this.appendToBody || _this.appendTo) {
                        $popup.remove();
                        if ($bouton) {
                            $bouton.remove();
                        }
                        $guidage.remove();
                    }
                    if (_this.appendToBody) {
                        angular.element($window).off("resize", _this.fireRecalculating);
                        $document.find("body").off("scroll", _this.fireRecalculating);
                    }
                    // Prevent jQuery cache memory leak
                    _this.popUpEl.remove();
                    if (_this.boutonEl) {
                        _this.boutonEl.remove();
                    }
                    _this.guidageEl.remove();
                    if (_this.showHint) {
                        _this.inputsContainer.remove();
                    }
                });
            } //Fin constructeur
            /**
             *
             * Initialisation du Controleur
             *
             */
            ComboboxController.prototype.init = function (_modelCtrl, _ngModelOptions) {
                var _this = this;
                this.modelCtrl = _modelCtrl;
                this.ngModelOptions = _ngModelOptions;
                this.scope.debounceUpdate = this.modelCtrl.$options && this.$parse(this.modelCtrl.$options.debounce)(this.originalScope);
                //plug into $parsers pipeline to open a combobox on view changes initiated from DOM
                //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
                var initSelection = false;
                this.modelCtrl.$parsers.unshift(function (inputValue) {
                    _this.hasFocus = true;
                    if (_this.minLength === 0 || (inputValue && inputValue.length >= _this.minLength)) {
                        _this.originalScope.$pageCount = 2;
                        if (_this.waitTime > 0) {
                            _this.cancelPreviousTimeout();
                            _this.scheduleSearchWithTimeout(inputValue);
                        }
                        else {
                            _this.getMatchesAsync(inputValue);
                        }
                        _this.state = ComboboxState.onFocus;
                        _this.scope.toggleOpen();
                    }
                    else {
                        _this.isLoadingSetter(_this.originalScope, false);
                        _this.cancelPreviousTimeout();
                        _this.resetMatches();
                    }
                    if (_this.isAutocomplete) {
                        return inputValue;
                    }
                    if (!inputValue) {
                        // Reset in case user had typed something previously.
                        _this.modelCtrl.$setValidity("editable", true);
                        return null;
                    }
                    _this.modelCtrl.$setValidity("editable", false);
                    return undefined;
                });
                this.modelCtrl.$formatters.push(function (modelValue) {
                    var candidateViewValue, emptyViewValue;
                    var locals = {};
                    // The validity may be set to false via $parsers (see above) if
                    // the model is restricted to selected values. If the model
                    // is set manually it is considered to be valid.
                    if (!_this.isAutocomplete) {
                        _this.modelCtrl.$setValidity("editable", true);
                    }
                    if (_this.inputFormatter) {
                        locals.$model = modelValue;
                        return _this.inputFormatter(_this.originalScope, locals);
                    }
                    //it might happen that we don"t have enough info to properly render input value
                    //we need to check for this situation and simply return model value if we can"t apply custom formatting
                    locals[_this.parserResult.itemName] = modelValue;
                    candidateViewValue = _this.parserResult.viewMapper(_this.originalScope, locals);
                    locals[_this.parserResult.itemName] = undefined;
                    emptyViewValue = _this.parserResult.viewMapper(_this.originalScope, locals);
                    if (!_this.isAutocomplete && !initSelection) {
                        _this.previousSelection = _this.modelCtrl.$modelValue;
                        initSelection = true;
                    }
                    return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
                });
            }; //Fin init
            ComboboxController.prototype.scheduleSearchWithTimeout = function (inputValue) {
                this.timeoutPromise = this.$timeout(function () {
                    this.getMatchesAsync(inputValue);
                }, this.waitTime);
            };
            ComboboxController.prototype.cancelPreviousTimeout = function () {
                if (this.timeoutPromise) {
                    this.$timeout.cancel(this.timeoutPromise);
                }
            };
            ComboboxController.prototype.resetHint = function () {
                if (this.showHint) {
                    this.hintInputElem.val("");
                }
            };
            ComboboxController.prototype.resetMatches = function () {
                this.scope.activeIdx = -1;
                this.element.attr("aria-expanded", false);
                this.resetHint();
            };
            ComboboxController.prototype.getMatchId = function (index) {
                return this.popupId + "-option-" + index;
            };
            ComboboxController.prototype.fireRecalculating = function () {
                if (!this.scope.moveInProgress) {
                    this.scope.moveInProgress = true;
                    this.scope.$digest();
                }
                this.debouncedRecalculate();
            };
            // recalculate actual position and set new values to this.scope
            // after digest loop is popup in right position
            ComboboxController.prototype.recalculatePosition = function () {
                this.scope.position = this.appendToBody ? this.$position.offset(this.element) : this.$position.position(this.element);
                this.scope.position.top += this.element.prop("offsetHeight");
            };
            /*
             * INJECTION DES DEPENDANCES
             */
            ComboboxController.$inject = [
                "$scope",
                "$element",
                "$attrs",
                "$compile",
                "$parse",
                "$q",
                "$timeout",
                "$document",
                "$window",
                "$rootScope",
                "$$debounce",
                "$uibPosition",
                "comboboxParser"
            ];
            return ComboboxController;
        })();
        UI.ComboboxController = ComboboxController; // Fin controller
        UI.module.controller("ComboboxController", ComboboxController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Directive principale combobox
         */
        function mwComboBox() {
            return {
                priority: 1001,
                restrict: "A",
                controller: "ComboboxController",
                require: ["ngModel", "^?ngModelOptions", "mwCombobox"],
                link: function (scope, element, attrs, ctrls) {
                    attrs.$set("autocomplete", "off");
                    ctrls[2].init(ctrls[0], ctrls[1]);
                }
            };
        }
        UI.module.directive("mwCombobox", [mwComboBox]);
        /**
         * Directive qui gére la popup (liste ouverte)
         */
        function mwComboBoxPopup($$debounce, $timeout) {
            return {
                scope: {
                    matches: "=",
                    query: "=",
                    active: "=",
                    position: "&",
                    moveInProgress: "=",
                    preventBlur: "=",
                    select: "&",
                    assignIsOpen: "&",
                    debounce: "&",
                    open: "=",
                    onBottomAction: "&",
                    withBottomAction: "=",
                    textBottomAction: "=",
                    hasScroll: "=",
                    incrementPage: "&"
                },
                replace: true,
                templateUrl: function (element, attrs) {
                    return attrs.popupTemplateUrl || "mw-combobox/mw-combobox-popup.html";
                },
                link: function (scope, element, attrs, ctrls) {
                    scope.templateUrl = attrs.templateUrl;
                    scope.goToTop = function () {
                        var rect = element[0].parentElement ? element[0].parentElement.getBoundingClientRect() :
                            element[0].getBoundingClientRect();
                        var clh = (window.innerHeight || document.documentElement.clientHeight);
                        if (angular.isDefined(this.position())) {
                            var header = document.getElementsByTagName('header');
                            var footer = document.getElementsByTagName('footer');
                            clh = header[0] && header[0].offsetHeight ? clh - header[0].offsetHeight : clh;
                            clh = footer[0] && footer[0].offsetHeight ? clh - footer[0].offsetHeight : clh;
                            if (rect.bottom >= clh - 80) {
                                return true;
                            }
                            return false;
                        }
                        return false;
                    };
                    scope.isOpen = function () {
                        var isDropdownOpen = scope.matches.length > 0 && scope.open;
                        scope.assignIsOpen({ isOpen: isDropdownOpen });
                        return isDropdownOpen;
                    };
                    scope.isActive = function (matchIdx) {
                        return scope.active === matchIdx;
                    };
                    scope.selectActive = function (matchIdx) {
                        scope.active = matchIdx;
                    };
                    scope.willSelect = function (matchIdx) {
                        scope.preventBlur = true;
                    };
                    scope.selectMatch = function (activeIdx, evt) {
                        scope.preventBlur = false;
                        var debounce = scope.debounce();
                        if (angular.isNumber(debounce) || angular.isObject(debounce)) {
                            $$debounce(function () {
                                scope.select({ activeIdx: activeIdx, evt: evt });
                            }, angular.isNumber(debounce) ? debounce : debounce["default"]);
                        }
                        else {
                            scope.select({ activeIdx: activeIdx, evt: evt });
                        }
                    };
                    scope.bottomAction = function (evt) {
                        scope.onBottomAction({ evt: evt });
                    };
                    var scrollEnCours = false;
                    var handleScroll = function (evt) {
                        if (evt) {
                            evt.preventDefault();
                            evt.stopPropagation();
                        }
                        if (scrollEnCours) {
                            return;
                        }
                        //Si la popup est à la fin du scroll on ajoute une page.
                        if (element[0].scrollHeight - element[0].scrollTop === element[0].clientHeight) {
                            scrollEnCours = true;
                            scope.incrementPage({
                                callback: function (continueScroll) {
                                    if (continueScroll === void 0) { continueScroll = true; }
                                    //element[0].scrollTop = element[0].scrollHeight - 200;
                                    scope.$evalAsync(function () {
                                        $timeout(function () {
                                            scrollEnCours = false;
                                            if (continueScroll) {
                                                handleScroll();
                                            }
                                        }, 50);
                                    });
                                }
                            });
                        }
                    };
                    element.bind("scroll", function (evt) {
                        handleScroll(event);
                    });
                    scope.$on("$destroy", function () {
                        element.unbind("scroll");
                    });
                }
            };
        }
        UI.module.directive("mwComboboxPopup", ["$$debounce", "$timeout", mwComboBoxPopup]);
        /**
         * Directive qui gère le contenu d'un élément
         */
        function mwComboBoxMatch($templateRequest, $compile, $parse) {
            return {
                scope: {
                    index: "=",
                    match: "=",
                    query: "="
                },
                link: function (scope, element, attrs) {
                    var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || "mw-combobox/mw-combobox-match.html";
                    $templateRequest(tplUrl).then(function (tplContent) {
                        var tplEl = angular.element(tplContent.trim());
                        element.replaceWith(tplEl);
                        $compile(tplEl)(scope);
                    });
                }
            };
        }
        UI.module.directive("mwComboboxMatch", ["$templateRequest", "$compile", "$parse", mwComboBoxMatch]);
        /**
         * Directive qui gère le guidage affiché lorsque la lise est vide
         */
        function mwComboBoxGuidage() {
            return {
                scope: {
                    matches: "=",
                    guidagePosition: "&",
                    moveInProgress: "=",
                    open: "=",
                    isAutocomplete: "=",
                    onBottomAction: "&",
                    withBottomAction: "=",
                    textBottomAction: "="
                },
                replace: true,
                templateUrl: "mw-combobox/mw-combobox-guidage.html",
                link: function (scope, element, attrs, ctrls) {
                    scope.templateUrl = attrs.templateUrl;
                    scope.isGuidageOpen = function () {
                        return !this.isAutocomplete && scope.matches.length === 0 && scope.open;
                    };
                    scope.guidageBottomAction = function (evt) {
                        scope.onBottomAction({ evt: evt });
                    };
                }
            };
        }
        UI.module.directive("mwComboboxGuidage", [mwComboBoxGuidage]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function ComboboxHighlight($sce, $injector, $log) {
            var isSanitizePresent;
            isSanitizePresent = $injector.has('$sanitize');
            function escapeRegexp(queryToEscape) {
                // Regex: capture the whole query string and replace it with the string that will be used to match
                // the results, for example if the capture is "a" the result will be \a
                return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
            }
            function containsHtml(matchItem) {
                return /<.*>/g.test(matchItem);
            }
            return function (matchItem, query) {
                if (!isSanitizePresent && containsHtml(matchItem)) {
                    $log.warn('Unsafe use of combobox please use ngSanitize'); // Warn the user about the danger
                }
                matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
                if (!isSanitizePresent) {
                    matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
                }
                return matchItem;
            };
        }
        UI.ComboboxHighlight = ComboboxHighlight;
        ;
        UI.module.filter("mwComboboxHighlight", ["$sce", "$injector", "$log", ComboboxHighlight]);
        function ComboboxPagingBy() {
            return function (input, pageCount, itemPerPage) {
                //TODO gérer les différentes valeurs possbile de ItemPerPage et de pageCount (ex infini)
                if (!angular.isArray(input))
                    return input;
                itemPerPage = (!itemPerPage || isNaN(itemPerPage)) ? 0 : itemPerPage;
                var limit = itemPerPage * pageCount;
                if (limit >= 0) {
                    return input.slice(0, limit);
                }
            };
        }
        UI.ComboboxPagingBy = ComboboxPagingBy;
        UI.module.filter("mwPagingBy", [ComboboxPagingBy]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Parser qui evalu l'expression passé à la directive mw-combobox
         * L'expression est du même genre que celle du ng-repeat
         */
        function comboboxParser($parse) {
            var COMBOBOX_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
            return {
                parse: function (input) {
                    var match = input.match(COMBOBOX_REGEXP);
                    if (!match) {
                        throw new Error('Expected combobox specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
                            ' but got "' + input + '".');
                    }
                    return {
                        itemName: match[3],
                        source: $parse(match[4]),
                        viewMapper: $parse(match[2] || match[1]),
                        modelMapper: $parse(match[1])
                    };
                }
            };
        }
        UI.module.factory("comboboxParser", ["$parse", comboboxParser]);
        /**
        * A helper, internal service that debounces a function
        */
        function debounceService($timeout) {
            return function (callback, debounceTime) {
                var timeoutPromise;
                return function () {
                    var self = this;
                    var args = Array.prototype.slice.call(arguments);
                    if (timeoutPromise) {
                        $timeout.cancel(timeoutPromise);
                    }
                    timeoutPromise = $timeout(function () {
                        callback.apply(self, args);
                    }, debounceTime);
                };
            };
        }
        UI.module.factory("$$debounce", ["$timeout", debounceService]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwMarqueur() {
            return {
                restrict: "C",
                link: function (scope, element, attrs) {
                    if (attrs.couleur) {
                        element[0].style.removeProperty("background-color");
                        element[0].style.backgroundColor = attrs.couleur;
                    }
                    if (attrs.couleurPolice) {
                        element[0].style.removeProperty("color");
                        element[0].style.color = attrs.couleurPolice;
                    }
                }
            };
        }
        UI.mwMarqueur = mwMarqueur;
        ;
        UI.module.directive("mwMarqueur", mwMarqueur);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Directive de type attribut qui donne le focus à l'élément lorsqu'elle recoit l'évènement pasé en attribut.
         *
         */
        function mwFocusOn($timeout) {
            return {
                restrict: "A",
                link: function (scope, element, attrs, modelCtrl) {
                    //Gets focus based on scope event name (e.g. focus-on='SomeEventName')
                    if (angular.isDefined(attrs["focusOn"])) {
                        scope.$on(attrs["focusOn"], function () {
                            $timeout(function () {
                                element.focus();
                            });
                        });
                    }
                }
            };
        }
        UI.module.directive("mwFocusOn", ["$timeout", mwFocusOn]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwMontantController = (function () {
            function MwMontantController($scope, $attrs, $element) {
                var _this = this;
                this.scope = $scope;
                this.attrs = $attrs;
                this.element = $element;
                this.el = this.element[0];
                this.oldValue = "";
                this.negative = false;
                this.attrs.$set("ng-model", "mwMontantController.stringMontant");
                angular.forEach(["ng-model"], function (key) {
                    if (!(key in _this.attrs)) {
                        throw new Error("la directive mwsfSaisieMontant doit avoir un attribut " + key);
                    }
                });
            }
            /**
             * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
             * C'est par lui qu'on va manipuler la donnée de notre directive.
             */
            MwMontantController.prototype.init = function (_ngModelCtrl) {
                var _this = this;
                this.ngModelCtrl = _ngModelCtrl;
                var value = "";
                this.ngModelCtrl.$render = function () {
                    var formattedValue = _this.mainFormat(_this.ngModelCtrl.$modelValue, _this.ngModelCtrl.$modelValue);
                    _this.element.val(formattedValue);
                };
                /*
                        if (angular.isDefined(this.scope.$eval(this.attrs. ngModel))) {
                            this._$timeout(() => {
                                //console.debug("DEBUG - [MyWay.UI.NavigationSerice.setActivePage] - brodcast activeNavigationEvent page=" + this._activePage.titre + " section=" + this._activeSection.titre);
                                var formattedValue = mainFormat(scope.$eval(attrs.ngModel), scope.$eval(attrs.ngModel));
                                element.val(formattedValue);
                            }, 100, true);
                        }*/
                this.element.bind("blur", function (evt) {
                    /*
                    if (this.element.val()) {
                        this.element.val(this.formatValue(this.element.val()));
                    }*/
                    return;
                });
                this.element.bind("focus", function (evt) {
                    /*
                    if (this.element.val()) {
                        this.oldValue = this.element.val();
                    }*/
                    return;
                });
                this.ngModelCtrl.$parsers.unshift(function (inputValue) {
                    if (inputValue) {
                        var formattedValue = _this.mainFormat(inputValue, inputValue);
                        _this.ngModelCtrl.$setViewValue(parseFloat(formattedValue));
                        return formattedValue;
                    }
                    else {
                        return;
                    }
                });
            };
            // Format input value on blur event to force 2 decimals digit.
            MwMontantController.prototype.formatValue = function (inputValeur) {
                var intPart = "";
                var decPart = "";
                if (inputValeur.length === 0) {
                    return inputValeur;
                }
                var point = inputValeur.indexOf(",");
                if (point < 0) {
                    // no decimal
                    intPart = inputValeur;
                    if (intPart === "-" || intPart === "- ") {
                        intPart = "- 0";
                    }
                    decPart = "00";
                }
                else {
                    var decimalSplit = inputValeur.split(",");
                    intPart = decimalSplit[0];
                    if (intPart.length === 0) {
                        intPart = intPart + "0";
                    }
                    if (intPart === "-") {
                        intPart = "- 0";
                    }
                    decPart = decimalSplit[1];
                    while (decPart.length < 2) {
                        decPart = decPart + "0";
                    }
                }
                return intPart + "," + decPart;
            };
            // Format input value to force space between thousand.
            MwMontantController.prototype.format = function (inputVal) {
                var point = inputVal.indexOf(",");
                if (point >= 0) {
                    inputVal = inputVal.slice(0, point + 3);
                }
                var decimalSplit = inputVal.split(",");
                var intPart = decimalSplit[0];
                var decPart = decimalSplit[1];
                if (intPart.length > 3) {
                    var intDiv = Math.floor(intPart.length / 3);
                    while (intDiv > 0) {
                        var lastComma = intPart.indexOf(" ");
                        if (lastComma < 0) {
                            lastComma = intPart.length;
                        }
                        if (lastComma - 3 > 0) {
                            intPart = intPart.slice(0, lastComma - 3) + " " + intPart.slice(lastComma - 3);
                        }
                        intDiv--;
                    }
                }
                if (decPart === undefined) {
                    decPart = "";
                }
                else {
                    decPart = "," + decPart;
                }
                var res = intPart + decPart;
                if (this.negative) {
                    res = "- " + res;
                    this.negative = false;
                }
                return res;
            };
            MwMontantController.prototype.mainFormat = function (inputValue, inputVal) {
                //var inputVal = element.val();
                var start = this.el.selectionStart;
                var end = this.el.selectionEnd;
                var inputString = new String(inputVal);
                if (inputString.charAt(0) === "-") {
                    this.negative = true;
                    inputString = inputString.replace("-", "");
                }
                while (inputString.charAt(0) === "0") {
                    inputString = inputString.substr(1);
                }
                // clearing spaces
                inputString = inputString.replace(" ", "");
                // replace point by semi colon
                inputString = inputString.replace(".", ",");
                // clearing non digit 
                inputString = inputString.replace(/[^\d\',']/g, "");
                var result = "";
                var reg = new RegExp("^\-?[0-9]*,?[0-9]{0,2}$", "g");
                if (!reg.test(inputString.toString())) {
                    // invalid number. replace value by old value 
                    result = this.oldValue;
                }
                else {
                    // format value to force space between thousan
                    result = this.format(inputString);
                }
                if (inputValue) {
                    start = start + (result.length - String(inputValue).length);
                }
                this.oldValue = result;
                if (inputValue) {
                    if (result !== inputValue) {
                        //Set the view (the model is set by the return).
                        //ctrl.$setViewValue(result);
                        //ctrl.$render();
                        this.element.val(result);
                        // update the position of the cursor
                        this.el.setSelectionRange(start, start);
                        //var lastResult = result.replace(/[^\d\',']/g, '');
                        //console.log("mwMontant lastResult = " + lastResult);
                        return result;
                    }
                    return inputValue.replace(/[^\d\',']/g, "");
                }
            };
            return MwMontantController;
        })();
        UI.MwMontantController = MwMontantController;
        UI.module.controller("mwMontantController", ["$scope", "$attrs", "$element", MwMontantController]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Directive de type attribut qui va permettre de formatter le chiffre saisie lors de la perte de focus
         *
         */
        function mwMontant($filter) {
            return {
                restrict: "A",
                replace: true,
                require: "?ngModel",
                link: function (scope, element, attrs, modelCtrl) {
                    var nbDec = attrs["mwMontant"];
                    if (!nbDec) {
                        nbDec = 2;
                    }
                    /**
                     * Converti la valeur numérique en format avec séparateur de milliers
                     */
                    function formatFrNumber(value) {
                        var result = value && $filter("number")(value, nbDec);
                        return result;
                    }
                    /**
                     * Converti la valeur avec séparateur de milliers en format num rique
                     */
                    function parseFrNumber(viewValue) {
                        if (!angular.isNumber(viewValue)) {
                            if (viewValue && viewValue.length > 0) {
                                var nombre = viewValue.replace(/[^\d\-+\.,]/g, "").replace(/,/g, ".");
                                var result = parseFloat(nombre);
                                if (!isNaN(result)) {
                                    return result;
                                }
                                else if (nombre === "-") {
                                    return nombre;
                                }
                            }
                            if (typeof modelCtrl.$modelValue === "number") {
                                var model = parseFloat(viewValue);
                                if (isNaN(model)) {
                                    return undefined;
                                }
                                return model;
                            }
                            else {
                                return viewValue;
                            }
                        }
                        else {
                            if (typeof modelCtrl.$modelValue === "number") {
                                var model = parseFloat(viewValue);
                                if (isNaN(model)) {
                                    return undefined;
                                }
                                return model;
                            }
                            else {
                                return viewValue;
                            }
                        }
                    }
                    element.bind("blur", function () {
                        var num = formatFrNumber(parseFrNumber(element.val()));
                        if ((isNaN(num) || angular.isUndefined(num)) && !angular.isString(num)) {
                            element.val("");
                        }
                        else {
                            element.val(num.toString());
                        }
                        //Le model doit avoir le même format (il ne faut pas garder les décimal en trop).
                        modelCtrl.$setViewValue("" + parseFrNumber(element.val()));
                    });
                    element.bind("focus", function () {
                        var num = parseFrNumber(element.val());
                        if (angular.isUndefined(num) || isNaN(num)) {
                            element.val("");
                        }
                        else {
                            element.val(num.toString());
                        }
                        element[0].select();
                    });
                    /*
                     * Seules les chiffres 0-9 le moins "-" le point ".", la virgule ","
                     * le retour arriere, et le suppr, la tabulation, le shift tab, Fin , Début, les 4 Fleches sont autorisés  à la saisie
                     */
                    element.bind("keydown", function (event) {
                        //Ctrl V Ctrl C Ctrl X
                        if (event.ctrlKey && (event.key === "v" || event.key === "c" || event.key === "x")) {
                            return;
                        }
                        if (event.shiftKey && event.key === "Insert") {
                            return;
                        }
                        if (event.shiftKey && event.ctrlKey) {
                            return;
                        }
                        if (event.shiftKey && (event.key === "Delete" || event.key === "Del")) {
                            return;
                        }
                        if (event.key !== "0" &&
                            event.key !== "1" &&
                            event.key !== "1" &&
                            event.key !== "2" &&
                            event.key !== "3" &&
                            event.key !== "4" &&
                            event.key !== "5" &&
                            event.key !== "6" &&
                            event.key !== "7" &&
                            event.key !== "8" &&
                            event.key !== "9" &&
                            event.key !== "-" &&
                            event.key !== "Subtract" &&
                            event.key !== "," &&
                            event.key !== "." &&
                            event.key !== "Decimal" &&
                            event.key !== "Backspace" &&
                            event.key !== "Delete" &&
                            event.key !== "Del" &&
                            event.key !== "Tab" &&
                            event.key !== "End" &&
                            event.key !== "Home" &&
                            event.key !== "ArrowLeft" &&
                            event.key !== "Left" &&
                            event.key !== "ArrowUp" &&
                            event.key !== "Up" &&
                            event.key !== "ArrowRight" &&
                            event.key !== "Right" &&
                            event.key !== "ArrowDown" &&
                            event.key !== "Down") {
                            event.preventDefault();
                            event.stopPropagation();
                            return;
                        }
                    });
                    if (modelCtrl) {
                        modelCtrl.$formatters.unshift(formatFrNumber);
                        modelCtrl.$parsers.unshift(parseFrNumber);
                    }
                    // Suppression des  événement   la destruction du scope
                    scope.$on("$destroy", function () {
                        element.unbind("blur");
                        element.unbind("focus");
                        element.unbind("keydown");
                    });
                },
            };
        }
        UI.module.directive("mwMontant", ["$filter", mwMontant]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwInfobulleMessage($document, $timeout) {
            return {
                restrict: "E",
                transclude: true,
                templateUrl: "mw-infobulle/mw-infobulle-message-view.html",
                scope: {
                    data: "=",
                    id: "@"
                },
                link: function (scope, element, attrs) {
                    // Mettre id infobulleMessage pour l'attribut aria-controls de infobullePicto
                    if (scope.data !== null && angular.isDefined(scope.data)) {
                        scope.data.infobulleMessageId = attrs.id;
                    }
                    else {
                        console.warn("mw-infobulle : Le contenu de data est null ou undefined, l'affichage de l'infobulle ne peut pas se faire.", scope.data);
                        return;
                    }
                    scope.$watch("data.open", function (newValue) {
                        if (newValue === true) {
                            //timeout pour éviter un premier passage du click qui refermerait aussitôt l'infobulle une fois ouverte
                            $timeout(addEventInfobulle);
                        }
                        else {
                            removeEventInfobulle();
                        }
                    });
                    function clickHandle(event) {
                        if (!element[0].contains(event.target)) {
                            closeInfobulle();
                        }
                    }
                    function echapHandle(event) {
                        if (event.keyCode === UI.Constants.CLAVIER_KEYCODE.ECHAP) {
                            closeInfobulle();
                        }
                    }
                    function closeInfobulle() {
                        scope.data.open = false;
                        scope.$apply();
                    }
                    function addEventInfobulle() {
                        $document.bind("click", clickHandle).bind("keydown", echapHandle);
                    }
                    function removeEventInfobulle() {
                        $document.unbind("click", clickHandle).unbind("keydown", echapHandle);
                    }
                    scope.$on("$destroy", removeEventInfobulle);
                }
            };
        }
        UI.mwInfobulleMessage = mwInfobulleMessage;
        UI.module.directive("mwInfobulleMessage", ["$document", "$timeout", mwInfobulleMessage]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwInfobullePicto() {
            return {
                restrict: "E",
                transclude: true,
                templateUrl: "mw-infobulle/mw-infobulle-picto-view.html",
                scope: {
                    data: "=",
                    id: "@"
                }
            };
        }
        UI.mwInfobullePicto = mwInfobullePicto;
        ;
        UI.module.directive("mwInfobullePicto", mwInfobullePicto);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var ACTION;
        (function (ACTION) {
            ACTION[ACTION["addBeforeComma"] = 0] = "addBeforeComma";
            ACTION[ACTION["addAfterComma"] = 1] = "addAfterComma";
            ACTION[ACTION["delBeforeComma"] = 2] = "delBeforeComma";
            ACTION[ACTION["delAfterComma"] = 3] = "delAfterComma";
            ACTION[ACTION["supBeforeComma"] = 4] = "supBeforeComma";
            ACTION[ACTION["supAfterComma"] = 5] = "supAfterComma";
            ACTION[ACTION["addComma"] = 6] = "addComma";
            ACTION[ACTION["raz"] = 7] = "raz"; // nouvelle saisie efface et remplace l"existante
        })(ACTION || (ACTION = {}));
        ;
        var mwNumberCtrl = (function () {
            /*
            *  Construteur
            *  TODO prévoir plus de parametre (min, max, nbDecimal)
            */
            function mwNumberCtrl($scope, $element, $attrs) {
                this.scope = $scope;
                this.element = $element;
                this.attrs = $attrs;
                if (("decimal" in $attrs)) {
                    this.nbDecimal = $scope.decimal;
                }
                else {
                    this.nbDecimal = 2;
                }
                this.required = $scope.required || false;
                this.input = this.element[0].lastElementChild;
                this.ngModelatt = $scope.ngModel;
                this.onChangeAttribut = $scope.onChange;
                //console.log("mwNumber ngModelAtt = "+this.ngModelatt);
            }
            /**
             * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
             * C'est par lui qu'on va manipuler la donnée de notre directive.
             */
            mwNumberCtrl.prototype.init = function (_ngModelCtrl) {
                var _this = this;
                this.ngModelCtrl = _ngModelCtrl;
                this.model = this.ngModelCtrl.$modelValue;
                this.ngModelCtrl.$render = function () {
                    //console.debug("MyWay.UI.mwNumber.on$render : start = " + this.cursorPos + " view = " + this.view + " model = " + this.model);
                    if (!angular.isUndefined(_this.ngModelCtrl.$modelValue)) {
                        if (!angular.isNumber(_this.ngModelCtrl.$modelValue)) {
                            throw new Error("Directive MyWay.UI.mwNumber  : l'attribut ngModel doit être de type number." + _this.ngModelCtrl.$modelValue);
                        }
                    }
                    //this.model = parseFloat(this.ngModelCtrl.$modelValue);
                    //this.view = this.numberToString(this.model);
                };
                this.scope.$watch(function () { return _this.ngModelCtrl.$modelValue; }, function () {
                    _this.model = parseFloat(_this.ngModelCtrl.$modelValue);
                    if (_this.keyCode !== MyWay.UI.Constants.CLAVIER_KEYCODE.RETOUR) {
                        _this.view = _this.numberToString(_this.model);
                    }
                    //console.debug("MyWay.UI.mwNumber.on$watch : start = " + this.cursorPos + " view = " + this.view + " model = " + this.model);
                    _this.input.setSelectionRange(_this.cursorPos, _this.cursorPos);
                });
            };
            /*
            *
            */
            mwNumberCtrl.prototype.onKeyDown = function ($event) {
                //Récupération de la position  du curseur           
                var start = this.input.selectionStart;
                this.cursorPos = this.input.selectionEnd;
                this.virgulePos = this.view.indexOf(",");
                if (this.virgulePos === -1) {
                    this.virgulePos = this.view.length;
                }
                this.viewLenghtBeforeChange = this.view.length;
                this.keyCode = $event.keyCode;
                //console.debug("MyWay.UI.mwNumber.onKeyDown : keyCode = " + $event.keyCode + " cursorPos=" + this.cursorPos + " virgulePos=" + this.virgulePos);
                if (this.cursorPos <= this.virgulePos) {
                    if (this.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.RETOUR) {
                        this.action = ACTION.delBeforeComma;
                    }
                    else if (this.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.SUPPRIMER) {
                        this.action = ACTION.supBeforeComma;
                    }
                    else {
                        if (this.view.length === 0) {
                            this.action = ACTION.raz;
                        }
                        else {
                            this.action = ACTION.addBeforeComma;
                        }
                    }
                }
                else {
                    if (this.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.RETOUR) {
                        this.action = ACTION.delAfterComma;
                    }
                    else if (this.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.SUPPRIMER) {
                        this.action = ACTION.supAfterComma;
                    }
                    else if (this.cursorPos > start && this.cursorPos === this.view.length) {
                        this.action = ACTION.raz;
                    }
                    else {
                        this.action = ACTION.addAfterComma;
                    }
                }
                //Cas delete lorsque le curseur est à droite d ela virgule.
                if (this.action === ACTION.delAfterComma || this.action === ACTION.delBeforeComma) {
                    //console.log("this.view[this.cursorPos - 1] " + this.view[this.cursorPos - 1]);
                    if (this.view[this.cursorPos - 1] === ",") {
                    }
                }
                //Cas sup avant la virgule : il faut avancer le curseur et abandonner l'evenement.
                if (this.action === ACTION.supBeforeComma) {
                    if (this.virgulePos === this.cursorPos) {
                    }
                }
            };
            /*
             * On intercepte tout caractère non numérique excepté le '-', le '.' ou la ','.
             * et on annule l'évènement.
             */
            mwNumberCtrl.prototype.onKeyPress = function ($event) {
                // event.type must be keypress
                this.keyPressed = this.getChar($event);
                //console.debug("MyWay.UI.mwNumber.onKeyPress : keypressed = " + this.keyPressed);
                /*  if (this.keyPressed != '-' &&
                      this.keyPressed != '.' &&
                      this.keyPressed != ',' &&
                      this.keyPressed != '0' &&
                      this.keyPressed != '1' &&
                      this.keyPressed != '2' &&
                      this.keyPressed != '3' &&
                      this.keyPressed != '4' &&
                      this.keyPressed != '5' &&
                      this.keyPressed != '6' &&
                      this.keyPressed != '7' &&
                      this.keyPressed != '8' &&
                      this.keyPressed != '9'
                      ) {
                      
                      $event.preventDefault();
                  }
                  */
                if (this.keyPressed === "." || this.keyPressed === ",") {
                    this.action = ACTION.addComma;
                    if (this.nbDecimal === 0) {
                        $event.preventDefault();
                    }
                }
            };
            /*
            * Methode appelé lorsque la valeur de l'input change
            */
            mwNumberCtrl.prototype.onChange = function () {
                //console.debug("MyWay.UI.mwNumber.onChange : cursorPos= " + this.cursorPos + " view= " + this.view + " model= " + this.model + " action=" + ACTION[this.action]);
                var _this = this;
                if (this.view === "." || this.view === ",") {
                    this.view = "0,00";
                    this.cursorPos = this.cursorPos + 1;
                }
                //Cas d'une virgule tapez n'importe ou
                // On supprime tout ce qui est à droite de la virgule tapé
                if (this.keyPressed === "." || this.keyPressed === ",") {
                }
                //Conversion de la vue (string) en nombre (number)
                this.model = this.stringToNumber(this.view);
                //Mise à jour du model
                this.ngModelCtrl.$setViewValue(this.model);
                this.onChangeAttribut();
                this.scope.ngChange && this.scope.ngChange();
                //Mise à jour de la vue
                this.view = this.numberToString(this.model);
                //console.log("viewLenght=" + this.viewLenghtBeforeChange + " this.view.lenght=" + this.view.length + " virgulePos=" + this.virgulePos+" cursorPos="+this.cursorPos);
                if (this.action === ACTION.delBeforeComma) {
                    var delta = this.view.length - this.viewLenghtBeforeChange;
                    if (delta === 0) {
                    }
                    //console.log("Repositionnement curseur " + (this.view.length - this.viewLenghtBeforeChange));
                    this.cursorPos = this.cursorPos + (delta);
                }
                if (this.action === ACTION.delAfterComma) {
                    this.cursorPos = this.cursorPos - 1;
                }
                if (this.action === ACTION.addBeforeComma) {
                    //console.log("Repositionnement curseur " + (this.view.length - this.viewLenghtBeforeChange));
                    this.cursorPos = this.cursorPos + (this.view.length - this.viewLenghtBeforeChange);
                }
                if (this.action === ACTION.addAfterComma) {
                    this.cursorPos = this.cursorPos + 1;
                }
                if (this.action === ACTION.raz) {
                    this.cursorPos = 1;
                }
                if (this.action === ACTION.addComma) {
                    this.cursorPos = this.view.indexOf(",") + 1;
                }
                if (this.action === ACTION.supBeforeComma) {
                    if (this.cursorPos === 0 && this.virgulePos === 1) {
                        this.cursorPos = this.cursorPos + 1;
                    }
                }
                setTimeout(function () {
                    _this.input.setSelectionRange(_this.cursorPos, _this.cursorPos);
                    _this.keyCode = 0;
                }, 5);
            };
            /*
            *   Récupération du caractère à partir de l'évènement keyBoard
            *   //TODO à tester sur une tablette
            */
            mwNumberCtrl.prototype.getChar = function (event) {
                if (event.which === null) {
                    return String.fromCharCode(event.keyCode); // IE
                }
                else if (event.which !== 0 && event.charCode !== 0) {
                    return String.fromCharCode(event.which); // the rest
                }
                else {
                    return null; // special key
                }
            };
            /*
            * Converti un string en number.
            *
            */
            mwNumberCtrl.prototype.stringToNumber = function (inputValue) {
                var result = undefined;
                // clearing spaces and replace ',' by '.'           
                var inputValueClean = inputValue.replace(",", ".");
                var negatif = (inputValue.indexOf("-") > -1);
                inputValueClean = inputValueClean.replace(/[^\d\'.']/g, "");
                result = parseFloat(inputValueClean);
                if (negatif) {
                    result = result * -1;
                }
                return result;
            };
            /*
            * Converti un number en un format string avec les contraintes suivantes :
            * - séparateur des milliers = espace
            * - '.' ou ',' devient un ','
            *
            */
            mwNumberCtrl.prototype.numberToString = function (model) {
                var result = "";
                var modelString = "" + model;
                if (angular.isUndefined(model) || modelString === "NaN") {
                    return "";
                }
                var negatif = (modelString.indexOf("-") > -1);
                modelString = modelString.replace("-", "");
                var point = modelString.indexOf(".");
                //Limite le nombre de décimales
                if (point >= 0) {
                    //modelString = modelString.slice(0, point + this.nbDecimal);
                    modelString = modelString.slice(0, point + 1 + this.nbDecimal);
                }
                var decimalSplit = modelString.split(".");
                var intPart = decimalSplit[0];
                var decPart = decimalSplit[1];
                //Ajout du séparateur des milliers
                if (intPart.length > 3) {
                    var intDiv = Math.floor(intPart.length / 3);
                    while (intDiv > 0) {
                        var lastComma = intPart.indexOf(" ");
                        if (lastComma < 0) {
                            lastComma = intPart.length;
                        }
                        if (lastComma - 3 > 0) {
                            intPart = intPart.slice(0, lastComma - 3) + " " + intPart.slice(lastComma - 3);
                        }
                        intDiv--;
                    }
                }
                //Formatage de la partie décimale
                if (decPart === undefined) {
                    decPart = "";
                    if (this.nbDecimal > 0) {
                        if (this.keyPressed === "0") {
                            if (this.action === ACTION.addAfterComma) {
                                decPart = "0";
                            }
                        }
                    }
                }
                /* Defect 507. On ne force pas le montant à 0,0
                if (decPart.length < this.nbDecimal) {
                    for (var i = decPart.length; i < this.nbDecimal; i++) {
                        decPart += "0";
                    }
                }*/
                if (decPart.length > 0) {
                    decPart = "," + decPart;
                }
                else if (this.action === ACTION.addComma) {
                    decPart = ",";
                }
                else if (this.view) {
                    if (this.view.indexOf(",") > 0) {
                        decPart = ",";
                    }
                }
                /*
                if (decPart != undefined && decPart.length > 0) {
                    var res = intPart + ',' +decPart;
                } else {
                    var res = intPart;
                }*/
                var res = intPart + decPart;
                //Ajout du signe moins si négatif
                if (negatif) {
                    res = "-" + res;
                }
                result = res;
                return result;
            };
            mwNumberCtrl.prototype.onFocus = function () {
                this.scope.ngFocus && this.scope.ngFocus();
                this.input.setSelectionRange(0, this.view.length);
            };
            mwNumberCtrl.prototype.onBlur = function () {
                this.scope.ngBlur && this.scope.ngBlur();
            };
            mwNumberCtrl.$inject = [
                "$scope",
                "$element",
                "$attrs"
            ];
            return mwNumberCtrl;
        })();
        UI.mwNumberCtrl = mwNumberCtrl;
        UI.module.controller("mwNumberCtrl", mwNumberCtrl);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Input formatté d'un number
         * - Séparateur espace entre les milliers
         * - Saisie or digits non affiché
         * - Saisie "." ou "," converti en ","
         * - Negatif possible
         * - Formattage  du number à l"affichage
         * - Gestion min
         * - Gestion max
         */
        function mwNumber() {
            return {
                restrict: "E",
                templateUrl: "mw-number/mw-number-view.html",
                controller: "mwNumberCtrl",
                controllerAs: "mwNumberCtrl",
                replace: true,
                require: ["^mwNumber", "^ngModel"],
                scope: {
                    ngModel: "=",
                    id: "@",
                    name: "@",
                    ngFocus: "&",
                    ngBlur: "&",
                    ngChange: "&",
                    decimal: "=",
                    onChange: "&",
                    mwDisabled: "="
                },
                link: function (scope, elem, attrs, ctrls) {
                    if (!("ngModel" in attrs)) {
                        throw new Error("MyWay.UI.mwNumber : ngModel est un paramètre obligatoire."
                            + " ==>  <mw-number id=\"mon-id\" name=\"mon nom\" ng-model=\"myObject\" >");
                    }
                    if (!("id" in attrs)) {
                        throw new Error("MyWay.UI.mwNumber : id est un paramètre obligatoire."
                            + " ==>  <mw-number id=\"mon-id\" name=\"mon nom\" ng-model=\"myObject\" >");
                    }
                    if (!("name" in attrs)) {
                        throw new Error("MyWay.UI.mwNumber : name est un paramètre obligatoire."
                            + " ==>  <mw-number id=\"mon-id\" name=\"mon nom\" ng-model=\"myObject\" >");
                    }
                    //Le premier controller est celui de notre directive, Le second est celui de la directive ngModel.
                    var controller = ctrls[0], ngModelCtrl = ctrls[1];
                    if (ngModelCtrl) {
                        //On fournit le controller de ngModel à notre controlleur.
                        controller.init(ngModelCtrl);
                    }
                    else {
                        throw new Error("MyWay.UI.mwNumber : Le controleur ngModelCtrl est in défini.");
                    }
                }
            };
        }
        UI.mwNumber = mwNumber;
        ;
        UI.module.directive("mwNumber", mwNumber);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Ce filtre permet d'utilise le service $parse dans une expression angular d'une vue.
         * Par exemple dans un ng-bind
         *
         */
        function mwParseFilter($parse) {
            return function (expression, context) {
                return $parse(expression)(context);
            };
        }
        UI.mwParseFilter = mwParseFilter;
        UI.module.filter("mwParseFilter", ["$parse", mwParseFilter]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * @ngdoc directive
         * @name myway.ui.directive.mw-scroll-spy
         * @scope
         * @restrict A
         *
         * @description
         *   Cette directive permet de mettre à jour le lien dans la navigation qui correspond à la position du scroll
         *   Elle prend en argument directe l'id de balise nav contenant les lien et en attribut supplémentaire le nombre en pixel depuis le haut de l'écran qu'il faut prendre pour calculer
         *   la position du scroll (cas ou il y a une entete fixe par exemple).
         *
         *   Cette directive se place sur l'élément scrollable. En générale il s'agit du body mais ce peut être un autre élément comme le corp d'une modale par exemple.
         *
         * @priority 0
         *
         * @example
         */
        function MwScrollSpy(navigationService, $document, $window) {
            return {
                restrict: "A",
                link: function (scope, element, attrs, ctrl) {
                    //var scrollableElement: ng.IAugmentedJQuery = element;
                    //La directive doit être posée sur le body donc le scrollable est document.
                    var scrollableElement = document;
                    var hasNavigationComponent = false;
                    var lastScrollTop = 0;
                    scope.$watch(function () { return navigationService.getNavigationArray(); }, function (val) {
                        hasNavigationComponent = !!val;
                    });
                    var elementNav = undefined;
                    if (attrs["mwScrollSpy"].length > 0) {
                        elementNav = angular.element(document.querySelector("#" + attrs["mwScrollSpy"]));
                        if (elementNav) {
                            //On considère que si il y a un id c'est pour une autre nav que celle par defaut.
                            hasNavigationComponent = false;
                        }
                    }
                    else if (!hasNavigationComponent) {
                        //La directive ne peut s'appliquer si pas de navigation
                        return;
                    }
                    //Liens présents dans le menu
                    var liens;
                    liens = [];
                    if (!elementNav) {
                    }
                    var offset = 80; //Hauteur du header par défaut.
                    if (attrs["mwScrollSpyOffset"]) {
                        try {
                            offset = parseInt(attrs["mwScrollSpyOffset"], 10);
                        }
                        catch (err) {
                            throw new Error("[MyWay.UI.mwScrollSpy ] Erreur lors de la récupération de la valeur de mwScrollSpyOffset " + err);
                        }
                    }
                    /**
                     * Fonction appelée lorsque l'élément scrollable envoi un évènement scroll.
                     */
                    var onScroll = function (event) {
                        if (hasNavigationComponent) {
                            var targetSection = getSectionOnViewPort(event);
                            //scrollTotem : Permet de scroller le totem en même temps que le contenu
                            if (!navigationService.isScrollInProgress()) {
                                if (targetSection) {
                                    activeLink(targetSection);
                                }
                                var st = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                                var deltaY = st - lastScrollTop;
                                if (navigationService.scrollTotemBy) {
                                    navigationService.scrollTotemBy(deltaY);
                                }
                                lastScrollTop = st;
                                scope.$apply();
                            }
                        }
                        else {
                            var targetElement = getElementOnViewPort(event);
                            if (targetElement) {
                                majNavigation(targetElement);
                            }
                        }
                    };
                    /**
                     * Cette fonction annule le lien actif actuel et positionne le nouveau lien actif correspondant a la section en haut d el azone scrollable
                     */
                    function majNavigation(targetElement) {
                        // Suppresion de la classe "active" sur le lien actif
                        angular.forEach(liens, function (lien, key) {
                            if (lien[0].classList.contains("sectionActive")) {
                                lien.removeClass("sectionActive");
                            }
                        });
                        //Ajout de la classe "active" sur le lien
                        targetElement.addClass("sectionActive");
                        /*
                        angular.forEach(liens, function (lien: ng.IAugmentedJQuery, key: any) {
                            if (lien[0].hasAttribute("data-target")) {
                                var lienid = lien[0].getAttribute("data-target");
                                var targetid = targetElement[0].getAttribute("id");
                                if (lien[0].getAttribute("data-target") === targetElement[0].getAttribute("id")) {
                                    lien.addClass("sectionActive");
                                }
                            }
                        });*/
                    }
                    /**
                     * Cette fonction permet de déterminer quelle section a son header dans la zone sous le header qui signifie que le lien du menu doit être actif.
                     * Utilisé dans le cas ou la navigation n'utilise PAS l'élément mw-navigation
                     */
                    function getElementOnViewPort(event) {
                        //Rechercher la liste des liens dans la navigation 
                        var links = elementNav[0].getElementsByTagName("a");
                        liens = [];
                        for (var j = 0; j < links.length; j++) {
                            if (getRawNode(links[j]).hasAttribute("data-target")) {
                                liens.push(angular.element(links[j]));
                            }
                        }
                        //Recherche des éléments correspondant aux links
                        var panels = [];
                        for (var n = 0; n < liens.length; n++) {
                            var id = liens[n][0].getAttribute("data-target");
                            var section = scrollableElement.querySelector("#" + liens[n][0].getAttribute("data-target"));
                            //var panel = scrollableElement.find("#" + section.target);
                            if (section) {
                                panels.push(section);
                            }
                        }
                        var limit = 0;
                        //TODO trier la liste des panels par leur offsetTop ascendant
                        if (panels.length > 0) {
                            //var limit = $window.pageYOffset + getRawNode(panels[0]).offsetTop + offset ;
                            //limit = getRawNode(scrollableElement).scrollTop - offset;
                            limit = (document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop) - offset;
                        }
                        //Pour chaque lien on regarde si l'élément identifie par le lien (target) est dans la zone d'activation
                        if (panels.length > 0) {
                            var panelIndex = 0;
                            for (var p = 0; p < panels.length; p++) {
                                if (limit > getRawNode(panels[p]).offsetTop) {
                                    panelIndex = p;
                                }
                            }
                            return liens[panelIndex];
                        }
                        else {
                            return undefined;
                        }
                    }
                    /**
                     * Active un lien dans le cas ou la navigation utilise le composant mw-navigation
                     */
                    function activeLink(targetSection) {
                        //TODO permet une surcharge de cette fonction si on devait activer un autre élément
                        navigationService.setActiveSection(targetSection);
                    }
                    /**
                     * Cette fonction peremt de déterminer quelle section a son header dans la zone sous le header qui signifie que le lien du menu doit être actif.
                     * Utilisé dans le cas ou la navigation utilise l'élément mw-navigation
                     */
                    function getSectionOnViewPort(event) {
                        //Rechercher la liste des liens dans la navigation (elle peut changer dynamiquement c'est pourquoi on le fait à chaque scroll)
                        var links = navigationService.getActiveLinks();
                        //Recherche des éléments correspondant aux links
                        var panels = [];
                        for (var n = 0; n < links.length; n++) {
                            var section = links[n];
                            var panel = scrollableElement.querySelector("#" + section.target);
                            //var panel = scrollableElement.getElementById(section.target);
                            //var panel = scrollableElement.find("#" + section.target);
                            if (panel) {
                                panels.push(panel);
                            }
                        }
                        //TODO trier la liste des panels par leur offsetTop ascendant
                        var limit = 0 + offset;
                        if (panels.length > 0) {
                            //limit = $window.pageYOffset + panels[0].offsetTop + 1;
                            limit = (document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop) - offset;
                            //Pour chaque lien on regarde si l'élément identifie par le lien (target) est dans la zone d'activation
                            var panelIndex = 0;
                            for (var p = 0; p < panels.length; p++) {
                                var panelRawNode = getRawNode(panels[p]);
                                if (panelRawNode && limit > getRawNode(panels[p]).offsetTop) {
                                    panelIndex = p;
                                }
                            }
                            return links[panelIndex];
                        }
                        else {
                            return undefined;
                        }
                    }
                    function getRawNode(elem) {
                        try {
                            return elem.nodeName ? elem : elem[0] || elem;
                        }
                        catch (err) {
                            return elem;
                        }
                    }
                    /**
                     * Abonnement à l'évènement scroll
                     */
                    angular.element(document).ready(function () {
                        angular.element(scrollableElement).bind("scroll", function (event) {
                            onScroll(event);
                        });
                        /*
                        angular.element(window).bind("scroll", (event: JQueryEventObject): void => {
                            onScroll(event);
                        });
                        */
                    });
                    // Suppression des events à la destruction du scope
                    scope.$on("$destroy", function () {
                        angular.element(scrollableElement).unbind("scroll");
                        angular.element(window).unbind("scroll");
                    });
                }
            };
        }
        UI.module.directive("mwScrollSpy", ["NavigationService", "$document", "$window", MwScrollSpy]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

/*
* Directive permettant de désactiver les scope de l'élement lorsque celui-ci est hors de l'écran
* Exemple d'appel : <div mw-suspendable></div>
*/
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function factory($timeout) {
            var viewportUpdateTimeout;
            function debouncedViewportUpdate() {
                $timeout.cancel(viewportUpdateTimeout);
                viewportUpdateTimeout = $timeout(function () {
                    scrollMonitor.update();
                }, 10);
            }
            return {
                restrict: "A",
                priority: -1,
                link: function (scope, element, attrs) {
                    var elementWatcher = scrollMonitor.create(element, scope.$eval(attrs.viewportWatch || "0"));
                    function watchDuringDisable() {
                        this.$$watchersBackup = this.$$watchersBackup || [];
                        this.$$watchers = this.$$watchersBackup;
                        var unwatch = this.constructor.prototype.$watch.apply(this, arguments);
                        this.$$watchers = null;
                        return unwatch;
                    }
                    function toggleWatchers(scope, enable) {
                        var digest, current, next = scope;
                        do {
                            current = next;
                            if (enable) {
                                if (current.hasOwnProperty("$$watchersBackup")) {
                                    current.$$watchers = current.$$watchersBackup;
                                    delete current.$$watchersBackup;
                                    delete current.$watch;
                                    digest = !scope.$root.$$phase;
                                }
                            }
                            else {
                                if (!current.hasOwnProperty("$$watchersBackup")) {
                                    current.$$watchersBackup = current.$$watchers;
                                    current.$$watchers = null;
                                    current.$watch = watchDuringDisable;
                                }
                            }
                            next = current.$$childHead;
                            while (!next && current !== scope) {
                                if (current.$$nextSibling) {
                                    next = current.$$nextSibling;
                                }
                                else {
                                    current = current.$parent;
                                }
                            }
                        } while (next);
                        if (digest) {
                            scope.$digest();
                        }
                    }
                    function disableDigest() {
                        toggleWatchers(scope, false);
                    }
                    function enableDigest() {
                        toggleWatchers(scope, true);
                    }
                    if (!elementWatcher.isInViewport) {
                        scope.$evalAsync(disableDigest);
                        debouncedViewportUpdate();
                    }
                    elementWatcher.enterViewport(enableDigest);
                    elementWatcher.exitViewport(disableDigest);
                    scope.$on("toggleWatchers", function (event, enable) {
                        toggleWatchers(scope, enable);
                    });
                    scope.$on("$destroy", function () {
                        elementWatcher.destroy();
                        debouncedViewportUpdate();
                    });
                }
            };
        }
        UI.factory = factory;
        ;
        UI.module.directive("mwSuspendable", ["$timeout", factory]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Directive mwFocus - type Attribut
         * Cette directive permet de mettre le focus sur l'element sur lequel elle est positionnée en fonction de la valeur passée en attribut.
         */
        function mwFocus($timeout) {
            return {
                restrict: "A",
                link: function ($scope, element, attrs) {
                    $scope.$watch(function () { return $scope.$eval(attrs["mwFocus"]); }, function (newValue, oldValue) {
                        if (oldValue !== newValue) {
                            if (newValue) {
                                $timeout(function () {
                                    element[0].focus();
                                });
                            }
                        }
                    });
                }
            };
        }
        UI.module.directive("mwFocus", ["$timeout", mwFocus]);
        /**
        * Directive mwPlierDeplier - type Attribut
        * Cette directive permet d'étendre un conteneur ou de le réduire.
        * La valeur passé en paramètre est la classe pose sur le conteneur lorsqu'il doit être plier.
        * il faut associé à cette classe une hauteur et un overflow à hidden.
        *
        * On utilise un scope isolé sinon tous les conteneurs utilisent le même booléen.
        */
        function mwPlierDeplier($compile) {
            return {
                restrict: "A",
                scope: {},
                link: function ($scope, element, attrs) {
                    $scope.estPlier = true;
                    var html = $compile("<button class='btn-link voir-tout' ng-click='plierDeplier()'> {{estPlier ? 'Voir tout' : 'Voir moins'}} </button>")($scope);
                    var className = "mw-plier";
                    element.after(html);
                    if (attrs["mwPlierDeplier"]) {
                        className = attrs["mwPlierDeplier"];
                    }
                    //Initialisation
                    element.addClass(className);
                    $scope.plierDeplier = function () {
                        if (element.hasClass(className)) {
                            element.removeClass(className);
                            $scope.estPlier = false;
                        }
                        else {
                            element.addClass(className);
                            $scope.estPlier = true;
                        }
                    };
                }
            };
        }
        UI.module.directive("mwPlierDeplier", ["$compile", mwPlierDeplier]);
        /**
     * Directive mwAddFocus - type Attribut
     * Cette directive permet d'ajouter un scroll dans une div avec fonction de la taille passée à l'attribut.
     */
        function mwAddScroll() {
            return {
                restrict: "A",
                link: function ($scope, element, attrs) {
                    if (attrs["mwAddScroll"]) {
                        // Taille div
                        element[0].style.removeProperty("height");
                        element[0].style.height = attrs["mwAddScroll"] + "rem";
                        // Scroll
                        element[0].style.removeProperty("overflow");
                        element[0].style.overflow = "scroll";
                    }
                }
            };
        }
        UI.module.directive("mwAddScroll", mwAddScroll);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        UI.module.directive('removeDiacriticsUppercase', function () {
            return {
                require: '?ngModel',
                link: function (scope, elem, attrs, ctrl) {
                    if (!ctrl) {
                        return;
                    }
                    ctrl.$formatters.unshift(function () {
                        if (typeof ctrl.$modelValue === "undefined") {
                            return;
                        }
                        return removeDiacritics(ctrl.$modelValue).toUpperCase();
                    });
                    ctrl.$parsers.unshift(function (viewValue) {
                        if (viewValue === void 0) { viewValue = ''; }
                        var input = elem[0], cursorPos = input.selectionStart || 0, parsed = removeDiacritics(viewValue).toUpperCase();
                        elem.val(parsed);
                        if (cursorPos < parsed.length) {
                            input.setSelectionRange(cursorPos, cursorPos);
                        }
                        return parsed;
                    });
                }
            };
        });
        var replacementList = [
            {
                base: ' ',
                chars: "\u00A0",
            }, {
                base: '0',
                chars: "\u07C0",
            }, {
                base: 'A',
                chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F",
            }, {
                base: 'AA',
                chars: "\uA732",
            }, {
                base: 'AE',
                chars: "\u00C6\u01FC\u01E2",
            }, {
                base: 'AO',
                chars: "\uA734",
            }, {
                base: 'AU',
                chars: "\uA736",
            }, {
                base: 'AV',
                chars: "\uA738\uA73A",
            }, {
                base: 'AY',
                chars: "\uA73C",
            }, {
                base: 'B',
                chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181",
            }, {
                base: 'C',
                chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B",
            }, {
                base: 'D',
                chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779",
            }, {
                base: 'Dh',
                chars: "\u00D0",
            }, {
                base: 'DZ',
                chars: "\u01F1\u01C4",
            }, {
                base: 'Dz',
                chars: "\u01F2\u01C5",
            }, {
                base: 'E',
                chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07",
            }, {
                base: 'F',
                chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B",
            }, {
                base: 'G',
                chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262",
            }, {
                base: 'H',
                chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D",
            }, {
                base: 'I',
                chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197",
            }, {
                base: 'J',
                chars: "\u24BF\uFF2A\u0134\u0248\u0237",
            }, {
                base: 'K',
                chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2",
            }, {
                base: 'L',
                chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780",
            }, {
                base: 'LJ',
                chars: "\u01C7",
            }, {
                base: 'Lj',
                chars: "\u01C8",
            }, {
                base: 'M',
                chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB",
            }, {
                base: 'N',
                chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E",
            }, {
                base: 'NJ',
                chars: "\u01CA",
            }, {
                base: 'Nj',
                chars: "\u01CB",
            }, {
                base: 'O',
                chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C",
            }, {
                base: 'OE',
                chars: "\u0152",
            }, {
                base: 'OI',
                chars: "\u01A2",
            }, {
                base: 'OO',
                chars: "\uA74E",
            }, {
                base: 'OU',
                chars: "\u0222",
            }, {
                base: 'P',
                chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754",
            }, {
                base: 'Q',
                chars: "\u24C6\uFF31\uA756\uA758\u024A",
            }, {
                base: 'R',
                chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782",
            }, {
                base: 'S',
                chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784",
            }, {
                base: 'T',
                chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786",
            }, {
                base: 'Th',
                chars: "\u00DE",
            }, {
                base: 'TZ',
                chars: "\uA728",
            }, {
                base: 'U',
                chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244",
            }, {
                base: 'V',
                chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245",
            }, {
                base: 'VY',
                chars: "\uA760",
            }, {
                base: 'W',
                chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72",
            }, {
                base: 'X',
                chars: "\u24CD\uFF38\u1E8A\u1E8C",
            }, {
                base: 'Y',
                chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE",
            }, {
                base: 'Z',
                chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762",
            }, {
                base: 'a',
                chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251",
            }, {
                base: 'aa',
                chars: "\uA733",
            }, {
                base: 'ae',
                chars: "\u00E6\u01FD\u01E3",
            }, {
                base: 'ao',
                chars: "\uA735",
            }, {
                base: 'au',
                chars: "\uA737",
            }, {
                base: 'av',
                chars: "\uA739\uA73B",
            }, {
                base: 'ay',
                chars: "\uA73D",
            }, {
                base: 'b',
                chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182",
            }, {
                base: 'c',
                chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184",
            }, {
                base: 'd',
                chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA",
            }, {
                base: 'dh',
                chars: "\u00F0",
            }, {
                base: 'dz',
                chars: "\u01F3\u01C6",
            }, {
                base: 'e',
                chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD",
            }, {
                base: 'f',
                chars: "\u24D5\uFF46\u1E1F\u0192",
            }, {
                base: 'ff',
                chars: "\uFB00",
            }, {
                base: 'fi',
                chars: "\uFB01",
            }, {
                base: 'fl',
                chars: "\uFB02",
            }, {
                base: 'ffi',
                chars: "\uFB03",
            }, {
                base: 'ffl',
                chars: "\uFB04",
            }, {
                base: 'g',
                chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79",
            }, {
                base: 'h',
                chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265",
            }, {
                base: 'hv',
                chars: "\u0195",
            }, {
                base: 'i',
                chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131",
            }, {
                base: 'j',
                chars: "\u24D9\uFF4A\u0135\u01F0\u0249",
            }, {
                base: 'k',
                chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3",
            }, {
                base: 'l',
                chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D",
            }, {
                base: 'lj',
                chars: "\u01C9",
            }, {
                base: 'm',
                chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F",
            }, {
                base: 'n',
                chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509",
            }, {
                base: 'nj',
                chars: "\u01CC",
            }, {
                base: 'o',
                chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11",
            }, {
                base: 'oe',
                chars: "\u0153",
            }, {
                base: 'oi',
                chars: "\u01A3",
            }, {
                base: 'oo',
                chars: "\uA74F",
            }, {
                base: 'ou',
                chars: "\u0223",
            }, {
                base: 'p',
                chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1",
            }, {
                base: 'q',
                chars: "\u24E0\uFF51\u024B\uA757\uA759",
            }, {
                base: 'r',
                chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783",
            }, {
                base: 's',
                chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282",
            }, {
                base: 'ss',
                chars: "\xDF",
            }, {
                base: 't',
                chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787",
            }, {
                base: 'th',
                chars: "\u00FE",
            }, {
                base: 'tz',
                chars: "\uA729",
            }, {
                base: 'u',
                chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289",
            }, {
                base: 'v',
                chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C",
            }, {
                base: 'vy',
                chars: "\uA761",
            }, {
                base: 'w',
                chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73",
            }, {
                base: 'x',
                chars: "\u24E7\uFF58\u1E8B\u1E8D",
            }, {
                base: 'y',
                chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF",
            }, {
                base: 'z',
                chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763",
            }
        ];
        var diacriticsMap = {}, l = replacementList.length;
        var i = 0;
        for (; i < l; i++) {
            var chars = replacementList[i].chars, k = chars.length;
            var j = 0;
            for (; j < k; j++) {
                diacriticsMap[chars[j]] = replacementList[i].base;
            }
        }
        function removeDiacritics(str) {
            return str.replace(/[^\u0000-\u007e]/g, function (c) {
                return diacriticsMap[c] || c;
            });
        }
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwInputFile() {
            return {
                priority: 1001,
                restrict: "A",
                require: ["?ngModel"],
                link: function (scope, element, attrs, ctrls) {
                    if (!("id" in attrs)) {
                        throw new Error("MyWay.UI.mwInputFile : id est un paramètre obligatoire.");
                    }
                    var ngModelCtrl = ctrls[0];
                    if (!ngModelCtrl) {
                        throw new Error("[MyWay.UI.mw-upload] la directive ngModel est obligatoire sur l'input pour utiliser mw-upload.");
                    }
                    //Cette fonction appelé lorsque le model change, permet de détecter qu'il y a effacage du model
                    //et de remettre à vide la valeur du control .
                    function formatter(value) {
                        if (value) {
                            if (angular.isArray(value)) {
                                if (value.length === 0) {
                                    element.val("");
                                }
                            }
                        }
                    }
                    ngModelCtrl.$formatters.push(formatter);
                    // Angular ne gère pas le binding sur le controle upload !
                    // D'ou cette fonction
                    element.bind("change", function (changeEvent) {
                        ngModelCtrl.$setViewValue(changeEvent.target.files);
                    });
                    // Suppression de l'event à la destruction du scope
                    scope.$on("$destroy", function () {
                        element.unbind("change");
                    });
                }
            };
        }
        UI.module.directive("mwInputFile", [mwInputFile]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Énumération listant les types de composants possibles.
         * La hiérarchie étant : Chapitre -> SousChapitre -> Page -> Section.
         */
        (function (TypeComponent) {
            TypeComponent[TypeComponent["Chapitre"] = 0] = "Chapitre";
            TypeComponent[TypeComponent["SousChapitre"] = 1] = "SousChapitre";
            TypeComponent[TypeComponent["Page"] = 2] = "Page";
            TypeComponent[TypeComponent["Section"] = 3] = "Section";
        })(UI.TypeComponent || (UI.TypeComponent = {}));
        var TypeComponent = UI.TypeComponent;
        ;
        /**
         * Classe mère des composants de la navigation.
         */
        var TotemComponent = (function () {
            /**
             * Constructeur de la classe mère
             * @param {string} titre - Titre du composant
             * @param {MyWay.UI.TypeComponent} typeComponent - Type du composant
             */
            function TotemComponent(titre, typeComponent) {
                this.titre = titre;
                this.typeComponent = typeComponent;
                this.isComplete = true;
                this.isFiabilise = true;
            }
            /**
             * Méthode de vérification si le composant est de type Chapitre
             * @return {boolean}
             */
            TotemComponent.prototype.isChapitre = function () {
                return this.typeComponent === TypeComponent.Chapitre;
            };
            /**
             * Méthode de vérification si le composant est de type SousChapitre
             * @return {boolean}
             */
            TotemComponent.prototype.isSousChapitre = function () {
                return this.typeComponent === TypeComponent.SousChapitre;
            };
            /**
             * Méthode de vérification si le composant est de type Page
             * @return {boolean}
             */
            TotemComponent.prototype.isPage = function () {
                return this.typeComponent === TypeComponent.Page;
            };
            /**
             * Méthode de vérification si le composant est de type Section
             * @return {boolean}
             */
            TotemComponent.prototype.isSection = function () {
                return this.typeComponent === TypeComponent.Section;
            };
            /**
             * Méthode qui renvoie la valeur de l'indice de complétude (indique si les données obligatoire de la page ou de la section sont toutes renseignées
             * àreturn {boolean}
             */
            TotemComponent.prototype.checkIsComplete = function () {
                return this.isComplete;
            };
            /**
             * Méthode qui renvoie la valeur de l'indice de fiabilité (indique si les données de la page ou de la section sont fiables
             * àreturn {boolean}
             */
            TotemComponent.prototype.checkIsFiabilise = function () {
                return this.isFiabilise;
            };
            return TotemComponent;
        })();
        UI.TotemComponent = TotemComponent;
        var TotemComposite = (function (_super) {
            __extends(TotemComposite, _super);
            function TotemComposite(titre, typeComponent) {
                _super.call(this, titre, typeComponent);
                this.list = [];
            }
            /**
             * Méthode d'ajout d'un composant dans la liste des composants fils
             * @param {MyWay.UI.TypeComponent} c - Composant à ajouter
             */
            TotemComposite.prototype.add = function (c) {
                this.list.push(c);
                //TODO erreur de code? appeler la fonction isSection()
                if (c.isSection) {
                    c.parent = this;
                }
            };
            /**
             * Méthode de suppression d'un composant dans la liste des composants fils
             * @param {number} i - Index de composant à supprimer
             */
            TotemComposite.prototype.remove = function (i) {
                if (this.list.length <= i) {
                    throw new Error("index out of bound!");
                }
                this.list.splice(i, 1);
            };
            /**
             * Méthode de vérification si le composant est terminé
             * @return {boolean}
             */
            TotemComposite.prototype.checkIsComplete = function () {
                if (this.list && this.list.length > 0) {
                    for (var n = 0; n < this.list.length; n++) {
                        if (!this.list[n].checkIsComplete()) {
                            return false;
                        }
                    }
                }
                return this.isComplete;
            };
            return TotemComposite;
        })(TotemComponent);
        UI.TotemComposite = TotemComposite;
        /**
         * Classe des composants de type Page.
         * @extends MyWay.UI.TotemComposite
         */
        var TotemPage = (function (_super) {
            __extends(TotemPage, _super);
            /**
             * Constructeur de la classe
             * @param {string} titre - Titre du composant
             * @param {string} target - Identifiant de l'élément du DOM visé
             */
            function TotemPage(titre, target) {
                _super.call(this, titre, TypeComponent.Page);
                this.target = target;
            }
            return TotemPage;
        })(TotemComposite);
        UI.TotemPage = TotemPage;
        /**
         * Classe des composants de type Chapitre.
         * @extends MyWay.UI.TotemComposite
         */
        var TotemChapitre = (function (_super) {
            __extends(TotemChapitre, _super);
            /**
             * Constructeur de la classe
             * @param {string} titre - Titre du composant
             */
            function TotemChapitre(titre) {
                _super.call(this, titre, TypeComponent.Chapitre);
            }
            return TotemChapitre;
        })(TotemComposite);
        UI.TotemChapitre = TotemChapitre;
        /**
         * Classe des composants de type Sous-chapitre.
         * @extends MyWay.UI.TotemComposite
         */
        var TotemSSChapitre = (function (_super) {
            __extends(TotemSSChapitre, _super);
            /**
             * Constructeur de la classe
             * @param {string} titre - Titre du composant
             */
            function TotemSSChapitre(titre) {
                _super.call(this, titre, TypeComponent.SousChapitre);
                this.toggle = false;
                this.ouverturePageAuto = true;
                this.pageAutoRoute = null;
            }
            return TotemSSChapitre;
        })(TotemComposite);
        UI.TotemSSChapitre = TotemSSChapitre;
        /**
         * Classe des composants de type Section.
         * @extends MyWay.UI.TotemComponent
         */
        var TotemSection = (function (_super) {
            __extends(TotemSection, _super);
            /**
             * Constructeur de la classe
             * @param {string} titre - Titre du composant
             * @param {string} target - Identifiant de l'élément du DOM visé
             */
            function TotemSection(titre, target) {
                _super.call(this, titre, TypeComponent.Section);
                this.target = target;
            }
            return TotemSection;
        })(TotemComponent);
        UI.TotemSection = TotemSection;
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var NavigationService = (function () {
            function NavigationService($rootScope, totemEvent, $timeout, $location, $document, mwSmoothScroll, anchorScroll) {
                var _this = this;
                this.$location = $location;
                this.$document = $document;
                this.mwSmoothScroll = mwSmoothScroll;
                this.anchorScroll = anchorScroll;
                this._$rootScope = $rootScope;
                this._MW_EVENTS = totemEvent;
                this._$timeout = $timeout;
                this.scrollInProgress = false;
                this.isFromTotemContenuDirective = false;
                this.scrollToSectionOnPageLoad = true;
                this.deRegistrationChangeRouteHandler = this._$rootScope.$on("$routeChangeSuccess", function (scope, next, current) {
                    if (!_this._navigation) {
                        return;
                    }
                    //console.log("location path" + this.$location.path() + " location hash" + this.$location.hash());
                    var pageTarget = _this.$location.path();
                    var sectionTarget = _this.$location.hash();
                    var page = _this.findPageByTarget(_this._navigation, pageTarget);
                    var section = null;
                    if (page === null || page === undefined) {
                        return;
                    }
                    if (sectionTarget) {
                        if (page.list) {
                            var sections = page.list;
                            for (var i = 0, len = sections.length; i < len; i++) {
                                if (sections[i].target === sectionTarget) {
                                    section = sections[i];
                                    break;
                                }
                            }
                        }
                    }
                    _this.setActivePage(page, section, section ? false : true);
                });
            }
            /*
            * Initialise la page active au chargement ainsi que la section
            * Cette méthode est appelé par le constructeur des contrôleurs des directives mw-navigation-contenu et mw-navigation-totem.
            * Params
            * - navigation : objet qui contient la hierarchie de la navigation
            * - origine : string qui contient le nom de la directive employe
            */
            NavigationService.prototype.init = function (navigation, origine, scroll) {
                var _this = this;
                //console.debug("MyWay.UI.NavigationService.init");
                this._navigation = navigation;
                this.scrollAnimation = scroll;
                var firstPage = null;
                var trouve = false;
                //Verifie la directive 
                if (origine === "mwTotemContenu") {
                    this.isFromTotemContenuDirective = true;
                }
                if (this._navigation.length > 0) {
                    if (angular.isUndefined(this._activePage)) {
                        //Recherche de la première section ou page si pas de section dans la page pour l'activer.
                        //Le premier élement est forcement soit un chapitre soit une page.
                        firstPage = this.getFirstPage(this._navigation[0]);
                        /*
                        *  Debut - Prob bug scroll au chargement
                        */
                        /*
                        if (firstPage.list.length > 0) {
                            this.setActivePage(firstPage, <TotemSection>firstPage.list[0]);
                        } else {
                            this.setActivePage(firstPage, null);
                        }*/
                        if (this._activeSousChapitreActif) {
                            //Si le sous chapitre actif ne contient pas la page a activer, on le reset.
                            if (this._activeSousChapitreActif.list.indexOf(firstPage) === -1) {
                                this._activeSousChapitreActif.toggle = false;
                                this._activeSousChapitreActif = null;
                            }
                        }
                        this._activePage = firstPage;
                        if (firstPage.list.length > 0) {
                            this._activeSection = firstPage.list[0];
                        }
                    }
                    else {
                        this._$timeout(function () {
                            _this.setActivePage(_this._activePage, _this._activeSection, true);
                        }, 2000);
                    }
                }
                //console.debug("DEBUG - [MyWay.UI.NavigationService.init] - activePage=" + this._activePage.titre + " );
                /*
                * Fin - Prob bug scroll au chargement
                */
            };
            /**
             * Return la proprieté _navigation. PErme td esavoir si la page contient le composant
             */
            NavigationService.prototype.getNavigationArray = function () {
                return this._navigation;
            };
            NavigationService.prototype.setNavigation = function (navigation) {
                this._navigation = navigation;
            };
            //TODO déplacer cette fonction dans les classes de totem dans navigation-model
            // Renvoie la premier page de l'arborescence.
            NavigationService.prototype.getFirstPage = function (component) {
                if (component.isPage()) {
                    return component;
                }
                else {
                    var composite = component;
                    for (var n = 0; n < composite.list.length; n++) {
                        var child = composite.list[n];
                        return this.getFirstPage(child);
                    }
                    //Aucune pge trouvé : C'est une erreur
                    throw new Error("TotemService.getFirstPage - aucune page trouvée. La structure du totem est incorrecte.");
                }
            };
            //TODO déplacer cette fonction dans les classes de totem dans navigation-model
            /*
            * Find a component by his title
            */
            NavigationService.prototype.findComponent = function (listComponent, titre, type) {
                if (listComponent.length > 0) {
                    for (var j = 0; j < listComponent.length; j++) {
                        var component = listComponent[j];
                        //Is component has the same title?
                        if (component.typeComponent === type) {
                            if (component.titre === titre) {
                                return component;
                            }
                        }
                        //if has children, browse 
                        if (!component.isSection()) {
                            if (component.list.length > 0) {
                                var componentResult = this.findComponent(component.list, titre, type);
                                if (componentResult) {
                                    return componentResult;
                                }
                            }
                        }
                    }
                }
                return undefined;
            };
            /*
           * Find a component by his target
           */
            NavigationService.prototype.findPageByTarget = function (listComponent, target) {
                if (listComponent.length > 0) {
                    for (var j = 0; j < listComponent.length; j++) {
                        var component = listComponent[j];
                        //Is component has the same title?
                        if (component.typeComponent === MyWay.UI.TypeComponent.Page) {
                            var componentTarget = component.target.charAt(0) === '/' ?
                                component.target.substring(1) : component.target;
                            var findTarget = target.charAt(0) === '/' ? target.substring(1) : target;
                            if (componentTarget === findTarget) {
                                return component;
                            }
                        }
                        //if has children, browse 
                        if (!component.isSection()) {
                            if (component.list.length > 0) {
                                var componentResult = this.findPageByTarget(component.list, target);
                                if (componentResult) {
                                    return componentResult;
                                }
                            }
                        }
                    }
                }
                return undefined;
            };
            NavigationService.prototype.getActivePage = function () {
                return this._activePage;
            };
            NavigationService.prototype.getActiveSection = function () {
                return this._activeSection;
            };
            /*
            * Sélectionne la section dans la navigation est scroll jusqu'au panel correspondant
            * si la section donné n'a pas de page parente une exception est généré.
            */
            NavigationService.prototype.setActiveSection = function (section) {
                //console.debug("MyWay.UI.NavigationSerice.setActiveSection("+section.titre + ")"); 
                if (section === this._activeSection) {
                    return;
                }
                var parentPage = section.parent;
                if (parentPage !== this._activePage) {
                    console.error("MyWay.UI.NavigationService.setActiveSection - la section n'a ne fait pas partie de la page active.");
                    return;
                }
                this._$rootScope.$apply(function () {
                    this._activeSection = section;
                }.bind(this));
            };
            /**
             *
             * Lors d'un clic sur une page du menu :
             * - ferme le chapitre ouvert si autre chapitre
             * - ouvre le chapitre de la page si la page et dans un chapitre
             * - positionne la page active et la section active
             * - positionne le focus sur la section cible
             * - scroll jusqu'à la section cible si 3eme parametres fromRouteChangeSuccessEvent vaut false ou est non présent.
             *    en d'autre terme si true et propriete scrollToSectionOnPageLoad à false, alors pas de scroll.
             * TODO gérer le cas ou si la route echoue il ne faut pas jouer cette fonction !
             */
            NavigationService.prototype.setActivePage = function (page, section, fromRouteChangeSuccessEvent) {
                var _this = this;
                var elementTarget;
                var sousChapitrePage = null;
                if (page === null || page === undefined) {
                    console.error("MyWay.UI.NavigationService.setActivePage - la page passé en paramètre doit être renseigné.");
                    return;
                }
                //Avant toute chose si la page est dans un autre sousChapitre on ferme le sousChapitre actif.
                if (this._activeSousChapitreActif) {
                    //Si le sous chapitre actif ne contient pas la page a activer, on le reset.
                    if (this._activeSousChapitreActif.list.indexOf(page) === -1) {
                        this._activeSousChapitreActif.toggle = false;
                        this._activeSousChapitreActif = null;
                    }
                    //Ouverture du souschapitre de la page à activer
                    if (page.parent !== null && page.parent !== undefined) {
                        if (page.parent.typeComponent === MyWay.UI.TypeComponent.SousChapitre) {
                            sousChapitrePage = page.parent;
                            sousChapitrePage.toggle = true;
                            this._activeSousChapitreActif = sousChapitrePage;
                        }
                    }
                }
                else {
                    if (page.parent !== null && page.parent !== undefined) {
                        if (page.parent.typeComponent === MyWay.UI.TypeComponent.SousChapitre) {
                            sousChapitrePage = page.parent;
                            sousChapitrePage.toggle = true;
                            this._activeSousChapitreActif = sousChapitrePage;
                        }
                    }
                }
                //console.debug("MyWay.UI.NavigationSerice.setActivePage(" + page.titre + "," + section.titre + ")"); 
                this._activePage = page;
                this._activeSection = section;
                function focusElement(element) {
                    if (element.tabIndex < 0 && !element.attributes["tabindex"]) {
                        element.tabIndex = -1;
                    }
                    element.focus();
                }
                //Scroll jusqu'à la section
                var scrollDisable = fromRouteChangeSuccessEvent && !this.scrollToSectionOnPageLoad;
                if (!scrollDisable && (this.scrollAnimation || angular.isUndefined(this.scrollAnimation))) {
                    if (section) {
                        this.scrollToSection(section);
                    }
                }
                // Lorsqu'une page est chargé, il faut se repositionner en haut.
                if (!section) {
                    // Pour l'accessibilité il faut positionner le focus sur le contenu (avant de scroller)
                    if (elementTarget = this.$document[0].querySelector("main")) {
                        focusElement(elementTarget);
                    }
                    //Positionnement de la page en haut.
                    this._$timeout(function () {
                        _this.scrollInProgress = true;
                        var zoneTravail = document.getElementsByTagName("mw-zone-travail")[0];
                        if (zoneTravail) {
                            zoneTravail.scrollTop = 0;
                        }
                        else {
                            window.scrollTo(0, 0);
                        }
                        _this.scrollInProgress = false;
                    }, 50, true);
                    //activation de la 1er section par défaut lorsqu'aucune section n'est passé en paramètre.
                    if (page.list.length > 0) {
                        this._activeSection = page.list[0];
                    }
                }
            }; //Fin setActivePage
            //Fonction appelee a la fin du scrollTo du service SmoothScroll
            NavigationService.prototype.callbackSmoothScroll = function (section) {
                var _this = this;
                this._$timeout(function () {
                    _this.scrollInProgress = false;
                }, 200, true);
            };
            NavigationService.prototype.getActiveLinks = function () {
                if (this._activePage) {
                    return this._activePage.list;
                }
                else {
                    return undefined;
                }
            };
            /**
             * Active ou Desactive le sous chapitre.
             */
            NavigationService.prototype.setActiveSousChapitre = function (sousChapitre) {
                var activationPage = false;
                //Activer automatiquement une page à l'ouverture du sous chapitre si on a pas a faire a une vieille directive.
                if (!this.isFromTotemContenuDirective) {
                    if (!sousChapitre.toggle) {
                        if (sousChapitre.list.length > 0) {
                            //il y a des page dans le sous chapitre
                            if (sousChapitre.ouverturePageAuto) {
                                //Recherche de la page a activer
                                var page = null;
                                if (sousChapitre.ouverturePageAuto) {
                                    if (sousChapitre.pageAutoRoute) {
                                        //On prend la page indiqué 
                                        var page = sousChapitre.pageAutoRoute;
                                    }
                                    if (page == null) {
                                        //On prend la premiere page du sous chapitre.
                                        page = sousChapitre.list[0];
                                    }
                                }
                                if (page !== null) {
                                    var section = null;
                                    if (page.list.length > 0) {
                                        section = page.list[0];
                                    }
                                    //this.setActivePage(page, section);
                                    activationPage = true;
                                    this.changeRoute(page, section);
                                }
                            }
                        }
                    }
                }
                sousChapitre.toggle = !sousChapitre.toggle;
                if (sousChapitre.toggle) {
                    //On ouvre le sous chapitre
                    if (this._activeSousChapitreActif !== sousChapitre) {
                        //Si le sous chapitre à activer est différent de celui qui est l'actif, on ferme l'actif.
                        if (this._activeSousChapitreActif !== null && angular.isDefined(this._activeSousChapitreActif)) {
                            this._activeSousChapitreActif.toggle = false;
                        }
                    }
                    this._activeSousChapitreActif = sousChapitre;
                }
                else {
                    //On ferme le sous chapitre
                    this._activeSousChapitreActif = sousChapitre;
                }
            };
            NavigationService.prototype.getChapitre = function (titre) {
                return this.findComponent(this._navigation, titre, UI.TypeComponent.Chapitre);
            };
            NavigationService.prototype.getSousChapitre = function (titre) {
                return this.findComponent(this._navigation, titre, UI.TypeComponent.SousChapitre);
            };
            NavigationService.prototype.getPage = function (titre) {
                return this.findComponent(this._navigation, titre, UI.TypeComponent.Page);
            };
            NavigationService.prototype.getSection = function (titre) {
                return this.findComponent(this._navigation, titre, UI.TypeComponent.Section);
            };
            NavigationService.prototype.isScrollInProgress = function () {
                //console.debug("NavigationService.isScrollInProgress return " + this.scrollInProgress);
                return this.scrollInProgress;
            };
            NavigationService.prototype.setScrollInProgress = function (enable) {
                //console.debug("NavigationService.setScrollInProgress to " + enable);
                this.scrollInProgress = enable;
            };
            NavigationService.prototype.setAnimationScroll = function (enable) {
                //console.debug("NavigationService.setScrollInProgress to " + enable);
                this.scrollAnimation = enable;
            };
            NavigationService.prototype.changeRoute = function (page, section) {
                if (page == null || page === undefined) {
                    throw new Error("MyWay.UI.NavigationService.changeRoute : le paramètre page est undéfini");
                }
                //Changement de route
                if (section) {
                    this.$location.hash(section.target);
                }
                else {
                    this.$location.hash("");
                }
                this.$location.path(page.target);
            };
            NavigationService.prototype.scrollTotem = function (event, deltaY) {
                //console.debug("DEBUG [MyWay.UI.NavigationService.scrollTotem]"); 
                var sidebar = document.querySelector("#mw-sidebar");
                if (sidebar != null) {
                    //Hauteur du contenu incluant le débordement non visible à l'écran
                    var scrollheight = sidebar.scrollHeight;
                    //Hauteur de l'élément padding inclu mais marges,bordures et barre de défilement exclus
                    var clientHeight = sidebar.clientHeight;
                    if (scrollheight > clientHeight) {
                        if (deltaY) {
                            sidebar.scrollTop += Math.ceil(deltaY);
                        }
                        else {
                            var e = event.deltaY ? event : (event.originalEvent.deltaY ? event.originalEvent : null);
                            if (e) {
                                sidebar.scrollTop = sidebar.scrollTop - (e.deltaY * -1 * (e.deltaMode === 1 ? 6 : 1));
                            }
                        }
                    }
                }
            };
            NavigationService.prototype.scrollTotemToBottom = function () {
                //console.debug("DEBUG [MyWay.UI.NavigationService.scrollTotem]"); 
                var sidebar = document.querySelector("#mw-sidebar");
                if (sidebar != null) {
                    //Hauteur du contenu incluant le débordement non visible à l'écran
                    var scrollheight = sidebar.scrollHeight;
                    sidebar.scrollTop = scrollheight;
                }
            };
            NavigationService.prototype.scrollPage = function (container, deltaY) {
                this.scrollInProgress = true;
                if (container != null) {
                    //Hauteur du contenu incluant le débordement non visible à l'écran
                    var scrollheight = container.scrollHeight;
                    //Hauteur de l'élément padding inclu mais marges,bordures et barre de défilement exclus
                    var clientHeight = container.clientHeight;
                    if (scrollheight > clientHeight) {
                        if (deltaY) {
                            container.scrollTop = container.scrollTop - (deltaY * -1);
                        }
                    }
                }
                this.scrollInProgress = false;
            };
            NavigationService.prototype.scrollTotemBy = function (deltaY) {
                var sidebar = document.querySelector("#mw-sidebar");
                if (sidebar != null) {
                    //Hauteur du contenu incluant le débordement non visible à l'écran
                    var scrollheight = sidebar.scrollHeight;
                    //Hauteur de l'élément padding inclu mais marges,bordures et barre de défilement exclus
                    var clientHeight = sidebar.clientHeight;
                    if (scrollheight > clientHeight && deltaY) {
                        sidebar.scrollTop = sidebar.scrollTop + deltaY;
                    }
                }
            };
            NavigationService.prototype.scrollToAnchor = function (section, $location, $anchorScroll) {
                //Activation ou désactivation grisage totem
                this._activeSection = section;
                var old = $location.hash();
                $location.hash(section.target);
                $anchorScroll();
                //reset to old to keep any additional routing logic from kicking in
                $location.hash(old);
            };
            //this.goToAnchor(section);
            //Scroll le contenu pour que la section soit en haut de l'écran
            NavigationService.prototype.scrollToSection = function (section, scroll) {
                var _this = this;
                //Activation ou désactivation grisage totem
                if (document.querySelector("#" + section.target)) {
                    this._$rootScope.$broadcast('navigation-disabled', { scroll: true });
                }
                var elementTarget;
                this._activeSection = section;
                if (section) {
                    console.log(section);
                    //Focus de la section avant le scroll car le focus engendre un scroll non maitrisé.
                    if (elementTarget = document.querySelector("#" + section.target)) {
                        this.focusWithoutScrolling(elementTarget);
                    }
                    this._$timeout(function () {
                        if (document.getElementsByTagName("mw-zone-travail").length != 0) {
                            //Cas ancien modèle 
                            _this.mwSmoothScroll.scrollTo(document.querySelector("#" + section.target), { offset: 83, containerSelector: "mw-zone-travail", callbackAfter: function () { _this.callbackSmoothScroll(section); _this._$rootScope.$broadcast('navigation-disabled', { scroll: false }); } });
                        }
                        else {
                            _this.mwSmoothScroll.scrollTo(document.querySelector("#" + section.target), { offset: 83, callbackAfter: function () { _this.callbackSmoothScroll(section); _this._$rootScope.$broadcast('navigation-disabled', { scroll: false }); } });
                        }
                    }, 50, true);
                }
            };
            NavigationService.prototype.enableScrollToSectionOnPageLoad = function (enable) {
                this.scrollToSectionOnPageLoad = enable;
            };
            NavigationService.prototype.focusWithoutScrolling = function (el) {
                var scrollHierarchy = [];
                var parent = el.parentNode;
                while (parent) {
                    scrollHierarchy.push([parent, parent.scrollLeft, parent.scrollTop]);
                    parent = parent.parentNode;
                }
                el.focus();
                scrollHierarchy.forEach(function (item) {
                    var el = item[0];
                    // Check first to avoid triggering unnecessary `scroll` events
                    if (el.scrollLeft != item[1])
                        el.scrollLeft = item[1];
                    if (el.scrollTop != item[2])
                        el.scrollTop = item[2];
                });
            };
            ;
            return NavigationService;
        })();
        UI.NavigationService = NavigationService;
        UI.module.service("NavigationService", ["$rootScope", "MW_EVENTS", "$timeout", "$location", "$document", "mwSmoothScrollService", "$anchorScroll", NavigationService]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        // Objet permettant de stoker les information lié à une colonne (directive mw-navcol-list).
        var NavigationColonne = (function () {
            function NavigationColonne(selection, distinctField, titre) {
                this.selection = selection;
                this.distinctField = distinctField;
                this.filterValue = "";
                this.activeItem = null;
                this.filteredItems = [];
                this.id = null;
                this.titre = titre;
            }
            NavigationColonne.prototype.setFilterValue = function (value) {
                this.filterValue = value;
            };
            return NavigationColonne;
        })();
        UI.NavigationColonne = NavigationColonne;
        /**
         *
         *   Controlleur de la directive mw-navcol (composant entier)
         *
         */
        var NavcolCtrl = (function () {
            /**
             * Contruction du controleur
             */
            function NavcolCtrl($scope, attrs) {
                this.$scope = $scope;
                this.searchEnabled = $scope.$eval(attrs.searchEnabled) || false;
                this.handler = $scope.$eval(attrs.handler);
                this.responsiveClasses = attrs.responsiveClasses || "hidden-lg";
                this.colonnes = [];
                this.search = "";
                this.currentCol = 0;
            }
            //appelé par mw-navcol-list lors de sa création.
            NavcolCtrl.prototype.addColumn = function (newColonne) {
                this.colonnes.push(newColonne);
                return this.colonnes.length - 1;
            };
            //Lance la recherche à partir du critère saisie dans la zone recherche globale
            NavcolCtrl.prototype.rechercher = function (critereRecherche) {
                this.handler.onNavcolRecherche(critereRecherche, this.$scope.id);
            };
            NavcolCtrl.prototype.clearSubColonne = function (index) {
                for (var i = index + 1; i < this.colonnes.length; i++) {
                    this.colonnes[i].selection = "";
                    //this.colonnes[i].filterValue = this.computefilterValue(i);
                    this.colonnes[i].activeItem = null;
                }
            };
            NavcolCtrl.prototype.colPrev = function () {
                if (this.currentCol > 0) {
                    this.currentCol--;
                }
            };
            NavcolCtrl.$inject = ["$scope", "$attrs"];
            return NavcolCtrl;
        })();
        UI.NavcolCtrl = NavcolCtrl;
        UI.module.controller("NavcolCtrl", NavcolCtrl);
        /**
         *
         *   Controlleur de la directive mw-navcol-list qui représente une colonne
         *
         */
        var NavcolListCtrl = (function () {
            /**
             * Contruction
             */
            function NavcolListCtrl($scope, $compile, $timeout) {
                var _this = this;
                this.$scope = $scope;
                this.$compile = $compile;
                this.$timeout = $timeout;
                this.indexcolonne = 0;
                this.datalist = $scope.datalist;
                this.searchEnabled = true;
                this.searchActive = false;
                if (!$scope.lastColumn) {
                    $scope.lastColumn = false;
                }
                this.lastColumn = $scope.lastColumn;
                this.id = $scope.id;
                this.templateUrl = $scope.templateUrl;
                this.search = "";
                this.isNextColumnHasElements = true;
                $scope.$watch(function () {
                    return _this.colonne.filteredItems;
                }, function () {
                    //console.log("watch  " + this.colonne.filteredItems.length + " last colonne? " + this.lastColumn);
                    //si il y a qu'une ligne affichée,  sélectionné par defaut la ligne.
                    if (angular.isUndefined(_this.colonne.filteredItems) || _this.colonne.filteredItems == null) {
                        _this.colonne.selection = "";
                        _this.colonne.activeItem = null;
                        return;
                    }
                    if (_this.colonne.filteredItems.length === 1) {
                        //this.parentCtrl.clearSubColonne(this.indexcolonne);
                        _this.colonne.selection = _this.colonne.filteredItems[0][_this.colonne.distinctField];
                        _this.colonne.activeItem = _this.colonne.filteredItems[0];
                        _this.parentCtrl.handler.onSelectionChangeNavcolList(_this.colonne.filteredItems[0], _this.id);
                    }
                    else {
                        _this.colonne.selection = "";
                        _this.colonne.activeItem = null;
                        _this.preSelection();
                    }
                }, true);
            }
            //Methode appelée par la directive mwNavCol pour initialiser la liste dans la colonne
            NavcolListCtrl.prototype.initParentCtrl = function (parentCtrl, ctrl) {
                var _this = this;
                this.parentCtrl = parentCtrl;
                this.colonne = new NavigationColonne("", this.$scope.distinctField, this.$scope.titre);
                //Gestion de la pré sélection
                this.preSelection();
                this.$scope.$watch(function () {
                    return _this.datalist;
                }, function () {
                    _this.preSelection();
                }, true);
                //FIn de la gestion de la pré sélection
                this.indexcolonne = parentCtrl.addColumn(this.colonne);
                this.colonne.id = ctrl.id;
            };
            /**
             * Cette fonction prend en compte la pré sélection
             */
            NavcolListCtrl.prototype.preSelection = function () {
                var _this = this;
                if (this.$scope.preSelectedActiveItem && this.colonne.filteredItems.lastIndexOf(this.$scope.preSelectedActiveItem) !== -1) {
                    this.$timeout(function () {
                        _this.colonne.activeItem = _this.$scope.preSelectedActiveItem;
                        _this.colonne.selection = _this.$scope.preSelectedActiveItem[_this.colonne.distinctField];
                        if (_this.parentCtrl.currentCol < _this.parentCtrl.colonnes.length - 1) {
                            _this.parentCtrl.currentCol = _this.indexcolonne + 1;
                        }
                        _this.parentCtrl.handler.onSelectionChangeNavcolList(_this.colonne.activeItem, _this.id);
                    }, 10);
                }
            };
            //Permet de gerer le picto d'activation du filtre de colonne
            NavcolListCtrl.prototype.toogleSearch = function () {
                if (this.search === undefined) {
                    return;
                }
                this.searchActive = !this.searchActive;
                if (this.searchActive === false) {
                    if (this.search.length > 0) {
                        this.onFilterChange();
                    }
                    this.search = "";
                }
            };
            //A chaque modification de la valeur du filter la selection est annulé ainsi que celles de colonnes dépendantes
            NavcolListCtrl.prototype.onFilterChange = function () {
                //Si la selection actuelle n'est plus dans la liste il faut la réinitialiser.
                //if (this.colonne.selection.length > 0) {
                //  if (this.colonne.filteredItems.indexOf(this.colonne.selection) != -1)
                //}
                this.parentCtrl.clearSubColonne(this.indexcolonne);
                this.colonne.selection = "";
                this.colonne.activeItem = null;
                this.parentCtrl.handler.onSelectionChangeNavcolList(null, this.id);
            };
            /*
                isFilterActive() {
                    return this.searchActive;
                }*/
            // - Initialise la selection de la colonne
            // - Raz des selection des sous colonnes
            NavcolListCtrl.prototype.onClick = function (item) {
                this.parentCtrl.clearSubColonne(this.indexcolonne);
                this.colonne.selection = item[this.colonne.distinctField];
                this.parentCtrl.clearSubColonne(this.indexcolonne);
                this.colonne.activeItem = item;
                if (this.parentCtrl.currentCol < this.parentCtrl.colonnes.length - 1) {
                    this.parentCtrl.currentCol = this.indexcolonne + 1;
                }
                this.parentCtrl.handler.onSelectionChangeNavcolList(item, this.id);
            };
            NavcolListCtrl.prototype.isActiveItem = function (item) {
                return this.colonne.activeItem && item === this.colonne.activeItem;
            };
            NavcolListCtrl.prototype.setChevron = function (item) {
                return this.$scope.hasChevron({ item: item });
            };
            NavcolListCtrl.$inject = ["$scope", "$compile", "$timeout"];
            return NavcolListCtrl;
        })();
        UI.NavcolListCtrl = NavcolListCtrl;
        UI.module.controller("NavcolListCtrl", NavcolListCtrl);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         *
         * Directive du composant navigation en colonne.
         * Cette directive contient autant de directive mwNavColList que de colonne.
         *
         */
        function mwNavcol() {
            return {
                restrict: "E",
                transclude: true,
                templateUrl: "nav-colonne/navcol-view.html",
                /*
                scope: {
                    searchEnabled: "=",
                    handler: "=",
                    responsiveClasses: "@"
                },*/
                replace: true,
                controller: "NavcolCtrl",
                controllerAs: "navcolCtrl",
                //bindToController: true,
                link: function ($scope, element, attrs) {
                    if (!("handler" in attrs)) {
                        throw new Error("[mw-navcol] handler est un paramètre obligatoire.");
                    }
                }
            };
        }
        UI.module.directive("mwNavcol", [mwNavcol]);
        function mwRenderer() {
            return {
                restrict: "E",
                replace: true,
                template: "<div class=\"renderer\" ><div ng-transclude></div></div>",
                link: function ($scope, element, attrs) {
                    if (!("handler" in attrs)) {
                        throw new Error("[mw-navcol] handler est un paramètre obligatoire.");
                    }
                }
            };
        }
        UI.module.directive("mwRenderer", [mwRenderer]);
        /**
         *
         * Directive mwNavColList représentant une colonne.
         *
         */
        function mwNavcolList($compile) {
            return {
                restrict: "E",
                require: ["^mwNavcolList", "^mwNavcol"],
                templateUrl: "nav-colonne/colonne-view.html",
                replace: true,
                transclude: true,
                scope: {
                    titre: "@",
                    distinctField: "@",
                    lastColumn: "@",
                    datalist: "=",
                    id: "@",
                    templateUrl: "@",
                    hasChevron: "&",
                    preSelectedActiveItem: "="
                },
                controller: "NavcolListCtrl",
                controllerAs: "navcolListCtrl",
                link: function ($scope, element, attrs, ctrls) {
                    var mwNavColCtrl = ctrls[0], navcolCtrl = ctrls[1];
                    if (!("distinctField" in attrs)) {
                        throw new Error("distinct est un paramètre obligatoire."
                            + "   ==> Liste des titres de colonnes \n");
                    }
                    mwNavColCtrl.initParentCtrl(navcolCtrl, mwNavColCtrl);
                }
            };
        }
        UI.module.directive("mwNavcolList", ["$compile", mwNavcolList]);
        /**
         * Directive représentant un item de la liste d'une colonne.
         * Utilisée surtout pour gérer l'accessibilité.
         *
         */
        function mwNavColListItem() {
            return {
                restrict: "A",
                require: ["^mwNavcolList", "^mwNavcol"],
                link: function (scope, element, attrs, ctrls) {
                    var navColListCtrl = ctrls[0];
                    var navcolCtrl = ctrls[1];
                    scope.$watch(function () { return navColListCtrl.colonne.activeItem; }, function () {
                        //Gestion des aria-expanded (ou aria-pressed sur la dernière colonne) sur les boutons
                        var ariaAttr = navColListCtrl.lastColumn ? "aria-pressed" : "aria-expanded";
                        attrs.$set(ariaAttr, navColListCtrl.isActiveItem(scope.$parent.item));
                        // Gestion des aria-controls sur le bouton controlant le corp de la colonne suivante
                        var index = navcolCtrl.colonnes.indexOf(navColListCtrl.colonne) + 1;
                        if (index < navcolCtrl.colonnes.length) {
                            attrs.$set("aria-controls", navcolCtrl.colonnes[index].id + "-content");
                        }
                    }, true);
                }
            };
        }
        UI.module.directive("mwNavColListItem", mwNavColListItem);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Renvoi une liste d'objet contenant la premiere occurrence pour chaque valeur différente de la propriete donnée en parametre.
         *
         * list : est list ed'objet passé au filtre
         * propriete : est la propriete de l'objet qu'il faut évaluer
         *
         */
        function distinct() {
            return function (list, propriete, search) {
                //filtrage avec le champ filter de la colonne
                if (search && search.length > 0) {
                    var list2 = [];
                    angular.forEach(list, function (value) {
                        if (value[propriete].indexOf(search) > -1) {
                            list2.push(value);
                        }
                    });
                }
                else {
                    list2 = list;
                }
                //Regroupement (distinct) sur la propriete donnée
                var result = [];
                angular.forEach(list2, function (value, key) {
                    var trouve = false;
                    result.forEach(function (item) {
                        if (item[propriete] === value[propriete]) {
                            trouve = true;
                        }
                    });
                    if (!trouve) {
                        result.push(value);
                    }
                });
                return result;
            };
        }
        UI.module.filter("distinct", distinct);
        /*
        * Filtre sur la propriete donnée en parametre et la valeur donnée par search.
        */
        function localSearchFilter() {
            return function (list, propriete, search) {
                //filtrage avec le champ filter de la colonne
                var resultList = [];
                if (search && search.length > 0) {
                    var resultList = [];
                    angular.forEach(list, function (value) {
                        if (value[propriete].toLowerCase().indexOf(search.toLowerCase()) > -1) {
                            resultList.push(value);
                        }
                    });
                }
                else {
                    resultList = list;
                }
                return resultList;
            };
        }
        UI.module.filter("localsearchfilter", localSearchFilter);
        /*
        * Filtre sur la sélection de la colonne précédente
        */
        function myfilter() {
            return function (list, colonnes, indexColonne) {
                //console.log("myfilter ", indexColonne);
                if (!colonnes || colonnes.length === 0) {
                    return list;
                }
                // La premiere colonne est toujours affiché au complet ou filtré sur la recherche globale par un filter classique
                if (indexColonne === 0) {
                    return list;
                }
                var result = [];
                angular.forEach(list, function (value) {
                    var trouve = true;
                    for (var i = 0; i < indexColonne; i++) {
                        //console.log('myfilter boucle '+ i+' -- ' + colonnes[i].distinctField + ' -- ' + value[colonnes[i].distinctField] + ' -- ' + colonnes[i].selection); 
                        if (value[colonnes[i].distinctField] !== colonnes[i].selection) {
                            trouve = false;
                        }
                    }
                    if (trouve) {
                        result.push(value);
                    }
                });
                return result;
            };
        }
        UI.module.filter("myfilter", myfilter);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwNotificationController = (function () {
            //constructeur de la classe
            function MwNotificationController(mwNotificationService) {
                this.mwNotificationService = mwNotificationService;
            }
            MwNotificationController.prototype.showNotification = function (data) {
                this.mwNotificationService.showNotification(data);
            };
            MwNotificationController.prototype.closeNotification = function (id) {
                this.mwNotificationService.close(id);
            };
            //injection des dépendances 
            MwNotificationController.$inject = [
                "MwNotificationService",
            ];
            return MwNotificationController;
        })();
        UI.MwNotificationController = MwNotificationController;
        UI.module.controller("MwNotificationController", MwNotificationController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var Notification = (function () {
            function Notification(id, tpl) {
                this.id = id;
                this.tpl = tpl;
                this.promise = null;
            }
            return Notification;
        })();
        UI.Notification = Notification;
        var MwNotificationService = (function () {
            //constructeur de la classe
            function MwNotificationService($rootScope, $document, $compile, $templateCache, $timeout) {
                this.$rootScope = $rootScope;
                this.$document = $document;
                this.$compile = $compile;
                this.$templateCache = $templateCache;
                this.$timeout = $timeout;
                this.notificationList = [];
                this.isNotificationShow = false;
            }
            MwNotificationService.prototype.showNotification = function (mess, type) {
                // Générer id popup
                var id = Math.floor(Math.random() * 1000);
                //creation du template
                var html;
                this.message = mess;
                var htmlNotifactionVal = "<div ng-controller=\"MwNotificationController as mwNotificationController\" class=\"notification-div validation row\" role=\"alert\" id=\"notification-" + id + "\" >" +
                    "<div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12 \"><span class=\"notification-img validation icon itce-check-circle \" ></span>" +
                    "<span class=\" texte-tronque\">" + this.message + "</span> </div>" +
                    "<span class=\"notification-close icon itce-times \" ng-click=\"mwNotificationController.closeNotification(" + id + ")\"></span>" +
                    "</div>";
                var htmlNotifactionInfo = "<div ng-controller=\"MwNotificationController as mwNotificationController\" class=\"notification-div information row\" role=\"alert\">" +
                    "<div class=\" col-xs-12 col-sm-12 col-md-12 col-lg-12 \"><span class=\"notification-img information icon itce-information-circle \" ></span>" +
                    "<span class=\" texte-tronque\">" + this.message + "</span> </div>" +
                    "<span class=\"notification-close icon itce-times \" ng-click=\"mwNotificationController.closeNotification(" + id + ")\"></span>" +
                    "</div>";
                if (angular.isDefined(type)) {
                    if (type === "validation") {
                        html = htmlNotifactionVal;
                    }
                    else if (type === "information") {
                        html = htmlNotifactionInfo;
                    }
                    else {
                        html = htmlNotifactionVal;
                    }
                }
                else {
                    html = htmlNotifactionVal;
                }
                //mise en cache du template
                this.$templateCache.put("templates/Notification/Notification-notify.html", html);
                //compilation du template
                var tpl = this.tpl = this.$compile(this.$templateCache.get("templates/Notification/Notification-notify.html"))(this.$rootScope);
                // Alimentation liste popups
                var notification = new Notification(id, tpl);
                this.notificationList.push(notification);
                if (!this.isNotificationShow) {
                    this.showNotifications(notification);
                }
            };
            MwNotificationService.prototype.showNotifications = function (notification) {
                this.isNotificationShow = true;
                // ajout du template sur la page
                var body = angular.element(document).find("body").eq(0);
                body.prepend(notification.tpl);
                angular.element(notification.tpl[0]).addClass("closing");
                //timer pour enlever le template
                var _this = this;
                notification.promise = this.$timeout(function () {
                    // Supprimer popup de la liste après timeout
                    var index = _this.notificationList.indexOf(notification);
                    if (index != -1) {
                        notification.tpl.remove();
                        _this.notificationList.splice(index, 1);
                    }
                    // Si la liste contient d'autres notifications alors afficher la suivante après le timeout.
                    if (_this.notificationList.length > 0) {
                        _this.showNotifications(_this.notificationList[0]);
                    }
                    else {
                        _this.isNotificationShow = false;
                    }
                }, 10000);
            };
            MwNotificationService.prototype.close = function (id) {
                var _this = this;
                // Supprimer popup sur action close
                angular.forEach(this.notificationList, function (notification) {
                    if (id === notification.id) {
                        var index = _this.notificationList.indexOf(notification);
                        if (index != -1) {
                            _this.$timeout.cancel(notification.promise);
                            notification.tpl.remove();
                            _this.notificationList.splice(index, 1);
                            // Si la liste contient d'autres notifications alors afficher la suivante après l'action close.
                            if (_this.notificationList.length > 0) {
                                _this.showNotifications(_this.notificationList[0]);
                            }
                            else {
                                _this.isNotificationShow = false;
                            }
                        }
                    }
                });
            };
            MwNotificationService.prototype.closeCurrent = function () {
                // Supprimer popup courrante
                this.$timeout.cancel(this.notificationList[0].promise);
                this.notificationList[0].tpl.remove();
                this.notificationList.splice(0, 1);
                // Si la liste contient d'autres notifications alors afficher la suivante après l'action close.
                if (this.notificationList.length > 0) {
                    this.showNotifications(this.notificationList[0]);
                }
                else {
                    this.isNotificationShow = false;
                }
            };
            MwNotificationService.prototype.closeAll = function () {
                var _this = this;
                // Supprimer toutes les popups
                angular.forEach(this.notificationList, function (notification) {
                    // Supprimer tout les timeouts
                    _this.$timeout.cancel(notification.promise);
                    notification.tpl.remove();
                });
                this.notificationList = [];
                this.isNotificationShow = false;
            };
            //injection des dépendances 
            MwNotificationService.$inject = [
                "$rootScope", "$document", "$compile", "$templateCache", "$timeout",
            ];
            return MwNotificationService;
        })();
        UI.MwNotificationService = MwNotificationService;
        UI.module.service("MwNotificationService", MwNotificationService);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwPanelController = (function () {
            function MwPanelController($scope, navigationService, attrs) {
                this.$scope = $scope;
                var cssPanel = angular.isDefined(attrs.cssPanel) ? attrs.cssPanel : "";
                if (cssPanel.indexOf("panel-inactif") !== -1) {
                    this.isInactif = true;
                }
                else {
                    this.isInactif = false;
                }
                //indicateur de présence du titre
                this.hasTitle = angular.isDefined(attrs.titre) ? (attrs.titre.length > 0) : false;
                this._navigationService = navigationService;
                if (!$scope.niveau) {
                    throw new Error("l'attribut niveau est obligatoire. Les valeur possible sont '1',' 2' ,'3'");
                }
                if ($scope.icone) {
                    $scope.inconeClass = $scope.icone;
                    $scope._titre = " " + $scope.titre;
                }
                else {
                    $scope._titre = $scope.titre;
                }
                this._titre = $scope.titre;
                this._niveau = $scope.niveau;
                this._id = $scope.id;
            }
            MwPanelController.prototype.isPanelActif = function () {
                var result = false;
                if (this._navigationService) {
                    if (this._navigationService.getActivePage()) {
                        if (this._niveau === "1") {
                            if (this._navigationService.getActivePage().target === this._id) {
                                return true;
                            }
                        }
                        else if (this._niveau === "2") {
                            if (this._navigationService.getActiveSection()) {
                                if (this._navigationService.getActiveSection().target === this._id) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return result;
            };
            MwPanelController.$inject = [
                "$scope",
                "NavigationService",
                "$attrs"
            ];
            return MwPanelController;
        })();
        UI.MwPanelController = MwPanelController;
        UI.module.controller("MwPanelController", MwPanelController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwPanel() {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "panel/panel-view.html",
                controller: "MwPanelController",
                controllerAs: "mwPanelController",
                transclude: true,
                scope: {
                    niveau: "@",
                    titre: "@",
                    icone: "@",
                    id: "@",
                    headerSticky: "@",
                    cssPanel: "@"
                }
            };
        }
        UI.mwPanel = mwPanel;
        UI.module.directive("mwPanel", mwPanel);
        function mwPanelSticky($window, $uibPosition) {
            return {
                restrict: "A",
                link: function (scope, element, attrs, ctrl) {
                    var limitTopStart = 0;
                    var limitTopEnd = 0;
                    var limitBottomStart = 0;
                    var limitBottomEnd = 0;
                    var jqWindow = angular.element($window);
                    var ancienTemplate = true;
                    //Par defaut l'élément scrollable est le document.
                    var scrollable = angular.element(document);
                    //Plus besoin d'utiliser la valeur passé en parametre de la directive. On recherche l'élément scrollable parent.
                    scrollable = $uibPosition.scrollParent(element);
                    if (!angular.element(scrollable).hasClass("zone-travail")) {
                        ancienTemplate = false;
                        scrollable = window;
                    }
                    if (scrollable === null) {
                        console.error("MyWay.UI.MwPanelSticky : scrollable non trouvé. La directive est abandonnée");
                        return;
                    }
                    //Position de l'élément scrollable par rapport au haut de l'écran.
                    var scrollableOffsetTop = getOffsetTopToParent(scrollable, null);
                    if (!ancienTemplate) {
                        scrollableOffsetTop = scrollableOffsetTop + 80;
                    }
                    //Calcul l'offsetTop d'un élément par rapport à un conteneur parent
                    function getOffsetTopToParent(target, parent) {
                        var offsetTop = target.offsetTop;
                        while (target = target.offsetParent) {
                            if (parent) {
                                if (target === parent) {
                                    break;
                                }
                            }
                            offsetTop += target.offsetTop;
                        }
                        return offsetTop || 0;
                    }
                    ;
                    function resizePanelHeader() {
                        //Changer la taille du header du paenl au changement de résolution et au passage du header en absolute
                        var panelBody = angular.element(element[0].parentElement.querySelector(".panel-body"));
                        element.addClass("udpateWidth").css("width", panelBody[0].offsetWidth + "px");
                    }
                    function onResize(event) {
                        resizePanelHeader();
                    }
                    ;
                    function onScroll(event) {
                        var scrollTop = event.target.scrollTop;
                        if (!scrollTop) {
                            // Lorsque que la hauteur sur html et body sont à 100%, tout les navigateurs n'interprete pas le scrolltop au même endroit.
                            // En effet, IE positionne la propriété sur le html alors que chrome la positionne sur le body ! D'où la récupèration du scrolltop sur l'un ou l'autre.
                            scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                        }
                        //limitTopStart = limit ou doit se fixer le titre. Logiquement c'est le bas du header
                        limitTopStart = getOffsetTopToParent(element[0].parentElement, ancienTemplate ? scrollable : document.body) - (ancienTemplate ? 0 : 80);
                        limitTopEnd = limitTopStart + element[0].clientHeight;
                        limitBottomStart = limitTopStart + element[0].parentElement.clientHeight - (element[0].clientHeight * 2);
                        limitBottomEnd = limitBottomStart;
                        //console.log("SCROLLTOP=" + scrollTop + "    limittopStart=" + limitTopStart + " limitTopEnd=" + limitTopEnd + " limitBottomStart=" + limitBottomStart + " limitBottomEnd=" + limitBottomEnd);
                        if (scrollTop >= limitTopStart && scrollTop < limitBottomStart) {
                            resizePanelHeader();
                            //L'élément devient sticky
                            element.addClass("mw-sticky-fixed").css("position", "fixed").css("top", scrollableOffsetTop + "px");
                            //Padding top sur l'element parent pour éviter décalage
                            element.parent().parent().addClass("padding").css("padding-top", element[0].offsetHeight + "px");
                        }
                        if (scrollTop >= limitBottomStart && scrollTop <= limitBottomEnd) {
                            resizePanelHeader();
                            //Padding top sur l'element parent pour éviter décalage
                            element.parent().parent().addClass("padding").css("padding-top", element[0].offsetHeight + "px");
                            var offsets = element[0].parentElement.getBoundingClientRect();
                            //L'élément a une position absolute et remonte poussé par la limite basse
                            element.addClass("mw-sticky-fixed").css("position", "absolute").css("top", (element[0].parentElement.clientHeight - element[0].clientHeight + element[0].offsetHeight) + "px");
                        }
                        if (element[0].classList.contains("mw-sticky-fixed")) {
                            //L'élément sort de la zone sticky
                            //Pour la sortie du mode sticky il faut attendre que l'lélément bas (bas du tableau) soit bien au dessus car 
                            //la hauteur du tableau augmente 
                            if (scrollTop < (limitTopStart - element[0].offsetHeight) || scrollTop > (limitBottomEnd + element[0].clientHeight + 1)) {
                                element[0].classList.remove("mw-sticky-fixed");
                                element[0].style.removeProperty("position");
                                element[0].removeAttribute("style");
                                element.parent().parent().removeClass("padding");
                                element.parent().parent().removeAttr("style");
                            }
                        }
                    }
                    ;
                    angular.element(scrollable).bind("scroll", function (event) {
                        onScroll(event);
                    });
                    jqWindow.bind("resize", function (event) {
                        onResize(event);
                    });
                    // Suppression des events à la destruction du scope
                    /* NON IL NE FAUT PAS car on enlève aussi l'évènement lié à la directive zone-travail qui gère le scroll de la navigation lors du scroll de la page !
                    scope.$on("$destroy", function () {
                        scrollable.unbind("scroll");
                    });
                    */
                    scope.$on("$destroy", function () {
                        jqWindow.unbind("resize");
                    });
                }
            };
        }
        UI.mwPanelSticky = mwPanelSticky;
        UI.module.directive("mwPanelSticky", ["$window", "$uibPosition", mwPanelSticky]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwPanelFreeController = (function () {
            function MwPanelFreeController($scope, navigationService) {
                this.$scope = $scope;
                this.niveau = $scope.niveau;
                this.id = $scope.id;
            }
            MwPanelFreeController.prototype.isPanelActif = function () {
                var result = false;
                if (this._navigationService) {
                    if (this._navigationService.getActivePage()) {
                        if (this.niveau === "1") {
                            if (this._navigationService.getActivePage().target === this.id) {
                                return true;
                            }
                        }
                        else if (this.niveau === "2") {
                            if (this._navigationService.getActiveSection()) {
                                if (this._navigationService.getActiveSection().target === this.id) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return result;
            };
            MwPanelFreeController.$inject = [
                "$scope",
                "NavigationService"
            ];
            return MwPanelFreeController;
        })();
        UI.MwPanelFreeController = MwPanelFreeController;
        var MwPanelBarController = (function () {
            function MwPanelBarController($scope) {
                this.$scope = $scope;
                this.titre = $scope.titre;
                this.largeur = $scope.largeur;
            }
            MwPanelBarController.prototype.setPanelFreeCtrl = function (mwPanelFreeCtrl) {
                this.mwPanelFreeCtrl = mwPanelFreeCtrl;
            };
            MwPanelBarController.prototype.getNiveau = function () {
                return this.mwPanelFreeCtrl.niveau;
            };
            MwPanelBarController.prototype.getTitre = function () {
                return this.titre;
            };
            MwPanelBarController.prototype.getClass = function () {
                return this.largeur;
            };
            MwPanelBarController.$inject = [
                "$scope",
            ];
            return MwPanelBarController;
        })();
        UI.MwPanelBarController = MwPanelBarController;
        UI.module.controller("MwPanelBarController", MwPanelBarController);
        UI.module.controller("MwPanelFreeController", MwPanelFreeController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwPanelFree() {
            return {
                restrict: "E",
                templateUrl: "panel-free/panel-free-view.html",
                controller: "MwPanelFreeController",
                controllerAs: "mwPanelFreeController",
                transclude: true,
                scope: {
                    niveau: "@",
                    id: "@"
                }
            };
        }
        UI.mwPanelFree = mwPanelFree;
        function mwPanelBar() {
            return {
                restrict: "E",
                templateUrl: "panel-free/panel-bar-view.html",
                controller: "MwPanelBarController",
                controllerAs: "mwPanelBarController",
                transclude: true,
                replace: true,
                require: ["mwPanelBar", "^mwPanelFree"],
                scope: {
                    titre: "@",
                    largeur: "@",
                    headerSticky: "@"
                },
                link: function ($scope, element, attrs, ctrls) {
                    var mwPanelBarCtrl = ctrls[0], mwPanelFreeCtrl = ctrls[1];
                    mwPanelBarCtrl.setPanelFreeCtrl(mwPanelFreeCtrl);
                }
            };
        }
        UI.mwPanelBar = mwPanelBar;
        function mwPanelBody() {
            return {
                restrict: "E",
                templateUrl: "panel-free/panel-body-view.html",
                transclude: true,
                replace: true,
                scope: {}
            };
        }
        UI.mwPanelBody = mwPanelBody;
        function mwPanelFreeSticky($window) {
            return {
                restrict: "A",
                link: function (scope, element, attrs, ctrl) {
                    var limitTopStart = 0;
                    var limitTopEnd = 0;
                    var limitBottomStart = 0;
                    var limitBottomEnd = 0;
                    var jqWindow = angular.element($window);
                    //Par defaut l'élément scrollable est le document.
                    var scrollable = angular.element(document);
                    //si la directive contient une valeur on recherche l'élément correspondant au selecteur donné.
                    if (attrs["mwPanelFreeSticky"]) {
                        scrollable = angular.element(document.querySelector(attrs["mwPanelFreeSticky"]));
                    }
                    //Position de l'élément scrollable par rapport au haut de l'écran.
                    var scrollableOffsetTop = getOffsetTopToParent(scrollable[0], null);
                    //Taille du header qui remplacera le width: 100%.
                    var width = element[0].offsetWidth;
                    //Calcul l'offsetTop d'un élément par rapport à un conteneur parent
                    function getOffsetTopToParent(target, parent) {
                        var offsetTop = target.offsetTop;
                        while (target = target.offsetParent) {
                            if (parent) {
                                if (target === parent) {
                                    break;
                                }
                            }
                            offsetTop += target.offsetTop;
                        }
                        return offsetTop || 0;
                    }
                    ;
                    function onScroll(event) {
                        var scrollTop = event.target.scrollTop;
                        limitTopStart = getOffsetTopToParent(element[0].parentElement, scrollable[0]);
                        limitTopEnd = limitTopStart + element[0].clientHeight;
                        limitBottomStart = limitTopStart + element[0].parentElement.clientHeight - element[0].clientHeight;
                        limitBottomEnd = limitBottomStart + element[0].clientHeight;
                        //console.log("SCROLLTOP=" + scrollTop + "    limittopStart=" + limitTopStart + " limitTopEnd=" + limitTopEnd + " limitBottomStart=" + limitBottomStart + " limitBottomEnd=" + limitBottomEnd);
                        element.addClass("udpateWidth").css("width", width + "px");
                        if (scrollTop >= limitTopStart && scrollTop < limitBottomStart) {
                            //L'élément devient sticky
                            element.addClass("mw-sticky-fixed").css("position", "fixed").css("top", scrollableOffsetTop + "px");
                            //Padding top sur l'element parent pour éviter décalage
                            element.parent().addClass("padding").css("padding-top", element[0].offsetHeight + "px");
                        }
                        if (scrollTop >= limitBottomStart && scrollTop <= limitBottomEnd) {
                            //Padding top sur l'element parent pour éviter décalage
                            element.parent().addClass("padding").css("padding-top", element[0].offsetHeight + "px");
                            //L'élément a une position absolute et remonte poussé par la limite basse
                            element.addClass("mw-sticky-fixed").css("position", "absolute").css("top", (element[0].parentElement.clientHeight - element[0].clientHeight + element[0].offsetHeight) + "px");
                        }
                        if (element[0].classList.contains("mw-sticky-fixed")) {
                            //L'élément sort de la zone sticky
                            //Pour la sortie du mode sticky il faut attendre que l'lélément bas (bas du tableau) soit bien au dessus car 
                            //la hauteur du tableau augmente 
                            if (scrollTop < limitTopStart || scrollTop > (limitBottomEnd + element[0].clientHeight + 1)) {
                                element[0].classList.remove("mw-sticky-fixed");
                                element[0].style.removeProperty("position");
                                element[0].removeAttribute("style");
                                element.parent().removeClass("padding");
                                element.parent().removeAttr("style");
                            }
                        }
                    }
                    ;
                    scrollable.bind("scroll", function (event) {
                        onScroll(event);
                    });
                    // Suppression des events à la destruction du scope
                    scope.$on("$destroy", function () {
                        scrollable.unbind("scroll");
                    });
                    scope.$on("$destroy", function () {
                        jqWindow.unbind("resize");
                    });
                }
            };
        }
        UI.mwPanelFreeSticky = mwPanelFreeSticky;
        UI.module.directive("mwPanelFreeSticky", ["$window", mwPanelFreeSticky]);
        UI.module.directive("mwPanelFree", mwPanelFree);
        UI.module.directive("mwPanelBar", mwPanelBar);
        UI.module.directive("mwPanelBody", mwPanelBody);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var HRetractableController = (function () {
            function HRetractableController($scope, $log) {
                this.$scope = $scope;
                this.$log = $log;
                // Définition du style selon si le panneau est en over ou non
                this.style = (this.type && this.type === "over") ? "mw-hrectractable-collapsible-over" : "mw-hrectractable-collapsible";
            }
            /**
             *  Fonction de changement d'état
             */
            HRetractableController.prototype.toggleOpen = function () {
                this.open = !this.open;
            };
            HRetractableController.$inject = ["$scope", "$log"];
            return HRetractableController;
        })();
        UI.HRetractableController = HRetractableController;
        UI.module.controller("HRetractableController", HRetractableController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwHretractable($log) {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                templateUrl: "retractable/hretractable-view.html",
                controller: "HRetractableController",
                controllerAs: "hretractableCtrl",
                bindToController: true,
                scope: {
                    titre: "@",
                    id: "@",
                    type: "@",
                    open: "=?"
                },
                require: "?^^mwAccordeon",
                compile: function (element, attrs) {
                    return function (scope, element, attributes, parentCtrl) {
                        var elementTitre = element.find("mw-hretractable-titre");
                        var elementSpan = element.find("span").eq(1).html("");
                        // Si le composant est contenu dans un composant mw-accordeon, on enregistre le panneau rétractable auprès de l'accordéon
                        if (parentCtrl) {
                            var hRetractableCtrl = scope.hretractableCtrl;
                            parentCtrl.ajouterPanneauRetractable(hRetractableCtrl.id, hRetractableCtrl);
                        }
                        if (elementTitre.length > 0) {
                            if (attributes["titre"]) {
                                $log.warn("mw-hretractable: l'élément mw-hretractable-titre est prioritaire sur l'attribut titre.");
                            }
                            elementSpan.append(elementTitre.contents());
                            elementTitre.remove();
                        }
                        else {
                            //Le binding du titre dans la vue causait une erreur : Error: Argument non valide.  at interpolateFnWatchAction ...
                            if (attributes["titre"]) {
                                elementSpan.append(attributes["titre"]);
                            }
                        }
                    };
                }
            };
        }
        UI.mwHretractable = mwHretractable;
        UI.module.directive("mwHretractable", ["$log", mwHretractable]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwPanelEditionController = (function () {
            function MwPanelEditionController($scope, mwTuilePanelEditionService) {
                this.$scope = $scope;
                this.mwTuilePanelEditionService = mwTuilePanelEditionService;
                var tuileEdition = this.mwTuilePanelEditionService.getModeEdition();
                var pos = tuileEdition.map(function (e) { return e.id; }).indexOf(this.$scope.id);
                this.texteBouton = tuileEdition.length > 0 && pos !== -1 && tuileEdition[pos].edition && tuileEdition[pos].id === this.$scope.id ?
                    this.$scope.texteBtnEditionOn : this.$scope.texteBtnEditionOff;
                /*
                if (!$scope.id) {
                    throw new Error("l'attribut id est obligatoire.");
                }*/
            }
            MwPanelEditionController.prototype.toggleMode = function () {
                this.isModeEdition = this.mwTuilePanelEditionService.getModeEditionTuile(this.$scope.id);
                var tuileEditionObject;
                if (this.isModeEdition) {
                    this.isModeEdition = false;
                    tuileEditionObject = {
                        'edition': this.isModeEdition,
                        'id': this.$scope.id
                    };
                    this.mwTuilePanelEditionService.setModeEdition(tuileEditionObject);
                    this.$scope.$broadcast(this.$scope.eventNameEditionOff);
                    this.texteBouton = this.$scope.texteBtnEditionOff;
                }
                else {
                    this.isModeEdition = true;
                    tuileEditionObject = {
                        'edition': this.isModeEdition,
                        'id': this.$scope.id
                    };
                    this.mwTuilePanelEditionService.setModeEdition(tuileEditionObject);
                    this.$scope.$broadcast(this.$scope.eventNameEditionOn);
                    this.texteBouton = this.$scope.texteBtnEditionOn;
                }
            };
            MwPanelEditionController.$inject = [
                "$scope",
                "MwTuilePanelEditionService"
            ];
            return MwPanelEditionController;
        })();
        UI.MwPanelEditionController = MwPanelEditionController;
        UI.module.controller("MwPanelEditionController", MwPanelEditionController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwPanelEdition() {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "panel-edition/panel-edition-view.html",
                controller: "MwPanelEditionController",
                controllerAs: "mwPanelEditionController",
                transclude: true,
                scope: {
                    id: "@",
                    texteBtnEditionOn: "@",
                    eventNameEditionOn: "@",
                    texteBtnEditionOff: "@",
                    eventNameEditionOff: "@"
                }
            };
        }
        UI.mwPanelEdition = mwPanelEdition;
        ;
        UI.module.directive("mwPanelEdition", [mwPanelEdition]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwSelect() {
            return {
                priority: 1001,
                restrict: "A",
                transclude: "element",
                replace: true,
                scope: {
                    ngModel: "=?",
                    labelAttribute: "@"
                },
                template: "<div class=\"mw-select-inner\"><div ng-bind=\"labelAttribute ? (labelAttribute |mwParseFilter:ngModel) : ngModel\"></div><div ng-transclude></div></div>",
                compile: function (element, attrs) {
                    //if (typeof attrs.labelAttribute === "undefined") {
                    //    attrs.$set("labelAttribute", "name");
                    //}
                    return true;
                }
            };
        }
        UI.module.directive("mwSelect", [mwSelect]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwStatictext($exceptionHandler, $compile) {
            return {
                restrict: "A",
                link: function (scope, element, attributes) {
                    if (attributes.mwStatictextBind === undefined && attributes.ngModel === undefined) {
                        $exceptionHandler(new Error("Attribut mw-statictext-bind et ng-model manquant dans la directive mw-statictext"));
                    }
                    var staticData = attributes.mwStatictextBind ? attributes.mwStatictextBind : attributes.ngModel;
                    var staticTpl = "<p class=\"form-control-static hidden\"></p>";
                    var staticElement = angular.element(staticTpl);
                    staticElement.attr("id", attributes.id + "-static");
                    staticElement.attr("ng-bind", staticData);
                    $compile(staticElement)(scope);
                    element.after(staticElement);
                    scope.$watch(attributes.mwStatictext, function (newValue, oldValue) {
                        if (newValue !== oldValue || newValue === true) {
                            if (newValue) {
                                staticElement.removeClass("hidden");
                                element.addClass("hidden");
                            }
                            else {
                                staticElement.addClass("hidden");
                                element.removeClass("hidden");
                            }
                        }
                    });
                }
            };
        }
        UI.module.directive("mwStatictext", ["$exceptionHandler", "$compile", mwStatictext]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwTableController = (function () {
            /**
             * Constructeur
             */
            function MwTableController($scope, $filter, $element, $timeout, tableService, tableFilterService) {
                var _this = this;
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.tableService = tableService;
                this.tableFilterService = tableFilterService;
                //Numéro de la colonne qui doit afficher le filtre
                this.indexColumnFilter = 0;
                this.initializing = true;
                if (!$scope.id) {
                    console.error("MyWay.UI.mwTable : id est un paramètre obligatoire.");
                }
                if (angular.isUndefined($scope.options.data) || $scope.options.data === null) {
                    $scope.options.data = [];
                }
                this.readOnly = this.$scope.options.readOnly;
                this.myFilter = $filter;
                this.predicate = $scope.options.orderBy;
                this.reserve = $scope.options.reserve;
                this.id = $scope.id;
                angular.forEach(this.$scope.options.columns, function (item) {
                    item.reserve = $scope.options.reserve;
                });
                //pagination
                this.moreEnable = $scope.options.moreEnable;
                this.perPage = $scope.options.perPage || 10;
                this.maxSize = 5;
                this.currentPage = 1;
                this.element = $element;
                // option tri
                /*
                this.sortEnable = $scope.options.sortEnable || false;
                this.$scope.$watch(() => { return this.$scope.options.sortEnable; },(value) => {
                    this.$scope.options.sortEnable = value
                }, true);
                */
                //Option filtre
                /*
                this.filterEnable = $scope.options.filterEnable || false;
                this.$scope.$watch(() => { return this.$scope.options.filterEnable; },(value) => {
                    this.filterEnable = value
                }, true);
                */
                //console.log("filter enabled " + this.filterEnable);
                this.selectionChangeHandler = $scope.options.selectionChangeHandler;
                //Handler generale qui remplacer le selectionHandler
                this.mwTableHandler = $scope.options.tableHandler;
                //Mise à jour si les données change
                this.$scope.$watch(function () { return _this.$scope.options.data; }, function (oldVal, newVal) {
                    if (_this.initializing) {
                        _this.watchDatasTableau();
                        _this.initializing = false;
                    }
                    else {
                        if (newVal !== oldVal) {
                            _this.watchDatasTableau();
                        }
                    }
                }, true);
                //Mise à jour si la pagination change
                this.$scope.$watch(function () {
                    return _this.currentPage;
                }, function (newVal, oldVal) {
                    if (newVal !== oldVal) {
                        _this.updateTable();
                        if (_this.mwTableHandler && _this.mwTableHandler.onPageChange) {
                            _this.mwTableHandler.onPageChange(_this.currentPage);
                        }
                    }
                });
                //Si le templateUrl de la ligne detail est renseigné, le boolean est à vrai.
                this.avecLigneDetail = typeof this.$scope.options.templateUrl === "function" || (this.$scope.options.templateUrl.length > 0);
                //Index colonne avec le filtre actif.
                this.indexColumnFilter = -1;
                this.search = {};
                this.filteredColumns = {};
                //Calcule chiffre colspan
                this.colspan = $scope.options.columns.length + ($scope.options.multiSelect ? 1 : 0) + (this.avecLigneDetail ? 1 : 0);
                if (this.mwTableHandler && this.mwTableHandler.onPageChange) {
                    this.mwTableHandler.onPageChange(this.currentPage);
                }
                // gestion de la pagination dynamique par scroll.
                if (this.moreEnable) {
                    angular.element(window).bind("scroll", function (event) {
                        var el = $element[0];
                        if (_this.perPage < _this.$scope.options.data.length) {
                            if (window.pageYOffset > el.getBoundingClientRect().top) {
                                $scope.$apply(function () {
                                    _this.perPage = _this.perPage + $scope.options.perPage;
                                    _this.updateTable();
                                });
                            }
                        }
                    });
                }
                // Ouvrir le détail du premier élément de la liste lorsque openSelected === true
                if (this.avecLigneDetail && this.$scope.options.openSelected) {
                    if (this.$scope.options.selectedItems.length > 0) {
                        this.onClickLigne(this.$scope.options.selectedItems[0], 0);
                    }
                }
                if (!this.$scope.options.disabledItems) {
                    this.$scope.options.disabledItems = [];
                }
                if (!this.$scope.options.disabledItemsCheckbox) {
                    this.$scope.options.disabledItemsCheckbox = [];
                }
                //Gestion du mode sticky
                //this.hasSticky = (this.$scope.options.theadSticky.lenght > 0) ? true : false;
                this.tableObserverDirectiveId = this.id;
                this.tableService.registerMwTableObserver(this);
                this.$scope.$on("$destroy", function () {
                    _this.tableService.removeMwTableObserver(_this);
                });
            } //fin du constructor
            MwTableController.prototype.getPaginationState = function () {
                var pageState = new UI.IMwPaginationState();
                pageState.currentPage = this.currentPage;
                pageState.perPage = this.perPage;
                return pageState;
            };
            MwTableController.prototype.setPaginationState = function (pageState) {
                this.currentPage = pageState.currentPage;
                if (pageState.perPage < this.$scope.options.data.length) {
                    this.perPage = pageState.perPage;
                }
                else {
                    this.perPage = this.$scope.options.data.length;
                }
                this.updateTable();
            };
            /**
             * Cette méthode est appelé a chaque mise à jour du tableau
             * Elle permet de réactualisé , le filtre, le tri, la pagination, l'ouverture des lignes et gérer les cases à cocher si sélection multiple
             *
             *
             */
            MwTableController.prototype.updateTable = function () {
                this.getNbColonne();
                //console.log("[mw-table.updateTable] ");
                // --- FILTRE ---
                //On constitue la liste qui sera en sortie du filtre
                var searchFilteredModel = this.$scope.options.data;
                /*
                // On constitue l'objet expresison qui contiendra autnat de propriete que de champ filtre renseigné
                // L'objet search contient les valeur des champs filtre dans un propriete correspondant au nom du la donnée a filtre
                // Si on filtre sur data.nom search contiendra search.nom = "expr".
                var keys = Object.keys(this.search);
                var expression = {};
                for (var i = 0; i < keys.length; i++) {
                    if (keys[i].indexOf(".") === -1) {
                        //Ce n'est pas une propriete complexe
                        if (this.search[keys[i]].length > 0) {
                            expression[keys[i]] = this.search[keys[i]];
                        }
                    }
                    //Les propriétés complexe ne sont prise en compte que dans les version recente d'angular.
                }
    
                if (this.$scope.options.filterEnable) {
                    searchFilteredModel = this.myFilter("filter")(this.$scope.options.data, expression);
                }
                */
                searchFilteredModel = this.tableFilterService.filter(this.$scope.options.data, this.$scope.options, this.search);
                this.totalItems = searchFilteredModel.length;
                // --- TRI ---
                this.sortedModel = searchFilteredModel;
                if (this.$scope.options.sortEnable || this.$scope.options.orderBy) {
                    this.sortedModel = this.myFilter("orderBy")(searchFilteredModel, this.predicate, this.reserve);
                }
                //Pagination
                var begin = 0;
                if (this.currentPage > 1) {
                    begin = ((this.currentPage - 1) * (this.perPage));
                }
                else {
                    begin = 0;
                }
                var end = begin + this.perPage;
                this.filteredModel = this.sortedModel.slice(begin, end);
                // Désactiver lignes
                if (this.$scope.options.disabledItems && this.$scope.options.disabledItems.length > 0) {
                    angular.forEach(this.$scope.options.disabledItems, function (item) {
                        item.disabled = true;
                    });
                }
                // Désactiver checkbox
                if (this.$scope.options.disabledItemsCheckbox && this.$scope.options.disabledItemsCheckbox.length > 0) {
                    angular.forEach(this.$scope.options.disabledItemsCheckbox, function (item) {
                        item.disabledCheckbox = true;
                    });
                }
                //Ouvrir les items au chargement
                this.itemsCanBeChecked();
                if (this.$scope.options.multiSelect === true) {
                    angular.forEach(this.$scope.options.selectedItems, function (item) {
                        item.checked = true;
                    });
                }
                else {
                    if (this.$scope.options.selectedItems.length > 0) {
                        if (this.$scope.options.selectedItems[0]) {
                            this.$scope.options.selectedItems[0].checked = true;
                            this.lastExpandedItem = this.$scope.options.selectedItems[0];
                        }
                    }
                }
                this.checkMultiSelectionVariable();
            };
            MwTableController.prototype.itemsCanBeChecked = function () {
                for (var i = this.$scope.options.selectedItems.length - 1; i >= 0; i--) {
                    var item = this.$scope.options.selectedItems[i];
                    if ((angular.isDefined(item.disabled) && item.disabled) ||
                        (angular.isDefined(item.disabledCheckbox) && item.disabledCheckbox)) {
                        this.$scope.options.selectedItems.splice(i, 1);
                    }
                }
            };
            /**
             * Appele lorsque le filtre change
             */
            MwTableController.prototype.filtreChange = function () {
                if (this.$scope.options.filterEnable) {
                    // si une ligne détaillest affichée on la ferme.
                    if (this.lastExpandedItem) {
                        this.lastExpandedItem.expanded = false;
                        if (this.selectionChangeHandler) {
                            if (this.selectionChangeHandler.onHideDetail) {
                                this.selectionChangeHandler.onHideDetail(this.lastExpandedItem);
                            }
                        }
                    }
                    ;
                    this.currentPage = 1;
                    this.updateTable();
                    if (this.mwTableHandler && this.mwTableHandler.onFilterChange) {
                        this.mwTableHandler.onFilterChange(this.search);
                    }
                }
            };
            /**
             * Getter sur templateUrl
             */
            MwTableController.prototype.getTemplateUrl = function (ligne) {
                if (typeof this.$scope.options.templateUrl === "string") {
                    return this.$scope.options.templateUrl;
                }
                if (typeof this.$scope.options.templateUrl === "function") {
                    return this.$scope.options.templateUrl(ligne);
                }
            };
            /**
             * Click sur l'icone de tri
             */
            MwTableController.prototype.onSortClick = function (column) {
                if (this.$scope.options.sortEnable) {
                    this.predicate = column.bind;
                    column.reserve = !column.reserve;
                    this.reserve = column.reserve;
                    this.updateTable();
                    if (this.mwTableHandler && this.mwTableHandler.onSortChange) {
                        this.mwTableHandler.onSortChange(this.predicate, this.reserve);
                    }
                }
            };
            /**
             *
             * @param column
             */
            MwTableController.prototype.onFilterClick = function (column) {
            };
            MwTableController.prototype.watchDatasTableau = function () {
                var _this = this;
                this.updateTable();
                if (this.avecLigneDetail && this.$scope.options.openSelected) {
                    if (this.$scope.options.selectedItems.length > 0) {
                        this.$timeout(function () {
                            if (_this.$scope.options.selectedItems[0] && !_this.$scope.options.selectedItems[0].expanded) {
                                _this.$scope.options.openSelected = false;
                                _this.onClickLigne(_this.$scope.options.selectedItems[0], 0);
                            }
                        }, 200);
                    }
                }
            };
            MwTableController.prototype.gererSelectionLignes = function (ligne) {
                if (this.$scope.options.multiSelect) {
                    return;
                }
                ligne.checked = !ligne.checked;
                // Désélection
                if (!ligne.checked) {
                    var ligneSelectionneeIndex = this.$scope.options.selectedItems.indexOf(ligne);
                    if (~ligneSelectionneeIndex) {
                        this.$scope.options.selectedItems.splice(ligneSelectionneeIndex, 1);
                    }
                }
                else {
                    // Sélection unique ?
                    if (!this.$scope.options.multiSelect) {
                        // Désélectionne la précédente ligne
                        this.$scope.options.selectedItems.splice(0, this.$scope.options.selectedItems.length)
                            .forEach(function (ligne) { return ligne.checked = false; });
                    }
                    // Sélection
                    this.$scope.options.selectedItems.push(ligne);
                }
            };
            MwTableController.prototype.gererDetailLigne = function (ligne, index) {
                var _this = this;
                if (!this.avecLigneDetail || !this.getTemplateUrl(ligne)) {
                    return;
                }
                ligne.expanded = !ligne.expanded;
                if (this.lastExpandedItem) {
                    this.lastExpandedItem.expanded = false;
                    if (this.selectionChangeHandler && this.selectionChangeHandler.onHideDetail) {
                        this.selectionChangeHandler.onHideDetail(this.lastExpandedItem);
                    }
                }
                if (ligne.expanded) {
                    this.lastExpandedItem = ligne;
                    if (this.selectionChangeHandler && this.selectionChangeHandler.onShowDetail) {
                        this.selectionChangeHandler.onShowDetail(ligne);
                    }
                    //Gestion de la ligne détail non visible si en bas de l'écran
                    this.$timeout(function () {
                        var ligneDetail = angular.element(document.querySelector("#" + _this.id + "-tbody-" + index))[0];
                        if (!ligneDetail) {
                            return;
                        }
                        var rectangle = ligneDetail.getBoundingClientRect(), footer = document.querySelector("footer");
                        var wh;
                        if (footer) {
                            wh = window.innerHeight - footer.getBoundingClientRect().height;
                        }
                        var elementScrollable = document.getElementsByTagName("mw-zone-travail")[0] || document.body, delta = wh - rectangle.bottom;
                        if (delta < 0) {
                            elementScrollable.scrollTop -= delta;
                        }
                    }, 400);
                }
                else {
                    this.lastExpandedItem = null;
                }
            };
            /**
             * Gestion de la sélection d'une ligne.
             */
            MwTableController.prototype.onClickLigne = function (item, index) {
                if (this.$scope.options.readOnly || item.disabled) {
                    return;
                }
                // Gestion de la sélection des lignes
                // ==================================
                this.gererSelectionLignes(item);
                // Gestion de l'ouverture du détail de la ligne
                // ============================================
                this.gererDetailLigne(item, index);
                // Gestion du selectionChangeHandler
                // =================================
                if (this.selectionChangeHandler) {
                    this.selectionChangeHandler.onSelectionChange(item);
                }
            };
            /**
             *
             */
            MwTableController.prototype.getNbColonne = function () {
                return this.$scope.options.columns.length + ((this.$scope.options.multiSelect) ? 1 : 0) + ((this.avecLigneDetail) ? 1 : 0);
            };
            MwTableController.prototype.getLibelleNoneElements = function () {
                return this.$scope.options.hasNoneElements ? this.$scope.options.hasNoneElements : "Aucun élément";
            };
            /**
             * Click sur la case à coché de l'entête
             *  - S'il y avait ue sélection partiel des lignes on désélectionne tout
             *  - S'il y avait aucunes sélection de ligne on sélectionne tout
             *  - S'il y avait toutes les lignes sélectionnées on désélecitonne tout
             */
            MwTableController.prototype.onMultiSelectionClick = function () {
                var _this = this;
                //setTimeout(() => {
                var setValue = false;
                if (this.partialSelection) {
                    //On deselectionne tout
                    setValue = false;
                }
                else if (this.allOrNoneChecked) {
                    //On deselectionne tout
                    setValue = false;
                }
                else {
                    //On sélectionne tout
                    setValue = true;
                }
                //angular.forEach(this.$scope.options.data, (item: any) => {
                angular.forEach(this.sortedModel, function (item) {
                    if ((angular.isDefined(item.disabled) && item.disabled) || (angular.isDefined(item.disabledCheckbox) && item.disabledCheckbox)) {
                        item.checked = false;
                    }
                    else {
                        item.checked = setValue;
                    }
                });
                if (this.partialSelection || this.allOrNoneChecked) {
                    //On deselectionne tout
                    this.$scope.options.selectedItems.splice(0);
                    angular.forEach(this.sortedModel, function (item) {
                        if (_this.selectionChangeHandler && (item.disabled !== true || item.disabledCheckbox !== true)) {
                            _this.selectionChangeHandler.onSelectionChange(item);
                        }
                    });
                }
                else {
                    //On sélectionne tout
                    this.$scope.options.selectedItems.splice(0);
                    //angular.forEach(this.$scope.options.data, (item: any) => {
                    angular.forEach(this.sortedModel, function (item) {
                        if (item.checked && (item.disabled !== true || item.disabledCheckbox !== true)) {
                            _this.$scope.options.selectedItems.push(item);
                            if (_this.selectionChangeHandler) {
                                _this.selectionChangeHandler.onSelectionChange(item);
                            }
                        }
                    });
                }
                this.checkMultiSelectionVariable();
                //}, 50);
            };
            /**
             *
             */
            MwTableController.prototype.checkMultiSelectionVariable = function () {
                this.allOrNoneChecked = this.$scope.options.data.length === this.$scope.options.selectedItems.length;
                this.partialSelection = this.$scope.options.selectedItems.length > 0 && this.$scope.options.data.length > this.$scope.options.selectedItems.length;
            };
            /**
             *
             * @param item
             */
            MwTableController.prototype.onSelectionCase = function (item) {
                if (angular.isUndefined(item.checked)) {
                    item.checked = false;
                }
                if (item.checked) {
                    //On sélectionne la ligne
                    var index = this.$scope.options.selectedItems.indexOf(item);
                    if (index < 0) {
                        this.$scope.options.selectedItems.push(item);
                    }
                }
                else {
                    //On déselectionne la ligne
                    var index = this.$scope.options.selectedItems.indexOf(item);
                    if (index >= 0) {
                        this.$scope.options.selectedItems.splice(index, 1);
                    }
                }
                if (this.selectionChangeHandler) {
                    this.selectionChangeHandler.onSelectionChange(item);
                }
                this.checkMultiSelectionVariable();
            };
            MwTableController.prototype.isColumnFilterable = function (index, column) {
                return (column.bind.indexOf(".") === -1);
            };
            /**
             * Appeler lorsqu'on click sur le picto filtre d'une colonne
             */
            MwTableController.prototype.onClickPictoFilter = function (index, columnName) {
                this.filteredColumns[columnName] = !this.filteredColumns[columnName];
                //this.indexColumnFilter = index;
                if (!this.filteredColumns[columnName]) {
                    this.search[columnName] = "";
                    this.updateTable();
                }
                else {
                    //Il faut donner le focus au champ input de saisie du filtre
                    //var inputFiltre: ng.IAugmentedJQuery = angular.element(this.element).find("#" + this.id + "-filter-input-" + index);
                    var inputFiltre = document.querySelector("#" + this.id + "-filter-input-" + index);
                    if (inputFiltre) {
                        this.$timeout(function () {
                            inputFiltre.focus();
                        }, 50);
                    }
                }
                //Si au moins une colonne a un filtre actif on pass en mode filtrage en cours
                var keys = Object.keys(this.filteredColumns);
                this.filtrageEnCours = false;
                for (var i = 0; i < keys.length; i++) {
                    if (this.filteredColumns[keys[i]] === true) {
                        this.filtrageEnCours = true;
                        break;
                    }
                }
            };
            MwTableController.prototype.isTbodyAriaExpanded = function (expanded) {
                if (!this.avecLigneDetail) {
                    return undefined;
                }
                else {
                    return expanded;
                }
            };
            MwTableController.prototype.tBodyAriaControls = function (expanded, index) {
                if (!this.avecLigneDetail) {
                    return undefined;
                }
                else {
                    return this.id + "-tr-" + index + "-td-detail";
                }
            };
            MwTableController.prototype.handelKeyLigneAvecDetail = function (item, index, event) {
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ENTRER && !this.avecLigneDetail) {
                    this.onClickLigne(item, index);
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ESPACE && !this.avecLigneDetail) {
                    if (!this.$scope.options.multiSelect) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    if (this.$scope.options.multiSelect && event.srcElement.nodeName === "TBODY") {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ESPACE && this.avecLigneDetail) {
                    if (!this.$scope.options.multiSelect) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    if (this.$scope.options.multiSelect && event.srcElement.nodeName === "TBODY") {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ENTRER && this.avecLigneDetail) {
                    if (!this.$scope.options.multiSelect) {
                        this.onClickLigne(item, index);
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    if (this.$scope.options.multiSelect && event.srcElement.nodeName === "INPUT") {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
            };
            /**
             * Implementation de l'interface IMWTableObserver
             */
            MwTableController.prototype.unSelectItem = function (item) {
                //On déselectionne la ligne
                var index = this.$scope.options.selectedItems.indexOf(item);
                if (index > -1) {
                    item.checked = false;
                    this.$scope.options.selectedItems.splice(index, 1);
                }
                if (this.$scope.options.multiSelect === false) {
                    if (item.expanded) {
                        //On ferme la ligne
                        this.lastExpandedItem = null;
                        item.expanded = false;
                        if (this.selectionChangeHandler) {
                            if (this.selectionChangeHandler.onHideDetail) {
                                this.selectionChangeHandler.onHideDetail(item);
                            }
                        }
                    }
                }
            };
            /*
            * INJECTION DES DEPENDANCES
            */
            MwTableController.$inject = [
                "$scope",
                "$filter",
                "$element",
                "$timeout",
                "tableServiceOpefi",
                "tableFilterService"
            ];
            return MwTableController;
        })();
        UI.MwTableController = MwTableController;
        UI.module.controller("MwTableController", MwTableController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwTable() {
            return {
                restrict: "E",
                templateUrl: "table/table-view.html",
                transclude: true,
                controller: "MwTableController",
                controllerAs: "mwTableCtrl",
                scope: {
                    options: "=",
                    id: "@"
                }
            };
        }
        UI.mwTable = mwTable;
        ;
        UI.module.directive("mwTable", [mwTable]);
        /**
         * @ngdoc directive
         * @name myway.ui.directive.mwTheadSticky
         * @scope
         * @restrict A
         *
         * @description
         * Permet de rendre sticky l'entête du tableau.
         * la directive se positionne en tant qu'attribut du thead.
         * Si la valeur de l'attribut est vide par défaut c'est le document qui est l 'élément scrollable
         * sinon, la valeur fourni doit être un selecteur type css permettant d'identifier l'élément scrollable qui contient le tableau.
         *
         *
         */
        function mwTheadSticky($window, $uibPosition) {
            return {
                restrict: "A",
                link: function (scope, element, attrs, ctrl) {
                    if (!attrs["mwTheadSticky"]) {
                        return; //directive inactive;
                    }
                    var limitTopStart = 0;
                    var limitTopEnd = 0;
                    var limitBottomStart = 0;
                    var limitBottomEnd = 0;
                    var jqWindow = angular.element($window);
                    var ancienTemplate = true;
                    //Par defaut l'élément scrollable est le document.
                    var scrollable = angular.element(document);
                    //Plus besoin d'utiliser la valeur passé en parametre de la directive. On recherche l'élément scrollable parent.
                    scrollable = $uibPosition.scrollParent(element);
                    if (!angular.element(scrollable).hasClass("zone-travail")) {
                        ancienTemplate = false;
                        scrollable = window;
                    }
                    //Position de l'élément scrollable par rapport au haut de l'écran.
                    var scrollableOffsetTop = getOffsetTopToParent(scrollable, null);
                    if (!ancienTemplate) {
                        scrollableOffsetTop = scrollableOffsetTop + 80;
                    }
                    //Calcul l'offsetTop d'un élément par rapport à un conteneur parent
                    function getOffsetTopToParent(target, parent) {
                        var offsetTop = target.offsetTop;
                        while (target = target.offsetParent) {
                            if (parent) {
                                if (target === parent) {
                                    break;
                                }
                            }
                            offsetTop += target.offsetTop;
                        }
                        return offsetTop || 0;
                    }
                    ;
                    //Appliquer à chaque TH la largeur des TD du 1er tbody 
                    function resizeTH() {
                        var listTH = angular.element(element[0]).find("th");
                        var listTD = element[0].parentElement.querySelectorAll("tbody:first-of-type >tr >td");
                        for (var i = 0; i < listTH.length; ++i) {
                            if (angular.element(listTD[i]) && angular.element(listTD[i])[0] &&
                                angular.element(listTD[i])[0].clientWidth) {
                                listTH[i].style.width = angular.element(listTD[i])[0].clientWidth + "px";
                            }
                        }
                    }
                    function onScroll(event) {
                        var scrollTop = event.target.scrollTop;
                        if (!scrollTop) {
                            // Lorsque que la hauteur sur html et body sont à 100%, tout les navigateurs n'interprete pas le scrolltop au même endroit.
                            // En effet, IE positionne la propriété sur le html alors que chrome la positionne sur le body ! D'où la récupèration du scrolltop sur l'un ou l'autre.
                            scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
                        }
                        //limitTopStart = limit ou doit se fixer le titre. Logiquement c'est le bas du header
                        limitTopStart = getOffsetTopToParent(element[0].parentElement, ancienTemplate ? scrollable : document.body) - (ancienTemplate ? 0 : 80);
                        limitTopEnd = limitTopStart + element[0].clientHeight;
                        limitBottomStart = limitTopStart + element[0].parentElement.clientHeight - element[0].clientHeight;
                        limitBottomEnd = limitBottomStart + element[0].clientHeight;
                        //console.log("SCROLLTOP=" + scrollTop+"    limittopStart=" + limitTopStart + " limitTopEnd" + limitTopEnd + " limitBottomStart=" + limitBottomStart + " limitBottomEnd=" + limitBottomEnd);
                        if (scrollTop >= limitTopStart && scrollTop < limitBottomStart) {
                            //L'élément devient sticky
                            element.addClass("mw-sticky-fixed").css("position", "fixed").css("top", scrollableOffsetTop + "px");
                            //Padding top sur l'element parent pour éviter décalage
                            element.parent().parent().addClass("padding").css("padding-top", element[0].offsetHeight + "px");
                            resizeTH();
                        }
                        if (scrollTop >= limitBottomStart && scrollTop <= limitBottomEnd) {
                            //Padding top sur l'element parent pour éviter décalage
                            element.parent().parent().addClass("padding").css("padding-top", element[0].offsetHeight + "px");
                            //console.log("SCROLLTOP=" + scrollTop + "    limittopStart=" + limitTopStart + " limitTopEnd=" + limitTopEnd + " limitBottomStart=" + limitBottomStart + " limitBottomEnd=" + limitBottomEnd);
                            //console.log("element[0].parentElement.clientHeight", element[0].parentElement.clientHeight);
                            //console.log("element[0].clientHeight", element[0].clientHeight);
                            //console.log("element[0].offsetHeight", element[0].offsetHeight);
                            //L'élément a une position absolute et remonte poussé par la limite basse
                            element.addClass("mw-sticky-fixed").css("position", "absolute").css("top", (element[0].parentElement.clientHeight - element[0].clientHeight + element[0].offsetHeight) + "px");
                        }
                        if (element[0].classList.contains("mw-sticky-fixed")) {
                            //L'élément sort de la zone sticky
                            //Pour la sortie du mode sticky il faut attendre que l'lélément bas (bas du tableau) soit bien au dessus car 
                            //la hauteur du tableau augmente 
                            if (scrollTop < (limitTopStart - element[0].offsetHeight) || scrollTop > (limitBottomEnd + element[0].clientHeight + 1)) {
                                element[0].classList.remove("mw-sticky-fixed");
                                element[0].style.removeProperty("position");
                                element[0].removeAttribute("style");
                                element.parent().parent().removeClass("padding");
                                element.parent().parent().removeAttr("style");
                            }
                        }
                    }
                    ;
                    angular.element(scrollable).bind("scroll", function (event) {
                        onScroll(event);
                    });
                    // Suppression des events à la destruction du scope
                    /* NON IL NE FAUT PAS car on enlève aussi l'évènement lié à la directive zone-travail qui gère le scroll de la navigation lors du scroll de la page !
                    scope.$on("$destroy", function () {
                        scrollable.unbind("scroll");
                    });
                    */
                    // Au changement de taille de fenêtre, on recalcule et applique les hauteurs
                    jqWindow.bind("resize", function () {
                        resizeTH();
                        scope.$apply();
                    });
                    scope.$on("$destroy", function () {
                        jqWindow.unbind("resize");
                    });
                }
            };
        }
        UI.mwTheadSticky = mwTheadSticky;
        UI.module.directive("mwTheadSticky", ["$window", "$uibPosition", mwTheadSticky]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwTableSlice() {
            return function (arr, start, end, mwTableCtrl) {
                //console.debug("mwTableSlice arr.length=" + arr.length + " start=" + start + " end=" + end);
                mwTableCtrl;
                return arr.slice(start, end);
            };
        }
        UI.mwTableSlice = mwTableSlice;
        ;
        function mwTableSetPagination() {
            return function (items, mwTableCtrl) {
                //console.debug("mwTableSlice arr.length=" + items.length  );
                mwTableCtrl.setPagination(items);
                return items;
            };
        }
        UI.mwTableSetPagination = mwTableSetPagination;
        ;
        UI.module.filter("mwTableSlice", mwTableSlice);
        UI.module.filter("mwTableSetPagination", mwTableSetPagination);
        function mwStartFrom() {
            return function (input, start) {
                if (angular.isUndefined(input)) {
                    return;
                }
                if (angular.isUndefined(start)) {
                    return;
                }
                start = +start; //parse to int
                return input.slice(start);
            };
        }
        UI.mwStartFrom = mwStartFrom;
        ;
        UI.module.filter("mwStartFrom", mwStartFrom);
        /**
         * Filtre d'une colonne
         */
        function columnFilter() {
            return function (liste, customComporator, criteria, columnDescriptor) {
                var result;
                for (var i = 0; i < liste.length; i++) {
                    if (customComporator(liste[i], criteria, columnDescriptor)) {
                        result.push(liste);
                    }
                }
                return result;
            };
        }
        UI.columnFilter = columnFilter;
        ;
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Ce Service mets à disposition des méthodes permettant à un controlleur de page par exemple de modifier des données de la directive.
         */
        var MwTableService = (function () {
            function MwTableService() {
                this.observers = [];
            }
            /**
             * Renvoie l'observateur (MwTable directive) identifiable par son ID
             * L'observateur permet de manipuler des données dans le controleur d ela directive MwTable
             */
            MwTableService.prototype.getMwTableObserver = function (directiveId) {
                for (var i = 0; i < this.observers.length; i++) {
                    if (this.observers[i].tableObserverDirectiveId === directiveId) {
                        var observer = this.observers[i];
                        return observer;
                    }
                }
            };
            /**
             * Abonne le controlleur d'une directive MwTable (Observateur)
             * Le controlleur doit implémenter l'interface IMwTableObserver
             */
            MwTableService.prototype.registerMwTableObserver = function (observer) {
                this.observers.push(observer);
            };
            /**
             * Désabonne le controlleur d'une directive MwTable (Observateur)
             */
            MwTableService.prototype.removeMwTableObserver = function (observer) {
                var index = this.observers.indexOf(observer);
                if (index !== -1) {
                    this.observers.splice(index);
                }
            };
            return MwTableService;
        })();
        UI.MwTableService = MwTableService;
        UI.module.service("tableService", [MwTableService]);
        /**
         * Comparateur par défaut utilisé dans le cas ou les option sdu tableau n'en contiennent pas.
         */
        var DefaultComparator = (function () {
            function DefaultComparator($parse) {
                this.$parse = $parse;
            }
            DefaultComparator.prototype.hasCommaDot = function (criterion, value, position) {
                var outputComma = value.toString().substr(0, position) + "," + value.toString().substr(position + 1);
                var outputDot = value.toString().substr(0, position) + "." + value.toString().substr(position + 1);
                return (new String(outputComma).indexOf(criterion.toLowerCase()) !== -1 || new String(outputDot).indexOf(criterion.toLowerCase()) !== -1);
            };
            DefaultComparator.prototype.comparatorFn = function (item, criterion, columnDescriptor) {
                var getter = this.$parse(columnDescriptor.bind);
                var value = getter(item);
                var valueType = value !== null ? typeof value : "null";
                switch (valueType) {
                    case "number":
                        if (criterion.toLowerCase().indexOf(",") !== -1 || criterion.toLowerCase().indexOf(".") !== -1) {
                            var position = value.toString().indexOf(".") !== -1 ? value.toString().indexOf(".") : value.toString().indexOf(",");
                            return this.hasCommaDot(criterion, value, position);
                        }
                        var valueString = new String(value);
                        return valueString.indexOf(criterion.toLowerCase()) !== -1;
                    case "string":
                        if (criterion.toLowerCase().indexOf(",") !== -1 || criterion.toLowerCase().indexOf(".") !== -1) {
                            var position = value.toString().indexOf(".") !== -1 ? value.toString().indexOf(".") : value.toString().indexOf(",");
                            if (parseInt(value.substr(position - 1, 1))) {
                                return this.hasCommaDot(criterion, value, position);
                            }
                            else {
                                return value.toLowerCase().indexOf(criterion.toLowerCase()) !== -1;
                            }
                        }
                        return value.toLowerCase().indexOf(criterion.toLowerCase()) !== -1;
                    default:
                        return false;
                }
            };
            return DefaultComparator;
        })();
        /**
         * Service qui offre un eméthode pour filtrer le tableau dans le controleur.
         */
        var TableFilterService = (function () {
            function TableFilterService($parse) {
                this.$parse = $parse;
            }
            TableFilterService.prototype.filter = function (array, tableOptions, criteria) {
                //Pour chaque colonne a filtrer on applique le filtre
                var keys = Object.keys(criteria);
                //Pour chaque colonne contenant un critere de tri, on applique le filtre a la liste issu du filtre de la colonne précédente.
                for (var i = 0; i < keys.length; i++) {
                    //si le critere de tri est renseigné
                    if (criteria[keys[i]] && criteria[keys[i]].length > 0) {
                        //Récupèration des options de la colonne concerné
                        var columnDescriptor = tableOptions.columns
                            .filter(function (element) {
                            return element.bind === keys[i];
                        })
                            .shift();
                        //On appel le filtre colonne auquel on donne le comparateur
                        if (columnDescriptor) {
                            //on construit un comparateur qui correspond à un filter angular classique .
                            var comparator = new DefaultComparator(this.$parse);
                            if (columnDescriptor.comparator) {
                                //On utilise le comparateur fournit pour la colonne
                                comparator = columnDescriptor.comparator;
                            }
                            var predicatefn = function (item) {
                                return comparator.comparatorFn(item, criteria[keys[i]], columnDescriptor);
                            };
                            //Execution du filtre pour la colonne en cours
                            array = array.filter(predicatefn);
                        }
                    }
                }
                return array;
            };
            return TableFilterService;
        })();
        UI.TableFilterService = TableFilterService;
        UI.module.service("tableFilterService", ["$parse", TableFilterService]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwTableControllerv1710 = (function () {
            /**
             * Constructeur
             */
            function MwTableControllerv1710($scope, $filter, $element, $timeout, tableService, tableFilterService) {
                var _this = this;
                this.$scope = $scope;
                this.$filter = $filter;
                this.$element = $element;
                this.$timeout = $timeout;
                this.tableService = tableService;
                this.tableFilterService = tableFilterService;
                //Numéro de la colonne qui doit afficher le filtre
                this.indexColumnFilter = 0;
                if (!$scope.id) {
                    console.error("MyWay.UI.mwTable : id est un paramètre obligatoire.");
                }
                this.id = this.$scope.id;
                if (!$scope.options) {
                    console.error("MyWay.UI.mwTable : option est un paramètre obligatoire.");
                }
                if (angular.isUndefined($scope.options.data) || $scope.options.data === null) {
                    $scope.options.data = [];
                }
                this.initOption(this.$scope.options);
                //Mise à jour si les données change
                this.$scope.$watch(function () {
                    return _this.$scope.options.data;
                }, function () {
                    _this.updateTable();
                    if (_this.avecLigneDetail && _this.$scope.options.openSelected) {
                        if (_this.$scope.options.selectedItems.length > 0) {
                            _this.$timeout(function () {
                                _this.$scope.options.openSelected = false;
                                _this._hideDetail();
                                _this._showDetail(_this.$scope.options.selectedItems[0]);
                            }, 200);
                        }
                    }
                }, true);
                /*
                      this.$scope.$watch(() => { return this.$scope.options.selectedItems; }, () => {
                          this.updateTable();
                      });
                      */
                //Mise à jour si la pagination change
                this.$scope.$watch(function () {
                    return _this.currentPage;
                }, function () {
                    _this.updateTable();
                    if (_this.mwTableHandler && _this.mwTableHandler.onPageChange) {
                        _this.mwTableHandler.onPageChange(_this.currentPage);
                    }
                });
                //Index colonne avec le filtre actif. TODO supprimer
                this.indexColumnFilter = -1;
                //Abonnement au service TableService qui permet à des controlleurs de modifier l'état du tableau par programme.
                this.tableObserverDirectiveId = this.id;
                this.tableService.registerMwTableObserver(this);
                this.$scope.$on("$destroy", function () {
                    _this.tableService.removeMwTableObserver(_this);
                    _this.$element.unbind("wheel");
                });
            } //fin du constructor
            MwTableControllerv1710.prototype.initOption = function (option) {
                var _this = this;
                this.predicate = this.$scope.options.orderBy;
                this.reserve = this.$scope.options.reserve;
                // pagination
                this.moreEnable = this.$scope.options.moreEnable;
                this.perPage = this.$scope.options.perPage || 10;
                this.maxSize = 5;
                this.currentPage = 1;
                // gestion de la pagination dynamique par scroll.
                if (this.moreEnable) {
                    angular.element(window).bind("scroll", function (event) {
                        var el = _this.$element[0];
                        if (_this.perPage < _this.$scope.options.data.length) {
                            if (window.pageYOffset > el.getBoundingClientRect().top) {
                                _this.$scope.$apply(function () {
                                    _this.perPage = _this.perPage + _this.$scope.options.perPage;
                                    _this.updateTable();
                                });
                            }
                        }
                    });
                }
                // Tri
                angular.forEach(this.$scope.options.columns, function (item) {
                    item.reserve = _this.$scope.options.reserve;
                });
                //Récupèration des handlers
                this.selectionChangeHandler = this.$scope.options.selectionChangeHandler;
                //Handler generale qui remplacer le selectionHandler
                this.mwTableHandler = this.$scope.options.tableHandler;
                //Si le templateUrl de la ligne detail est renseigné, le boolean est à vrai.
                this.avecLigneDetail = this.$scope.options.templateUrl.length > 0;
                this.search = {};
                this.filteredColumns = {};
                this.filtrageEnCours = false;
                //Calcule chiffre colspan
                this.colspan = this.$scope.options.columns.length + (this.$scope.options.multiSelect ? 1 : 0) + (this.avecLigneDetail ? 1 : 0);
                // Ouvrir le détail du premier élément de la liste lorsque openSelected === true
                if (this.avecLigneDetail && this.$scope.options.openSelected) {
                    if (this.$scope.options.selectedItems.length > 0) {
                        this.$timeout(function () {
                            _this._hideDetail();
                            _this._showDetail(_this.$scope.options.selectedItems[0]);
                        }, 200);
                    }
                }
            };
            /**
             * Cette méthode est appelé a chaque mise à jour du tableau
             * Elle permet de réactualisé , le filtre, le tri, la pagination, l'ouverture des lignes et gérer les cases à cocher si sélection multiple
             *
             *
             */
            MwTableControllerv1710.prototype.updateTable = function () {
                var _this = this;
                this.getNbColonne();
                //console.log("[mw-table.updateTable] ");
                // --- FILTRE ---
                //On constitue la liste qui sera en sortie du filtre
                var searchFilteredModel = this.$scope.options.data;
                searchFilteredModel = this.tableFilterService.filter(this.$scope.options.data, this.$scope.options, this.search);
                this.totalItems = searchFilteredModel.length;
                // --- TRI ---
                this.sortedModel = searchFilteredModel;
                if (this.$scope.options.sortEnable || this.$scope.options.orderBy) {
                    this.sortedModel = this.$filter("orderBy")(searchFilteredModel, this.predicate, this.reserve);
                }
                // --- Pagination ---
                var begin = 0;
                if (this.currentPage > 1) {
                    begin = (this.currentPage - 1) * this.perPage;
                }
                else {
                    begin = 0;
                }
                var end = begin + this.perPage;
                this.filteredModel = this.sortedModel.slice(begin, end);
                // --- Gestion SELECTION ---
                if (this.$scope.options.multiSelect === true) {
                    angular.forEach(this.$scope.options.selectedItems, function (item) {
                        for (var c = 0; c < _this.filteredModel.length; c++) {
                            if (_this.isItemSelected(_this.filteredModel[c])) {
                                _this.filteredModel[c].checked = true;
                            }
                        }
                    });
                }
                else {
                    if (this.$scope.options.selectedItems.length > 0) {
                        if (this.$scope.options.selectedItems[0]) {
                            this.$scope.options.selectedItems[0].checked = true;
                            //Ouvrir l'item
                            this.lastExpandedItem = this.$scope.options.selectedItems[0];
                        }
                    }
                }
                this.checkMultiSelectionVariable();
            };
            /**
             * Appele lorsque le filtre change
             */
            MwTableControllerv1710.prototype.filtreChange = function () {
                if (this.$scope.options.filterEnable) {
                    // si une ligne détaillest affichée on la ferme.
                    this._hideDetail();
                    this.currentPage = 1;
                    this.updateTable();
                    if (this.mwTableHandler && this.mwTableHandler.onFilterChange) {
                        this.mwTableHandler.onFilterChange(this.search);
                    }
                }
            };
            /**
             * Getter sur templateUrl
             */
            MwTableControllerv1710.prototype.getTemplateUrl = function () {
                return this.$scope.options.templateUrl;
            };
            /**
             * Click sur l'icone de tri
             */
            MwTableControllerv1710.prototype.onSortClick = function (column) {
                if (this.$scope.options.sortEnable) {
                    this.predicate = column.bind;
                    column.reserve = !column.reserve;
                    this.reserve = column.reserve;
                    this.updateTable();
                    if (this.mwTableHandler && this.mwTableHandler.onSortChange) {
                        this.mwTableHandler.onSortChange(this.predicate, this.reserve);
                    }
                }
            };
            /**
             *
             * @param column
             */
            MwTableControllerv1710.prototype.onFilterClick = function (column) { };
            /**
             * Gestion de la sélection d'une ligne.
             */
            MwTableControllerv1710.prototype.onClickLigne = function (item, index) {
                if (this.isItemDisabled(item)) {
                    return;
                }
                //Si mono sélection
                if (this.$scope.options.multiSelect === false) {
                    //Si l'item est déjà sélectionné on la dé sélectionne
                    if (this.isItemSelected(item)) {
                        //En mode mono sélection, une séleciton ouvre la ligne
                        this._hideDetail();
                        this._unSelectItem(item);
                    }
                    else {
                        //Sinon on la sélectionne
                        this._unSelectItem(this.lastExpandedItem);
                        this._hideDetail();
                        this._showDetail(item);
                        this._selectItem(item);
                        this._showItemInViewPort(index);
                    }
                }
                else {
                    if (!this.isEqual(this.lastExpandedItem, item)) {
                        this._hideDetail();
                        this._showDetail(item);
                    }
                    else {
                        //Toggle detail
                        if (this.lastExpandedItem === null) {
                            this._showDetail(item);
                        }
                        else {
                            this._hideDetail();
                        }
                    }
                }
            };
            MwTableControllerv1710.prototype.isItemExpanded = function (item) {
                if (this.lastExpandedItem !== null) {
                    if (angular.isUndefined(this.lastExpandedItem)) {
                        return false;
                    }
                    var o1 = angular.copy(this.lastExpandedItem);
                    var o2 = angular.copy(item);
                    delete o1.checked;
                    delete o2.checked;
                    return angular.equals(o1, o2);
                }
                return false;
            };
            MwTableControllerv1710.prototype.isItemSelected = function (item) {
                for (var i = 0; i < this.$scope.options.selectedItems.length; i++) {
                    var o1 = angular.copy(this.$scope.options.selectedItems[i]);
                    var o2 = angular.copy(item);
                    delete o1.checked;
                    delete o2.checked;
                    if (angular.equals(o1, o2)) {
                        //item.checked = true;
                        return true;
                    }
                }
                return false;
            };
            MwTableControllerv1710.prototype.indexOf = function (list, item) {
                for (var i = 0; i < list.length; i++) {
                    var o1 = angular.copy(list[i]);
                    var o2 = angular.copy(item);
                    delete o1.checked;
                    delete o2.checked;
                    if (angular.equals(o1, o2)) {
                        //item.checked = true;
                        return i;
                    }
                }
                return -1;
            };
            MwTableControllerv1710.prototype.isEqual = function (item1, item2) {
                if (angular.isUndefined(item1) || !item1) {
                    return false;
                }
                if (angular.isUndefined(item2) || !item1) {
                    return false;
                }
                var o1 = angular.copy(item1);
                var o2 = angular.copy(item2);
                delete o1.checked;
                delete o2.checked;
                return angular.equals(o1, o2);
            };
            /**
             *
             */
            MwTableControllerv1710.prototype.getNbColonne = function () {
                return this.$scope.options.columns.length + (this.$scope.options.multiSelect ? 1 : 0) + (this.avecLigneDetail ? 1 : 0);
            };
            MwTableControllerv1710.prototype.getLibelleNoneElements = function () {
                return this.$scope.options.hasNoneElements ? this.$scope.options.hasNoneElements : "Aucun élément";
            };
            /**
             * Click sur la case à coché de l'entête
             *  - S'il y avait ue sélection partiel des lignes on désélectionne tout
             *  - S'il y avait aucunes sélection de ligne on sélectionne tout
             *  - S'il y avait toutes les lignes sélectionnées on désélecitonne tout
             */
            MwTableControllerv1710.prototype.onMultiSelectionClick = function () {
                var _this = this;
                var setValue = false;
                if (this.partialSelection) {
                    //On deselectionne tout
                    setValue = false;
                }
                else if (this.allOrNoneChecked) {
                    //On deselectionne tout
                    setValue = false;
                }
                else {
                    //On sélectionne tout
                    setValue = true;
                }
                //angular.forEach(this.$scope.options.data, (item: any) => {
                angular.forEach(this.sortedModel, function (item) {
                    if (!_this.isItemDisabled(item) || !_this.isCheckboxDisabled(item)) {
                        item.checked = setValue;
                    }
                });
                if (this.partialSelection || this.allOrNoneChecked) {
                    //On deselectionne tout sauf les lignes désactivées
                    angular.forEach(this.sortedModel, function (item) {
                        if (!_this.isItemDisabled(item) || !_this.isCheckboxDisabled(item)) {
                            if (_this.selectionChangeHandler) {
                                _this.selectionChangeHandler.onSelectionChange(item);
                            }
                        }
                    });
                    this.$scope.options.selectedItems.splice(0);
                }
                else {
                    //On commence par vider la liste
                    this.$scope.options.selectedItems.splice(0);
                    angular.forEach(this.sortedModel, function (item) {
                        if (!_this.isItemDisabled(item) || !_this.isCheckboxDisabled(item)) {
                            _this.$scope.options.selectedItems.push(item);
                            if (_this.selectionChangeHandler) {
                                _this.selectionChangeHandler.onSelectionChange(item);
                            }
                        }
                    });
                }
                this.checkMultiSelectionVariable();
            };
            /**
             *
             */
            MwTableControllerv1710.prototype.checkMultiSelectionVariable = function () {
                this.allOrNoneChecked = this.$scope.options.data.length === this.$scope.options.selectedItems.length;
                this.partialSelection =
                    this.$scope.options.selectedItems.length > 0 && this.$scope.options.data.length > this.$scope.options.selectedItems.length;
            };
            /**
             * Méthode appelé par la vue lors du changement de la case à coché
             * @param item
             */
            MwTableControllerv1710.prototype.onSelectionCase = function (item, value) {
                if (angular.isUndefined(item.checked)) {
                    item.checked = false;
                }
                if (item.checked) {
                    //On sélectionne la ligne
                    if (!this.isItemSelected(item)) {
                        this.$scope.options.selectedItems.push(item);
                    }
                }
                else {
                    //On déselectionne la ligne
                    var index = this.indexOf(this.$scope.options.selectedItems, item);
                    if (index >= 0) {
                        this.$scope.options.selectedItems.splice(index, 1);
                    }
                }
                if (this.selectionChangeHandler) {
                    this.selectionChangeHandler.onSelectionChange(item);
                }
                this.checkMultiSelectionVariable();
            };
            MwTableControllerv1710.prototype.isColumnFilterable = function (index, column) {
                return column.bind.indexOf(".") === -1;
            };
            /**
             * Appeler lorsqu'on click sur le picto filtre d'une colonne
             */
            MwTableControllerv1710.prototype.onClickPictoFilter = function (index, columnName) {
                this.filteredColumns[columnName] = !this.filteredColumns[columnName];
                //this.indexColumnFilter = index;
                if (!this.filteredColumns[columnName]) {
                    this.search[columnName] = "";
                    this.updateTable();
                }
                else {
                    //Il faut donner le focus au champ input de saisie du filtre
                    //var inputFiltre: ng.IAugmentedJQuery = angular.element(this.element).find("#" + this.id + "-filter-input-" + index);
                    var inputFiltre = document.querySelector("#" + this.id + "-filter-input-" + index);
                    if (inputFiltre) {
                        this.$timeout(function () {
                            inputFiltre.focus();
                        }, 50);
                    }
                }
                //Si au moins une colonne a un filtre actif on pass en mode filtrage en cours
                var keys = Object.keys(this.filteredColumns);
                this.filtrageEnCours = false;
                for (var i = 0; i < keys.length; i++) {
                    if (this.filteredColumns[keys[i]] === true) {
                        this.filtrageEnCours = true;
                        break;
                    }
                }
            };
            MwTableControllerv1710.prototype.isTbodyAriaExpanded = function (expanded) {
                if (!this.avecLigneDetail) {
                    return undefined;
                }
                else {
                    return expanded;
                }
            };
            MwTableControllerv1710.prototype.tBodyAriaControls = function (index) {
                if (!this.avecLigneDetail) {
                    return undefined;
                }
                else {
                    return this.id + "-tr-" + index + "-td-detail";
                }
            };
            MwTableControllerv1710.prototype.handelKeyLigneAvecDetail = function (item, index, event) {
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ENTRER && !this.avecLigneDetail) {
                    this.onClickLigne(item, index);
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ESPACE && !this.avecLigneDetail) {
                    if (!this.$scope.options.multiSelect) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    if (this.$scope.options.multiSelect && event.srcElement.nodeName === "TBODY") {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ESPACE && this.avecLigneDetail) {
                    if (!this.$scope.options.multiSelect) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    if (this.$scope.options.multiSelect && event.srcElement.nodeName === "TBODY") {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
                if (event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ENTRER && this.avecLigneDetail) {
                    if (!this.$scope.options.multiSelect) {
                        this.onClickLigne(item, index);
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    if (this.$scope.options.multiSelect && event.srcElement.nodeName === "INPUT") {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
            };
            MwTableControllerv1710.prototype.getColumnIndex = function (columnBind) {
                var index = this.$scope.options.columns.findIndex(function (column) {
                    return column.bind === columnBind;
                });
                return index;
            };
            MwTableControllerv1710.prototype.isItemDisabled = function (item) {
                if (this.$scope.options.disabledItems) {
                    var index = this.indexOf(this.$scope.options.disabledItems, item);
                    return index > -1;
                }
                return false;
            };
            MwTableControllerv1710.prototype.isCheckboxDisabled = function (item) {
                if (this.$scope.options.disabledItemsCheckbox) {
                    var index = this.indexOf(this.$scope.options.disabledItemsCheckbox, item);
                    return index > -1;
                }
                return false;
            };
            MwTableControllerv1710.prototype._showItemInViewPort = function (indexLigne) {
                var _this = this;
                this.$timeout(function () {
                    //var target = clickEvent.target;
                    var ligneDetail = angular.element(document.querySelector("#" + _this.id + "-tbody-" + indexLigne))[0];
                    //var ligneDetail = angular.element(target.parentElement.parentElement.parentElement)[0];
                    if (ligneDetail) {
                        var rectangle = ligneDetail.getBoundingClientRect();
                        var wh = window.innerHeight;
                        var footer = document.querySelector("footer");
                        if (footer) {
                            wh = wh - footer.getBoundingClientRect().height;
                        }
                        var elementScrollable = null;
                        if (document.getElementsByTagName("mw-zone-travail") != null && document.getElementsByTagName("mw-zone-travail").length > 0) {
                            //Cas ancien modèle
                            elementScrollable = document.querySelector("body");
                        }
                        else {
                            elementScrollable = document.querySelector("body");
                        }
                        var delta = wh - rectangle.bottom;
                        if (delta < 0) {
                            elementScrollable.scrollTop = elementScrollable.scrollTop + delta * -1;
                        }
                    }
                }, 400);
            };
            MwTableControllerv1710.prototype._hideDetail = function () {
                if (this.lastExpandedItem === null) {
                    return;
                }
                if (this.selectionChangeHandler) {
                    if (this.selectionChangeHandler.onHideDetail) {
                        this.selectionChangeHandler.onHideDetail(this.lastExpandedItem);
                    }
                }
                this.lastExpandedItem = null;
            };
            MwTableControllerv1710.prototype._showDetail = function (item) {
                if (item === null) {
                    return;
                }
                if (this.selectionChangeHandler) {
                    if (this.selectionChangeHandler.onShowDetail) {
                        this.selectionChangeHandler.onShowDetail(item);
                    }
                }
                this.lastExpandedItem = item;
            };
            MwTableControllerv1710.prototype._selectItem = function (item) {
                var index = this.indexOf(this.$scope.options.selectedItems, item);
                if (index === -1) {
                    item.checked = true;
                    this.$scope.options.selectedItems.push(item);
                    if (this.selectionChangeHandler) {
                        this.selectionChangeHandler.onSelectionChange(item);
                    }
                }
            };
            MwTableControllerv1710.prototype._unSelectItem = function (item) {
                var index = this.indexOf(this.$scope.options.selectedItems, item);
                if (index > -1) {
                    item.checked = false;
                    this.$scope.options.selectedItems.splice(index, 1);
                    if (this.selectionChangeHandler) {
                        this.selectionChangeHandler.onSelectionChange(item);
                    }
                }
            };
            MwTableControllerv1710.prototype.selectItem = function (item) {
                //En mode mono sélection, une séleciton ouvre la ligne
                if (this.$scope.options.multiSelect === false) {
                    this._unSelectItem(this.lastExpandedItem);
                    this._hideDetail();
                    this._showDetail(item);
                }
                this._selectItem(item);
                this.updateTable();
            };
            /**
             *
             * Implementation de l'interface IAdapterMwTable
             *
             */
            MwTableControllerv1710.prototype.unSelectItem = function (item) {
                //En mode mono sélection, une séleciton ouvre la ligne
                if (this.$scope.options.multiSelect === false) {
                    this._hideDetail();
                }
                this._unSelectItem(item);
                this.updateTable();
            };
            MwTableControllerv1710.prototype.getFilterCriteria = function () {
                var result = new Array();
                var keys = Object.keys(this.search);
                //Pour chaque colonne contenant un critere de tri, on applique le filtre a la liste issu du filtre de la colonne précédente.
                for (var i = 0; i < keys.length; i++) {
                    //si le critere de tri est renseigné
                    if (this.search[keys[i]] && this.search[keys[i]].length > 0) {
                        var criterion = new UI.IMwColumnCriterion();
                        criterion.columnBind = keys[i];
                        criterion.criterion = this.search[keys[i]];
                        result.push(criterion);
                    }
                }
                return result;
            };
            MwTableControllerv1710.prototype.setFilterCriteria = function (criteria) {
                this.search = {};
                for (var i = 0; i < criteria.length; i++) {
                    var columnCriterion = criteria[i];
                    if (columnCriterion.criterion.length > 0) {
                        this.filteredColumns[columnCriterion.columnBind] = true;
                        this.filtrageEnCours = true;
                        this.search[columnCriterion.columnBind] = columnCriterion.criterion;
                    }
                }
                this.filtreChange();
            };
            MwTableControllerv1710.prototype.getPaginationState = function () {
                var pageState = new UI.IMwPaginationState();
                pageState.currentPage = this.currentPage;
                pageState.perPage = this.perPage;
                return pageState;
            };
            MwTableControllerv1710.prototype.setPaginationState = function (pageState) {
                this.currentPage = pageState.currentPage;
                if (pageState.perPage < this.$scope.options.data.length) {
                    this.perPage = pageState.perPage;
                }
                else {
                    this.perPage = this.$scope.options.data.length;
                }
                this.updateTable();
            };
            MwTableControllerv1710.prototype.getSortedColumn = function () {
                var sortedColumn = new UI.IMwSortedColumn();
                sortedColumn.predicate = this.predicate;
                sortedColumn.reserve = this.reserve;
                return sortedColumn;
            };
            MwTableControllerv1710.prototype.setSortedColumn = function (sortedColumn) {
                this.predicate = sortedColumn.predicate;
                this.reserve = sortedColumn.reserve;
                this.updateTable();
            };
            MwTableControllerv1710.prototype.setOptions = function (options) {
                var _this = this;
                this.$element.unbind("wheel");
                this.$timeout(function () {
                    _this.initOption(options);
                    _this.updateTable();
                }, 5, true);
            };
            /**
             * Ouvre le détail d'une ligne si elle en comporte un.
             */
            MwTableControllerv1710.prototype.openItem = function (item) {
                if (!this.avecLigneDetail) {
                    return;
                }
                //Si mono sélection on dé selectionne la ligne en cours
                if (this.$scope.options.multiSelect === false) {
                    this._unSelectItem(this.lastExpandedItem);
                }
                //On ferme l'ancien détail ouvert
                this._hideDetail();
                this._showDetail(item);
                if (this.$scope.options.multiSelect === false) {
                    this._selectItem(item);
                }
            };
            /**
             * Ferme le détail d'une ligne si elle en comporte un.
             */
            MwTableControllerv1710.prototype.closeItem = function (item) {
                if (!this.avecLigneDetail) {
                    return;
                }
                //Si mono sélection on dé selectionne la ligne en cours
                if (this.$scope.options.multiSelect === false) {
                    this._unSelectItem(this.lastExpandedItem);
                }
                this._hideDetail();
            };
            MwTableControllerv1710.prototype.getLigneOuverte = function () {
                return this.lastExpandedItem;
            };
            /**
             * Permet de d'appliquer les modifications.
             **/
            MwTableControllerv1710.prototype.apply = function () {
                this.updateTable();
            };
            /**
             * Permet de réinitialiser la liste des lignes sélectionnées
             */
            MwTableControllerv1710.prototype.setSelectedLines = function (list) {
                this.$scope.options.selectedItems = list;
                this.updateTable();
            };
            /**
             * Permet de réinitaliser la liste des lignes désactivées
             **/
            MwTableControllerv1710.prototype.setDisabledLines = function (list) {
                this.$scope.options.disabledItems = list;
                this.updateTable();
            };
            /*
             * INJECTION DES DEPENDANCES
             */
            MwTableControllerv1710.$inject = ["$scope", "$filter", "$element", "$timeout", "tableServiceOpefi", "tableFilterService"];
            return MwTableControllerv1710;
        })();
        UI.MwTableControllerv1710 = MwTableControllerv1710;
        UI.module.controller("mwTableControllerv1710", MwTableControllerv1710);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwTableOpefi() {
            return {
                restrict: "E",
                templateUrl: "table-opefi/table-view.html",
                transclude: true,
                controller: "mwTableControllerv1710",
                controllerAs: "mwTableCtrlv1710",
                scope: {
                    options: "=",
                    id: "@"
                }
            };
        }
        UI.mwTableOpefi = mwTableOpefi;
        ;
        UI.module.directive("mwTableOpefi", [mwTableOpefi]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * Description du filtre pour une colonne
         */
        var IMwColumnCriterion = (function () {
            function IMwColumnCriterion() {
            }
            return IMwColumnCriterion;
        })();
        UI.IMwColumnCriterion = IMwColumnCriterion;
        /**
         * Description de la colonne trié
         */
        var IMwSortedColumn = (function () {
            function IMwSortedColumn() {
            }
            return IMwSortedColumn;
        })();
        UI.IMwSortedColumn = IMwSortedColumn;
        /**
         * Donne l'état de la pagination
         */
        var IMwPaginationState = (function () {
            function IMwPaginationState() {
            }
            return IMwPaginationState;
        })();
        UI.IMwPaginationState = IMwPaginationState;
        /**
         * Ce Service mets à disposition des méthodes permettant à un controlleur de page par exemple de modifier des données de la directive.
         */
        var MwTableServiceOpefi = (function () {
            function MwTableServiceOpefi() {
                this.observers = [];
            }
            /**
             * Renvoie l'observateur (MwTable directive) identifiable par son ID
             * L'observateur permet de manipuler des données dans le controleur d ela directive MwTable
             */
            MwTableServiceOpefi.prototype.getMwTableObserver = function (directiveId) {
                for (var i = 0; i < this.observers.length; i++) {
                    if (this.observers[i].tableObserverDirectiveId === directiveId) {
                        return this.observers[i];
                    }
                }
            };
            /**
             * Abonne le controlleur d'une directive MwTable (Observateur)
             * Le controlleur doit implémenter l'interface IMwTableObserver
             */
            MwTableServiceOpefi.prototype.registerMwTableObserver = function (observer) {
                this.observers.push(observer);
                //console.debug("MwTableService.registerMwTableObserver id controller =" + observer.tableObserverDirectiveId);
            };
            /**
             * Désabonne le controlleur d'une directive MwTable (Observateur)
             */
            MwTableServiceOpefi.prototype.removeMwTableObserver = function (observer) {
                var index = this.observers.indexOf(observer);
                if (index !== -1) {
                    this.observers.splice(index);
                }
            };
            MwTableServiceOpefi.prototype.getFilterCriteria = function (idTable) {
                //console.debug("MwTableService.getFilterCriteria id controller =" + idTable);
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    return controller.getFilterCriteria();
                }
            };
            /**
             * Initialise les valeurs des critères de filtre des colonnes.
             * Attention, cette initialisation réinitialise la liste des lignes sélectionnées.
             * Si vous devez avoi rde lignes pré sélectionnées, il faut appelé la méthode selectItem après celle ci.
             */
            MwTableServiceOpefi.prototype.setFilterCriteria = function (idTable, criteria) {
                //console.debug("MwTableService.setFilterCriteria id controller =" + idTable);
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.setFilterCriteria(criteria);
                }
            };
            MwTableServiceOpefi.prototype.getPaginationState = function (idTable) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    return controller.getPaginationState();
                }
            };
            MwTableServiceOpefi.prototype.setPaginationState = function (idTable, pageState) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.setPaginationState(pageState);
                }
            };
            /**
             * Dé selectionne une ligne. Si l'option multiSelect est à faux, la ligne sera fermé si elle avait une ligne détail ouverte.
             * Pour sélectionner a nouveau des lignes par programme il suffit d'alimenter la liste options.selectedLignes
             */
            MwTableServiceOpefi.prototype.unSelectItem = function (idTable, item) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.unSelectItem(item);
                }
            };
            /**
             * Renvoi le nom et le sens de la colonne trié.
             * L'obet IMwSortedColumn donne le nom la propriete (option.column.bind) a trier dans predicate et le sens du tri dans reserve.
             */
            MwTableServiceOpefi.prototype.getSortedColumn = function (idTable) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    return controller.getSortedColumn();
                }
            };
            MwTableServiceOpefi.prototype.setSortedColumn = function (idTable, sortedColumn) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.setSortedColumn(sortedColumn);
                }
            };
            MwTableServiceOpefi.prototype.setOptions = function (idTable, options) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.setOptions(options);
                }
            };
            /**
             * Ouvre le détail d'une ligne si elle en comporte un.
             */
            MwTableServiceOpefi.prototype.openItem = function (idTable, item) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.openItem(item);
                }
            };
            /**
             * Ferme le détail d'une ligne si elle en comporte un.
             */
            MwTableServiceOpefi.prototype.closeItem = function (idTable, item) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.closeItem(item);
                }
            };
            /**
             * Renvoi l'objet de la ligne dont le détail est visile ou null si pas de ligne detail ou si ligne détail fermé.
             */
            MwTableServiceOpefi.prototype.getLigneOuverte = function (idTable) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    return controller.getLigneOuverte();
                }
            };
            /**
             * Permet de d'appliquer les modifications.
             **/
            MwTableServiceOpefi.prototype.apply = function (idTable) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.apply();
                }
            };
            /**
             * Permet de réinitialiser la liste des lignes sélectionnées
             */
            MwTableServiceOpefi.prototype.setSelectedLines = function (idTable, list) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.setSelectedLines(list);
                }
            };
            /**
             * Permet de réinitaliser la liste des lignes désactivées
             **/
            MwTableServiceOpefi.prototype.setDisabledLines = function (idTable, list) {
                var controller = this.getMwTableObserver(idTable);
                if (controller) {
                    controller.setDisabledLines(list);
                }
            };
            return MwTableServiceOpefi;
        })();
        UI.MwTableServiceOpefi = MwTableServiceOpefi;
        UI.module.service("tableServiceOpefi", [MwTableServiceOpefi]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * @ngdoc directive
         * @name myway.ui.directive.tab
         * @scope
         * @restrict E
         *
         * @description
         * Cette directive permet de surcharger la directive tab du composant angular-ui tabset pour injecter un id sur la div tab-pane (voir template surchargé)
         * Elle rajoute egalement l'attribut aria-control sur le ul>li>a de l'onglet correspondant
         */
        function tab() {
            return {
                restrict: "E",
                require: "^tabset",
                link: function (scope, element, attrs, ctrl) {
                    var id = attrs["id"];
                    var index = ctrl.tabs.length;
                    if (index > 0) {
                        ctrl.tabs[index - 1].id = id;
                    }
                    // Ajouter aria-controls
                    var aElement = element.find("a");
                    aElement.attr("aria-controls", id + "-tab-content");
                    // Ajouter aria-disabled sur lien 
                    if (attrs["disabled"] === "true") {
                        aElement.attr("aria-disabled", "true");
                    }
                    else {
                        aElement.attr("aria-disabled", "false");
                    }
                }
            };
        }
        /**
         * @ngdoc directive
         * @name myway.ui.directive.tabContentTransclude
         * @scope
         * @restrict A
         *
         * @description
         * Cette directive permet de surcharger la directive tabContentTransclude du composant angular-ui tabset pour permettre d'utiliser la navigation avec les flèches sur les onglets
         */
        function tabContentTransclude() {
            return {
                restrict: "A",
                link: function (scope, element, attrs, ctrl) {
                    addNavigationHandler(element);
                }
            };
        }
        function addNavigationHandler(tab) {
            var elementFocusIndex = 0;
            var aElements = tab.parent().parent().find("ul").find("a");
            var liElements = tab.parent().parent().find("ul").find("li");
            //Récupération des événements sur les onglets pour la navigation et la sélection
            aElements.on("keydown", function (event) {
                var aElement = event.target;
                var nbDisabled = 0;
                // Récupérer l'index avec le li au dessus du a
                for (var i = 0; i < liElements.length; i++) {
                    angular.element(liElements[i].children[0]).attr("tabindex", "-1");
                    if (liElements[i] === aElement.parentNode) {
                        elementFocusIndex = i;
                        // Ajout du tabindex = 0 sur un seul tab pour que la tabulation permette de sortir du groupe d'onglets.
                        angular.element(liElements[i].children[0]).attr("tabindex", "0");
                    }
                    if (angular.element(liElements[i]).hasClass("disabled")) {
                        nbDisabled++;
                    }
                }
                // Si tous les onglets sont disabled sortir (sous Chrome pour éviter boucle infini sur switch flèche clavier)
                if (liElements.length === nbDisabled) {
                    return;
                }
                switch (event.which) {
                    case UI.Constants.CLAVIER_KEYCODE.FLECHE_GAUCHE:
                        elementFocusIndex--;
                        // Boucler tant que l'on ne trouve pas un element non disabled
                        while (angular.element(liElements[(elementFocusIndex + liElements.length) % liElements.length]).hasClass("disabled")) {
                            elementFocusIndex--;
                        }
                        deplacerFocus();
                        break;
                    case UI.Constants.CLAVIER_KEYCODE.FLECHE_DROITE:
                        elementFocusIndex++;
                        // Boucler tant que l'on ne trouve pas un element non disabled
                        while (angular.element(liElements[(elementFocusIndex + liElements.length) % liElements.length]).hasClass("disabled")) {
                            elementFocusIndex++;
                        }
                        deplacerFocus();
                        break;
                    case MyWay.UI.Constants.CLAVIER_KEYCODE.TAB:
                        if (event.shiftKey) {
                            if (0 === elementFocusIndex) {
                                return;
                            }
                            elementFocusIndex--;
                        }
                        else {
                            if (liElements.length - 1 === elementFocusIndex) {
                                return;
                            }
                            elementFocusIndex++;
                        }
                        deplacerFocus();
                        break;
                    case 13:
                        aElement.click();
                }
                function deplacerFocus() {
                    event.preventDefault();
                    event.stopPropagation();
                    elementFocusIndex = (elementFocusIndex + liElements.length) % liElements.length;
                    liElements[elementFocusIndex].children[0].focus();
                }
            });
        }
        UI.module.directive("tab", [tab]);
        UI.module.directive("tabContentTransclude", [tabContentTransclude]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        UI.module.directive("mwTextareaAutoheight", function () {
            return {
                restrict: "A",
                link: function (scope, el) {
                    var defaultRows = el.attr("rows");
                    if (el[0].nodeName !== "TEXTAREA") {
                        throw new Error("mwTextareaAutoheight is limited to Textarea elements");
                    }
                    function autoHeight() {
                        var rows = el.val().split("\n"), rowLength = rows.length;
                        if (rowLength > defaultRows) {
                            el.attr("rows", rowLength);
                        }
                        else if (rowLength < defaultRows) {
                            el.attr("rows", defaultRows);
                        }
                    }
                    el.bind("input", autoHeight);
                    scope.$watch("el.value", autoHeight);
                }
            };
        });
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwSyntheseErreurs($rootScope, MW_EVENTS, $timeout, mwGenerateurIdService, $animate) {
            return {
                templateUrl: "synthese-erreurs/synthese-erreurs-view.html",
                restrict: "E",
                replace: true,
                transclude: true,
                scope: true,
                compile: function (element, attributes) {
                    mwGenerateurIdService.suffixerId(element, attributes["id"]);
                    var titre = attributes["titre"];
                    if (titre) {
                        element.find("span").eq(1).attr("ng-bind-template", titre);
                    }
                    else {
                        element.find("span").eq(1).attr("ng-bind", "nbErreurs === 1? '1 anomalie détectée' : nbErreurs + ' anomalies détectées'");
                    }
                    return function ($scope, element, attributes, ctrl, transclude) {
                        if (attributes["nbErreurs"]) {
                            $scope.$watch(attributes["nbErreurs"], updateSynthese);
                        }
                        else {
                            // HACK Problème de rafraichissement du DOM lorsque ngAnimate est inclus
                            // Pour contourner le problème, on utilise MutationObserver pour watch les modifications du DOM d'un élément pour pouvoir ainsi compter le nombre d'élément li
                            new MutationObserver(function (mutations) {
                                updateSynthese(element.find("li").length);
                                $scope.$apply();
                            }).observe(element[0], {
                                childList: true,
                                subtree: true
                            });
                        }
                        $scope.plierDeplier = function () {
                            $scope.estSyntheseComplete = !$scope.estSyntheseComplete;
                            //mwResizeService.resizeMain();
                        };
                        function updateSynthese(nbErreurs) {
                            $scope.nbErreurs = nbErreurs;
                            //mwResizeService.resizeMain();
                        }
                    };
                }
            };
        }
        UI.mwSyntheseErreurs = mwSyntheseErreurs;
        ;
        UI.module.directive("mwSyntheseErreurs", ["$rootScope", "MW_EVENTS", "$timeout", "MwGenerateurIdService", "$animate", mwSyntheseErreurs]);
        function accessibility($timeout, $compile, $templateCache) {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    //Pour permettre à la synthèse des erreurs d'être lu, il est nécessaire de modifier le comportement de l'affichage pour 
                    //qu'il y est une modification de celui-ci après la suppression du ng-hide.
                    scope.$watch(function () { return scope.nbErreurs; }, function (newValue, oldValue) {
                        if (oldValue !== newValue) {
                            // Ajout de l'attribut role à chaque changement du nombre d'erreur
                            $timeout(function () {
                                if (element[0].attributes.getNamedItem("role") !== null && !angular.element(element[0]).hasClass("hide-a11y")) {
                                    element.removeAttr("role");
                                }
                                $timeout(function () {
                                    if (newValue > 0) {
                                        element.attr("role", "alert");
                                    }
                                }, 100);
                            }, 100);
                        }
                    });
                }
            };
        }
        ;
        UI.module.directive("accessibility", ["$timeout", "$compile", "$templateCache", accessibility]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /**
         * @ngdoc directive
         * @name myway.ui.directive.mwTinymce
         * @scope
         * @restrict A
         *
         * @description
         * Cette directive simplifie la mise en oeuvre de tinyMce. TinyMce est un éditeur HTML wisiwig.
         * Il suffit de la placer sur un textarea pour que ce dernier se transforme en éditeur de texte riche.
         * @element ANY
         * @priority 0
         * @param {object}  mwTinymce  Peut être vide ou contenir un objet correspondant à la configuration de TinyMce.
         * {@link http://www.tinymce.com/wiki.php/Configuration/ Doc TinyMce}
         *
         * @example
         *     <example>
         *       <file name="index.html" >
         *              <div class="container-fluid" ng-controller="MainController as ctrl">
         *                 <form class="form-horizontal">
         *                         <div class="form-group">
         *                                  <label class="col-md-2 control-label">Texte wysiwyg par defaut</label>
         *                                  <div class="col-md-7">
         *                                      <textarea ng-model="ctrl.modelTinyMce" mw-tinymce></textarea>
         *                                  </div>
         *                         </div>
         *                         <div class="form-group">
         *                                  <label class="col-md-2 control-label">Texte wysiwyg custom </label>
         *                                  <div class="col-md-7">
         *                                      <textarea ng-model="ctrl.modelTinyMce" mw-tinymce="{{ctrl.tinyConfig}}"></textarea>
         *                                  </div>
         *                         </div>
         *                  </form>
         *             </div>
         *           </file>
         *       <file name="script.js">
         *          angular.module('test', ['myway.ui'])
         *                .controller('MainController', ['$scope',
         *                  function ($scope) {
         *                     this.tinyConfig = {
         *                          toolbar : false;
         *                      }
         *                     this.modelTinyMce = 'Bienvenue dans TinyMce';
         *                     var _this = this;
         *                  }]);
         *       </file>
         *     </example>
         */
        /**
         * Directive de restriction attribut à placer sur un textarea pour avoir un éditeur Wisiwig.
         * Les source sont issu de ce site : https://jadendreamer.wordpress.com/2014/03/11/angular-ui-tutorial-tinymce-directive/
         * C'est pourquoi elle n'est pas totalement en Typescript. (Mais est ce bien génant ?)
         */
        function mwTinyMce(uiTinymceConfig) {
            uiTinymceConfig = uiTinymceConfig || {};
            var generatedIds = 0;
            return {
                require: "ngModel",
                link: function (scope, elm, attrs, ngModel) {
                    var expression, options, tinyInstance;
                    // generate an ID if not present
                    if (!attrs.id) {
                        attrs.$set("id", "mwTinyMce" + generatedIds++);
                    }
                    options = {
                        // Update model when calling setContent (such as from the source editor popup)
                        setup: function (ed) {
                            ed.on("init", function (args) {
                                ngModel.$render();
                            });
                            // Update model on button click
                            ed.on("ExecCommand", function (e) {
                                //ed.save();
                                ngModel.$setViewValue(ed.save());
                                if (!scope.$$phase) {
                                    scope.$apply();
                                }
                            });
                            // Update model on keypress
                            ed.on("KeyUp", function (e) {
                                //console.log(ed.isDirty());
                                //ed.save();
                                ngModel.$setViewValue(ed.save());
                                if (!scope.$$phase) {
                                    scope.$apply();
                                }
                            });
                        },
                        mode: "exact",
                        relative_urls: false,
                        elements: attrs.id
                    };
                    if (attrs.mwTinymce) {
                        expression = scope.$eval(attrs.mwTinymce);
                    }
                    else {
                        expression = {};
                    }
                    angular.extend(options, uiTinymceConfig, expression);
                    setTimeout(function () {
                        tinymce.init(options);
                    });
                    ngModel.$render = function () {
                        if (!tinyInstance) {
                            tinyInstance = tinymce.get(attrs.id);
                        }
                        if (tinyInstance) {
                            tinyInstance.setContent(ngModel.$viewValue || "");
                        }
                    };
                }
            };
        }
        UI.mwTinyMce = mwTinyMce;
        UI.module.value("uiTinymceConfig", {});
        UI.module.directive("mwTinymce", ["uiTinymceConfig", mwTinyMce]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var TotemCtrl = (function () {
            function TotemCtrl($scope, navigationService, $element) {
                navigationService.init($scope.navigations, "mwTotemContenu");
                this._NavigationService = navigationService;
                /*
                * Gestion du scroll de la sideBar
                */
                var tempScrollTop, currentScrollTop = 0;
                angular.element(document).ready(function () {
                    var sidebar = document.querySelector("#mw-sidebar");
                    var zonetravail = document.querySelector(".zone-travail");
                    var content = document.querySelector(".content");
                    if (sidebar != null && zonetravail != null) {
                        angular.element(zonetravail).bind("scroll", function (event) {
                            var scrollheight = sidebar.scrollHeight;
                            var clientHeight = sidebar.clientHeight;
                            currentScrollTop = zonetravail.scrollTop;
                            var delta = tempScrollTop - currentScrollTop;
                            if (scrollheight > clientHeight) {
                                sidebar.scrollTop = sidebar.scrollTop - delta;
                            }
                            tempScrollTop = currentScrollTop;
                        });
                    }
                });
            }
            TotemCtrl.prototype.isActive = function (component) {
                //return component === this._NavigationService.getActiveComponent();
            };
            TotemCtrl.prototype.isPageActive = function (page) {
                return page === this._NavigationService.getActivePage();
            };
            return TotemCtrl;
        })();
        UI.TotemCtrl = TotemCtrl;
        /**
         *   Directive mw-totem-contenu. Cette directive prend en compte le niveau chapitre et sous chapitre dans l'objet passé en paramétre.
         */
        function mwTotemContenu() {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                controller: "TotemCtrl",
                controllerAs: "totemCtrl",
                templateUrl: "totem/totem-contenu.html",
                scope: {
                    navigations: "="
                }
            };
        }
        UI.mwTotemContenu = mwTotemContenu;
        function mwTotemChapitre() {
            var uniqueId = 1;
            return {
                restrict: "E",
                replace: true,
                scope: {
                    component: "="
                },
                templateUrl: "totem/chapitre-view.html",
                link: function (scope, element, attributes) {
                    scope.id = attributes["id"] || uniqueId++;
                }
            };
        }
        UI.mwTotemChapitre = mwTotemChapitre;
        /**
         * Controleur
         */
        var TotemSousChapitreCtrl = (function () {
            function TotemSousChapitreCtrl(navigationService, $element) {
                this._NavigationService = navigationService;
                this.toggle = false;
            }
            TotemSousChapitreCtrl.prototype.onClick = function (sousChapitre) {
                this._NavigationService.setActiveSousChapitre(sousChapitre);
            };
            return TotemSousChapitreCtrl;
        })();
        UI.TotemSousChapitreCtrl = TotemSousChapitreCtrl;
        function mwTotemSousChapitre() {
            return {
                restrict: "E",
                replace: true,
                controller: "TotemSousChapitreCtrl",
                controllerAs: "totemSousChapitreCtrl",
                scope: {
                    component: "="
                },
                templateUrl: "totem/sous-chapitre-view.html"
            };
        }
        UI.mwTotemSousChapitre = mwTotemSousChapitre;
        var TotemPageCtrl = (function () {
            function TotemPageCtrl(navigationService, $element) {
                this._NavigationService = navigationService;
            }
            /**
             * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
             */
            TotemPageCtrl.prototype.setActivePage = function (page) {
                if (page.list.length > 0) {
                    this._NavigationService.setActivePage(page, page.list[0], true);
                }
                else {
                    this._NavigationService.setActivePage(page, null);
                }
            };
            TotemPageCtrl.prototype.isPageActive = function (page) {
                return page === this._NavigationService.getActivePage();
            };
            return TotemPageCtrl;
        })();
        UI.TotemPageCtrl = TotemPageCtrl;
        function mwTotemPage() {
            return {
                restrict: "E",
                replace: true,
                controller: "TotemPageCtrl",
                controllerAs: "totemPageCtrl",
                scope: {
                    component: "="
                },
                templateUrl: "totem/page-view.html"
            };
        }
        UI.mwTotemPage = mwTotemPage;
        var TotemSectionCtrl = (function () {
            function TotemSectionCtrl(navigationService, $element) {
                this._NavigationService = navigationService;
            }
            /**
             * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
             */
            TotemSectionCtrl.prototype.setActiveSection = function (page, section) {
                this._NavigationService.setActivePage(page, section);
            };
            TotemSectionCtrl.prototype.isSectionActive = function (section) {
                if (section) {
                    var sect = this._NavigationService.getActiveSection();
                    if (!sect) {
                        return false;
                    }
                    //console.log("section.titre " + section.titre + "  sect.titre" + sect.titre);
                    return section === sect;
                }
                else {
                    return false;
                }
            };
            return TotemSectionCtrl;
        })();
        UI.TotemSectionCtrl = TotemSectionCtrl;
        function mwTotemSection() {
            return {
                restrict: "E",
                replace: true,
                controller: "TotemSectionCtrl",
                controllerAs: "totemSectionCtrl",
                scope: {
                    group: "=",
                    link: "="
                },
                templateUrl: "totem/section-view.html"
            };
        }
        UI.mwTotemSection = mwTotemSection;
        UI.module.controller("TotemSousChapitreCtrl", ["NavigationService", "$element", TotemSousChapitreCtrl]);
        UI.module.controller("TotemPageCtrl", ["NavigationService", "$element", TotemPageCtrl]);
        UI.module.controller("TotemSectionCtrl", ["NavigationService", "$element", TotemSectionCtrl]);
        UI.module.controller("TotemCtrl", ["$scope", "NavigationService", "$element", TotemCtrl]);
        UI.module.directive("mwTotemContenu", [mwTotemContenu]);
        UI.module.directive("mwTotemChapitre", [mwTotemChapitre]);
        UI.module.directive("mwTotemSousChapitre", [mwTotemSousChapitre]);
        UI.module.directive("mwTotemPage", [mwTotemPage]);
        UI.module.directive("mwTotemSection", [mwTotemSection]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

//Ceci permet d'annuler le module ui-mask de ui-utils 
angular.module("ui.mask", []);
// Permet de ne plus avoir l'erreur à la compilation TypeScript suite au
// Breaking change: Property selection is removed from type Document
// Voir https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#typescript-15
/*
interface Document {
  selection: any;
}*/
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        UI.module.value("uiMaskConfig", {
            "maskDefinitions": {
                "9": /\d/,
                "A": /[a-zA-Z]/,
                "*": /[a-zA-Z0-9]/
            },
            "clearOnBlur": true
        });
        UI.module.directive("uiMask", ["uiMaskConfig", "$timeout", function (maskConfig, $timeout) {
                return {
                    priority: 100,
                    require: "ngModel",
                    restrict: "A",
                    compile: function uiMaskCompilingFunction() {
                        var options = maskConfig;
                        return function uiMaskLinkingFunction(scope, iElement, iAttrs, controller) {
                            var maskProcessed = false, eventsBound = false, maskCaretMap, maskPatterns, maskPlaceholder, maskComponents, 
                            // minimum required length of the value to be considered valid
                            minRequiredLength, value, valueMasked, isValid, 
                            // vars for initializing/uninitializing
                            originalPlaceholder = iAttrs.placeholder, originalMaxlength = iAttrs.maxlength, 
                            // vars used exclusively in eventHandler()
                            oldValue, oldValueUnmasked, oldCaretPosition, oldSelectionLength;
                            function initialize(maskAttr) {
                                if (!angular.isDefined(maskAttr)) {
                                    return uninitialize();
                                }
                                processRawMask(maskAttr);
                                if (!maskProcessed) {
                                    return uninitialize();
                                }
                                initializeElement();
                                bindEventListeners();
                                return true;
                            }
                            function initPlaceholder(placeholderAttr) {
                                if (!angular.isDefined(placeholderAttr)) {
                                    return;
                                }
                                maskPlaceholder = placeholderAttr;
                                // if the mask is processed, then we need to update the value
                                if (maskProcessed && eventHandler) {
                                    eventHandler();
                                }
                            }
                            function formatter(fromModelValue) {
                                if (!maskProcessed) {
                                    return fromModelValue;
                                }
                                value = unmaskValue(fromModelValue || "");
                                isValid = validateValue(value);
                                controller.$setValidity("mask", isValid);
                                return isValid && value.length ? maskValue(value) : undefined;
                            }
                            function parser(fromViewValue) {
                                if (!maskProcessed) {
                                    return fromViewValue;
                                }
                                value = unmaskValue(fromViewValue || "");
                                isValid = validateValue(value);
                                // we have to set viewValue manually as the reformatting of the input
                                // value performed by eventHandler() doesn't happen until after
                                // this parser is called, which causes what the user sees in the input
                                // to be out-of-sync with what the controller's $viewValue is set to.
                                controller.$viewValue = value.length ? maskValue(value) : "";
                                controller.$setValidity("mask", isValid);
                                if (value === "" && controller.$error.required !== undefined) {
                                    controller.$setValidity("required", false);
                                }
                                return isValid ? value : undefined;
                            }
                            var linkOptions = {};
                            if (iAttrs.uiOptions) {
                                linkOptions = scope.$eval("[" + iAttrs.uiOptions + "]");
                                if (angular.isObject(linkOptions[0])) {
                                    // we can't use angular.copy nor angular.extend, they lack the power to do a deep merge
                                    linkOptions = (function (original, current) {
                                        for (var i in original) {
                                            if (Object.prototype.hasOwnProperty.call(original, i)) {
                                                if (!current[i]) {
                                                    current[i] = angular.copy(original[i]);
                                                }
                                                else {
                                                    angular.extend(current[i], original[i]);
                                                }
                                            }
                                        }
                                        return current;
                                    })(options, linkOptions[0]);
                                }
                            }
                            else {
                                linkOptions = options;
                            }
                            iAttrs.$observe("uiMask", initialize);
                            iAttrs.$observe("placeholder", initPlaceholder);
                            controller.$formatters.push(formatter);
                            controller.$parsers.push(parser);
                            function uninitialize() {
                                maskProcessed = false;
                                unbindEventListeners();
                                if (angular.isDefined(originalPlaceholder)) {
                                    iElement.attr("placeholder", originalPlaceholder);
                                }
                                else {
                                    iElement.removeAttr("placeholder");
                                }
                                if (angular.isDefined(originalMaxlength)) {
                                    iElement.attr("maxlength", originalMaxlength);
                                }
                                else {
                                    iElement.removeAttr("maxlength");
                                }
                                iElement.val(controller.$modelValue);
                                controller.$viewValue = controller.$modelValue;
                                return false;
                            }
                            function initializeElement() {
                                value = oldValueUnmasked = unmaskValue(controller.$modelValue || "");
                                valueMasked = oldValue = maskValue(value);
                                isValid = validateValue(value);
                                var viewValue = isValid && value.length ? valueMasked : "";
                                if (iAttrs.maxlength) {
                                    iElement.attr("maxlength", maskCaretMap[maskCaretMap.length - 1] * 2);
                                }
                                iElement.attr("placeholder", maskPlaceholder);
                                iElement.val(viewValue);
                                controller.$viewValue = viewValue;
                                // not using $setViewValue so we don't clobber the model value and dirty the form
                                // without any kind of user interaction.
                            }
                            function bindEventListeners() {
                                if (eventsBound) {
                                    return;
                                }
                                iElement.bind("blur", blurHandler);
                                iElement.bind("mousedown mouseup", mouseDownUpHandler);
                                iElement.bind("input keyup click focus", eventHandler);
                                eventsBound = true;
                            }
                            function unbindEventListeners() {
                                if (!eventsBound) {
                                    return;
                                }
                                iElement.unbind("blur", blurHandler);
                                iElement.unbind("mousedown", mouseDownUpHandler);
                                iElement.unbind("mouseup", mouseDownUpHandler);
                                iElement.unbind("input", eventHandler);
                                iElement.unbind("keyup", eventHandler);
                                iElement.unbind("click", eventHandler);
                                iElement.unbind("focus", eventHandler);
                                eventsBound = false;
                            }
                            function validateValue(value) {
                                // zero-length value validity is ngRequired's determination
                                return value.length ? value.length >= minRequiredLength : true;
                            }
                            function unmaskValue(value) {
                                var valueUnmasked = "", maskPatternsCopy = maskPatterns.slice();
                                // preprocess by stripping mask components from value
                                value = value.toString();
                                angular.forEach(maskComponents, function (component) {
                                    value = value.replace(component, "");
                                });
                                angular.forEach(value.split(""), function (chr) {
                                    if (maskPatternsCopy.length && maskPatternsCopy[0].test(chr)) {
                                        valueUnmasked += chr;
                                        maskPatternsCopy.shift();
                                    }
                                });
                                return valueUnmasked;
                            }
                            function maskValue(unmaskedValue) {
                                var valueMasked = "", maskCaretMapCopy = maskCaretMap.slice();
                                angular.forEach(maskPlaceholder.split(""), function (chr, i) {
                                    if (unmaskedValue.length && i === maskCaretMapCopy[0]) {
                                        valueMasked += unmaskedValue.charAt(0) || "_";
                                        unmaskedValue = unmaskedValue.substr(1);
                                        maskCaretMapCopy.shift();
                                    }
                                    else {
                                        valueMasked += chr;
                                    }
                                });
                                return valueMasked;
                            }
                            function getPlaceholderChar(i) {
                                var placeholder = iAttrs.placeholder;
                                if (typeof placeholder !== "undefined" && placeholder[i]) {
                                    return placeholder[i];
                                }
                                else {
                                    return "_";
                                }
                            }
                            // generate array of mask components that will be stripped from a masked value
                            // before processing to prevent mask components from being added to the unmasked value.
                            // e.g., a mask pattern of '+7 9999' won't have the 7 bleed into the unmasked value.
                            // if a maskable char is followed by a mask char and has a mask
                            // char behind it, we'll split it into it's own component so if
                            // a user is aggressively deleting in the input and a char ahead
                            // of the maskable char gets deleted, we'll still be able to strip
                            // it in the unmaskValue() preprocessing.
                            function getMaskComponents() {
                                return maskPlaceholder.replace(/[_]+/g, "_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3").split("_");
                            }
                            function processRawMask(mask) {
                                var characterCount = 0;
                                maskCaretMap = [];
                                maskPatterns = [];
                                maskPlaceholder = "";
                                if (typeof mask === "string") {
                                    minRequiredLength = 0;
                                    var isOptional = false, splitMask = mask.split("");
                                    angular.forEach(splitMask, function (chr, i) {
                                        if (linkOptions["maskDefinitions"][chr]) {
                                            maskCaretMap.push(characterCount);
                                            maskPlaceholder += getPlaceholderChar(i);
                                            maskPatterns.push(linkOptions["maskDefinitions"][chr]);
                                            characterCount++;
                                            if (!isOptional) {
                                                minRequiredLength++;
                                            }
                                        }
                                        else if (chr === "?") {
                                            isOptional = true;
                                        }
                                        else {
                                            maskPlaceholder += chr;
                                            characterCount++;
                                        }
                                    });
                                }
                                // caret position immediately following last position is valid.
                                maskCaretMap.push(maskCaretMap.slice().pop() + 1);
                                maskComponents = getMaskComponents();
                                maskProcessed = maskCaretMap.length > 1 ? true : false;
                            }
                            function blurHandler() {
                                oldCaretPosition = 0;
                                oldSelectionLength = 0;
                                if (!isValid || value.length === 0) {
                                    valueMasked = "";
                                    iElement.val("");
                                    scope.$apply(function () {
                                        controller.$setViewValue("");
                                    });
                                }
                            }
                            function mouseDownUpHandler(e) {
                                if (e.type === "mousedown") {
                                    iElement.bind("mouseout", mouseoutHandler);
                                }
                                else {
                                    iElement.unbind("mouseout", mouseoutHandler);
                                }
                            }
                            iElement.bind("mousedown mouseup", mouseDownUpHandler);
                            function mouseoutHandler() {
                                oldSelectionLength = getSelectionLength(this);
                                iElement.unbind("mouseout", mouseoutHandler);
                            }
                            function eventHandler(e) {
                                e = e || {};
                                // allows more efficient minification
                                var eventWhich = e.which, eventType = e.type;
                                // prevent shift and ctrl from mucking with old values
                                if (eventWhich === 16 || eventWhich === 91) {
                                    return;
                                }
                                var val = iElement.val(), valOld = oldValue, valMasked, valUnmasked = unmaskValue(val), valUnmaskedOld = oldValueUnmasked, valAltered = false, caretPos = getCaretPosition(this) || 0, caretPosOld = oldCaretPosition || 0, caretPosDelta = caretPos - caretPosOld, caretPosMin = maskCaretMap[0], caretPosMax = maskCaretMap[valUnmasked.length] || maskCaretMap.slice().shift(), selectionLenOld = oldSelectionLength || 0, isSelected = getSelectionLength(this) > 0, wasSelected = selectionLenOld > 0, 
                                // case: Typing a character to overwrite a selection
                                isAddition = (val.length > valOld.length) || (selectionLenOld && val.length > valOld.length - selectionLenOld), 
                                // case: Delete and backspace behave identically on a selection
                                isDeletion = (val.length < valOld.length) || (selectionLenOld && val.length === valOld.length - selectionLenOld), isSelection = (eventWhich >= 37 && eventWhich <= 40) && e.shiftKey, // arrow key codes
                                isKeyLeftArrow = eventWhich === 37, 
                                // necessary due to "input" event not providing a key code
                                isKeyBackspace = eventWhich === 8 || (eventType !== "keyup" && isDeletion && (caretPosDelta === -1)), isKeyDelete = eventWhich === 46 || (eventType !== "keyup" && isDeletion && (caretPosDelta === 0) && !wasSelected), 
                                // handles cases where caret is moved and placed in front of invalid maskCaretMap position. Logic below
                                // ensures that, on click or leftward caret placement, caret is moved leftward until directly right of
                                // non-mask character. Also applied to click since users are (arguably) more likely to backspace
                                // a character when clicking within a filled input.
                                caretBumpBack = (isKeyLeftArrow || isKeyBackspace || eventType === "click") && caretPos > caretPosMin;
                                oldSelectionLength = getSelectionLength(this);
                                // these events don't require any action
                                if (isSelection || (isSelected && (eventType === "click" || eventType === "keyup"))) {
                                    return;
                                }
                                // value Handling
                                // ==============
                                // user attempted to delete but raw value was unaffected--correct this grievous offense
                                if ((eventType === "input") && isDeletion && !wasSelected && valUnmasked === valUnmaskedOld) {
                                    while (isKeyBackspace && caretPos > caretPosMin && !isValidCaretPosition(caretPos)) {
                                        caretPos--;
                                    }
                                    while (isKeyDelete && caretPos < caretPosMax && maskCaretMap.indexOf(caretPos) === -1) {
                                        caretPos++;
                                    }
                                    var charIndex = maskCaretMap.indexOf(caretPos);
                                    // strip out non-mask character that user would have deleted if mask hadn't been in the way.
                                    valUnmasked = valUnmasked.substring(0, charIndex) + valUnmasked.substring(charIndex + 1);
                                    valAltered = true;
                                }
                                // update values
                                valMasked = maskValue(valUnmasked);
                                oldValue = valMasked;
                                oldValueUnmasked = valUnmasked;
                                /* Correction Myway */
                                if (!valAltered && val.length !== valMasked.length) {
                                    valAltered = true;
                                }
                                iElement.val(valMasked);
                                /* Fin correction Myway */
                                if (valAltered) {
                                    // we've altered the raw value after it's been $digest'ed, we need to $apply the new value.
                                    $timeout(function () {
                                        controller.$setViewValue(valUnmasked);
                                    }, 10);
                                }
                                // caret Repositioning
                                // ===================
                                // ensure that typing always places caret ahead of typed character in cases where the first char of
                                // the input is a mask char and the caret is placed at the 0 position.
                                if (isAddition && (caretPos <= caretPosMin)) {
                                    caretPos = caretPosMin + 1;
                                }
                                if (caretBumpBack) {
                                    caretPos--;
                                }
                                // make sure caret is within min and max position limits
                                caretPos = caretPos > caretPosMax ? caretPosMax : caretPos < caretPosMin ? caretPosMin : caretPos;
                                // scoot the caret back or forth until it's in a non-mask position and within min/max position limits
                                while (!isValidCaretPosition(caretPos) && caretPos > caretPosMin && caretPos < caretPosMax) {
                                    caretPos += caretBumpBack ? -1 : 1;
                                }
                                if ((caretBumpBack && caretPos < caretPosMax) || (isAddition && !isValidCaretPosition(caretPosOld))) {
                                    caretPos++;
                                }
                                oldCaretPosition = caretPos;
                                setCaretPosition(this, caretPos);
                            }
                            function isValidCaretPosition(pos) { return maskCaretMap.indexOf(pos) > -1; }
                            function getCaretPosition(input) {
                                if (typeof input !== "undefined" && typeof input.selectionStart !== "undefined") {
                                    return input.selectionStart;
                                } /* fix problème selection
                                else if (document.selection) {
                                    // curse you IE
                                    //input.focus(); commenté car cause un bug de scrolling
                                    var selection = document.selection.createRange();
                                    selection.moveStart("character", -input.value.length);
                                    return selection.text.length;
                                }*/
                                return 0;
                            }
                            function setCaretPosition(input, pos) {
                                if (!input || input.offsetWidth === 0 || input.offsetHeight === 0) {
                                    return; // input's hidden
                                }
                                if (input.setSelectionRange) {
                                    //input.focus(); commenté car cause un bug de scrolling 
                                    input.setSelectionRange(pos, pos);
                                }
                                else if (input.createTextRange) {
                                    // curse you IE
                                    var range = input.createTextRange();
                                    range.collapse(true);
                                    range.moveEnd("character", pos);
                                    range.moveStart("character", pos);
                                    range.select();
                                }
                            }
                            function getSelectionLength(input) {
                                if (typeof input !== "undefined" && typeof input.selectionStart !== "undefined") {
                                    return (input.selectionEnd - input.selectionStart);
                                } /* fix disparition de selection
                                if (document.selection) {
                                    return (document.selection.createRange().text.length);
                                }*/
                                return 0;
                            }
                            // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
                            if (!Array.prototype.indexOf) {
                                Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
                                    "use strict";
                                    if (this === null) {
                                        throw new TypeError();
                                    }
                                    var t = Object(this);
                                    var len = t.length >>> 0;
                                    if (len === 0) {
                                        return -1;
                                    }
                                    var n = 0;
                                    if (arguments.length > 1) {
                                        n = Number(arguments[1]);
                                        if (n !== n) {
                                            n = 0;
                                        }
                                        else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                                            n = Number(n > 0 || -1) * Math.floor(Math.abs(n));
                                        }
                                    }
                                    if (n >= len) {
                                        return -1;
                                    }
                                    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
                                    for (; k < len; k++) {
                                        if (k in t && t[k] === searchElement) {
                                            return k;
                                        }
                                    }
                                    return -1;
                                };
                            }
                        };
                    }
                };
            }
        ]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /*
         * Surcharge de la directive pour gérer le focus sur l'élément contenant la directive
         **/
        function uiSelect() {
            return {
                restrict: "EA",
                require: "uiSelect",
                priority: -1,
                link: function (scope, element, attributes, ctrl) {
                    if (ctrl && ctrl.setFocus) {
                        /*
                         * Gros hack pour bypasser l'utilisation d'un attribut tabindex sur l'élément de la directive,
                         * Dans le but de pouvoir avoir le focus au clic sur le label associé à la directive,
                         * Cf directive label de MyWay
                         **/
                        element[0].focus = function () {
                            ctrl.setFocus();
                            scope.$apply();
                        };
                    }
                }
            };
        }
        function uiSelectFillInput() {
            return {
                restrict: "EA",
                require: "^uiSelect",
                priority: -2,
                link: function (scope, element, attributes, ctrl) {
                    //console.log("element", element);
                    //console.log("element input", element.find("input"));
                    scope.$watch(function () { return ctrl.selected; }, function (newValue, oldValue) {
                        /* TODO revoir le code
                        if (newValue !== null || angular.isDefined(newValue)) {
                            //console.log("change", newValue);
                            scope.$select.search = newValue;
                        }
                        */
                    });
                }
            };
        }
        UI.module.directive("uiSelect", uiSelect);
        UI.module.directive("uiSelectFillInput", uiSelectFillInput);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /*
         * directive calquée sur la classe ui-select-toggle du composant ui-select.
         * Permet d'intercepter le clic sur la liste pour vérifier s'il faut remonter la liste box dans le cas ou elle
         * est en bas de l'écran.
         */
        function uiSelectToggle() {
            return {
                restrict: "C",
                link: function (scope, element, attrs, dropdownCtrl) {
                    element.bind("click", function (event) {
                        setTimeout(function () {
                            var listOfDropDownItems = angular.element(element[0].parentElement.parentElement).find("ul")[0];
                            var rectListe = listOfDropDownItems.getBoundingClientRect();
                            var zoneDeTravail = document.querySelector("mw-zone-travail") ? document.querySelector("mw-zone-travail") : document.querySelector("main");
                            var rectZoneDeTravail = zoneDeTravail.getBoundingClientRect();
                            var delta = rectZoneDeTravail.bottom - rectListe.bottom;
                            if (delta < 0) {
                                zoneDeTravail.scrollTop = zoneDeTravail.scrollTop + (delta * -1);
                            }
                        }, 300);
                    });
                }
            };
        }
        UI.uiSelectToggle = uiSelectToggle;
        UI.module.directive("uiSelectToggle", [uiSelectToggle]);
        function mwInfiniteScroll() {
            return function (list, $select) {
                var infiniteLimit = $select.infiniteScrollLimit;
                var result = [];
                //Si la liste en entrée est inférieur à la limite rien à faire
                if (list.length <= infiniteLimit) {
                    return list;
                }
                else {
                    result = angular.copy(list, result);
                    //var offset = list.length - infiniteLimit;
                    result.splice(infiniteLimit + 1);
                    $select.infiniteScrollActuelLenght = result.length;
                    return result;
                }
            };
        }
        UI.module.filter("mwinfinitescroll", mwInfiniteScroll);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

"use strict";
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        function mwVolet() {
            return {
                templateUrl: "volet/volet-view.html",
                restrict: "EA",
                replace: true,
                transclude: true,
                scope: {
                    opened: "=?ouvert",
                    over: "@",
                    position: "@"
                }
            };
        }
        UI.mwVolet = mwVolet;
        ;
        UI.module.directive("mwVolet", mwVolet);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

"use strict";
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        function mwVoletProposition($window, $document, $timeout, mwResizeService) {
            var uniqueId = 1;
            return {
                templateUrl: "volet-proposition/volet-proposition-view.html",
                restrict: "E",
                transclude: true,
                scope: {
                    "nombre": "@",
                    "titre": "@",
                    "open": "=?"
                },
                link: function (scope, element, attributes) {
                    var boutonElement = element.find("button").eq(0);
                    var jqWindow = angular.element($window);
                    scope.id = attributes["id"] || uniqueId++;
                    // Test si présence de l'attribut nombre
                    scope.affichageCompteur = "nombre" in attributes;
                    // On initalise la hauteur du composant, timeout pour laisser le dom se construire pour avoir les bonnes dimensions
                    $timeout(calculerHauteur);
                    // Au changement de taille de fenêtre, on recalcule et applique les hauteurs
                    jqWindow.bind("resize", function () {
                        calculerHauteur();
                        scope.$apply();
                    });
                    scope.$on("$destroy", function () {
                        jqWindow.unbind(calculerHauteur);
                    });
                    function calculerHauteur() {
                        scope.hauteurVoletContenu = mwResizeService.getDistanceElementMainBottom(boutonElement, 20) / 16 + "rem";
                    }
                }
            };
        }
        UI.mwVoletProposition = mwVoletProposition;
        ;
        UI.module.directive("mwVoletProposition", ["$window", "$document", "$timeout", "MwResizeService", mwVoletProposition]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        UI.module.constant("MW_EVENTS", {
            activeNavigationEvent: "activeNavigationEvent"
        });
        /**
         * Controleur
         * DEPRECIE
         */
        var NavContenuCtrl = (function () {
            function NavContenuCtrl($scope, navigationService, $element) {
                this.totem = this.transformToTotemComponent($scope.navigations);
                navigationService.init(this.totem, "mwNavContenu");
                this._NavigationService = navigationService;
                /**
                 * Gestion du scroll de la sideBar
                 */
                var tempScrollTop, currentScrollTop = 0;
                angular.element(document).ready(function () {
                    //console.debug("DEBUG - [NavContenuCtrl.constructor] on document ready");
                    var sidebar = document.querySelector("#mw-sidebar");
                    var zonetravail = document.querySelector("mw-zone-travail");
                    var content = document.querySelector(".content");
                    if (sidebar != null && zonetravail != null) {
                        angular.element(content).bind("scroll", function (event) {
                            // console.debug("DEBUG - [NavContenuCtrl.on scroll]");
                            var scrollheight = sidebar.scrollHeight;
                            var clientHeight = sidebar.clientHeight;
                            currentScrollTop = zonetravail.scrollTop;
                            var delta = tempScrollTop - currentScrollTop;
                            if (scrollheight > clientHeight) {
                                sidebar.scrollTop = sidebar.scrollTop - delta;
                            }
                            tempScrollTop = currentScrollTop;
                        });
                    }
                });
            }
            //Converti la navigation NavContenu en Totem
            NavContenuCtrl.prototype.transformToTotemComponent = function (navigations) {
                var totem = [];
                for (var n = 0; n < navigations.length; n++) {
                    var group = navigations[n];
                    var page = new UI.TotemPage(group.title, group.target);
                    for (var x = 0; x < group.links.length; x++) {
                        var link = group.links[x];
                        var section = new UI.TotemSection(link.title, link.target);
                        section.isComplete = link.isComplete;
                        page.add(section);
                    }
                    totem.push(page);
                }
                return totem;
            };
            /**
             * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
             */
            NavContenuCtrl.prototype.setActive = function (group, link) {
                //console.debug("NavContenuCtrl directive setActive("+group.titre+","+link.titre+")");
                this._NavigationService.setActivePage(group, link);
            };
            NavContenuCtrl.prototype.isActive = function (link) {
                return link === this._NavigationService.getActiveSection();
            };
            NavContenuCtrl.prototype.isGroupActive = function (group) {
                return group === this._NavigationService.getActivePage();
            };
            return NavContenuCtrl;
        })();
        UI.NavContenuCtrl = NavContenuCtrl;
        /**
         * Directive mw-nav-contenu
         */
        function mwNavContenu() {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                controller: "NavContenuCtrl",
                controllerAs: "navContenu",
                templateUrl: "zonning/nav-contenu.html",
                scope: {
                    navigations: "="
                }
            };
        }
        UI.mwNavContenu = mwNavContenu;
        /**
         * DEPRECIE
         */
        function mwContenu() {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                templateUrl: "zonning/contenu.html"
            };
        }
        UI.mwContenu = mwContenu;
        /**
         * DEPRECIE
         */
        function main() {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                templateUrl: "zonning/contenu.html"
            };
        }
        UI.main = main;
        /**
         * DEPRECIE
         */
        function mwGroupeTravail(navigationService) {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                templateUrl: "zonning/groupe-travail.html",
                scope: {
                    target: "@"
                },
                link: function (scope) {
                    scope.isActiveGroup = function (target) {
                        if (navigationService.getActivePage()) {
                            return navigationService.getActivePage().target === target;
                        }
                        else {
                            return false;
                        }
                    };
                }
            };
        }
        UI.mwGroupeTravail = mwGroupeTravail;
        /**
         * Cette directive sert uniquement à gérer de ScrollSpy et aussi de cacher l'indicateur de scroll (hideScrollIndicator)
         * Elle reçoit un évènement du totem lors d'un clic sur un lien pour scroller jusqu'au paneau de ce lien.
         * Elle capture l'èvénement onScroll et wheel pour activer un élément du totem lors d'un scroll de la page.
         *  - TODO exporter tout ca dans un directive scrollSpy  posé sur l'lélement comme mwZoneTravail
         *  - TODO remplacer la fonction hideScrollIndicator par une directive a placer égalemetn sur lélément scrollable.
         */
        function mwZoneTravail($timeout, navigationService, MW_EVENTS, $window) {
            return {
                restrict: "E",
                replace: true,
                link: function (scope, elt) {
                    var lastScrollTop = 0;
                    function scrollToTarget(target) {
                        // check if an element can be found with id attribute
                        var domTarget = angular.element(elt[0].querySelector("#" + target)), offsetTop = 0, mainElement = document.querySelector("main");
                        if (angular.isUndefined(domTarget[0]) || angular.isUndefined(domTarget[0].scrollTop)) {
                            throw new Error("tag d'id " + target + " introuvable");
                        }
                        /**
                         * Scrool the element to the given pos.
                         * elem : the DOM element
                         * pos : final position of the scrollTop.
                         */
                        function doScroll(elem, pos, reminder) {
                            var y, z;
                            y = elem[0].scrollTop;
                            y += Math.round((pos - y) * 0.3);
                            z = Math.abs(y - pos);
                            // securité pour stopper un appel recurssif infini
                            if (z <= 2 || z === reminder) {
                                elem[0].scrollTop = pos;
                                navigationService.setScrollInProgress(false);
                                domTarget[0].focus(); //TODO refaire le scroll !
                                return;
                            }
                            elem[0].scrollTop = y;
                            setTimeout(doScroll, 40, elem, pos, z);
                        }
                        navigationService.setScrollInProgress(true);
                        offsetTop = elt[0].scrollTop + domTarget[0].getBoundingClientRect().top; //position de l'élément domTarget par rapport au haut de la page
                        if (mainElement) {
                            offsetTop -= mainElement.offsetTop; //on soustrait le top de l'élément main pour obtenir la position par rapport au main
                        }
                        // elt = zone-travail
                        doScroll(elt, offsetTop, 0);
                    }
                    //Cache l'indicateur de scroll
                    function hideScrollIndicator() {
                        if (scope.enabledscroll) {
                            scope.$evalAsync(function () {
                                scope.enabledscroll = false;
                            });
                        }
                    }
                    function getSectionOnViewPort(event) {
                        var links = navigationService.getActiveLinks();
                        //Recherche des éléments correspondant aux links
                        var panels = [];
                        for (var n = 0; n < links.length; n++) {
                            var section = links[n];
                            var panel = angular.element(elt[0].querySelector("#" + section.target));
                            //var panel = scrollableElement.getElementById(section.target);
                            //var panel = scrollableElement.find("#" + section.target);
                            if (panel) {
                                panels.push(panel);
                            }
                        }
                        //TODO trier la liste des panels par leur offsetTop ascendant
                        if (panels.length > 0) {
                            //Pour chaque lien on regarde si l'élément identifie par le lien (target) est dans la zone d'activation
                            var panelIndex = 0;
                            for (var p = 0; p < panels.length; p++) {
                                var panelRawNode = panels[p];
                                if (panelRawNode[0] && elt[0].scrollTop >= panels[p][0].offsetTop - 160) {
                                    panelIndex = p;
                                }
                            }
                            return links[panelIndex];
                        }
                        else {
                            return undefined;
                        }
                    }
                    //Active l'indicateur de scroll
                    if (elt[0].scrollHeight > elt[0].clientHeight) {
                        $timeout(function () {
                            scope.enabledscroll = true;
                        }, 400);
                    }
                    scope.$on(MW_EVENTS.activeNavigationEvent, function (event, group, link) {
                        //console.debug("directive mwZoneTravail.onActiveNavigationEvent");
                        hideScrollIndicator();
                        if (link) {
                            scrollToTarget(link.target);
                        }
                    });
                    elt.bind("scroll", function (event) {
                        //console.debug("directive mwZoneTravail.scroll event");
                        hideScrollIndicator();
                        if (!navigationService.isScrollInProgress()) {
                            if (navigationService.getActiveLinks()) {
                                var activeSection = getSectionOnViewPort(navigationService.getActiveLinks());
                                if (activeSection) {
                                    //console.debug("mw-groupe-travail call setActiveSection()");
                                    navigationService.setActiveSection(activeSection);
                                }
                            }
                            var st = elt[0].scrollTop;
                            var deltaY = st - lastScrollTop;
                            if (navigationService.scrollTotemBy) {
                                navigationService.scrollTotemBy(deltaY);
                            }
                            lastScrollTop = st;
                            scope.$apply();
                        }
                    });
                    /**
                     * Cette fonction deplace/scroll la navigation secondaire en même temps que le contenu.
                     */
                    elt.bind("wheel", function (event) {
                        //console.debug("directive mwZoneTravail.wheel event");
                        if (!navigationService.isScrollInProgress()) {
                            navigationService.scrollTotem(event);
                        }
                    });
                }
            };
        }
        UI.mwZoneTravail = mwZoneTravail;
        //module.service('NavigationService', ['$rootScope', 'MW_EVENTS', NavigationService]);
        UI.module.controller("NavContenuCtrl", ["$scope", "NavigationService", "$element", NavContenuCtrl]);
        UI.module.directive("mwNavContenu", [mwNavContenu]);
        UI.module.directive("mwZoneTravail", ["$timeout", "NavigationService", "MW_EVENTS", "$window", mwZoneTravail]);
        UI.module.directive("mwGroupeTravail", ["NavigationService", mwGroupeTravail]);
        UI.module.directive("mwContenu", [mwContenu]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        var MwPanelActionController = (function () {
            function MwPanelActionController($scope) {
                this.$scope = $scope;
                if (!$scope.iconName) {
                    throw new Error("l'attribut iconName est obligatoire.");
                }
            }
            MwPanelActionController.$inject = [
                "$scope",
            ];
            return MwPanelActionController;
        })();
        UI.MwPanelActionController = MwPanelActionController;
        UI.module.controller("MwPanelActionController", MwPanelActionController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwPanelAction() {
            return {
                restrict: "E",
                templateUrl: "panel-action/panel-action-view.html",
                controller: "MwPanelActionController",
                controllerAs: "mwPanelActionController",
                transclude: true,
                scope: {
                    iconName: "@"
                }
            };
        }
        UI.mwPanelAction = mwPanelAction;
        ;
        UI.module.directive("mwPanelAction", mwPanelAction);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var mwSmoothScrollService = (function () {
            function mwSmoothScrollService($interval, $uibPosition, $document) {
                this.$interval = $interval;
                this.$uibPosition = $uibPosition;
                this.$document = $document;
            }
            mwSmoothScrollService.prototype.scrollTo = function (element_, options_) {
                var _this = this;
                if (!element_) {
                    return;
                }
                var options = options_ || {};
                // Options
                var duration = options.duration || 800, offset = options.offset || 0, easing = options.easing || "easeInOutQuart", callbackBefore = options.callbackBefore || function () { }, callbackAfter = options.callbackAfter || function () { }, container = document.querySelector(options.containerSelector) || null, containerPresent = (container != undefined && container != null);
                //Correction ars 1188486 : l'initialisation d'un height:auto sur page.content annule le scroll de la zone de travail.
                //La correction consiste a rechercher le parent ayant une barre de scroll.
                if (containerPresent) {
                    if (!hasScroll(container)) {
                        var scrollable = container;
                        var documentEl = this.$document[0].documentElement;
                        while (scrollable.parentElement && scrollable !== documentEl) {
                            scrollable = this.$uibPosition.scrollParent(scrollable);
                            if (hasScroll(scrollable)) {
                                break;
                            }
                        }
                        container = scrollable;
                    }
                }
                // Permet de savoir avec certitude si l'élément est scrollable (avec barre de scroll)
                // Dans le cas ou l'élément n'est pas scrollable, la proprieté scrollTop ne se met pas à jour.
                function hasScroll(el) {
                    var old = el.scrollTop;
                    el.scrollTop = el.scrollTop + 5;
                    var result = old !== el.scrollTop;
                    el.scrollTop = old;
                    return result;
                }
                // Fin correctoin ARS 1188486
                /*
                 * get real offset
                 */
                /*
                var header = document.querySelector("header");
                if (header) {
                    var paddingTop = header.clientHeight;
                    if (paddingTop) {
                        offset = paddingTop;
                    } else {
                        offset = 10;
                    }
                } else {
                    offset = 10;
                }*/
                /**
                 * Retrieve current location
                 */
                var getScrollLocation = function () {
                    if (containerPresent) {
                        return container.scrollTop;
                    }
                    else {
                        //return document.body.scrollTop;
                        return window.pageYOffset;
                    }
                };
                /*
                 * Calculate how far to scroll
                 */
                var getEndLocation = function (element) {
                    var location = 0;
                    if (element.offsetParent) {
                        do {
                            location += element.offsetTop;
                            element = element.offsetParent;
                            if (containerPresent) {
                                if (element === container) {
                                    break;
                                }
                            }
                        } while (element);
                    }
                    location = Math.max(location - offset, 0);
                    return location;
                };
                /*
                 * Calculate easing pattern.
                 *
                 */
                var getEasingPattern = function (type, time) {
                    switch (type) {
                        case "easeInQuad": return time * time; // accelerating from zero velocity
                        case "easeOutQuad": return time * (2 - time); // decelerating to zero velocity
                        case "easeInOutQuad": return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
                        case "easeInCubic": return time * time * time; // accelerating from zero velocity
                        case "easeOutCubic": return (--time) * time * time + 1; // decelerating to zero velocity
                        case "easeInOutCubic": return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
                        case "easeInQuart": return time * time * time * time; // accelerating from zero velocity
                        case "easeOutQuart": return 1 - (--time) * time * time * time; // decelerating to zero velocity
                        case "easeInOutQuart": return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
                        case "easeInQuint": return time * time * time * time * time; // accelerating from zero velocity
                        case "easeOutQuint": return 1 + (--time) * time * time * time * time; // decelerating to zero velocity
                        case "easeInOutQuint": return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
                        default: return time;
                    }
                };
                // Initialize the whole thing
                var currentLocation = null, startLocation = getScrollLocation(), endLocation = getEndLocation(element_), timeLapsed = 0, distance = endLocation - startLocation, percentage, position, scrollHeight, internalHeight;
                var focusElement = function (element) {
                    if (element.tabIndex < 0 && !element.attributes["tabindex"]) {
                        element.tabIndex = -1;
                    }
                    element.focus();
                };
                /*
                 * Stop the scrolling animation when the anchor is reached (or at the top/bottom of the page)
                 */
                var stopAnimation = function () {
                    currentLocation = getScrollLocation();
                    if (containerPresent) {
                        scrollHeight = container.scrollHeight;
                        internalHeight = container.clientHeight + currentLocation;
                    }
                    else {
                        scrollHeight = document.body.scrollHeight;
                        internalHeight = window.innerHeight + currentLocation;
                    }
                    if ((
                    // position == endLocation
                    distance < 0 ? position <= endLocation : position >= endLocation) ||
                        (distance < 0 ? currentLocation <= endLocation : currentLocation >= endLocation)) {
                        stopRunAnimation();
                        //focusElement(element_);
                        callbackAfter(element_);
                    }
                };
                //Stop the animation
                var stopRunAnimation = function () {
                    if (angular.isDefined(runAnimation)) {
                        _this.$interval.cancel(runAnimation);
                        runAnimation = undefined;
                    }
                };
                /*
                 * Scroll the page by an increment, and check if it's time to stop
                 */
                var animateScroll = function () {
                    timeLapsed += 16;
                    percentage = (timeLapsed / duration);
                    percentage = (percentage > 1) ? 1 : percentage;
                    position = startLocation + (distance * getEasingPattern(easing, percentage));
                    if (containerPresent) {
                        container.scrollTop = position;
                    }
                    else {
                        window.scrollTo(0, position);
                    }
                    stopAnimation();
                };
                callbackBefore(element_);
                var runAnimation = this.$interval(animateScroll, 16);
            }; // fin scrollTo
            return mwSmoothScrollService;
        })();
        UI.module.service("mwSmoothScrollService", ["$interval", "$uibPosition", "$document", mwSmoothScrollService]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwTuile() {
            return {
                templateUrl: "mw-tuile/mw-tuile-action/mw-tuile-action-view.html",
                restrict: "E",
                replace: true,
                scope: {
                    texte: "@",
                    icone: "@"
                }
            };
        }
        UI.mwTuile = mwTuile;
        ;
        UI.module.directive("mwTuileAction", mwTuile);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwTuileEdit() {
            return {
                templateUrl: "mw-tuile/mw-tuile-editable/mw-tuile-editable-view.html",
                restrict: "E",
                transclude: true,
                scope: {
                    onModify: "&",
                    onDelete: "&",
                    isDeletable: "=?",
                    indiceDansListe: "=?indice"
                },
                require: "?^^mwTuileListe",
                link: function ($scope, element, attributes, ctrl) {
                    $scope.isDeletable = $scope.isDeletable || true;
                    $scope.actionClavier = function ($event) {
                        if ($event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ENTRER) {
                            $scope.onModify();
                        }
                    };
                }
            };
        }
        UI.mwTuileEdit = mwTuileEdit;
        ;
        UI.module.directive("mwTuileEditable", mwTuileEdit);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var TuileListeController = (function () {
            function TuileListeController() {
            }
            return TuileListeController;
        })();
        UI.TuileListeController = TuileListeController;
        UI.module.controller("TuileListeController", TuileListeController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        /*
         * Directive mw-accordeon
         * Conteneur de composants mw-hretractable permettant d'ajouter une
         * logique de fermeture d'un groupe de panneaux
         * @returns l'application de la directive
         **/
        function mwTuileListe() {
            return {
                restrict: "E",
                scope: {
                    liste: "=data"
                },
                controller: "TuileListeController",
                controllerAs: "tuileListeCtrl",
                bindToController: true
            };
        }
        UI.module.directive("mwTuileListe", mwTuileListe);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));







var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        var MwAbstractTuileController = (function () {
            function MwAbstractTuileController($scope, $exceptionHandler, mwTuilePanelEditionService, $document) {
                var _this = this;
                this.$scope = $scope;
                this.$exceptionHandler = $exceptionHandler;
                this.mwTuilePanelEditionService = mwTuilePanelEditionService;
                var p = $scope.$parent;
                var tuileFound = false;
                while (p.$parent && !tuileFound) {
                    if (p['mwPanelEditionController']) {
                        this.modeEdition = this.mwTuilePanelEditionService.getModeEditionTuile(p['id']);
                        tuileFound = true;
                    }
                    p = p.$parent;
                }
                this.tabIndex = 0;
                //Config des tuiles
                this.config = $scope.config;
                if (!$scope.couleur) {
                    $scope.couleur = "couleur-sombre";
                }
                if (!$scope.avecMarquage) {
                    $scope.avecMarquage = false;
                }
                if (!$scope.id) {
                    $exceptionHandler(new Error("l'attribut id est obligatoire."));
                }
                else {
                    this.id = $scope.id;
                }
                if (!$scope.titre) {
                    $exceptionHandler(new Error("l'attribut titre est obligatoire."));
                }
                if ($scope.config.typeMarquage !== "picto" && $scope.config.typeMarquage !== "texte" && $scope.config.typeMarquage !== "none") {
                    $scope.config.typeMarquage = "none";
                }
                //Evenement reçu du mw-panel-edition qui contient les tuiles
                this.$scope.$on($scope.config.eventNameEditionOn, function () {
                    _this.setEditionOn();
                });
                //Evenement reçu du mw-panel-edition qui contient les tuiles
                this.$scope.$on($scope.config.eventNameEditionOff, function () {
                    _this.setEditionOff();
                });
            }
            MwAbstractTuileController.prototype.setEditionOn = function () {
                this.modeEdition = true;
                this.tabIndex = -1;
            };
            MwAbstractTuileController.prototype.setEditionOff = function () {
                this.modeEdition = false;
                this.tabIndex = 0;
            };
            MwAbstractTuileController.prototype.clickSurTuile = function (object) {
                if (!this.modeEdition) {
                    this.config.tuileHandler.onTuileClick(object);
                }
            };
            MwAbstractTuileController.prototype.keydownSurAction = function ($event, index, object, listObject) {
                if (this.modeEdition && $event.keyCode === MyWay.UI.Constants.CLAVIER_KEYCODE.ENTRER) {
                    this.onAction(index, object, listObject);
                }
            };
            MwAbstractTuileController.prototype.isNotFirstArrow = function (object, listObject) {
                if (object.equal(listObject[0])) {
                    return false;
                }
                return true;
            };
            MwAbstractTuileController.prototype.isNotLastArrow = function (object, listObject) {
                if (object.equal(listObject[listObject.length - 1])) {
                    return false;
                }
                return true;
            };
            MwAbstractTuileController.prototype.onAction = function (index, object, listObject) {
                if (this.modeEdition) {
                    switch (index) {
                        case 1:
                            this.config.tuileHandler.onAction1(object);
                            break;
                        case 2:
                            this.config.tuileHandler.onAction2(object);
                            break;
                        case 3:
                            this.config.tuileHandler.onAction3(object);
                            break;
                        case 4:
                            this.config.tuileHandler.onAction4(object);
                            break;
                        case 5:
                            this.config.tuileHandler.onClickRight(object, listObject);
                            break;
                        case 6:
                            this.config.tuileHandler.onClickLeft(object, listObject);
                            break;
                    }
                }
            };
            MwAbstractTuileController.prototype.lineAfter = function (ligne) {
                var lineTruncate = true;
                switch (ligne) {
                    case 'ligne1':
                        if (!this.$scope.ligne2 && !this.$scope.ligne3 && !this.$scope.ligne4) {
                            lineTruncate = false;
                        }
                        break;
                    case 'ligne2':
                        if (!this.$scope.ligne3 && !this.$scope.ligne4) {
                            lineTruncate = false;
                        }
                        break;
                    case 'ligne3':
                        if (!this.$scope.ligne4) {
                            lineTruncate = false;
                        }
                        break;
                    case 'ligne4':
                        if (!this.$scope.ligne1 || !this.$scope.ligne2 || !this.$scope.ligne3) {
                            lineTruncate = false;
                        }
                        break;
                    default:
                        break;
                }
                return lineTruncate;
            };
            return MwAbstractTuileController;
        })();
        UI.MwAbstractTuileController = MwAbstractTuileController;
        var MwTuileStandardController = (function (_super) {
            __extends(MwTuileStandardController, _super);
            function MwTuileStandardController($scope, $exceptionHandler, mwTuilePanelEditionService, $document) {
                _super.call(this, $scope, $exceptionHandler, mwTuilePanelEditionService, $document);
            }
            MwTuileStandardController.$inject = [
                "$scope",
                "$exceptionHandler",
                "MwTuilePanelEditionService",
                "$document"
            ];
            return MwTuileStandardController;
        })(MwAbstractTuileController);
        UI.MwTuileStandardController = MwTuileStandardController;
        UI.module.controller("MwTuileStandardController", MwTuileStandardController);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwTuileStandard() {
            return {
                templateUrl: "mw-tuile/mw-tuile-standard/mw-tuile-standard-view.html",
                restrict: "E",
                transclude: true,
                scope: {
                    id: "@",
                    avecMarquage: "=",
                    texteMarquage: "=",
                    typeFiletMarquage: "@",
                    isDisabled: "=",
                    titre: "=",
                    ligne1: "=",
                    ligne2: "=",
                    ligne3: "=",
                    ligne4: "=",
                    picto: "=",
                    couleur: "@",
                    object: "=",
                    listeObject: "=?",
                    config: "="
                },
                controller: "MwTuileStandardController",
                controllerAs: "mwTuileStandardController"
            };
        }
        UI.mwTuileStandard = mwTuileStandard;
        ;
        UI.module.directive("mwTuileStandard", [mwTuileStandard]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        "use strict";
        function mwTuileStandardBtn() {
            return {
                templateUrl: "mw-tuile/mw-tuile-standard-btn/mw-tuile-standard-btn-view.html",
                restrict: "E",
                scope: {
                    id: "@",
                    picto: "@",
                    texte: "@",
                    couleur: "@",
                    taille: "@"
                }
            };
        }
        UI.mwTuileStandardBtn = mwTuileStandardBtn;
        ;
        UI.module.directive("mwTuileStandardBtn", [mwTuileStandardBtn]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

"use strict";
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        var NavigationCtrl = (function () {
            function NavigationCtrl($scope, navigationService, $element, $rootScope) {
                var _this = this;
                this.$rootScope = $rootScope;
                $scope.scrollEnCours = false;
                //$scope.isScrollInProgress = false;
                navigationService.init($scope.navigations, "mwNavigation", $scope.scroll);
                this._NavigationService = navigationService;
                $scope.$watch(function () { return $scope.navigations; }, function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        navigationService.setNavigation(newValue);
                    }
                });
                //$scope.$on('childEvent', function (event, data) {
                //    console.log(data);
                //    $scope.isScrollInProgress = data.isScrollInProgress;
                //})
                /*
                * Gestion du scroll de la sideBar
                */
                var tempScrollTop, currentScrollTop = 0;
                angular.element(document).ready(function () {
                    var sidebar = document.querySelector("#mw-sidebar");
                    var zonetravail = document.querySelector(".zone-travail");
                    var content = document.querySelector(".content");
                    if (sidebar != null && zonetravail != null) {
                        angular.element(zonetravail).bind("scroll", function (event) {
                            var scrollheight = sidebar.scrollHeight;
                            var clientHeight = sidebar.clientHeight;
                            currentScrollTop = zonetravail.scrollTop;
                            var delta = tempScrollTop - currentScrollTop;
                            if (scrollheight > clientHeight) {
                                sidebar.scrollTop = sidebar.scrollTop - delta;
                            }
                            tempScrollTop = currentScrollTop;
                        });
                    }
                });
                if (document.getElementsByTagName("mw-zone-travail") != null) {
                    this.scrollableContainer = this.getRawNode(document.getElementsByTagName("mw-zone-travail"));
                }
                else {
                    this.scrollableContainer = window;
                }
                angular.element(document.querySelector('#mw-sidebar')).on("wheel", function (event) {
                    navigationService.scrollTotem(event);
                    var originalEvent = event.originalEvent || event;
                    if (originalEvent && originalEvent.deltaY) {
                        navigationService.scrollPage(_this.scrollableContainer, (originalEvent.deltaY < 0) ? -100 : 100);
                    }
                });
                $element.on("touchstart", function (event) {
                    _this.startCoords = _this.getCoordinates(event);
                });
                var handleSlide = function (event) {
                    var coords = _this.getCoordinates(event);
                    if (coords.y > _this.startCoords.y || coords.y < _this.startCoords.y) {
                        $scope.$apply(function () {
                            if (!navigationService.isScrollInProgress()) {
                                var deltaY = _this.startCoords.y - coords.y;
                                navigationService.scrollTotem(event, deltaY);
                                navigationService.scrollPage(_this.scrollableContainer, deltaY);
                            }
                        });
                    }
                };
                $element.on("touchmove", function (event) {
                    if (!_this.startCoords) {
                        return;
                    }
                    handleSlide(event);
                    _this.startCoords = _this.getCoordinates(event);
                });
                $element.on("touchend", function (event) {
                    handleSlide(event);
                    _this.startCoords = null;
                });
                $element.on("touchcancel", function (event) {
                    _this.startCoords = null;
                });
                $rootScope.$on('navigation-disabled', function (event, args) {
                    $scope.scrollEnCours = args.scroll;
                });
            }
            NavigationCtrl.prototype.getRawNode = function (elem) {
                return elem.nodeName ? elem : elem[0] || elem;
            };
            NavigationCtrl.prototype.getCoordinates = function (event) {
                var originalEvent = event.originalEvent || event;
                var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
                var e = (originalEvent.changedTouches && originalEvent.changedTouches[0]) || touches[0];
                return {
                    x: e.clientX,
                    y: e.clientY
                };
            };
            NavigationCtrl.prototype.isActive = function (component) {
                //return component === this._NavigationService.getActiveComponent();
            };
            NavigationCtrl.prototype.isPageActive = function (page) {
                return page === this._NavigationService.getActivePage();
            };
            return NavigationCtrl;
        })();
        UI.NavigationCtrl = NavigationCtrl;
        /**
         *   Directive mw-totem-contenu. Cette directive prend en compte le niveau chapitre et sous chapitre dans l'objet passé en paramétre.
         */
        function mwNavigation() {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                controller: "NavigationCtrl",
                controllerAs: "navigationCtrl",
                templateUrl: "navigation/v1/navigation-view.html",
                scope: {
                    navigations: "="
                }
            };
        }
        UI.mwNavigation = mwNavigation;
        function mwNavigationChapitre() {
            var uniqueId = 1;
            return {
                restrict: "E",
                replace: true,
                scope: {
                    component: "="
                },
                templateUrl: "navigation/v1/nav-chapitre-view.html",
                link: function (scope, element, attributes) {
                    scope.id = attributes["id"] || uniqueId++;
                }
            };
        }
        UI.mwNavigationChapitre = mwNavigationChapitre;
        var NavigationSousChapitreCtrl = (function () {
            function NavigationSousChapitreCtrl(navigationService, $element) {
                this._NavigationService = navigationService;
                this.toggle = false;
            }
            NavigationSousChapitreCtrl.prototype.onClick = function (sousChapitre) {
                this._NavigationService.setActiveSousChapitre(sousChapitre);
            };
            return NavigationSousChapitreCtrl;
        })();
        UI.NavigationSousChapitreCtrl = NavigationSousChapitreCtrl;
        function mwNavigationSousChapitre() {
            return {
                restrict: "E",
                replace: true,
                controller: "NavigationSousChapitreCtrl",
                controllerAs: "navigationSousChapitreCtrl",
                scope: {
                    component: "="
                },
                templateUrl: "navigation/v1/nav-sous-chapitre-view.html"
            };
        }
        UI.mwNavigationSousChapitre = mwNavigationSousChapitre;
        var NavigationPageCtrl = (function () {
            function NavigationPageCtrl(navigationService, $element, $rootScope, $location) {
                this.$rootScope = $rootScope;
                this.$location = $location;
                this._NavigationService = navigationService;
            }
            /**
             * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
             */
            NavigationPageCtrl.prototype.setActivePage = function (page) {
                //Pas besoin d'appeler la methode changeRoute car le href du lien a s'en est chargé.
                //L'activation doit se faire que si le changement de route à abouti
                /*
                var deregistration = this.$rootScope.$on("$routeChangeSuccess", (scope: any, next: any, current: any) => {
                    //console.log("$routeChangeSuccess " + next.$$route.originalPath);
                    //console.log("location path" + this.$location.path() + " location hash" + this.$location.hash());
                    if (next.$$route && (next.$$route.originalPath === page.target)) {
                        if (page.list.length > 0) {
                            this._NavigationService.setActivePage(page, <TotemSection> page.list[0],true);
                        } else {
                            this._NavigationService.setActivePage(page, null,true);
                        }
                        //On annule l'abonnement à l'évènement $routeChangeSuccess
                        deregistration();
                    }
                });*/
            };
            NavigationPageCtrl.prototype.isPageActive = function (page) {
                return page === this._NavigationService.getActivePage();
            };
            return NavigationPageCtrl;
        })();
        UI.NavigationPageCtrl = NavigationPageCtrl;
        function mwNavigationPage() {
            return {
                restrict: "E",
                replace: true,
                controller: "NavigationPageCtrl",
                controllerAs: "navigationPageCtrl",
                scope: {
                    component: "="
                },
                templateUrl: "navigation/v1/nav-page-view.html"
            };
        }
        UI.mwNavigationPage = mwNavigationPage;
        var NavigationSectionCtrl = (function () {
            function NavigationSectionCtrl($scope, navigationService, $element, $location, $anchorScroll, $timeout) {
                this.$scope = $scope;
                this.$location = $location;
                this.$anchorScroll = $anchorScroll;
                this.$timeout = $timeout;
                this._NavigationService = navigationService;
            }
            /**
             * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
             */
            NavigationSectionCtrl.prototype.setActiveSection = function (page, section, scroll) {
                var _this = this;
                //console.log("actual location" + this.$location.path());
                var result = document.getElementsByClassName("mw-sticky-fixed");
                while (result[0]) {
                    angular.element(result)[0].style.removeProperty("position");
                    angular.element(result)[0].removeAttribute("style");
                    angular.element(result).parent().parent().removeClass("padding");
                    angular.element(result).parent().parent().removeAttr("style");
                    angular.element(result)[0].classList.remove("mw-sticky-fixed");
                }
                if (this.$location.path() === page.target) {
                    //Call scroll  to section
                    //this._NavigationService.setActivePage(page, section);
                    //this.$scope.$emit('childEvent', { isScrollInProgress: true });
                    //if (scroll || angular.isUndefined(scroll)) {
                    //    this.$scope.$emit('childEvent', { isScrollInProgress: true });
                    //    setTimeout(() => {
                    //        this.$scope.$emit('childEvent', { isScrollInProgress: false });
                    //    }, 500);
                    //}
                    if (scroll || angular.isUndefined(scroll)) {
                        this._NavigationService.scrollToSection(section, scroll);
                    }
                    else {
                        this._NavigationService.scrollToAnchor(section, this.$location, this.$anchorScroll);
                    }
                }
                else {
                    //Page différente donc changement de route
                    this.$location.path(page.target);
                    this.$location.hash(section.target);
                    //Le scroll sur la section doit se faire après que le changement de route ait abouti
                    var deregistration = this._NavigationService._$rootScope.$on("$routeChangeSuccess", function (scope, next, current) {
                        //console.log("$routeChangeSuccess " + next.$$route.originalPath);
                        if (next.$$route && (next.$$route.originalPath === page.target)) {
                            _this._NavigationService.setActivePage(page, section, false);
                            //On annule l'abonnement à l'évènement $routeChangeSuccess
                            deregistration();
                        }
                    });
                }
            };
            NavigationSectionCtrl.prototype.isSectionActive = function (section) {
                if (section) {
                    var sect = this._NavigationService.getActiveSection();
                    if (!sect) {
                        return false;
                    }
                    //console.log("section.titre " + section.titre + "  sect.titre" + sect.titre);
                    return section === sect;
                }
                else {
                    return false;
                }
            };
            return NavigationSectionCtrl;
        })();
        UI.NavigationSectionCtrl = NavigationSectionCtrl;
        function mwNavigationSection() {
            return {
                restrict: "E",
                replace: true,
                controller: "NavigationSectionCtrl",
                controllerAs: "navigationSectionCtrl",
                scope: {
                    group: "=",
                    link: "=",
                    scroll: "="
                },
                templateUrl: "navigation/v1/nav-section-view.html"
            };
        }
        UI.mwNavigationSection = mwNavigationSection;
        UI.module.controller("NavigationSousChapitreCtrl", ["NavigationService", "$element", NavigationSousChapitreCtrl]);
        UI.module.controller("NavigationPageCtrl", ["NavigationService", "$element", "$rootScope", "$location", NavigationPageCtrl]);
        UI.module.controller("NavigationSectionCtrl", ["$scope", "NavigationService", "$element", "$location", "$anchorScroll", "$timeout", NavigationSectionCtrl]);
        UI.module.controller("NavigationCtrl", ["$scope", "NavigationService", "$element", "$rootScope", NavigationCtrl]);
        UI.module.directive("mwNavigation", [mwNavigation]);
        UI.module.directive("mwNavigationChapitre", [mwNavigationChapitre]);
        UI.module.directive("mwNavigationSousChapitre", [mwNavigationSousChapitre]);
        UI.module.directive("mwNavigationPage", [mwNavigationPage]);
        UI.module.directive("mwNavigationSection", [mwNavigationSection]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

"use strict";
var MyWay;
(function (MyWay) {
    var UI;
    (function (UI) {
        /**
         *   Directive mw-totem-contenu. Cette directive prend en compte le niveau chapitre et sous-chapitre dans l'objet passé en paramètre.
         */
        function mwNavigationV2() {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                controller: "NavigationCtrl",
                controllerAs: "navigationCtrl",
                templateUrl: "navigation/v2/navigation-v2-view.html",
                scope: {
                    navigations: "=",
                    scroll: "=",
                    scrollEnCours: "@"
                }
            };
        }
        UI.mwNavigationV2 = mwNavigationV2;
        function mwNavigationPageV2() {
            return {
                restrict: "E",
                replace: true,
                controller: "NavigationPageCtrl",
                controllerAs: "navigationPageCtrl",
                scope: {
                    component: "=",
                    scroll: "="
                },
                templateUrl: "navigation/v2/nav-page-v2-view.html"
            };
        }
        UI.mwNavigationPageV2 = mwNavigationPageV2;
        function mwNavigationChapitreV2() {
            var uniqueId = 1;
            return {
                restrict: "E",
                replace: true,
                scope: {
                    component: "=",
                    scroll: "="
                },
                templateUrl: "navigation/v2/nav-chapitre-v2-view.html",
                link: function (scope, element, attributes) {
                    scope.id = attributes["id"] || uniqueId++;
                }
            };
        }
        UI.mwNavigationChapitreV2 = mwNavigationChapitreV2;
        function mwNavigationSousChapitreV2() {
            return {
                restrict: "E",
                replace: true,
                controller: "NavigationSousChapitreCtrl",
                controllerAs: "navigationSousChapitreCtrl",
                scope: {
                    component: "=",
                    scroll: "="
                },
                templateUrl: "navigation/v2/nav-sous-chapitre-v2-view.html"
            };
        }
        UI.mwNavigationSousChapitreV2 = mwNavigationSousChapitreV2;
        UI.module.directive("mwNavigationV2", [mwNavigationV2]);
        UI.module.directive("mwNavigationChapitreV2", [mwNavigationChapitreV2]);
        UI.module.directive("mwNavigationPageV2", [mwNavigationPageV2]);
        UI.module.directive("mwNavigationSousChapitreV2", [mwNavigationSousChapitreV2]);
    })(UI = MyWay.UI || (MyWay.UI = {}));
})(MyWay || (MyWay = {}));

//module MyWay.UI {
//    "use strict";
//    function tooltipPopup(): ng.IDirective {
//        return {
//            restrict: "A",
//            link: function (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) {
//                console.log(scope);
//            }
//        };
//    }
//    module.directive("tooltipPopup", [tooltipPopup]);
//    function tooltipHtmlUnsafePopup(): ng.IDirective {
//        return {
//            restrict: "A",
//            scope: { id: '@'},
//            link: function (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) {
//                element.attr("id", "tooltip");
//                console.log(element);
//            }
//        };
//    }
//    module.directive("tooltipHtmlUnsafePopup", [tooltipHtmlUnsafePopup]);
//}  

angular.module("myway.ui").run(["$templateCache", function($templateCache) {$templateCache.put("calendrier/calendrier-view.html","<div class=\"mw-week-buttons\" datepicker-options=\"dateOptions\" data-uib-datepicker-popup=\"dd/MM/yyyy\" show-button-bar=\"false\" is-open=\"opened\" ng-model=\"dateSelectionnee\" min-date=\"minDt\" max-date=\"maxDt\" ng-click=\"openCalendar($event)\" on-week-click=\"onWeekClick({ $date: $date, $isoWeek: $isoWeek, $year: $year, $weekOfYear: $weekOfYear })\"><div ng-transclude=\"\"></div></div>");
$templateCache.put("datepicker/input-date-view.html","<div class=\"has-feedback\"><input type=\"text\" class=\"form-control\" ng-class=\"{\'mw-invalid\':!InputDateController.isValid()}\" id=\"{{::id+\'-input\'}}\" name=\"{{::name+\'-input\'}}\" placeholder=\"jj/mm/aaaa\" aria-required=\"true\" ui-mask=\"99/99/9999\" ng-disabled=\"mwDisabled\" ng-model=\"InputDateController.maDate\" ng-change=\"InputDateController.onInputChange($event)\" ng-focus=\"InputDateController.onFocus($event)\" ng-blur=\"InputDateController.onBlur($event)\" data-ng-required=\"{{InputDateController.required}}\"> <span class=\"error-msg col-md-12\" ng-show=\"!InputDateController.isValid()\" ng-bind=\"::InputDateController.errMsg\"></span> <span class=\"btn btn-success form-control-feedback\"><mw-button-icone texte=\"Calendrier\" ng-disabled=\"mwDisabled\" taille=\"sm\" icone=\"icone itce-calendar-o icodate\" ng-click=\"InputDateController.openCalendar($event)\" id=\"{{::id+\'-bt\'}}\"></mw-button-icone></span> <span class=\"mw-week-buttons\" datepicker-options=\"InputDateController.dateOptions\" datepicker-popup=\"dd/MM/yyyy\" show-button-bar=\"false\" is-open=\"InputDateController.opened\" data-ng-model=\"ngModel\" min-date=\"InputDateController.minDate\" max-date=\"InputDateController.maxDate\" on-week-click=\"InputDateController.$scope.onWeekClick({ $date: $date, $isoWeek: $isoWeek, $year: $year, $weekOfYear: $weekOfYear })\"></span></div>");
$templateCache.put("horizontalPanel/horizontalPanel-view.html","<div class=\"panelHScroll col-md-12\" id=\"{{::id+\'-panelhscroll\'}}\"><div class=\"panelHScroll-content arrow-left row-horizon\" id=\"{{::id+\'-panelhscroll-content\'}}\"><div class=\"arrow-left\" id=\"{{::id+\'-arrow-left\'}}\"><span class=\"icon itce-chevron-left\" ng-click=\"mwHorizontalPanelCtrl.onClickLeft($event)\"></span></div><div class=\"arrow-right\" id=\"{{::id+\'-arrow-right\'}}\"><span class=\"icon itce-chevron-right\" ng-click=\"mwHorizontalPanelCtrl.onClickRight($event)\"></span></div><div class=\"navcol\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("embed/embed-view.html","{{MwEmbedController.src}}<embed src=\"{MwEmbedController.src}\" width=\"{{MwEmbedController.pdfWidth}}\" height=\"{{MwEmbedController.pdfHeight}}\" alt=\"MwEmbedController.alt\">");
$templateCache.put("integerPicker/integer-picker-view.html","<div class=\"btn-group mw-integer-picker\" tabindex=\"0\" ng-keydown=\"mwIntegerPickerCtrl.handelKey($event);$event.stopPropagation();\" ng-focus=\";mwIntegerPickerCtrl.ngFocus();\" ng-blur=\";mwIntegerPickerCtrl.ngBlur();\" role=\"spinbutton\" aria-valuemin=\"{{min}}\" aria-valuemax=\"{{max}}\" aria-valuenow=\"{{mwIntegerPickerCtrl.value}}\"><span class=\"btn btn-success mw-integer-picker-btn-moins\" ng-click=\"mwIntegerPickerCtrl.decremente()\" id=\"{{::id+\'-left-bt\'}}\" aria-hidden=\"true\" ng-class=\"{\'disabled\':mwDisabled==\'true\'}\">-<span ng-bind=\"::mwIntegerPickerCtrl.step\"></span></span><div class=\"btn-group form-control mw-integer-picker-value\" ng-class=\"{\'disabled\':mwDisabled==\'true\'}\"><span ng-bind=\"mwIntegerPickerCtrl.value\"></span></div><span class=\"btn btn-success mw-integer-picker-btn-plus\" ng-click=\"mwIntegerPickerCtrl.incremente()\" id=\"{{::id+\'-right-bt\'}}\" aria-hidden=\"true\" ng-class=\"{\'disabled\':mwDisabled==\'true\'}\">+<span ng-bind=\"::mwIntegerPickerCtrl.step\"></span></span></div>");
$templateCache.put("modal/modal-default-confirm-view.html","<div><div class=\"modal-header-dialog\"><button type=\"button\" ng-click=\"modalCtrl.annuler()\" class=\"btn btn-block btn-zone close\"><span class=\"icon itce-times\" aria-hidden=\"true\"></span> <span class=\"adobe-blank\">Fermer la fenêtre modale</span></button><h3 id=\"mw-modal-entete\" class=\"modal-title\" ng-bind=\"::modalCtrl.popupOptions.headerText\"></h3></div><div id=\"mw-modal-corps\" class=\"modal-body modal-body-dialog modal-usual texte-gros row\" role=\"document\"><div class=\"col-sm-1 modal-icon\"><span class=\"icon {{::modalCtrl.popupOptions.iconName}}\" aria-hidden=\"true\"></span></div><div class=\"col-sm-11\"><span ng-bind-html=\"::modalCtrl.popupOptions.bodyText\" tabindex=\"0\"></span></div></div><div id=\"mw-modal-pied\" class=\"modal-footer\"><div class=\"col-md-6\"><button type=\"button\" ng-show=\"modalCtrl.popupOptions.closeButtonText.length > 0\" class=\"btn btn-default\" ng-click=\"modalCtrl.annuler()\" ng-bind=\"::modalCtrl.popupOptions.closeButtonText\" id=\"mw-modal-pied-bt1\"></button></div><div class=\"col-md-6\"><button type=\"button\" class=\"btn btn-primary\" ng-click=\"modalCtrl.valider()\" ng-bind=\"::modalCtrl.popupOptions.actionButtonText\" id=\"mw-modal-pied-bt2\"></button></div></div></div>");
$templateCache.put("modal/modal-default-pdf-view.html","<div tabindex=\"0\"><h1>Titre de la pop-up</h1><div class=\"modal-header\" id=\"mw-modal-header\"><button type=\"button\" ng-click=\"modalCtrl.annuler()\" class=\"btn btn-block btn-zone close\" aria-hidden=\"true\" id=\"mw-modal-header-close\"><span class=\"icon itce-times\" aria-hidden=\"true\"></span> <span class=\"adobe-blank\">Fermer la fenêtre modale</span></button><h3 id=\"mw-modal-entete\" class=\"modal-title\" ng-bind=\"modalCtrl.popupOptions.headerText\"></h3></div><div class=\"modal-body texte-gros row\" id=\"mw-modal-body\" role=\"document\"><embed ng-src=\"{{modalCtrl.pdfURL}}\" width=\"{{modalCtrl.popupOptions.pdfWidth}}\" height=\"{{modalCtrl.popupOptions.pdfHeight}}\" alt=\"pdf\"></div></div>");
$templateCache.put("modal/modal-default-popup-view.html","<div><div class=\"modal-header\"><button type=\"button\" ng-click=\"modalCtrl.annuler()\" class=\"btn btn-block btn-zone close\"><span class=\"icon itce-times\" aria-hidden=\"true\"></span> <span class=\"adobe-blank\">Fermer la fenêtre modale</span></button><h3 id=\"mw-modal-entete\" class=\"modal-title\" ng-bind=\"::modalCtrl.popupOptions.headerText\"></h3></div><div id=\"mw-modal-corps\" class=\"modal-body texte-gros row\" role=\"document\"><div class=\"col-sm-11\"><span ng-bind-html=\"::modalCtrl.popupOptions.bodyText\"></span></div></div></div>");
$templateCache.put("modal/modal-default-view.html","<div><div class=\"modal-header\"><button type=\"button\" ng-click=\"modalCtrl.annuler()\" class=\"btn btn-block btn-zone close\"><span class=\"icon itce-times\" aria-hidden=\"true\"></span> <span class=\"adobe-blank\">Fermer la fenêtre modale</span></button><h3 id=\"mw-modal-entete\" class=\"modal-title\" ng-bind=\"::modalCtrl.popupOptions.headerText\"></h3></div><div id=\"mw-modal-corps\" class=\"modal-body modal-usual texte-gros row\" role=\"document\"><div class=\"col-sm-1 modal-icon\"><span class=\"icon {{::modalCtrl.popupOptions.iconName}}\"></span></div><div class=\"col-sm-11\"><span ng-bind-html=\"::modalCtrl.popupOptions.bodyText\"></span></div></div><div id=\"mw-modal-pied\" class=\"modal-footer\"><div class=\"col-lg-offset-6 col-lg-3 col-md-offset-6 col-md-3 col-sm-offset-6 col-sm-3\"><button type=\"button\" ng-show=\"modalCtrl.popupOptions.closeButtonText.length>0\" class=\"btn btn-default\" ng-click=\"modalCtrl.annuler()\" ng-bind=\"::modalCtrl.popupOptions.closeButtonText\" id=\"mw-modal-pied-bt1\"></button></div><div class=\"col-lg-3 col-md-3 col-sm-3\"><button type=\"button\" class=\"btn btn-primary\" ng-click=\"modalCtrl.valider()\" ng-bind=\"::modalCtrl.popupOptions.closeButtonText\" id=\"mw-modal-pied-bt2\"></button></div></div></div>");
$templateCache.put("modal/modal-erreur-popup-view.html","<div><div class=\"modal-header-dialog\"><button type=\"button\" ng-click=\"modalCtrl.annuler()\" class=\"btn btn-block btn-zone close\"><span class=\"icon itce-times\" aria-hidden=\"true\"></span> <span class=\"adobe-blank\">Fermer la fenêtre modale</span></button><h3 id=\"mw-modal-entete\" class=\"modal-title\" ng-bind=\"::modalCtrl.popupOptions.headerText\"></h3></div><div id=\"mw-modal-corps\" class=\"modal-body modal-body-dialog modal-usual texte-gros row\" role=\"document\"><div class=\"col-sm-1 modal-icon\" ng-if=\"modalCtrl.popupOptions.iconName\"><span style=\"float: right;\" class=\"icon {{::modalCtrl.popupOptions.iconName}}\" aria-hidden=\"true\"></span></div><div class=\"col-sm-11\" ng-if=\"modalCtrl.popupOptions.iconName\"><span style=\"float:left;\" ng-bind-html=\"::modalCtrl.popupOptions.bodyText\"></span></div><div class=\"col-sm-12\" ng-if=\"!modalCtrl.popupOptions.iconName\"><span ng-bind-html=\"::modalCtrl.popupOptions.bodyText\"></span></div></div></div>");
$templateCache.put("modal/modal-exit-view.html","<div class=\"modal-exit\"><div class=\"modal-header-dialog\"><button type=\"button\" ng-click=\"modalCtrl.annuler()\" class=\"btn btn-block btn-zone close\"><span class=\"icon itce-times\" aria-hidden=\"true\"></span> <span class=\"adobe-blank\">Fermer la fenêtre modale</span></button><h3 id=\"mw-modal-entete\" class=\"modal-title\">Enregistrement</h3></div><div id=\"mw-modal-corps\" class=\"modal-body modal-body-dialog texte-gros row\" role=\"document\"><div class=\"col-sm-11\"><span tabindex=\"0\">Les données non enregistrées seront perdues.<br>Voulez-vous les enregistrer ?</span></div></div><div id=\"mw-modal-pied\" class=\"modal-footer\"><div class=\"col-md-offset-1 col-md-3\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"modalCtrl.annuler()\" id=\"mw-modal-pied-bt1\">Annuler</button></div><div class=\"col-md-4\"><button type=\"button\" class=\"btn btn-zone\" ng-click=\"modalCtrl.sansEnregistrer()\" id=\"mw-modal-pied-bt2\">Ne pas enregistrer</button></div><div class=\"col-md-3\"><button type=\"button\" class=\"btn btn-primary\" ng-click=\"modalCtrl.enregistrer()\" id=\"mw-modal-pied-bt3\">Enregistrer</button></div></div></div>");
$templateCache.put("mw-accordeon/mw-accordeon-view.html","<div ng-transclude=\"\"></div>");
$templateCache.put("mw-autocompletion/mw-autocompletion-view.html","<div class=\"angucomplete-holder\" ng-init=\"autocompletionBlock =true; showDropdown =false;\"><input id=\"{{id}}_search\" name=\"{{id}}_search\" class=\"form-control\" ng-disabled=\"disableInput\" type=\"text\" mw-clear-button=\"\" placeholder=\"{{placeholder}}\" ng-keypress=\"keyupsearch();\" ng-model=\"valueinput\" ng-class=\"{\'itce-obligatoire\' :obligatoire==\'true\' ,\'itce-facultatif\': obligatoire==\'false\' }\"><div class=\"angucomplete-dropdown\" ng-show=\"showDropdown\"><div id=\"{{id}}_dropdown\" class=\"form-control\" ng-repeat=\"result in liste | filter:query | orderBy: \'name\' | limitTo : limitSearch\" ng-model=\"selecte\" ng-click=\"select(result.name)\"><div ng-bind=\"result.name\"></div></div></div></div>");
$templateCache.put("mw-bouton-liste-actions/mw-bouton-liste-actions-view.html","<div dropdown=\"\" on-toggle=\"mwBoutonListeActionsCtrl.toggle(open)\"><button id=\"bouton\" type=\"button\" class=\"dropdown-toggle form-control btn btn-block\" ng-class=\"{\'btn-primary\' :mwBoutonListeActionsCtrl.modele==\'principale\', \'btn-default\': mwBoutonListeActionsCtrl.modele==\'secondaire\', \'btn-success\': mwBoutonListeActionsCtrl.modele==\'zone\', \'btn-contextuel\': mwBoutonListeActionsCtrl.modele==\'contextuel\'}\" dropdown-toggle=\"\" aria-haspopup=\"true\" ng-attr-aria-expanded=\"{{mwBoutonListeActionsCtrl.ouvert}}\" ng-attr-aria-controls=\"{{::mwBoutonListeActionsCtrl.id}}-volet\" ng-disabled=\"mwBoutonListeActionsCtrl.isDisabled\"><span class=\"pull-right icon\" aria-hidden=\"true\" ng-class=\"{\'itce-chevron-down\':!mwBoutonListeActionsCtrl.ouvert, \'itce-chevron-up\': mwBoutonListeActionsCtrl.ouvert}\"></span> <span id=\"titre\" ng-bind=\"mwBoutonListeActionsCtrl.titre\"></span></button><ul class=\"dropdown-menu bouton-actions\" ng-class=\"{haut: mwBoutonListeActionsCtrl.position == \'haut\' || goToTop() , \'disabled\': mwBoutonListeActionsCtrl.isDisabled}\" id=\"volet\"><li ng-repeat=\"action in mwBoutonListeActionsCtrl.data\"><button type=\"button\" ng-attr-id=\"lien-{{$index}}\" ng-click=\"action.clicAction();focusBouton()\" ng-bind=\"::action.titreAction\"></button></li></ul></div>");
$templateCache.put("mw-button/mw-button-view.html","<button class=\"btn btn-block\" type=\"button\" ng-class=\"{\'btn-primary\' :modele==\'principale\', \'btn-default\': modele==\'secondaire\', \'btn-success\': modele==\'zone\', \'btn-contextuel\': modele==\'contextuel\',\'disabled\': etat()}\"><span aria-hidden=\"true\" class=\"icon {{icone}}\" ng-if=\"icone\"></span><span ng-bind=\"texte\"></span></button>");
$templateCache.put("mw-bouton-volet/mw-bouton-volet-view.html","<div class=\"volet noclose-menu\" ng-class=\"{ \'open\': opened, \'left\': gauche, \'right\': droite, \'top\': haut, \'bottom\': bas }\"><button ng-attr-id=\"{{::id}}-bouton\" class=\"btn btn-block form-control\" type=\"button\" ng-class=\"{ \'btn-primary\': modele == \'principale\', \'btn-default\': modele == \'secondaire\', \'btn-success\': modele == \'zone\', \'btn-contextuel\': modele == \'contextuel\', \'disabled\': etat() }\" ng-click=\"opened = !opened\" aria-expanded=\"{{opened}}\" aria-controls=\"{{::id}}-volet\"><span class=\"icon\" aria-hidden=\"true\" ng-class=\"{ \'itce-chevron-down\': haut && opened || bas && !opened, \'itce-chevron-up\': haut && !opened || bas && opened, \'itce-chevron-left\': droite && opened || gauche && !opened, \'itce-chevron-right\': droite && !opened || gauche && opened, \'pull-right\': !gauche, \'icon-gauche\': gauche }\"></span> <span ng-bind=\"texte\"></span></button><div class=\"volet-container\" ng-attr-id=\"{{::id}}-volet\"><button id=\"{{::id}}-close\" ng-if=\"closeButton\" type=\"button\" ng-click=\"close();focusBouton()\" class=\"close\" aria-hidden=\"true\"><span class=\"icon itce-times\"></span></button><div class=\"volet-content\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("mw-button-icone/mw-button-icone-view.html","<button type=\"button\" class=\"btn btn-icone {{::taille}}\" ng-class=\"{\'disabled\': etat()}\"><span class=\"icon {{ ::icone }}\" aria-hidden=\"true\" title=\"{{ ::texte }}\" ng-if=\"icone\"></span> <span class=\"adobe-blank\">{{ ::texte }}</span></button>");
$templateCache.put("mw-chargement/spinner.html","<div class=\"spinner\" role=\"status\"><span aria-hidden=\"true\" class=\"icon itce-spinner\"></span></div><span class=\"hide-a11y\">Chargement en cours</span>");
$templateCache.put("mw-chargement-long/mw-chargement-long-view.html","<div ng-transclude=\"\"></div><div ng-if=\"visible\" class=\"mw-chargement-long-conteneur\" ng-attr-role=\"{{etat === -1 ? \'status\' : undefined}}\"><div class=\"mw-chargement-long\"><h3>{{ texte || \'Traitement en cours\' }}</h3><div class=\"progress\" id=\"progress-bar\" ng-class=\"{animate: etat == -1}\"><div ng-if=\"etat > -1\" class=\"progress-bar\" role=\"progressbar\" aria-valuetext=\"Chargement en cours\" aria-valuenow=\"{{getPourcentage()}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" ng-style=\"{width: getPourcentage() + \'%\'}\"><span class=\"hide-a11y\">Chargement en cours</span></div></div><div class=\"etat-chargement\"><div ng-if=\"etat === -1\" class=\"etat-chargement-texte\">Chargement en cours</div><div ng-if=\"etat !== -1\">{{getPourcentage() | number:0}}%</div></div><mw-button id=\"bouton-annuler\" modele=\"zone\" texte=\"Annuler\" ng-click=\"annuler()\" ng-if=\"annuler\"></mw-button></div></div>");
$templateCache.put("mw-checkbox/mw-checkbox-view.html","<ul id=\"{{::id+\'-ul\'}}\" role=\"group\" class=\"mw-checkbox form-group\" ng-class=\"{\'checkbox-verticale\' :orientation ==\'verticale\'}\"><li ng-repeat=\"y in data\" class=\"composant-checkbox-li\" id=\"{{::id+\'-li-choix\'+$index}}\" ng-class=\"{\'active\' :y.checked==true}\" name=\"{{::id+\'-li-choix\'+$index}}\"><div class=\"mw-input-check\"><label for=\"{{::id+\'-checkbox\'+$index}}\" id=\"{{::id+\'-label\'+$index}}\" ng-disabled=\"{{!y.active}}\"><input id=\"{{::id+\'-checkbox\'+$index}}\" type=\"checkbox\" ng-model=\"y.checked\" indeterminate=\"false\" ng-disabled=\"{{!y.active}}\" aria-checked=\"{{y.checked}}\" aria-labelledby=\"{{::id+\'-label\'+$index}}\"> <span aria-hidden=\"true\" class=\"icon\" ng-class=\"{\'itce-fa-check\':(y.checked && !false) }\"></span> {{y.titre}}</label></div></li></ul>");
$templateCache.put("mw-checkbox/mw-simple-checkbox-view.html","<div class=\"simple-checkbox\"><input type=\"checkbox\" id=\"{{::id+\'-simpleCheckbox\'}}\" name=\"{{::id+\'-checkbox\'+$index}}\" ng-model=\"model\" ng-disabled=\"disabled\" mw-indeterminate=\"indeterminate\" ng-change=\"mwSimpleCheckboxCtrl.onChange()\"> <label for=\"{{::id+\'-simpleCheckbox\'}}\"><span class=\"icon itce-fa-check\" aria-hidden=\"true\" ng-class=\"{\'active\' :model==true}\" ng-hide=\"indeterminate==true\"></span> <span class=\"icon itce-minus\" aria-hidden=\"true\" ng-class=\"{\'active\' :indeterminate==true}\" ng-show=\"indeterminate==true\"></span> {{::label}}</label></div>");
$templateCache.put("mw-datatable/mw-data-table-filtre-row-view.html","<td ng-repeat=\"column in options.columns\" class=\"mw-table-bk-filter\"><input type=\"text\" id=\"{{::id}}-filter-input-{{::$index}}\" name=\"{{::id}}-filter-input-{{::$index}}\" ng-model=\"mwTableCtrl.search[column.bind]\" placeholder=\"Filtre...\" ng-change=\"mwTableCtrl.filtreChange()\" class=\"form-control table-input-filter\" ng-show=\"mwTableCtrl.indexColumnFilter == $index\" aria-label=\"Filtre sur : {{::column.title}} (automatiquement)\"></td>");
$templateCache.put("mw-datatable/mw-data-table-pagination-view.html","<pagination id=\"id-pagination\" total-items=\"mwDataTable.orderedItems.length\" items-per-page=\"mwDataTable.pagination.itemsPerPage\" ng-model=\"mwDataTable.pagination.index\" max-size=\"mwDataTable.pagination.numPages\" class=\"pagination-sm pull-right\" previous-text=\"<\" first-text=\"<<\" next-text=\">\" last-text=\">>\" boundary-links=\"true\"></pagination>");
$templateCache.put("mw-datatable/mw-datatable-checkbox-body-view.html","<div class=\"mw-input-check\"><label for=\"input-check\'\"><span class=\"hide-a11y\">Sélectionner ligne</span> <input id=\"input-check\" type=\"checkbox\" indeterminate=\"false\" ng-checked=\"mwDatatable.contains(mwDatatable.selectedItems, ligne)\"> <span class=\"icon\" ng-class=\"{\'itce-fa-check\': mwDatatable.contains(mwDatatable.selectedItems, ligne)}\" ng-click=\"mwDatatable.changeSelectedItemValue(ligne)\"></span></label></div>");
$templateCache.put("mw-datatable/mw-datatable-checkbox-head-view.html","<div class=\"mw-input-check\"><label for=\"input-check\'\"><span class=\"hide-a11y\">Sélectionner ligne</span> <input id=\"input-check\" type=\"checkbox\" ng-checked=\"mwDatatable.isAllSelected\" indeterminate=\"mwDatatable.isPartialSelected\"> <span class=\"icon\" ng-class=\"{\'itce-fa-check\': mwDatatable.isAllSelected,\'itce-minus\': mwDatatable.isPartialSelected }\" ng-click=\"mwDatatable.setAllNoneSelected()\"></span></label></div>");
$templateCache.put("mw-datatable/mw-datatable-filtre-view.html","<button type=\"button\" class=\"btn btn-picto-transparent btn-filtre\"><span class=\"icon itce-filter\" aria-hidden=\"true\" title=\"Filter\"></span> <span class=\"adobe-blank\">Filtrer</span></button>");
$templateCache.put("mw-datatable/mw-datatable-tri-view.html","<button type=\"button\" class=\"btn btn-picto-transparent btn-tri\"><span class=\"icon\" aria-hidden=\"true\" title=\"Trier\" ng-class=\"{\'itce-sort-amount-desc\' : order,\'itce-sort-amount-asc\' : (!order) }\"></span> <span class=\"adobe-blank\">Trier</span></button>");
$templateCache.put("mw-combobox/mw-combobox-guidage.html","<div class=\"mw-combobox-guidage dropdown-menu\" ng-show=\"isGuidageOpen() && !moveInProgress\" ng-style=\"{top: guidagePosition().top+\'px\', left: guidagePosition().left+\'px\'}\" aria-hidden=\"{{!isGuidageOpen()}}\" open=\"open\"><p>Aucun résultat</p><a class=\"btn-link pull-right\" href=\"\" ng-click=\"guidageBottomAction($event)\" tabindex=\"-1\" ng-bind-html=\"textBottomAction\" ng-attr-title=\"{{textBottomAction}}\"></a></div>");
$templateCache.put("mw-combobox/mw-combobox-match.html","<a href=\"\" tabindex=\"-1\" ng-bind-html=\"match.label | mwComboboxHighlight:query\" ng-attr-title=\"{{match.label}}\"></a>");
$templateCache.put("mw-combobox/mw-combobox-popup.html","<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\" ng-style=\"{top: position().top+\'px\', left: position().left+\'px\'}\" ng-class=\"{\'with-scroll\':hasScroll, \'dropupcombo\': goToTop() }\"><li class=\"mw-combobox-match\" ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" ng-mousedown=\"willSelect($index)\" role=\"option\" id=\"{{::match.id}}\"><div mw-combobox-match=\"\" index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div></li><li ng-if=\"withBottomAction\" class=\"mw-combobox-match\" ng-click=\"bottomAction($event)\" ng-class=\"{active: isActive(matches.length) }\" ng-mouseenter=\"selectActive(matches.length)\" role=\"option\"><a class=\"btn-link\" href=\"\" tabindex=\"-1\" ng-bind-html=\"textBottomAction\" ng-attr-title=\"{{textBottomAction}}\"></a></li></ul>");
$templateCache.put("mw-infobulle/mw-infobulle-message-view.html","<div class=\"mw-popover\" ng-show=\"data.open\"><div class=\"arrow\"></div><button class=\"mw-btn-link mw-popover-close\" type=\"button\" ng-show=\"data.open\" ng-click=\"data.open = false\" id=\"{{::id+\'-close\'}}\"><span class=\"icon itce-times-circle\" aria-hidden=\"true\"></span> <span class=\"adobe-blank\">Fermer l\'infobulle</span></button><div id=\"{{::id+\'mw-popover-inner\'}}\" class=\"mw-popover-inner\"><div class=\"mw-popover-content\" id=\"{{::id+\'mw-popover-content\'}}\"><span ng-bind=\"::data.message1\"></span></div></div></div>");
$templateCache.put("mw-infobulle/mw-infobulle-picto-view.html","<button class=\"mw-btn-link\" ng-click=\"data.open = !data.open\" id=\"{{::id+\'-picto\'}}\"><span class=\"infobulle-picto icon {{data.picto}}\" aria-hidden=\"true\"></span> <span class=\"adobe-blank\" ng-bind=\"(data.open? \'Fermer\' : \'Ouvrir\') + \' l\\\'infobulle\'\"></span></button>");
$templateCache.put("mw-number/mw-number-view.html","<div class=\"mw-number\"><input type=\"text\" mw-lcear-button=\"\" class=\"form-control montant\" id=\"{{ :: id + \'-input-id\' }}\" name=\"{{ :: name + \'-input-name\' }}\" ng-model=\"mwNumberCtrl.view\" ng-change=\"mwNumberCtrl.onChange()\" ng-keydown=\"mwNumberCtrl.onKeyDown($event)\" ng-focus=\"mwNumberCtrl.onFocus()\" ng-blur=\"mwNumberCtrl.onBlur()\" ng-keypress=\"mwNumberCtrl.onKeyPress($event)\" ng-disabled=\"mwDisabled\"></div>");
$templateCache.put("nav-colonne/colonne-view.html","<div class=\"mw-navcol-list\" ng-class=\"{\'hidden-md hidden-sm\':navcolListCtrl.parentCtrl.currentCol!=navcolListCtrl.indexcolonne}\"><div class=\"mw-navcol-list-head\" ng-class=\"{\'last-category-selected\':navcolListCtrl.lastColumn && navcolListCtrl.colonne.filteredItems.length > 0}\"><span class=\"titre-colonne\" ng-attr-id=\"{{id}}-titre\" ng-bind=\"titre\"></span> <button class=\"icon itce-filter\" ng-class=\"{\'search-on\' : navcolListCtrl.searchActive,\'search-off\':!navcolListCtrl.searchActive}\" ng-show=\"navcolListCtrl.searchEnabled\" ng-click=\"navcolListCtrl.toogleSearch()\" aria-controls=\"{{id}}-filtre\" aria-label=\"Filtre sur {{::titre}} (automatiquement)\" aria-expanded=\"{{navcolListCtrl.searchEnabled && navcolListCtrl.searchActive}}\"></button></div><div class=\"mw-navcol-list-corp\"><div class=\"mw-navcol-list-search\" ng-show=\"navcolListCtrl.searchEnabled && navcolListCtrl.searchActive\"><input type=\"text\" mw-clear-button=\"\" class=\"mw-navcol-list-search mw-navcol-input form-control\" placeholder=\"Filtre\" ng-change=\"navcolListCtrl.onFilterChange()\" ng-model=\"navcolListCtrl.search\" ng-attr-id=\"{{id}}-filtre\"></div><ul class=\"liste mw-navcol-list-content\" ng-class=\"{\'search-active\':navcolListCtrl.searchEnabled && navcolListCtrl.searchActive}\" aria-labelledby=\"{{id}}-titre\" ng-attr-id=\"{{id}}-content\"><li class=\"choix\" ng-repeat=\"item in navcolListCtrl.colonne.filteredItems = datalist | localsearchfilter:distinctField:navcolListCtrl.search\" ng-class=\"{\'active\' : navcolListCtrl.isActiveItem(item)}\"><button ng-click=\"navcolListCtrl.onClick(item)\" ng-class=\"{\'active\' : navcolListCtrl.isActiveItem(item)}\" ng-include=\"templateUrl\" element-content-include=\"item\" mw-nav-col-list-item=\"\"></button> <span aria-hidden=\"true\" class=\"chevron icon itce-chevron-right\" ng-show=\"!navcolListCtrl.lastColumn\" ng-class=\"{\'no-chevron\' : !navcolListCtrl.setChevron(item)}\"></span></li></ul></div></div>");
$templateCache.put("nav-colonne/navcol-view.html","<div class=\"navigation-colonne row\"><div class=\"col-md-12 form-horizontal\" ng-show=\"navcolCtrl.searchEnabled\"><div class=\"form-group\"><label class=\"control-label col-lg-3 hidden-sm hidden-md\" for=\"nav-colonne-recherche\">Recherche globale</label><div class=\"col-sm-12 col-lg-9 has-feedback\"><input id=\"nav-colonne-recherche\" type=\"text\" mw-clear-button=\"\" class=\"mw-navcol-search mw-navcol-input form-control\" ng-model=\"navcolCtrl.critereRecherche\" ng-keypress=\"($event.keyCode === 13)?navcolCtrl.rechercher(navcolCtrl.critereRecherche):\'\';\"> <span class=\"btn btn-success form-control-feedback\"><mw-button-icone texte=\"Rechercher\" taille=\"sm\" icone=\"icone itce-search icodate\" ng-click=\"navcolCtrl.rechercher(navcolCtrl.critereRecherche)\"></mw-button-icone></span></div></div></div><div class=\"navigation-colonne-prev col-sm-12\" ng-class=\"navcolCtrl.responsiveClasses\" ng-show=\"navcolCtrl.currentCol != 0\" ng-click=\"navcolCtrl.colPrev()\"><span aria-hidden=\"true\" class=\"icon itce-arrow-left\"></span> <span class=\"\" ng-bind=\"navcolCtrl.colonnes[navcolCtrl.currentCol-1].titre\"></span></div><div ng-transclude=\"\" class=\"col-md-12 row-horizon\"></div></div>");
$templateCache.put("panel/panel-view.html","<div class=\"col-xs-12\" tabindex=\"-1\"><div class=\"panel {{cssPanel}}\" tabindex=\"-1\" ng-class=\"{\'panel-default\' :niveau==\'1\' ,\'panel-primary\': niveau==\'2\' ,\'panel-success\': niveau==\'3\' }\"><div ng-if=\"headerSticky.length > 0 && mwPanelController.hasTitle\" mw-panel-sticky=\"{{headerSticky}}\" class=\"panel-heading\" ng-class=\"{\'panel-actif\': !mwPanelController.isInactif}\" ng-show=\"!mwPanelController.complexeHeading\" ng-switch=\"::niveau\" z-index=\"1000\"><h1 ng-switch-when=\"1\" class=\"panel-title\" ng-class=\"inconeClass\" ng-bind=\"::_titre\"></h1><h2 ng-switch-when=\"2\" class=\"panel-title\" ng-class=\"inconeClass\" ng-bind=\"::_titre\"></h2><h3 ng-switch-when=\"3\" class=\"panel-title\" ng-class=\"inconeClass\" ng-bind=\"::_titre\"></h3></div><div ng-if=\"!headerSticky && mwPanelController.hasTitle\" class=\"panel-heading\" ng-show=\"!mwPanelController.complexeHeading\" ng-class=\"{\'panel-actif\': !mwPanelController.isInactif}\" ng-switch=\"::niveau\" z-index=\"1000\"><h1 ng-switch-when=\"1\" class=\"panel-title\" ng-class=\"inconeClass\" ng-bind=\"::_titre\"></h1><h2 ng-switch-when=\"2\" class=\"panel-title\" ng-class=\"inconeClass\" ng-bind=\"::_titre\"></h2><h3 ng-switch-when=\"3\" class=\"panel-title\" ng-class=\"inconeClass\" ng-bind=\"::_titre\"></h3></div><div class=\"panel-body\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("panel-free/panel-bar-view.html","<div class=\"panel-heading panel-bar\" ng-switch=\"::mwPanelBarController.getNiveau()\" ng-attr-mw-panel-free-sticky=\"{{headerSticky.length > 0 ? headerSticky : undefined }}\"><h1 ng-switch-when=\"1\" class=\"panel-title {{::mwPanelBarController.getClass()}}\" ng-bind=\"::mwPanelBarController.getTitre()\"></h1><h2 ng-switch-when=\"2\" class=\"panel-title {{::mwPanelBarController.getClass()}}\" ng-bind=\"::mwPanelBarController.getTitre()\"></h2><h3 ng-switch-when=\"3\" class=\"panel-title {{::mwPanelBarController.getClass()}}\" ng-bind=\"::mwPanelBarController.getTitre()\"></h3><div ng-transclude=\"\"></div></div>");
$templateCache.put("panel-free/panel-body-view.html","<div class=\"panel-body\" ng-transclude=\"\"></div>");
$templateCache.put("panel-free/panel-free-view.html","<div class=\"panel\" ng-class=\"{\'panel-default\': mwPanelFreeController.niveau==\'1\', \'panel-primary\': mwPanelFreeController.niveau==\'2\', \'panel-success\': mwPanelFreeController.niveau==\'3\' }\" ng-transclude=\"\"></div>");
$templateCache.put("retractable/hretractable-view.html","<div class=\"mw-hrectractable row panel {{::hretractableCtrl.style}}\" ng-class=\"{\'mw-hrectractable-collapsible-open\': hretractableCtrl.open, \'mw-hrectractable-collapsible-close\': !hretractableCtrl.open}\"><button id=\"{{::hretractableCtrl.id}}-bouton\" class=\"btn panel-heading\" ng-class=\"{\'panel-heading-focus\': (hretractableCtrl.focus || hretractableCtrl.over) && !hretractableCtrl.open, \'panel-heading-focus-open\': (hretractableCtrl.focus || hretractableCtrl.over) && hretractableCtrl.open}\" ng-click=\"hretractableCtrl.toggleOpen()\" ng-focus=\"hretractableCtrl.focus = true\" ng-blur=\"hretractableCtrl.focus = false\" ng-mouseover=\"hretractableCtrl.over = true\" ng-mouseleave=\"hretractableCtrl.over = false\" aria-expanded=\"{{hretractableCtrl.open}}\" aria-controls=\"{{::hretractableCtrl.id}}-conteneur\"><span class=\"pull-right icon\" id=\"{{::hretractableCtrl.id}}-chevron\" aria-hidden=\"true\" ng-class=\"{\'itce-chevron-down\':!hretractableCtrl.open, \'itce-chevron-up\': hretractableCtrl.open}\"></span> <span id=\"{{::hretractableCtrl.id}}-titre\"></span></button><div id=\"{{::hretractableCtrl.id}}-conteneur\" class=\"panel-body col-md-12\" collapse=\"!hretractableCtrl.open\" tabindex=\"0\"><div class=\"panel-body-contenu\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("panel-edition/panel-edition-view.html","<div class=\"panel panel-edition\"><div class=\"panel-heading panel-bar\"><div class=\"col-sm-6 col-md-2 col-lg-3 pull-right\"><button class=\"mw-troncature btn btn-block btn-default\" ng-click=\"mwPanelEditionController.toggleMode()\" id=\"{{::id}}-bouton\">{{mwPanelEditionController.texteBouton}}</button></div></div><div class=\"panel-body\" ng-transclude=\"\"></div></div>");
$templateCache.put("table/table-view.html","<div class=\"{{::options.width}}\"><table class=\"table table-interactive\" id=\"{{::id}}-table\"><caption class=\"hide-a11y\" ng-show=\"{{!options.multiSelect ? true : false }}\">{{::options.caption}} - Sélection unique</caption><caption class=\"hide-a11y\" ng-show=\"{{options.multiSelect ? true : false }}\">{{::options.caption}} - Sélection multiple</caption><thead ng-attr-mw-thead-sticky=\"{{options.theadSticky.length > 0 ? options.theadSticky : undefined }}\"><tr><th class=\"col-action\" ng-show=\"options.multiSelect\" scope=\"col\"><span class=\"hide-a11y\">Sélection</span><div class=\"mw-input-check\" ng-click=\"mwTableCtrl.onMultiSelectionClick();$event.preventDefault();\"><label for=\"{{::id+\'-checkbox-header\'}}\"><span class=\"hide-a11y\">Tout sélectionner / désélectionner</span> <input id=\"{{::id+\'-checkbox-header\'}}\" type=\"checkbox\" ng-model=\"mwTableCtrl.allOrNoneChecked\" indeterminate=\"mwTableCtrl.partialSelection\"> <span class=\"icon\" ng-class=\"{\'itce-fa-check\':(mwTableCtrl.allOrNoneChecked && !mwTableCtrl.partialSelection),\'itce-minus\':(mwTableCtrl.partialSelection) }\"></span></label></div></th><th ng-repeat=\"column in options.columns\" id=\"{{::id}}-th-{{::$index}}\" scope=\"col\" class=\"{{column.cssClass}}\" ng-class=\"{\'sortable\':options.sortEnable, \'deux-boutons\':(options.filterEnable && !column.disableFilter) && options.sortEnable, \'un-bouton\':((options.filterEnable && !options.sortEnable) || (!options.filterEnable && options.sortEnable)) }\" ng-click=\"mwTableCtrl.onSortClick(column);\"><div><span class=\"title\" ng-bind=\"::column.title\"></span> <button type=\"button\" class=\"btn btn-picto-transparent btn-tri\" ng-if=\"options.sortEnable\" ng-class=\"{\'actif\':column.bind == mwTableCtrl.predicate}\"><span class=\"icon\" aria-hidden=\"true\" title=\"Trier\" ng-class=\"{\'itce-sort-amount-desc\' : (column.reserve),\'itce-sort-amount-asc\' : (!column.reserve) }\"></span> <span class=\"hide-a11y\">Trier la colonne {{::column.title}} en ordre {{column.reserve ? \"descendant\" : \"ascendant\" }}</span></button> <button type=\"button\" class=\"btn btn-picto-transparent btn-filtre\" ng-if=\"options.filterEnable && !column.disableFilter\" ng-click=\"mwTableCtrl.onClickPictoFilter($index, column.bind);$event.stopPropagation();\" ng-class=\"{\'actif\' : mwTableCtrl.filteredColumns[column.bind]}\" aria-expanded=\"{{mwTableCtrl.filteredColumns[column.bind]}}\"><span class=\"icon itce-filter\" aria-hidden=\"true\" title=\"Filter\"></span> <span class=\"hide-a11y\">Filtrer sur : {{::column.title}}</span></button></div></th><th ng-if=\"mwTableCtrl.avecLigneDetail\" aria-hidden=\"true\" role=\"presentation\" scope=\"col\"><span class=\"\" aria-hidden=\"\"></span></th></tr><tr collapse=\"!mwTableCtrl.filtrageEnCours\" ng-show=\"options.filterEnable\" class=\"mw-table-filter\"><td class=\"col-action\" ng-show=\"options.multiSelect\">&nbsp;</td><td ng-repeat=\"column in options.columns\" class=\"mw-table-bk-filter\"><input type=\"text\" mw-clear-button=\"\" id=\"{{::id}}-filter-input-{{::$index}}\" name=\"{{::id}}-filter-input-{{::$index}}\" ng-model=\"mwTableCtrl.search[column.bind]\" placeholder=\"Filtre...\" ng-change=\"mwTableCtrl.filtreChange()\" class=\"form-control table-input-filter\" ng-show=\"mwTableCtrl.filteredColumns[column.bind]\" aria-label=\"Filtre sur : {{::column.title}} (automatiquement)\"></td><td ng-if=\"mwTableCtrl.avecLigneDetail\" aria-hidden=\"true\" role=\"presentation\">&nbsp;</td></tr><tr class=\"mw-table-ligne-vide\" ng-class=\"{\'mw-table-h0\':mwTableCtrl.filteredModel.length >0}\" ng-show=\"mwTableCtrl.filteredModel.length ==0\"><td colspan=\"{{::mwTableCtrl.getNbColonne()}}\"><span>{{mwTableCtrl.getLibelleNoneElements()}}</span></td></tr></thead><tbody ng-repeat=\"mwTableRow in mwTableCtrl.filteredModel track by $index\" tabindex=\"0\" ng-attr-aria-expanded=\"{{::mwTableCtrl.isTbodyAriaExpanded(mwTableRow.expanded)}}\" ng-attr-aria-controls=\"{{::mwTableCtrl.tBodyAriaControls(mwTableRow.expanded, $index)}}\" ng-attr-id=\"{{::id}}-tbody-{{::$index}}\" ng-class=\"{\'read-only\': mwTableCtrl.readOnly && !mwTableCtrl.avecLigneDetail, \'expanded\':mwTableRow.expanded,\'selected\':mwTableRow.checked && !mwTableRow.disabled}\" ng-keydown=\"mwTableCtrl.handelKeyLigneAvecDetail(mwTableRow, $index, $event)\"><tr id=\"{{::id}}-tr-{{::$index}}\"><td class=\"col-action\" ng-show=\"options.multiSelect\"><div class=\"mw-input-check\" ng-if=\"!mwTableRow.disabledCheckbox && !mwTableRow.disabled\"><label for=\"{{::id}}\'-tr-\'{{::$index}}\'-input-check\'\"><span class=\"hide-a11y\">Sélectionner ligne {{::index}}</span> <input id=\"{{::id}}\'-tr-\'{{::$index}}\'-input-check\'\" type=\"checkbox\" ng-model=\"mwTableRow.checked\" indeterminate=\"false\" ng-change=\"mwTableCtrl.onSelectionCase(mwTableRow)\"> <span class=\"icon\" ng-class=\"{\'itce-fa-check\':mwTableRow.checked}\"></span></label></div></td><td ng-repeat=\"column in options.columns\" ng-click=\"mwTableCtrl.onClickLigne(mwTableRow, $parent.$index, $event)\" class=\"{{::column.cssClass}}\"><div ng-if=\"column.template\" ng-class=\"{\'tri-filtre-actif\': options.sortEnable && column.bind == mwTableCtrl.predicate && options.filterEnable && !column.disableFilter, \'tri-actif\': options.sortEnable && column.bind == mwTableCtrl.predicate && (!options.filterEnable || (options.filterEnable && column.disableFilter)), \'filtre-actif\': (!options.sortEnable || options.sortEnable && column.bind != mwTableCtrl.predicate) && (options.filterEnable && !column.disableFilter) }\" ng-include=\"column.template\"></div><div ng-if=\"!column.template\" ng-class=\"{\'tri-filtre-actif\': options.sortEnable && column.bind == mwTableCtrl.predicate && (options.filterEnable && !column.disableFilter), \'tri-actif\': options.sortEnable && column.bind == mwTableCtrl.predicate && (!options.filterEnable || (options.filterEnable && column.disableFilter)), \'filtre-actif\': (!options.sortEnable || options.sortEnable && column.bind != mwTableCtrl.predicate) && (options.filterEnable && !column.disableFilter) }\" ng-bind=\"mwTableRow.{{column.bind}}{{::column.filter}}\"></div></td><td class=\"col-action\" ng-if=\"mwTableCtrl.avecLigneDetail\"><button class=\"button-expand-line icon\" aria-label=\"Détails\" aria-expanded=\"{{mwTableRow.expanded}}\" ng-show=\"mwTableCtrl.getTemplateUrl(mwTableRow) && !mwTableRow.disabled\" ng-class=\"{\'disabled-button-wrapper\': mwTableRow.disabled, \'itce-chevron-up\':mwTableRow.expanded, \'itce-chevron-down\': !mwTableRow.expanded }\" ng-click=\"mwTableCtrl.onClickLigne(mwTableRow, $index, $event)\"></button></td></tr><tr ng-attr-id=\"{{::id}}-tr-{{::$index}}-detail\" class=\"ligne-detail\" ng-if=\"mwTableRow.expanded && mwTableCtrl.avecLigneDetail && mwTableCtrl.getTemplateUrl(mwTableRow)\" collapse=\"!mwTableRow.expanded\"><td colspan=\"{{::mwTableCtrl.colspan}}\" ng-attr-id=\"{{::id}}-tr-{{::$index}}-td-detail\" ng-include=\"mwTableCtrl.getTemplateUrl(mwTableRow)\"></td></tr></tbody></table><pagination id=\"{{::id}}-pagination\" ng-show=\"!mwTableCtrl.moreEnable && (mwTableCtrl.totalItems > mwTableCtrl.perPage )\" total-items=\"mwTableCtrl.totalItems\" items-per-page=\"mwTableCtrl.perPage\" ng-model=\"mwTableCtrl.currentPage\" max-size=\"mwTableCtrl.maxSize\" class=\"pagination-sm pull-right\" previous-text=\"<\" first-text=\"\" next-text=\">\" last-text=\"\" boundary-links=\"true\"></pagination></div>");
$templateCache.put("table/tr-view.html","<div>blabla</div>");
$templateCache.put("table-opefi/table-view.html","<div ng-attr-class=\"{{::options.width}}\"><table class=\"table table-interactive\" ng-attr-id=\"{{::id}}-table\"><caption class=\"hide-a11y\" ng-show=\"{{!options.multiSelect ? true : false }}\">{{::options.caption}} - Sélection unique</caption><caption class=\"hide-a11y\" ng-show=\"{{options.multiSelect ? true : false }}\">{{::options.caption}} - Sélection multiple</caption><thead ng-attr-mw-thead-sticky=\"{{options.theadSticky.length > 0 ? options.theadSticky : undefined }}\"><tr ng-attr-id=\"{{::id}}-thead-tr-titre\"><th class=\"col-action\" ng-show=\"options.multiSelect\" scope=\"col\"><span class=\"hide-a11y\">Sélection</span><div class=\"mw-input-check\" ng-click=\"mwTableCtrlv1710.onMultiSelectionClick();$event.preventDefault();\"><label for=\"{{::id+\'-checkbox-header\'}}\"><span class=\"hide-a11y\">Tout sélectionner / désélectionner</span> <input ng-attr-id=\"{{::id+\'-checkbox-header\'}}\" type=\"checkbox\" ng-model=\"mwTableCtrlv1710.allOrNoneChecked\" indeterminate=\"mwTableCtrlv1710.partialSelection\"> <span class=\"icon\" ng-class=\"{\'itce-fa-check\':(mwTableCtrlv1710.allOrNoneChecked && !mwTableCtrlv1710.partialSelection),\'itce-minus\':(mwTableCtrlv1710.partialSelection) }\"></span></label></div></th><th ng-repeat=\"column in options.columns\" id=\"{{::id}}-th-{{::$index}}\" scope=\"col\" class=\"{{column.cssClass}}\" ng-class=\"{\'sortable\':options.sortEnable, \'deux-boutons\':options.filterEnable && options.sortEnable, \'un-bouton\':((options.filterEnable && !options.sortEnable) || (!options.filterEnable && options.sortEnable)) }\" ng-click=\"mwTableCtrlv1710.onSortClick(column);\"><div class=\"row col-12\"><span class=\"title col-8\" ng-bind=\"::column.title\"></span> <button type=\"button\" class=\"btn btn-picto-transparent btn-tri col-2\" ng-if=\"options.sortEnable\" ng-class=\"{\'actif\':column.bind == mwTableCtrlv1710.predicate}\"><span class=\"icon\" aria-hidden=\"true\" title=\"Trier\" ng-class=\"{\'itce-sort-amount-desc\' : (column.reserve),\'itce-sort-amount-asc\' : (!column.reserve) }\"></span> <span class=\"hide-a11y\">Trier la colonne {{::column.title}} en ordre {{column.reserve ? \"descendant\" : \"ascendant\" }}</span></button> <button type=\"button\" class=\"btn btn-picto-transparent btn-filtre col-2\" ng-if=\"options.filterEnable && !column.disableFilter\" ng-click=\"mwTableCtrlv1710.onClickPictoFilter($index, column.bind);$event.stopPropagation();\" ng-class=\"{\'actif\' : mwTableCtrlv1710.filteredColumns[column.bind]}\" aria-expanded=\"{{mwTableCtrlv1710.filteredColumns[column.bind]}}\"><span class=\"icon itce-filter\" aria-hidden=\"true\" title=\"Filter\"></span> <span class=\"hide-a11y\">Filtrer sur : {{::column.title}}</span></button></div></th><th ng-if=\"mwTableCtrlv1710.avecLigneDetail\" aria-hidden=\"true\" role=\"presentation\" scope=\"col\"><span class=\"\" aria-hidden=\"\"></span></th></tr><tr collapse=\"!mwTableCtrlv1710.filtrageEnCours\" ng-show=\"options.filterEnable\" class=\"mw-table-filter\" ng-attr-id=\"{{::id}}-thead-tr-filtres\"><td class=\"col-action\" ng-show=\"options.multiSelect\">&nbsp;</td><td ng-repeat=\"column in options.columns\" class=\"mw-table-bk-filter\"><input type=\"text\" mw-clear-button=\"\" ng-attr-id=\"{{::id}}-filter-input-{{::$index}}\" name=\"{{::id}}-filter-input-{{::$index}}\" ng-model=\"mwTableCtrlv1710.search[column.bind]\" placeholder=\"Filtre...\" ng-change=\"mwTableCtrlv1710.filtreChange()\" class=\"form-control table-input-filter\" ng-show=\"mwTableCtrlv1710.filteredColumns[column.bind]\" aria-label=\"Filtre sur : {{::column.title}} (automatiquement)\"></td><td ng-if=\"mwTableCtrlv1710.avecLigneDetail\" aria-hidden=\"true\" role=\"presentation\">&nbsp;</td></tr><tr class=\"mw-table-ligne-vide\" ng-class=\"{\'mw-table-h0\':mwTableCtrlv1710.filteredModel.length >0}\" ng-show=\"mwTableCtrlv1710.filteredModel.length ==0\"><td colspan=\"{{::mwTableCtrlv1710.getNbColonne()}}\"><span>{{mwTableCtrlv1710.getLibelleNoneElements()}}</span></td></tr></thead><tbody ng-repeat=\"mwTableRow in mwTableCtrlv1710.filteredModel track by $index\" tabindex=\"0\" ng-attr-aria-expanded=\"{{::mwTableCtrlv1710.isTbodyAriaExpanded(mwTableCtrlv1710.isItemExpanded(mwTableRow))}}\" ng-attr-aria-controls=\"{{::mwTableCtrlv1710.tBodyAriaControls($index)}}\" ng-attr-id=\"{{::id}}-tbody-{{::$index}}\" ng-class=\"{\'expanded\':mwTableCtrlv1710.isItemExpanded(mwTableRow),\'selected\':mwTableCtrlv1710.isItemSelected(mwTableRow) && !mwTableCtrlv1710.isItemDisabled(mwTableRow)}\" ng-keydown=\"mwTableCtrlv1710.handelKeyLigneAvecDetail(mwTableRow, $index, $event)\"><tr ng-attr-id=\"{{::id}}-tr-{{::$index}}\"><td class=\"col-action\" ng-show=\"options.multiSelect\"><div class=\"mw-input-check\" ng-if=\"!mwTableCtrlv1710.isCheckboxDisabled(mwTableRow) && !mwTableCtrlv1710.isItemDisabled(mwTableRow)\"><label for=\"{{::id}}\'-tr-\'{{::$index}}\'-input-check\'\"><span class=\"hide-a11y\">Sélectionner ligne {{::index}}</span> <input ng-attr-id=\"{{::id}}\'-tr-\'{{::$index}}\'-input-check\'\" type=\"checkbox\" ng-model=\"mwTableRow.checked\" indeterminate=\"false\" ng-change=\"mwTableCtrlv1710.onSelectionCase(mwTableRow,mwTableRow.checked )\"> <span class=\"icon\" ng-class=\"{\'itce-fa-check\':mwTableRow.checked}\"></span></label></div></td><td ng-repeat=\"column in options.columns\" ng-click=\"mwTableCtrlv1710.onClickLigne(mwTableRow, $parent.$index, $event)\" ng-attr-class=\"{{::column.cssClass}}\"><div ng-if=\"column.template\" ng-class=\"{\'tri-filtre-actif\': options.sortEnable && column.bind == mwTableCtrlv1710.predicate && (options.filterEnable && !column.disableFilter), \'tri-actif\': options.sortEnable && column.bind == mwTableCtrlv1710.predicate && (!options.filterEnable || (options.filterEnable && column.disableFilter)), \'filtre-actif\': (!options.sortEnable || options.sortEnable && column.bind != mwTableCtrlv1710.predicate) && (options.filterEnable && !column.disableFilter) }\" ng-include=\"column.template\"></div><div ng-if=\"!column.template\" ng-class=\"{\'tri-filtre-actif\': options.sortEnable && column.bind == mwTableCtrlv1710.predicate && (options.filterEnable && !column.disableFilter), \'tri-actif\': options.sortEnable && column.bind == mwTableCtrlv1710.predicate && (!options.filterEnable || (options.filterEnable && column.disableFilter)), \'filtre-actif\': (!options.sortEnable || options.sortEnable && column.bind != mwTableCtrlv1710.predicate) && (options.filterEnable && !column.disableFilter) }\" ng-bind=\"mwTableRow.{{column.bind}}{{::column.filter}}\"></div></td><td class=\"col-action\" ng-if=\"mwTableCtrlv1710.avecLigneDetail\"><button class=\"icon\" aria-label=\"Détails\" aria-expanded=\"{{mwTableCtrlv1710.isItemExpanded(mwTableRow)}}\" ng-if=\"!mwTableCtrlv1710.isItemDisabled(mwTableRow)\" ng-class=\"{\'disabled-button-wrapper\': mwTableRow.disabled, \'itce-chevron-up\':mwTableCtrlv1710.isItemExpanded(mwTableRow), \'itce-chevron-down\': !mwTableCtrlv1710.isItemExpanded(mwTableRow) }\" ng-click=\"mwTableCtrlv1710.onClickLigne(mwTableRow, $index, $event)\"></button></td></tr><tr ng-attr-id=\"{{::id}}-tr-{{::$index}}-detail\" class=\"ligne-detail\" ng-if=\"mwTableCtrlv1710.isItemExpanded(mwTableRow)\" collapse=\"!mwTableCtrlv1710.isItemExpanded(mwTableRow)\"><td colspan=\"{{::mwTableCtrlv1710.colspan}}\" ng-attr-id=\"{{::id}}-tr-{{::$index}}-td-detail\" ng-include=\"options.templateUrl\"></td></tr></tbody></table><pagination ng-attr-id=\"{{::id}}-pagination\" ng-show=\"!mwTableCtrlv1710.moreEnable && (mwTableCtrlv1710.totalItems > mwTableCtrlv1710.perPage )\" total-items=\"mwTableCtrlv1710.totalItems\" items-per-page=\"mwTableCtrlv1710.perPage\" ng-model=\"mwTableCtrlv1710.currentPage\" max-size=\"mwTableCtrlv1710.maxSize\" class=\"pagination-sm pull-right\" previous-text=\"<\" first-text=\"<<\" next-text=\">\" last-text=\">>\" boundary-links=\"true\"></pagination></div>");
$templateCache.put("table-opefi/tr-view.html","<div>blabla</div>");
$templateCache.put("synthese-erreurs/synthese-erreurs-view.html","<div class=\"synthese-erreurs alert alert-warning\" ng-class=\"{\'synthese-erreurs-complete\': estSyntheseComplete, \'hide-a11y\' : nbErreurs === 0}\" tabindex=\"-1\" role=\"alert\" accessibility=\"\"><div class=\"synthese-titre\"><span class=\"icon itce-information-circle\" aria-hidden=\"true\"></span> <span aria-hidden=\"{{nbErreurs === 0}}\"></span></div><div ng-transclude=\"\"></div><button class=\"btn-link btn-synthese-error voir-tout\" id=\"voir-tout-synthese-erreurs\" ng-if=\"nbErreurs > 3\" ng-click=\"plierDeplier()\">{{estSyntheseComplete ? \'Voir moins\' : \'Voir tout\'}}</button></div>");
$templateCache.put("totem/chapitre-view.html","<div class=\"totem-chapitre\"><div class=\"titre-chapitre\" ng-bind=\"component.titre\"></div><ul><li ng-repeat=\"chapitre in component.list track by $index\"><mw-totem-sous-chapitre ng-if=\"::chapitre.isSousChapitre()\" component=\"chapitre\"></mw-totem-sous-chapitre><mw-totem-page ng-if=\"::chapitre.isPage()\" component=\"chapitre\"></mw-totem-page><mw-totem-section ng-if=\"::chapitre.isSection()\" component=\"chapitre\"></mw-totem-section></li></ul></div>");
$templateCache.put("totem/page-view.html","<div class=\"totem-page\"><a class=\"lien-page\" href=\"\" id=\"lien-page-{{::component.target | mwNormalizeId}}\" ng-if=\"!totemPageCtrl.isPageActive(component)\" ng-click=\"totemPageCtrl.setActivePage(component);\" ng-bind=\"component.titre\" ng-class=\"{\'ind-completude\':!component.checkIsComplete(), \'avec-sections\': component.list.length > 0}\"></a> <span class=\"lien-page pageActive\" ng-if=\"totemPageCtrl.isPageActive(component)\" ng-bind=\"component.titre\" ng-class=\"{\'ind-completude\':!component.checkIsComplete(), \'avec-sections\': component.list.length > 0}\"></span><ul ng-if=\"component.list.length > 0\"><li ng-repeat=\"child in component.list track by $index\" class=\"totem-section\"><mw-totem-section group=\"component\" link=\"child\"></mw-totem-section></li></ul></div>");
$templateCache.put("totem/section-view.html","<a href=\"javascript:void(0)\" ng-bind=\"link.titre\" id=\"totem-section-{{link.target}}\" ng-click=\"totemSectionCtrl.setActiveSection(group,link);$event.stopPropagation();\" ng-class=\"{\'ind-completude\':!link.checkIsComplete(), \'sectionActive\':totemSectionCtrl.isSectionActive(link)}\" class=\"lien-section\"></a>");
$templateCache.put("totem/sous-chapitre-view.html","<div class=\"totem-sous-chapitre\" ng-class=\"{\'active\':component.toggle}\"><button id=\"totem-bouton-{{::component.titre | mwNormalizeId}}\" class=\"bouton-sous-chapitre btn-block\" ng-click=\"totemSousChapitreCtrl.onClick(component)\" aria-expanded=\"{{component.toggle}}\" aria-controls=\"totem-liste-pages-{{::component.titre | mwNormalizeId}}\"><span ng-bind=\"component.titre\" ng-class=\"{\'ind-completude\':!component.checkIsComplete()}\"></span> <span class=\"icon push-right\" ng-class=\"{\'itce-chevron-up\':component.toggle, \'itce-chevron-down\': !component.toggle}\" aria-hidden=\"true\"></span></button><ul id=\"totem-liste-pages-{{::component.titre | mwNormalizeId}}\" class=\"panel-contextual liste-pages\" ng-show=\"component.toggle\" aria-hidden=\"{{!component.toggle}}\"><li ng-repeat=\"child in component.list track by $index\"><mw-totem-page ng-if=\"::child.isPage()\" component=\"child\"></mw-totem-page><mw-totem-section ng-if=\"::child.isSection()\" component=\"child\"></mw-totem-section></li></ul></div>");
$templateCache.put("totem/totem-contenu.html","<main role=\"main\" class=\"content\"><div class=\"sidebar col-fixed-200\" id=\"mw-sidebar\"><nav class=\"totem-accessible totem-old\" role=\"navigation\"><ul><li ng-repeat=\"component in navigations track by component.titre\"><mw-totem-chapitre ng-if=\"::component.isChapitre()\" component=\"component\"></mw-totem-chapitre><mw-totem-sous-chapitre ng-if=\"::component.isSousChapitre()\" component=\"component\"></mw-totem-sous-chapitre><mw-totem-page ng-if=\"::component.isPage()\" component=\"component\"></mw-totem-page><mw-totem-section ng-if=\"::component.isSection()\" component=\"component\"></mw-totem-section></li></ul></nav><div class=\"bottom-totem\"></div></div><mw-zone-travail class=\"zone-travail col-lg-12 col-md-12 col-sm-12 col-offset-200\" role=\"main\"><section ng-transclude=\"\" class=\"inside\"></section><div ng-show=\"enabledscroll\" class=\"scroller-indicator animate-show icon itce-arrow-down\" aria-hidden=\"true\"></div></mw-zone-travail></main>");
$templateCache.put("volet/volet-view.html","<div class=\"volet\" ng-class=\"{ \'open\': opened, \'over\': over, \'left\': position == \'left\' || position == \'gauche\', \'right\': position == \'right\' ||position == \'droite\', \'top\': position == \'top\' || position == \'haut\', \'bottom\': position == \'bottom\' || position == \'bas\' || !position }\"><div class=\"volet-container\"><div class=\"volet-content\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("volet-proposition/volet-proposition-view.html","<div class=\"propositions\"><button class=\"text-left mw-btn-link bouton-volet-proposition\" id=\"bouton-volet-proposition-{{::id}}\" type=\"button\" ng-click=\"open = ! open\" aria-expanded=\"{{open}}\" aria-controls=\"contenu-volet-proposition-{{id}}\"><span ng-bind=\"titre || (! affichageCompteur || nombre >= 2 || nombre <= -2 ? \'Propositions\' : \'Proposition\')\"></span> <span ng-if=\"affichageCompteur\">({{ nombre || 0 }})</span> <span class=\"icon pull-right\" aria-hidden=\"true\" ng-class=\"{ \'itce-chevron-down\': !open, \'itce-chevron-up\': open }\"></span> <span ng-bind=\"texte\"></span></button><div ng-transclude=\"\" id=\"contenu-volet-proposition-{{id}}\" ng-show=\"open\" aria-hidden=\"{{!open}}\" ng-style=\"{ \'height\': hauteurVoletContenu}\"></div></div>");
$templateCache.put("zonning/contenu.html","<mw-zone-travail class=\"zone-travail col-lg-12 col-md-12 col-sm-12\"><section ng-transclude=\"\" class=\"inside\"></section><div ng-show=\"enabledscroll\" class=\"scroller-indicator animate-show icon itce-arrow-down\" aria-hidden=\"true\"></div></mw-zone-travail>");
$templateCache.put("zonning/groupe-travail.html","<div ng-show=\"isActiveGroup(target)\"><div ng-transclude=\"\"></div><div class=\"bottom-groupe-travail\"></div></div>");
$templateCache.put("zonning/nav-contenu.html","<main role=\"main\" class=\"content\"><div class=\"navcontenu-sidebar\" id=\"mw-sidebar\"><nav class=\"nav-secondaire\" role=\"navigation\"><div ng-repeat=\"group in navContenu.totem track by group.target\" ng-class=\"{\'grpActif\':navContenu.isGroupActive(group)}\"><h5 ng-class=\"{\'grpActif\':navContenu.isGroupActive(group)}\"><span ng-bind=\"::group.titre\"></span></h5><ul class=\"nav\" target=\"{{::group.target}}\"><li ng-repeat=\"link in group.list track by link.target\" ng-class=\"{\'grpActif\':navContenu.isGroupActive(group)}\"><a target=\"#{{::link.target}}\" title=\"{{::link.titre}}\" id=\"{{::group.target}}-{{::link.target}}\" ng-bind=\"::link.titre\" ng-click=\"navContenu.setActive(group,link)\" ng-class=\"{\'ind-completude\':!link.isComplete,\'active\':navContenu.isActive(link),\'grpActif\':navContenu.isGroupActive(group)}\"></a></li></ul></div></nav></div><mw-zone-travail class=\"zone-travail col-lg-12 col-md-12 col-sm-12 col-offset-200\" role=\"main\"><section ng-transclude=\"\" class=\"inside\"></section><div ng-show=\"enabledscroll\" class=\"scroller-indicator animate-show icon itce-arrow-down\" aria-hidden=\"true\"></div></mw-zone-travail></main>");
$templateCache.put("panel-action/panel-action-view.html","<div class=\"panel-action\"><div class=\"panel-action-body\" ng-transclude=\"\"></div><span class=\"btn btn-success icon {{iconName}}\"></span></div>");
$templateCache.put("mw-tuile/mw-tuile-action/mw-tuile-action-view.html","<button class=\"tuile tuile-action\"><span class=\"icon {{ icone }}\" aria-hidden=\"true\"></span> <span class=\"tuile-ligne\">{{ ::texte }}</span></button>");
$templateCache.put("mw-tuile/mw-tuile-editable/mw-tuile-editable-view.html","<div class=\"tuile\" ng-keydown=\"actionClavier($event)\" ng-click=\"onModify()\"><div class=\"tuile-contenu\" id=\"tuile-contenu-{{indiceDansListe}}\" ng-transclude=\"\"></div><button class=\"tuile-btn-modifier\" aria-describedby=\"tuile-contenu-{{indiceDansListe}}\">Modifier</button> <button ng-show=\"isDeletable\" class=\"tuile-btn-sup icon itce-trash\" ng-click=\"$event.stopPropagation();onDelete();\" aria-hidden=\"{{!isDeletable}}\" aria-label=\"Supprimer\" aria-describedby=\"tuile-contenu-{{indiceDansListe}}\"></button></div>");
$templateCache.put("mw-tuile/mw-tuile-standard/mw-tuile-standard-view.html","<div class=\"mw-tuile-handles\" ng-class=\"{\'edition\':mwTuileStandardController.modeEdition ,\'no-edition\':!mwTuileStandardController.modeEdition}\"><div ng-show=\"mwTuileStandardController.modeEdition\"><div class=\"mw-tuile-backdrop\" ng-disabled=\"isDisabled\"></div><button id=\"{{mwTuileStandardController.id}}-action-1\" class=\"mw-tuile-action mw-tuile-action1 icon {{config.pictoAction1}}\" ng-show=\"config.pictoAction1.length>0\" ng-click=\"mwTuileStandardController.onAction(1,object);$event.stopPropagation();\" ng-keydown=\"mwTuileStandardController.keydownSurAction($event, 1,object)\" aria-describedby=\"{{mwTuileStandardController.id}}-conteneur\" ng-disabled=\"isDisabled\"><p class=\"hide-a11y\" aria-live=\"assertive\">{{config.nomAction1}}</p></button> <button id=\"{{mwTuileStandardController.id}}-action-2\" class=\"mw-tuile-action mw-tuile-action2 icon {{config.pictoAction2}}\" ng-show=\"config.pictoAction2.length>0\" ng-click=\"mwTuileStandardController.onAction(2,object);$event.stopPropagation();\" ng-keydown=\"mwTuileStandardController.keydownSurAction($event, 2,object)\" aria-describedby=\"{{mwTuileStandardController.id}}-conteneur\" ng-disabled=\"isDisabled\"><p class=\"hide-a11y\" aria-live=\"assertive\">{{config.nomAction2}}</p></button> <button id=\"{{mwTuileStandardController.id}}-action-gauche\" class=\"mw-tuile-action icon itce-arrow-left\" ng-class=\"{\'mw-tuile-action4\':config.taille==\'sm\',\'mw-tuile-action4\':config.taille==\'md\',\'mw-tuile-action-gauche\':config.taille==\'lg\'}\" ng-show=\"config.isSortable\" ng-click=\"mwTuileStandardController.onAction(6, object, listeObject);$event.stopPropagation();\" ng-keydown=\"mwTuileStandardController.keydownSurAction($event, 6, object, listeObject)\" aria-describedby=\"{{mwTuileStandardController.id}}-conteneur\" ng-disabled=\"isDisabled\"><p class=\"hide-a11y\" aria-live=\"assertive\">Flèche gauche</p></button> <button id=\"{{mwTuileStandardController.id}}-action-droite\" class=\"mw-tuile-action icon itce-arrow-right\" ng-class=\"{\'mw-tuile-action5\':config.taille==\'sm\', \'mw-tuile-action5\':config.taille==\'md\',\'mw-tuile-action-droite\':config.taille==\'lg\'}\" ng-show=\"config.isSortable\" ng-click=\"mwTuileStandardController.onAction(5, object,listeObject);$event.stopPropagation();\" ng-keydown=\"mwTuileStandardController.keydownSurAction($event, 5, object,listeObject)\" aria-describedby=\"{{mwTuileStandardController.id}}-conteneur\" ng-disabled=\"isDisabled\"><p class=\"hide-a11y\" aria-live=\"assertive\">Flèche droite</p></button> <button id=\"{{mwTuileStandardController.id}}-action-4\" class=\"mw-tuile-action mw-tuile-action4 icon {{config.pictoAction4}}\" ng-show=\"config.pictoAction4.length>0 && (config.taille==\'lg\' || ((config.taille==\'sm\' || config.taille==\'md\') && !config.isSortable))\" ng-click=\"mwTuileStandardController.onAction(4,object);$event.stopPropagation();\" ng-keydown=\"mwTuileStandardController.keydownSurAction($event, 4,object)\" aria-describedby=\"{{mwTuileStandardController.id}}-conteneur\" ng-disabled=\"isDisabled\"><p class=\"hide-a11y\" aria-live=\"assertive\">{{config.nomAction4}}</p></button> <button id=\"{{mwTuileStandardController.id}}-action-3\" class=\"mw-tuile-action mw-tuile-action3 icon {{config.pictoAction3}}\" ng-show=\"config.pictoAction3.length>0 && (config.taille==\'lg\' || ((config.taille==\'sm\' || config.taille==\'md\')))\" ng-click=\"mwTuileStandardController.onAction(3,object);$event.stopPropagation();\" ng-keydown=\"mwTuileStandardController.keydownSurAction($event, 3,object)\" aria-describedby=\"{{mwTuileStandardController.id}}-conteneur\" ng-disabled=\"isDisabled\"><p class=\"hide-a11y\" aria-live=\"assertive\">{{config.nomAction3}}</p></button></div><button class=\"mw-tuile-bloc {{couleur}}\" ng-class=\"{\'mw-tuile-avec-marquage\': avecMarquage==true,\'edition\':mwTuileStandardController.modeEdition, \'mw-tuile-filet-dotted\':typeFiletMarquage==\'dotted\', \'mw-marquage-sm\':config.taille==\'sm\', \'mw-marquage-md\':config.taille==\'md\',\'mw-marquage-lg\':config.taille==\'lg\', \'mw-troncature-multiline\': titre && !ligne1 && !ligne2 && !ligne3 && !ligne4, \'mw-troncature\': !titre || (titre && (ligne1 || ligne2 || ligne3 || ligne4))}\" ng-attr-tabindex=\"{{mwTuileStandardController.tabIndex}}\" ng-click=\"mwTuileStandardController.modeEdition || mwTuileStandardController.clickSurTuile(object)\" ng-keydown=\"mwTuileStandardController.keyDownSurTuile($event)\" ng-disabled=\"isDisabled\"><div id=\"{{mwTuileStandardController.id}}-conteneur\" class=\"mw-tuile\" ng-class=\"{\'mw-tuile-sm\':config.taille==\'sm\',\'mw-tuile-md\':config.taille==\'md\',\'mw-tuile-lg\':config.taille==\'lg\'}\"><div class=\"\"><span class=\"mw-tuile-marqueur mw-tuile-marqueur-texte\" ng-bind=\"texteMarquage\" ng-show=\"avecMarquage && config.typeMarquage==\'texte\'\"></span> <span class=\"mw-tuile-marqueur mw-tuile-marqueur-picto icon {{config.pictoMarquage}}\" ng-show=\"avecMarquage && config.typeMarquage==\'picto\'\"></span> <span class=\"mw-tuile-marqueur\" ng-class=\"{\'mw-tuile-marqueur-none-sm\':config.taille==\'sm\',\'mw-tuile-marqueur-none-md\':config.taille==\'md\',\'mw-tuile-marqueur-none-lg\':config.taille==\'lg\'}\" ng-show=\"!avecMarquage || (avecMarquage && config.typeMarquage==\'none\')\"></span> <span class=\"mw-tuile-picto icon {{::picto}}\" ng-class=\"{\'mw-tuile-picto-md\':config.taille==\'md\',\'mw-tuile-picto-lg\':config.taille==\'lg\'}\" ng-show=\"(config.taille == \'md\' || config.taille == \'lg\') && picto.length>0\"></span> <span class=\"mw-tuile-titre\" ng-bind=\"titre\"></span> <span ng-bind=\"ligne1\" ng-class=\"{\'mw-troncature-multiline-tuile\': !mwTuileStandardController.lineAfter(\'ligne1\'), \'mw-troncature\': mwTuileStandardController.lineAfter(\'ligne1\')}\"></span> <span ng-bind=\"ligne2\" ng-class=\"{\'mw-troncature-multiline-tuile\': !mwTuileStandardController.lineAfter(\'ligne2\'), \'mw-troncature\': mwTuileStandardController.lineAfter(\'ligne2\')}\" ng-show=\"(config.taille == \'md\' || config.taille == \'lg\')\"></span> <span ng-bind=\"ligne3\" ng-class=\"{\'mw-troncature-multiline-tuile\': !mwTuileStandardController.lineAfter(\'ligne3\'), \'mw-troncature\': mwTuileStandardController.lineAfter(\'ligne3\')}\" ng-show=\"(config.taille == \'md\' || config.taille == \'lg\')\" ng-hide=\"picto.length>0\"></span> <span ng-bind=\"ligne4\" ng-class=\"{\'mw-troncature-multiline-tuile\': !mwTuileStandardController.lineAfter(\'ligne4\'), \'mw-troncature\': mwTuileStandardController.lineAfter(\'ligne4\')}\" ng-show=\"(config.taille == \'md\' || config.taille == \'lg\')\" ng-hide=\"picto.length>0\"></span></div></div><div ng-transclude=\"\"></div></button></div>");
$templateCache.put("mw-tuile/mw-tuile-standard-btn/mw-tuile-standard-btn-view.html","<div class=\"mw-tuile-handles\" ng-class=\"{\'edition\':mwTuileStandardController.modeEdition ,\'no-edition\':!mwTuileStandardController.modeEdition}\"><button class=\"mw-tuile-bloc couleur-vert mw-tuile-ajout-btn\"><div class=\"mw-tuile mw-tuile-bouton couleur-vert\" ng-class=\"{\'mw-tuile-sm\':taille==\'sm\', \'mw-tuile-md\':taille==\'md\',\'mw-tuile-lg\':taille==\'lg\'}\"><span class=\"icon {{ picto }}\" aria-hidden=\"true\"></span> <span>{{ texte }}</span></div></button></div>");
$templateCache.put("navigation/v1/nav-chapitre-view.html","<div class=\"totem-chapitre\"><div id=\"totem-titre-{{::id}}\" class=\"titre-chapitre\" ng-bind=\"component.titre\"></div><ul aria-labelledby=\"totem-titre-{{::id}}\"><li ng-repeat=\"chapitre in component.list track by $index\"><mw-navigation-sous-chapitre ng-if=\"chapitre.isSousChapitre()\" component=\"chapitre\" parent-id=\"\"></mw-navigation-sous-chapitre><mw-navigation-page ng-if=\"chapitre.isPage()\" component=\"chapitre\"></mw-navigation-page><mw-navigation-section ng-if=\"chapitre.isSection()\" component=\"chapitre\"></mw-navigation-section></li></ul></div>");
$templateCache.put("navigation/v1/nav-page-view.html","<div class=\"totem-page\"><a class=\"lien-page\" id=\"mw-navigation-page-lien-{{::component.target | mwNormalizeId}}\" href=\"#{{component.target}}\" ng-click=\"navigationPageCtrl.setActivePage(component)\" ng-bind=\"::component.titre\" ng-class=\"{\'pageActive\':navigationPageCtrl.isPageActive(component), \'ind-completude\':!component.checkIsComplete(), \'avec-sections\': component.list.length > 0, \'ind-fiabilisation\':!component.checkIsFiabilise() && component.checkIsComplete()}\"></a><ul ng-if=\"component.list.length > 0\"><li ng-repeat=\"child in component.list track by $index\" class=\"totem-section\"><mw-navigation-section group=\"component\" link=\"child\"></mw-navigation-section></li></ul></div>");
$templateCache.put("navigation/v1/nav-section-view.html","<a href=\"javascript:void(0)\" ng-bind=\"link.titre\" id=\"totem-section-{{link.target}}\" ng-click=\"navigationSectionCtrl.setActiveSection(group,link, scroll)\" ng-class=\"{\'ind-completude\':!link.checkIsComplete(), \'sectionActive\':navigationSectionCtrl.isSectionActive(link), \'ind-fiabilisation\':!link.checkIsFiabilise() && link.checkIsComplete()}\" class=\"lien-section\">data-target=\"link.target\"</a>");
$templateCache.put("navigation/v1/nav-sous-chapitre-view.html","<div class=\"totem-sous-chapitre\" ng-class=\"{\'active\':component.toggle}\"><button id=\"totem-bouton-{{::component.titre | mwNormalizeId}}\" class=\"bouton-sous-chapitre btn-block\" ng-click=\"navigationSousChapitreCtrl.onClick(component)\" aria-expanded=\"{{component.toggle}}\" aria-controls=\"totem-liste-pages-{{::component.titre | mwNormalizeId}}\"><span ng-bind=\"component.titre\"></span> <span ng-class=\"{\'ind-completude\':!component.checkIsComplete()}\"></span> <span class=\"icon push-right\" ng-class=\"{\'itce-chevron-up\':component.toggle, \'itce-chevron-down\': !component.toggle}\" aria-hidden=\"true\"></span></button><ul id=\"totem-liste-pages-{{::component.titre | mwNormalizeId}}\" class=\"panel-contextual liste-pages\" ng-show=\"component.toggle\" aria-hidden=\"{{!component.toggle}}\"><li ng-repeat=\"child in component.list track by $index\"><mw-navigation-page ng-if=\"::child.isPage()\" component=\"child\"></mw-navigation-page><mw-navigation-section ng-if=\"::child.isSection()\" component=\"child\"></mw-navigation-section></li></ul></div>");
$templateCache.put("navigation/v1/navigation-view.html","<nav class=\"totem-accessible\" role=\"navigation\"><ul><li ng-repeat=\"component in navigations track by component.titre\"><mw-navigation-chapitre ng-if=\"::component.isChapitre()\" component=\"component\"></mw-navigation-chapitre><mw-navigation-sous-chapitre ng-if=\"::component.isSousChapitre()\" component=\"component\"></mw-navigation-sous-chapitre><mw-navigation-page ng-if=\"::component.isPage()\" component=\"component\"></mw-navigation-page><mw-navigation-section ng-if=\"::component.isSection()\" component=\"component\"></mw-navigation-section></li></ul></nav>");
$templateCache.put("navigation/v2/nav-chapitre-v2-view.html","<div class=\"totem-chapitre totem-chapitre-v2\"><div id=\"totem-titre-{{::id}}\" class=\"titre-chapitre\" ng-bind=\"component.titre\"></div><ul aria-labelledby=\"totem-titre-{{::id}}\"><li ng-repeat=\"chapitre in component.list track by $index\"><mw-navigation-sous-chapitre-v2 ng-if=\"chapitre.isSousChapitre()\" scroll=\"scroll\" component=\"chapitre\" parent-id=\"\"></mw-navigation-sous-chapitre-v2><mw-navigation-page-v2 ng-if=\"chapitre.isPage()\" scroll=\"scroll\" component=\"chapitre\"></mw-navigation-page-v2><mw-navigation-section ng-if=\"chapitre.isSection()\" scroll=\"scroll\" component=\"chapitre\"></mw-navigation-section></li></ul></div>");
$templateCache.put("navigation/v2/nav-page-v2-view.html","<div class=\"totem-page totem-page-v2\"><a class=\"lien-page\" id=\"mw-navigation-page-lien-{{::component.target | mwNormalizeId}}\" href=\"#{{component.target}}\" ng-click=\"navigationPageCtrl.setActivePage(component)\" ng-bind=\"component.titre\" ng-class=\"{\'pageActive\':navigationPageCtrl.isPageActive(component), \'ind-completude\':!component.checkIsComplete(), \'avec-sections\': component.list.length > 0, \'ind-fiabilisation\':!component.checkIsFiabilise() && component.checkIsComplete()}\"></a><ul ng-if=\"component.list.length > 0\"><li ng-repeat=\"child in component.list track by $index\" class=\"totem-section\"><mw-navigation-section scroll=\"scroll\" group=\"component\" link=\"child\" ng-if=\"child.typeComponent === 3\"></mw-navigation-section></li></ul><div ng-if=\"component.list.length > 0\"><div ng-repeat=\"child in component.list\" ng-style=\"{\'padding\':($first ?\'5px 0px\':\'0px\')}\"><div ng-if=\"child.typeComponent === 2\"><a class=\"lien-page\" id=\"mw-navigation-page-lien-{{::child.target | mwNormalizeId}}\" href=\"#{{child.target}}\" ng-click=\"navigationPageCtrl.setActivePage(child)\" ng-bind=\"child.titre\" ng-class=\"{\'pageActive\':navigationPageCtrl.isPageActive(child), \'ind-completude\':!child.checkIsComplete(), \'avec-sections\': child.list.length > 0, \'ind-fiabilisation\':!child.checkIsFiabilise() && child.checkIsComplete()}\"></a></div></div></div></div>");
$templateCache.put("navigation/v2/nav-sous-chapitre-v2-view.html","<div class=\"totem-sous-chapitre totem-sous-chapitre-v2\" ng-class=\"{\'active\':component.toggle}\"><button id=\"totem-bouton-{{::component.titre | mwNormalizeId}}\" class=\"bouton-sous-chapitre btn-block\" ng-click=\"navigationSousChapitreCtrl.onClick(component)\" aria-expanded=\"{{component.toggle}}\" aria-controls=\"totem-liste-pages-{{::component.titre | mwNormalizeId}}\"><span ng-bind=\"component.titre\"></span> <span ng-class=\"{\'ind-completude\':!component.checkIsComplete()}\"></span> <span class=\"icon push-right\" ng-class=\"{\'itce-chevron-up\':component.toggle, \'itce-chevron-down\': !component.toggle}\" aria-hidden=\"true\"></span></button><ul id=\"totem-liste-pages-{{::component.titre | mwNormalizeId}}\" class=\"panel-contextual liste-pages\" ng-show=\"component.toggle\" aria-hidden=\"{{!component.toggle}}\"><li ng-repeat=\"child in component.list track by $index\"><mw-navigation-page-v2 ng-if=\"::child.isPage()\" scroll=\"scroll\" component=\"child\"></mw-navigation-page-v2><mw-navigation-section ng-if=\"::child.isSection()\" scroll=\"scroll\" component=\"child\"></mw-navigation-section></li></ul></div>");
$templateCache.put("navigation/v2/navigation-v2-view.html","<nav class=\"totem-accessible totem-accessible-v2\" role=\"navigation\" ng-class=\"{\'mw-nav-backdrop\': scrollEnCours}\"><ul><li ng-repeat=\"component in navigations track by component.titre\"><mw-navigation-chapitre-v2 scroll=\"scroll\" ng-if=\"::component.isChapitre()\" component=\"component\"></mw-navigation-chapitre-v2><mw-navigation-sous-chapitre-v2 scroll=\"scroll\" ng-if=\"::component.isSousChapitre()\" component=\"component\"></mw-navigation-sous-chapitre-v2><mw-navigation-page-v2 scroll=\"scroll\" ng-if=\"::component.isPage()\" component=\"component\"></mw-navigation-page-v2><mw-navigation-section scroll=\"scroll\" ng-if=\"::component.isSection()\" component=\"component\"></mw-navigation-section></li></ul></nav>");
$templateCache.put("typeahead/template/typeahead-popup.html","<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+\'px\', left: position().left+\'px\'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\"><li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\"><div uib-typeahead-match=\"\" index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div></li><p class=\"hide-a11y\" aria-live=\"assertive\">{{matches.length}} résultats trouvés, utiliser les flèches haut et bas pour les parcourir.</p></ul>");
$templateCache.put("ui-select/bootstrap/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content dropdown-menu has-feedback\" role=\"listbox\" ng-show=\"$select.items.length > 0\"><li class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\"><div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\"></div><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\"></div><div id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\"><button type=\"button\" class=\"ui-select-choices-row-inner\" href=\"javascript:void(0)\"></button></div></li></ul>");
$templateCache.put("ui-select/bootstrap/match.tpl.html","<div class=\"ui-select-match\" ng-hide=\"$select.open\" ng-disabled=\"$select.disabled\" ng-class=\"{\'btn-default-focus\':$select.focus}\"><span tabindex=\"-1\" class=\"btn form-control ui-select-toggle\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" aria-expanded=\"{{$select.open}}\" style=\"outline: 0;\"><span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span> <span class=\"caret pull-right\" ng-click=\"$select.toggle($event)\" aria-hidden=\"true\"></span> <button ng-show=\"$select.allowClear && !$select.isEmpty()\" type=\"button\" class=\"adobe-blank form-control-icon resetbt ui-select-allow-clear\" ng-click=\"$select.clear($event)\" aria-label=\"Effacer\"><span ng-mousedown=\"reset()\" aria-hidden=\"true\" class=\"myanimate icon itce-times-circle\"></span> <span class=\"adobe-blank ng-binding\">Effacer</span></button></span></div>");
$templateCache.put("ui-select/bootstrap/select.tpl.html","<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\"><div class=\"ui-select-match\"></div><input type=\"text\" mw-clear-button=\"\" autocomplete=\"off\" tabindex=\"-1\" aria-expanded=\"true\" aria-label=\"Filtrer\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"form-control ui-select-search\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-show=\"$select.searchEnabled && $select.open\"><p class=\"hide-a11y\" aria-live=\"assertive\" aria-atomic=\"true\" aria-hidden=\"{{!$select.open}}\">{{$select.items.length}} résultats trouvés.</p><div class=\"ui-select-choices\"></div></div>");
$templateCache.put("tabs/template/tabs/tab.html","<li ng-class=\"{active: active, disabled: disabled}\" role=\"presentation\"><a href=\"\" ng-click=\"select()\" aria-selected=\"{{!!active}}\" role=\"tab\" tab-heading-transclude=\"\">{{heading}}</a></li>");
$templateCache.put("tabs/template/tabs/tabset.html","<div><ul class=\"nav nav-{{type || \'tabs\'}}\" ng-class=\"{\'nav-stacked\': vertical, \'nav-justified\': justified}\" ng-transclude=\"\" role=\"tablist\"></ul><div class=\"tab-content\"><div class=\"tab-pane\" role=\"tabpanel\" ng-repeat=\"tab in tabs\" ng-class=\"{active: tab.active}\" tab-content-transclude=\"tab\" id=\"{{tab.id}}-tab-content\"></div></div></div>");
$templateCache.put("tooltip/template/tooltip/tooltip-popup.html","<div class=\"tooltip {{placement}}\" role=\"tooltip\" ng-class=\"{ in: isOpen(), fade: animation() }\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" ng-bind=\"content\"></div></div>");}]);
angular.module("ui.select").run(["$templateCache", function($templateCache) {$templateCache.put("bootstrap/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content dropdown-menu has-feedback\" role=\"listbox\" ng-show=\"$select.items.length > 0\">\r\n    <li class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\">\r\n        <div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\">\r\n        </div>\r\n        <div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\">\r\n        </div>\r\n        <div id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\">\r\n\r\n            <!--<a href=\"javascript:void(0)\" class=\"ui-select-choices-row-inner\">\r\n            </a>-->\r\n\r\n            <button type=\"button\" class=\"ui-select-choices-row-inner\" href=\"javascript:void(0)\"></button>\r\n\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n\r\n");
$templateCache.put("bootstrap/match.tpl.html","<div class=\"ui-select-match\" ng-hide=\"$select.open\" ng-disabled=\"$select.disabled\" ng-class=\"{\'btn-default-focus\':$select.focus}\">\r\n    <span tabindex=\"-1\"\r\n          class=\"btn form-control ui-select-toggle\"\r\n          ng-disabled=\"$select.disabled\"\r\n          ng-click=\"$select.activate()\"\r\n          aria-expanded={{$select.open}}\r\n          style=\"outline: 0;\">\r\n        <span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span>\r\n        <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span>\r\n        <span class=\"caret pull-right\" ng-click=\"$select.toggle($event)\" aria-hidden=\"true\"></span>\r\n        \r\n        <button ng-show=\"$select.allowClear && !$select.isEmpty()\" type=\"button\" class=\"adobe-blank form-control-icon resetbt ui-select-allow-clear\" ng-click=\"$select.clear($event)\" aria-label=\"Effacer\">\r\n            <span ng-mousedown=\"reset()\" aria-hidden=\"true\" class=\" myanimate icon itce-times-circle \"></span>\r\n            <span class=\"adobe-blank ng-binding\">Effacer</span>\r\n        </button>\r\n        <!--\r\n        <a ng-show=\"$select.allowClear && !$select.isEmpty()\" aria-label=\"{{ $select.baseTitle }} clear\" style=\"margin-right: 10px\"\r\n           ng-click=\"$select.clear($event)\" class=\"ui-select-clear-icon\">\r\n            <i class=\"icon itce-times-circle\" aria-hidden=\"true\"></i>\r\n        </a>\r\n        -->        \r\n    </span>\r\n</div>");
$templateCache.put("bootstrap/select.tpl.html","<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\">\r\n    <div class=\"ui-select-match\"></div>\r\n    <input type=\"text\" mw-clear-button autocomplete=\"off\" tabindex=\"-1\" aria-expanded=\"true\" aria-label=\"Filtrer\"\r\n        aria-owns=\"ui-select-choices-{{ $select.generatedId }}\"\r\n        aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\"\r\n        class=\"form-control ui-select-search\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\"\r\n        ng-show=\"$select.searchEnabled && $select.open\">\r\n    <p class=\"hide-a11y\" aria-live=\"assertive\" aria-atomic=\"true\" aria-hidden=\"{{!$select.open}}\">\r\n        {{$select.items.length}} résultats trouvés. </p>\r\n    <div class=\"ui-select-choices\"></div>\r\n</div>");}]);
angular.module("ui.bootstrap.tabs").run(["$templateCache", function($templateCache) {$templateCache.put("template/tabs/tab.html","<li ng-class=\"{active: active, disabled: disabled}\" role=\"presentation\">\r\n    <a href=\"\" ng-click=\"select()\" aria-selected=\"{{!!active}}\" role=\"tab\" tab-heading-transclude>{{heading}}</a>\r\n</li>");
$templateCache.put("template/tabs/tabset.html","<div>\r\n    <ul class=\"nav nav-{{type || \'tabs\'}}\" ng-class=\"{\'nav-stacked\': vertical, \'nav-justified\': justified}\" ng-transclude role=\"tablist\"></ul>\r\n    <div class=\"tab-content\" >\r\n        <div class=\"tab-pane\"\r\n             role=\"tabpanel\"\r\n             ng-repeat=\"tab in tabs\"\r\n             ng-class=\"{active: tab.active}\"\r\n             tab-content-transclude=\"tab\"\r\n             id=\"{{tab.id}}-tab-content\">\r\n        </div>\r\n    </div>\r\n</div>");}]);
angular.module("ui.bootstrap.tooltip").run(["$templateCache", function($templateCache) {$templateCache.put("template/tooltip/tooltip-popup.html","<div class=\"tooltip {{placement}}\" role=\"tooltip\" ng-class=\"{ in: isOpen(), fade: animation() }\">\r\n    <div class=\"tooltip-arrow\"></div>\r\n    <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\r\n</div>");}]);