import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  registerProducts(product: Product) {
    console.log("registering product... ")
  }
}
