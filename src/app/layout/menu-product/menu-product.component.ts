import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iso-menu-product',
  templateUrl: './menu-product.component.html',
  styleUrls: ['./menu-product.component.css']
})
export class MenuProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openForm():void {
    document.getElementById("myForm").style.display = "block";
    // console.log("click");
  }

}
