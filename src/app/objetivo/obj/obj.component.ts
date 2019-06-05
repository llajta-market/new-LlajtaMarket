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
  // @Input() products: Product | Product;
  @Input() id: string;
  @Input() name: string;
  @Input() price: number;
  @Input() amount: number;
  @Input() details: string;
  @Input() offer: boolean;
  @Input() category: string;
  @Input() image: string;

  newProduct: Product = new Product();

  constructor(private location: Location,
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit() {

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
  }
  updateItem(): void {
    if (this.name !== "" && this.price !== 0 && this.amount !== 0 && this.details !== "" && this.offer !== false && this.category !== "" && this.image !== "") {
      
    }
    //.subscribe(newItem => { this.updateArray(newItem) };
  }
  //  updateArray(newitem) {
  //    this.products$.subscribe[newitem.id].name = newitem.name
  //  }
}
