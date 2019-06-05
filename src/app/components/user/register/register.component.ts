import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserServiceService } from '../../../services/user-service.service'

import { User } from '../../../shared/models/user'
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'iso-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  creating: boolean = true;
  componentAction: string

  constructor(private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore) {

    this.componentAction = "Crear Usuario"
    this.user = new User()
    this.user.user_id = route.params["value"].id
    if (this.user.user_id) {
      this.componentAction = "Editar Usuario";
      this.creating = false;
      this.loadUserData();
    }
  }

  registerUser(): void {
    if (this.creating) {
      this.userService.createUser(this.user).then(() => {
        console.log('User Registered');
        this.router.navigate(['/users']);
      }, (error) => {
        console.error(error);
      });
    } else {
      this.userService.updateUser(this.user, this.user.user_id).then(() => {
        console.log('User Registered');
        this.router.navigate(['/users']);
      }, (error) => {
        console.error(error);
      });
    }
  }

  loadUserData(): any {
    console.log("load user data.")
    this.userService.getUserById(String(this.user.user_id)).subscribe(
      (user) => {
        this.user = user.payload.data()
      });
  }

  ngOnInit() {
  }

}
