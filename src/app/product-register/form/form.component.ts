import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'iso-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private productsService : ProductsService, private router : Router) { }

  ngOnInit() {
  }

  newProduct: Product = new Product();
  
  registerProduct() : void{
    this.newProduct.category="";
    this.newProduct.offer=false;

    console.log(this.newProduct);

    var newPath = 'message-done';
    var flag=this.comprobar();

    if(flag===false){
      newPath='message-failed';
    }else{
      this.productsService.addProduct(this.newProduct);
    }
    this.router.navigateByUrl(newPath);

    this.newProduct=new Product();

    
  }

  onselected(event){
    this.newProduct.image=event.target.files[0].name;
  }

  comprobar(){
    return typeof this.newProduct.name==='string' &&
    typeof this.newProduct.price==='number' &&
    typeof this.newProduct.amount=='number' &&
    typeof this.newProduct.details==='string' &&
    typeof this.newProduct.offer==='boolean' &&
    typeof this.newProduct.category==='string' &&
    typeof this.newProduct.image==='string'
  }

}
