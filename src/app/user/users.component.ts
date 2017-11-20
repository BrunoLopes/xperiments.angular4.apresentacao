import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'users',
    template: `<div *ngFor="let user of apiService.users">
                <mat-card [routerLink]="['/profile', user._id ]" style="cursor:pointer" >{{user.email}}</mat-card>
              </div>`
})
export class UsersComponent {
    title = "Bruno's app";

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getUsers();
    }

    
}
