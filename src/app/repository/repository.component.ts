import { Component, OnInit } from '@angular/core';
import {RepoRequestService} from '../repo-http/repo-request.service'
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repoitems: any[];
  repoName:string= "Nanite-pizza";

  constructor(private repoService: RepoRequestService) { 
    
  }

  findRepo () {
    this.repoService.UpdateRepo(this.repoName);
    this.repoService.searchrepos().subscribe(repo => {
      this.repoitems = repo["items"];
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }

}
