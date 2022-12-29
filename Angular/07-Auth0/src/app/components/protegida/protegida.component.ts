import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  template: `
  <ul *ngIf="auth.user$ | async as user">
    <li>{{ user.name }}</li>
    <li>{{ user.email }}</li>
    <li>{{ user.nickname }}</li>
    <li>{{ user.birthdate }}</li>
    <li>{{ user.address }}</li>
    <li>{{ user.email_verified }}</li>
    <li>{{ user.phone_number }}</li>
    <li>{{ user.profile }}</li>
  </ul>`,
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
