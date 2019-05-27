import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
//import { LlajtaMarketService } from 'src/app/llajta-market.service';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'iso-obj',
  templateUrl: './obj.component.html',
  styleUrls: ['./obj.component.css']
})
export class ObjComponent implements OnInit {
  products$: Observable<Product[]>;
  @Input() products: Product | Product;

  newProduct: Product = new Product();

  constructor(private location: Location,
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit() {
    //this.updateItem
  }
  // openForm():void {
  //   document.getElementById("myForm").style.display = "block";
  //   // console.log("click");
  // }

  closeForm(): void {
    document.getElementById("myForm").style.display = "none";
    // this.location.back();
    // console.log("close");
  }
  goBack(): void {
    this.location.back();
    // }
    // updateItem(item ): void{
    //   this.productsService.updateItem(item.id)
    //   .subscribe(newItem => {this.updateArray(newItem)};
    // }
    // updateArray(newitem){
    //   this.products$.items[newitem.id].name = newitem.name
    // }
  }
}
