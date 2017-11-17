import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'home',
    template: `
      <mat-card>Bruno's AngularJs App</mat-card>
    `,
    //styleUrls: ['./app.component.css']
})
export class HomeComponent {

    //constructor(private authService: AuthService) { }

    title = "Bruno's app Home";
}
