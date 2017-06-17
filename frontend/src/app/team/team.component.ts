import { Component, OnInit } from '@angular/core';
import { UserService } from './../users/shared/user.service';
import { User } from './../users/shared/user';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  private users: User[] = [];
  tweets;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.all_data.users;
      this.tweets = data.all_data.tweets;
      console.log(data);
    });

    console.log(this.users);
  }

}

