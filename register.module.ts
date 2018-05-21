import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailComponent } from './email.component';
import { PasswordComponent } from './password.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { UsernameComponent } from './username.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent, UsernameComponent, UsernameComponent, PasswordComponent, EmailComponent],
  exports: [RegisterComponent, UsernameComponent, UsernameComponent, PasswordComponent, EmailComponent]
})
export class RegisterModule { }
