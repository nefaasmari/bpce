import {MyWayTableColumnComponentType, initAuthorizedComponents} from '@myway/ui';
import {TableItemCustomActionComponent} from './table-item-custom-action/table-item-custom-action.component';

const extendedAuthorizedComponent: Partial<MyWayTableColumnComponentType> = {
  customAction: {
    class: TableItemCustomActionComponent,
    selector: 'app-table-item-custom-action'
  }
};

initAuthorizedComponents(extendedAuthorizedComponent);
