import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '../shared/models/user'
import { ResourceLoader } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private db: AngularFirestore) {
  }

  createUser(user) {
    let obj = JSON.parse(JSON.stringify(user));
    return this.db.collection('users').add(obj);
  }

  getUserById(user_id): Observable<any> {
    return this.db.collection('users').doc(user_id).snapshotChanges();
  }

  updateUser(user, userId) {
    return this.db.collection('users').doc(userId).set(user)
  }
}
