import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private product: Product;

  constructor(private db:  AngularFirestore) { }

  addProduct(p : Product): void {
    let obj = JSON.parse(JSON.stringify(p));
    this.db.collection('products').add(obj);
  }
  updateItem(item: Product): void {
    delete item.id;
    this.db.doc('products/' + item.id).update(item);
  }
  updatedProductItem(item:Product):void{
    this.product = item;
  }
  getProduct(): Product{
    return this.product;
  }
}
