import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUser } from '../interfaces/githubUser.interface';

@Injectable({providedIn: 'root'})
export class GithubUsersService {

  private baseUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(username:string){
    const url = `${this.baseUrl}/${username}`;
    return this.http.get<GithubUser>(url);
  }


}
