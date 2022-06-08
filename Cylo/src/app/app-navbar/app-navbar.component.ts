import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
@Input() buttons:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.buttons);
  }

}
