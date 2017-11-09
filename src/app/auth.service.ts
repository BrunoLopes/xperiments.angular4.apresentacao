import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService{
    messages = [];
    
    constructor(private http: Http) { }


    registerUser(registerData) {
        this.http.post('http://localhost:6799/register', registerData).subscribe(res => {
            console.log(res);
        })
    }

    loginUser(loginData) {
        this.http.post('http://localhost:6799/login', loginData).subscribe(res => {
            localStorage.setItem('token', res.json().token )
        })
    }
}
