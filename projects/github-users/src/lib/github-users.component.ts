import { Subscription } from 'rxjs';
import { GithubUsersService } from '../public-api';
import { GithubUser } from './interfaces/githubUser.interface';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'gu-githubUsers',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit{

  @Input() searchUser: string = 'Heber-739';

  user: GithubUser | null = null;

  constructor(private userService:GithubUsersService){}

ngOnInit(): void {
  this.getUser()
}

private getUser(){
  let sub: Subscription = this.userService.getUser(this.searchUser).subscribe({
    next:(res)=> this.user = res,
    error:(err)=> {
      console.log(err),
      this.user = null;
    },
    complete:()=>sub.unsubscribe()
  });
}
}
