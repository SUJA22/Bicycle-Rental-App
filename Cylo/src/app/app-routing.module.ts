import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UserConfirmOrderComponent } from './user-confirm-order/user-confirm-order.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"register",
    component:UserRegisterComponent
  },
{
  path:"products",
  component:ProductsComponent
},
{
  path:"",
  component:ProductsComponent
},
{
path:"userProfile",
component:UserProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
