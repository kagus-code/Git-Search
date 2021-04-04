import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment } from '../../environments/environment';
import{Repository} from '../repo-class/repository'
@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  repository : Repository
  constructor(private http:HttpClient) {
    this.repository= new Repository("","");
    
   }
  repoRequest(){
    return this.http.get("https://api.github.com/users/" + this.repository.username +'?' +environment.access_token );
    }
    
    searchrepos() {
        return this.http.get('https://api.github.com/search/repositories?q=' + this.repository.repoName, ({
          headers: new HttpHeaders({Authorization: 'token'+ environment.access_token})
        }))
      }

    UpdateRepo(repo:string) {
      this.repository.repoName = repo;
    }
}
