import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserServiceService } from '../../../services/user-service.service'

import { User } from '../../../shared/models/user'

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
    private router: Router) {

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
      this.userService.createUser(this.user)
    } else {
      this.userService.updateUser(this.user, this.user.user_id)
    }
  }

  loadUserData(): void {
    this.user = this.userService.getUserById(this.user.user_id);
  }

  ngOnInit() {
  }

}