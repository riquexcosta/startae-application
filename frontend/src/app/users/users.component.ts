import { Component, OnInit } from '@angular/core';

import { UserService } from './shared/user.service';
import { User } from './shared/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];


  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data.all_data.users);
  }

  deleteUser(users){
    if(confirm("Você tem certeza que deseja deletar esse usuário: " + users.name + "?")){
      var index = this.users.indexOf(users);
      this.users.splice(index,1);
      this.userService.deleteUser(users.id).subscribe(null);
    }
  }

}
