import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, combineLatest } from 'rxjs';
import { IProduct } from 'src/app/shared/models/i-product';
import { map,filter } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'iso-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  products$ : Observable<IProduct[]>;
  products : IProduct[];

  categories$ : Observable<Category[]>;
  categories: Category[];

  constructor(private productsService : ProductsService) { 
    //this.category = ["electronico","juguetes","motores"];
  }

  ngOnInit() : void {

    this.categories$ = this.productsService.getCategories();
    this.categories$.subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    });

    this.products$ = this.productsService.getProducts();
    
    this.products$.subscribe(products=>{
      this.products = products;
      console.log(this.products);
    });
  }

  modifyCategory(cat : string):void{
    console.log(cat);
    this.products$ = this.productsService.getProducts();
    this.products$.pipe(map((ps : IProduct[]) => ps.filter(p => p.category===cat))).subscribe(products=>{
      this.products = products;
      console.log(this.products);
    });
  }

}


