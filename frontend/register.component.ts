import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports:[CommonModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
   
  };

  constructor(private http: HttpClient, private router: Router) {}

  registerUser() {
    this.http.post('http://localhost:3000/register', this.user).subscribe(
      (res) => {
        alert('Registration successful!');
        this.router.navigate(['/login']); // ✅ Redirect to login
      },
      (err) => {
        console.error(err);
        alert('Registration failed!');
      }
    );
  }
}
