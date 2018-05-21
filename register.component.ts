import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isUndefined, isNull } from 'util';
import { RegisterService } from './register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  usernameRegex = new RegExp(/^[a-zA-Z0-9]+$/);
  passwordRegex = new RegExp(/^(?=.*?[a-z])(?=.*?[\d]).{8,35}$/);
  emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  constructor(private formBuilder: FormBuilder,
  private registerService: RegisterService) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      username: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  validatePassword(){
    if(this.passwordRegex.test(this.form.controls.password.value)){
      this.registerService.validPassword = true;
      this.registerService.validPasswordMessage = "";
    }else{
      this.registerService.validPassword = false;
      this.registerService.validPasswordMessage = "Password must be between 8 and 35 chars and must not contain any special symbols";
    }
  }

  validateUsername(){
      if(this.form.controls.username.value.length < 3){
        this.registerService.validUsername = false;
        this.registerService.validUsernameMessage = "Username must be at least 3 chars long";
      }else if(this.form.controls.username.value.length > 16){
        this.registerService.validUsername = false;
        this.registerService.validUsernameMessage = "Username must be at most 16 chars long";
      }else if(this.usernameRegex.test(this.form.controls.username.value)==false){
        this.registerService.validUsername = false;
        this.registerService.validUsernameMessage = "Username must contain only letters and numbers";
      }else{
        this.registerService.validUsername = true;
        this.registerService.validUsernameMessage = "";
      }
  }

  validateEmail(){
    if(this.emailRegex.test(this.form.controls.email.value)==true){
      this.registerService.validEmail = true;
      this.registerService.validEmailMessage = "";
    }else{
      this.registerService.validEmail = false;
      this.registerService.validEmailMessage = "Please enter valid email";
    }
  }

  onRegister(){
    console.log(this.form);
  }

}
