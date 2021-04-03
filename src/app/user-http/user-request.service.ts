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

    repoRequest(){
      return this.http.get("https://api.github.com/users/" + this.username +'?' +environment.access_token );
      }
     // searchrepos() {
       // return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
         // headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
        //}))
    //  }
      UpdateUser(username:string) {
        this.username = username;
      }
      UpdateRepo(repo:string) {
        this.repoName = repo;
      }
}
