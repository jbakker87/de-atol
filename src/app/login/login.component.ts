import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup(
    {
      username: new FormControl(),
      password: new FormControl()
    }
  );

  constructor(private router: Router) { }

  get username(): string {
    return this.loginForm.get('username').value;
  }

  get password(): string {
    return this.loginForm.get('password').value;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.username === 'admin' && this.password === 'admin'){
      this.router.navigate(['cms']);
     } else {
       alert('Gebruikersnaam of wachtwoord is onjuist');
     }
  }

}
