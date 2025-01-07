import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'clients-profcli-description-tableau-simple',
  templateUrl: './description-tableau-simple.component.html',
  styleUrls: ['./description-tableau-simple.component.scss']
})
export class DescriptionTableauSimpleComponent {
  @Input() item: string;
}
