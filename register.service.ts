import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  validEmail = false;
  validUsername = false;
  validPassword = false;
  validUsernameMessage = "";
  validPasswordMessage = "";
  validEmailMessage = "";

  constructor() { }
  

}
