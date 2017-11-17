import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, 
         MatCardModule, 
         MatToolbarModule, 
         MatInputModule, 
         MatListModule 
        } from '@angular/material'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component'
import { ProfileComponent } from './profile.component'
import { PostComponent } from './post.component'
import { AuthInterceptorService } from './authInterceptor'
import { HomeComponent } from './home.component'
import { ErrorComponent } from './erro.component'

const routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'error', component: ErrorComponent },
  
]

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    MessagesComponent, 
    RegisterComponent, 
    LoginComponent, 
    UsersComponent, 
    ProfileComponent, 
    PostComponent,
    ErrorComponent
  ],
  imports: [
      BrowserModule, 
      HttpClientModule, 
      FormsModule,
      MatButtonModule, 
      MatCardModule, 
      MatToolbarModule, 
      RouterModule.forRoot(routes),
      MatInputModule,
      BrowserAnimationsModule,
      MatListModule
  ],
  providers: [ApiService, AuthService, { 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
