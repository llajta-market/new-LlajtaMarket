import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db:  AngularFirestore) { }

  addProduct(p : Product): void {
    let obj = JSON.parse(JSON.stringify(p));
    this.db.collection('products').add(obj);
  }

}
