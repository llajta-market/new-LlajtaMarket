import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../share/modules/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFirestore) { }
  
  getProducts(): Observable<Product[]>{
    return this.db.collection<Product>('products').valueChanges();
  }
  
}
