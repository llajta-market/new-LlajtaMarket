import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product';
import { IProduct } from '../shared/models/i-product';
import { Category } from '../shared/models/category';


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

  getProducts():Observable<IProduct[]>{
    return this.db.collection<IProduct>('products').valueChanges();
  }

  getCategories():Observable<Category[]>{
    return this.db.collection<IProduct>('categories').valueChanges();
  }

}
