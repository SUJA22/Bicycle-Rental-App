import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerUser:FormGroup;
  
  
  constructor(private fb:FormBuilder) { 
this.registerUser=fb.group({
name:new FormControl('',Validators.required),
email:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
contact:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')])
});
  }
  get c(){
    return this.registerUser.get('contact');
  }
  get e(){ return this.registerUser.get('email');}
  get p(){return this.registerUser.get('password');}
  ngOnInit(): void {
  }

}
