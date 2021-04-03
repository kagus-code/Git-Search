import { Component, OnInit } from '@angular/core';

import {UserRequestService} from '../user-http/user-request.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  userRepos:any;
  username: string = 'kagus-code'
  imageWidth: number = 150;
  imageHeight: number = 200;
  constructor(private userService: UserRequestService) { }


  findUser () {
    this.userService.UpdateUser(this.username);

    this.userService.userRequest().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.userService.repoRequest().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }





  ngOnInit(): void {
    this.userService.userRequest();

  }

}
