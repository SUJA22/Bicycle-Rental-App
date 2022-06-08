import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  getUserData() {
    return this.http.get<User[]>(`${environment.baseUrl}UserDetails`);
  }
  postUserData(data:any){
    this.http.post(`${environment.baseUrl}UserDetails`,data);

  }
  updateUserData(data:any){
    this.http.put(`${environment.baseUrl}UserDetails`,data);
  }
  deleteUserData(data:any){
    this.http.delete(`${environment.baseUrl}UserDetails`,data);
  }

  getAdminData() {
    return this.http.get<User[]>(`${environment.baseUrl}AdminDetails`);
  }
  postAdminData(data:any){
    this.http.post(`${environment.baseUrl}AdminDetails`,data);

  }
  updateAdminData(data:any){
    this.http.put(`${environment.baseUrl}AdminDetails`,data);
  }
  deleteAdminData(data:any){
    this.http.delete(`${environment.baseUrl}AdminDetails`,data);
  }

  getProductData() {
    return this.http.get<User[]>(`${environment.baseUrl}ProductDetails`);
  }
  postProductData(data:any){
    this.http.post(`${environment.baseUrl}ProductDetails`,data);

  }
  updateProductData(data:any){
    this.http.put(`${environment.baseUrl}ProductDetails`,data);
  }
  deleteProductData(data:any){
    this.http.delete(`${environment.baseUrl}ProductDetails`,data);
  }
  getOrderData() {
    return this.http.get<User[]>(`${environment.baseUrl}OrderDetails`);
  }
  postoOrderData(data:any){
    this.http.post(`${environment.baseUrl}OrderDetails`,data);

  }
  updateOrderData(data:any){
    this.http.put(`${environment.baseUrl}OrderDetails`,data);
  }
  deleteOrderData(data:any){
    this.http.delete(`${environment.baseUrl}OrderDetails`,data);
  }
}
