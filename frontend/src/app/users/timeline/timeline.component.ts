


import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/user.service';
import { User } from './../shared/user';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  user: User = new User();
  response;
  tweets;
  identifier: number;


  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { 

    
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if(!id)
        return;
        
      this.userService.getUser(id).subscribe(
        user => {
          this.user = user.all_data.user;
          this.tweets = user.all_data.tweets; 
          console.log(this.user);
          console.log(this.tweets);
        },
        response => {});

      
      
        
    });
  }

 
}
