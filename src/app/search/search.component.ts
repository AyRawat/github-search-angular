import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { GithubApiService } from '../github-api.service';
import axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

searchQuery:string="AyRawat";
searchResults: any[] | undefined;
error:any;
user: any;
userRepos:any;
username: string = ''
imageWidth: number = 150;
imageHeight: number = 200;

constructor(private profileService: GithubApiService){}

//searchUsers(){

//   axios.get(`https://api.github.com/search/users?q=${this.searchQuery}`).then(response=>{
//     this.searchResults = response.data.items;
//     console.log("The Value of Search Results", this.searchResults);
//   }).catch(error=>{
//     this.error = error;
// })
//}
@Output() emitter:EventEmitter<string> = new EventEmitter<string>();

findUser () {
  this.emitter.emit(this.username);
  this.profileService.UpdateUser(this.username);

  this.profileService.getUser().subscribe(user => {
    console.log(user);
    this.user = user;
  });

  this.profileService.getUserRepos().subscribe(repos => {
    console.log(repos);
    this.userRepos = repos;
  })
}

ngOnInit() {
  this.findUser()
}

}
