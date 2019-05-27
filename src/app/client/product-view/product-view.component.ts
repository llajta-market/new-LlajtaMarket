import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, combineLatest } from 'rxjs';
import { IProduct } from 'src/app/shared/models/i-product';
import { map,filter } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'iso-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  products$ : Observable<IProduct[]>;
  products : IProduct[];
  filter$ : Observable<string>;

  category : string;
  amount : number;

  constructor(private productsService : ProductsService) { }

  ngOnInit() : void {
    this.products$ = this.productsService.getProducts();
    
    /*this.products$.subscribe(products=>{
      this.products = products;
      console.log(this.products);
    });*/

    this.products$.pipe(map((ps : IProduct[]) => ps.filter(p => p.category==="electronico"))).subscribe(products=>{
      this.products = products;
      console.log(this.products);
    });


  }

}


