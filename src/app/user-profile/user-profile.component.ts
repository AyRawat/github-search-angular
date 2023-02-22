import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  username: string = "";
  userProfile: any;
  error: any;

  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.username = this.route.snapshot.paramMap.get('username') as string;
    axios.get(`https://api.github.com/users/${this.username}`)
      .then(response => {
        this.userProfile = response.data;
      })
      .catch(error => {
        this.error = error;
      });
  }

}
