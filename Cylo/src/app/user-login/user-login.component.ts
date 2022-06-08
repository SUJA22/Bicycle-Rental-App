import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.loginForm=fb.group({
      email:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')])
      });
  }
  get e(){ return this.loginForm.get('email');}
  get p(){return this.loginForm.get('password');}
  ngOnInit(): void {
  }

}
