import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    template: `
      <mat-toolbar>
        <button mat-button *ngIf="authService.isAuthenticated" routerLink="/post">Post</button>
        <button mat-button *ngIf="authService.isAuthenticated" routerLink="/users">Users</button>
        <span style="flex: 1 1 auto"></span>
        <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
        <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()" routerLink="/login">Logout</button>
        <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
      </mat-toolbar>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private authService: AuthService) { }

    title = "Bruno's app";
}
