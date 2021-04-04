import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment } from '../../environments/environment';
import{ User } from '../user-class/user'
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
 user: User
  constructor(private http:HttpClient) { 
    this.user= new User("","");
  }
  userRequest(){

    return this.http.get("https://api.github.com/users/" + this.user.username +'?'+environment.access_token);
    }

    userRepoRequest(){
      return this.http.get("https://api.github.com/users/" + this.user.username + '/repos'+'?' +environment.access_token );
      }
     
      UpdateUser(username:string) {
        this.user.username = username;
      }
      UpdateRepo(repo:string) {
        this.user.repoName = repo;
      }
}
