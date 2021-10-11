import { Component, OnInit, Input } from '@angular/core';
import { IEstate } from 'src/app/shared/models/estate';

@Component({
  selector: 'app-estate-item',
  templateUrl: './estate-item.component.html',
  styleUrls: ['./estate-item.component.scss']
})
export class EstateItemComponent implements OnInit {
  @Input() estate: IEstate;
  constructor() { }

  ngOnInit() {
  }

}
