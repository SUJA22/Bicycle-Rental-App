import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPrevOrderComponent } from './user-prev-order/user-prev-order.component';
import { UserConfirmOrderComponent } from './user-confirm-order/user-confirm-order.component';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    UserNavbarComponent,
    AppCarouselComponent,
    UserLoginComponent,
    UserSignUpComponent,
    UserPortalComponent,
    UserProfileComponent,
    UserPrevOrderComponent,
    UserConfirmOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
