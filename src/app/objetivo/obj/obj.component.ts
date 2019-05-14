import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';
import {Location} from '@angular/common';
import { LlajtaMarketService } from 'src/app/llajta-market.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'iso-obj',
  templateUrl: './obj.component.html',
  styleUrls: ['./obj.component.css']
})
export class ObjComponent implements OnInit {
  products$: Observable<Product[]>;
  @Input() products: Product | Product;
  constructor(private location: Location,
    private productService: LlajtaMarketService,) { }

  ngOnInit() {
    this.updateItem
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

  