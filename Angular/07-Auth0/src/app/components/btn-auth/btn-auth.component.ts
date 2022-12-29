import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-btn-auth',
  template:  `
  
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button class="btn btn-outline-danger" (click)="auth.logout()">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
    <button class="btn btn-outline-primary" (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>`,
  styleUrls: ['./btn-auth.component.css']
})
export class BtnAuthComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
