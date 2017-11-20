import { Component } from '@angular/core';

@Component({
    selector: 'erro',
    template: `
      <h1>Error!</h1>
      <mat-card>Erro inesperado!!! </mat-card>
    `,
    //styleUrls: ['./app.component.css']
})
export class ErrorComponent {

    //constructor(private authService: AuthService) { }

    title = "Bruno's app error";
}
