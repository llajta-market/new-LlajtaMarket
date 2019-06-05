import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'iso-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      result => {
        this.users = result;
        console.log(result)
      }, ex => console.log(ex)
    )
  }

}
