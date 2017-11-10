import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService{
    messages = [];
    path = 'http://localhost:6799/auth'
    
    constructor(private http: HttpClient) { }

    get token(){
        return localStorage.getItem('token')
    }

    registerUser(registerData) {
        this.http.post(this.path + '/register', registerData).subscribe(res => {
            console.log(res);
        })
    }

    loginUser(loginData) {
        this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
            localStorage.setItem('token', res.token )
        })
    }
}
