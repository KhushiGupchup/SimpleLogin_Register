import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports:[FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  loginUser() {
    this.http.post('http://localhost:3000/login', this.credentials).subscribe(
      (res: any) => alert(res.message),
      err => alert('Login Failed: ' + err.error.message)
    );
  }
}
