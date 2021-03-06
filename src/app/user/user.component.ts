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
  username: string = 'kagus-code';
  constructor(private userService: UserRequestService) { }


  findUser () {
    this.userService.UpdateUser(this.username);

    this.userService.userRequest().subscribe(user => {
      this.user = user;
    });

    
  }
  getRepos(){
    this.userService.userRepoRequest().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }





  ngOnInit() {
    this.findUser()

  }

}
