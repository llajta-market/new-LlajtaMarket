import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '../shared/models/user'
import { ResourceLoader } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user_data = new User();

  constructor(private db: AngularFirestore) {
    this.user_data = {
      user_id: 12,
      name: "juan",
      last_name: "last name",
      email: "last@gmail.com",
      password: ""
    }
  }

  createUser(user) {
    return this.db.collection('users').add(user);
  }

  getUserById(user_id): Observable<any> {
    return this.db.collection('users').doc(user_id).snapshotChanges();
  }
  
  updateUser(user, userId) {
    return this.db.collection('users').doc(userId).set(user)
  }
}
