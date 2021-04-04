import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment } from '../../environments/environment';
import{ User } from '../user-class/user'
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  username: string;
  repoName: string;
  constructor(private http:HttpClient) { 
    console.log ('service is now ready ')
  }
  userRequest(){

    return this.http.get("https://api.github.com/users/" + this.username +'?'+environment.access_token);
    }

    userRepoRequest(){
      return this.http.get("https://api.github.com/users/" + this.username + '/repos'+'?' +environment.access_token );
      }
     
      UpdateUser(username:string) {
        this.username = username;
      }
      UpdateRepo(repo:string) {
        this.repoName = repo;
      }
}
