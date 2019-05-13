import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import { Product } from 'src/app/product';
import { LlajtaMarketService } from 'src/app/llajta-market.service';

@Component({
  selector: 'iso-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() products: Product | Product;
  constructor(private location: Location,
    private productService: LlajtaMarketService,) { }

  ngOnInit() {
  }
  // openForm():void {
  //   document.getElementById("myForm").style.display = "block";
  //   // console.log("click");
  // }
  
  closeForm() :void{
    document.getElementById("myForm").style.display = "none";
    // this.location.back();
    // console.log("close");
  }
  goBack(): void {
    this.location.back();
  }
  updateItem(): void{
    this.productService.updateItem(this.products).subscribe(() => this.goBack());
  }

}
