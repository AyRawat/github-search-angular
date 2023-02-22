import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  username: string='';
  repoName: string='';
  clientId: string = "c789323b20a2d31dc9fa";
  clientSecret: string = "83e428e5ed1c99fded8ab02686753f74656f9f6b";
  apikey:string='be05ad82ef1dec303061648a172836e81613bc78';
  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }


  UpdateUser(username:string) {
    this.username = username;
  }

}