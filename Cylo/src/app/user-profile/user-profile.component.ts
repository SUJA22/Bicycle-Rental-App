import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  btn:{
    name: string;
    link: string;
  }[]=[{name:"Products",link:"/products"},{name:"Logout",link:"/login"}]
  constructor() { }

  ngOnInit(): void {
  }

}
