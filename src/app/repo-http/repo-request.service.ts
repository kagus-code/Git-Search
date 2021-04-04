import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  username: string;
  repoName: string;
  constructor(private http:HttpClient) {
    console.log('repo service started ')
   }
  repoRequest(){
    return this.http.get("https://api.github.com/users/" + this.username +'?' +environment.access_token );
    }
    
    searchrepos() {
        return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
          headers: new HttpHeaders({Authorization: 'token'+ environment.access_token})
        }))
      }

    UpdateRepo(repo:string) {
      this.repoName = repo;
    }
}
