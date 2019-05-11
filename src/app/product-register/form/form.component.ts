import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'iso-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private productsService : ProductsService) { }

  ngOnInit() {
  }

  newProduct: Product = new Product();
  
  registerProduct() : void{
    this.newProduct.category="";
    this.newProduct.offer=false;

    console.log(this.newProduct);

    this.productsService.addProduct(this.newProduct);

    this.newProduct=new Product();
  }

}
