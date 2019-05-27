import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iso-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  public productos: any;

  constructor() {
    this.productos = [];
   }

  ngOnInit() {
  }

}
