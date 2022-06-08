import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cylo';
  btn:{
    name: string;
    link: string;
  }[]=[{name:"Products",link:"/products"},{name:"Register",link:"/register"},{name:"Login",link:"/login"}]
}
