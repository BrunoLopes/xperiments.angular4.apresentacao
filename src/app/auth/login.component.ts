import { Component, Injectable, Injector } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    <h4>Login</h4>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <form>
                    <mat-form-field>
                        <input [(ngModel)]="loginData.email" name="email" matInput placeholder="Email" type="email" >
                    </mat-form-field>
                    <mat-form-field>
                        <input [(ngModel)]="loginData.pwd" name="password" matInput placeholder="Password" type="password" >
                    </mat-form-field>
                    <button mat-raised-button (click)="post()" color="primary">Login</button>
                </form>
            </mat-card-content>
        </mat-card>
    `,
})
@Injectable()
export class LoginComponent {
    loginData = {}

    //constructor(private authService: AuthService) { }
    constructor(private injector: Injector){}

    
    post()
    {
        var authService = this.injector.get(AuthService)
        var router = this.injector.get(Router)
        
        authService.loginUser(this.loginData)

        console.log(authService.isAuthenticated + ' = conected')

        router.navigate(['']);
        
    }

}
