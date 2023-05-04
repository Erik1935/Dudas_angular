import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
idUser:number = 3;
rolUser:String = "Admin";
  constructor() { }
  getIdUser(){
    return this.idUser;
  }
  getRolUser(){
    return this.rolUser;
  }
}
