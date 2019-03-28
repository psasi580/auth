import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private _registerUrl="http://localhost:3000/api/register"
   private _loginrUrl="http://localhost:3000/api/login"
  constructor(private httpClient: HttpClient,private _router:Router) { }

  registerUser(user):Observable<any>{
    return this.httpClient.post<any>(this._registerUrl,user)
  }
  loginUser(user):Observable<any>{
    return this.httpClient.post<any>(this._loginrUrl,user)
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  getToken(){
    return localStorage.getItem('token')    
  }


}
