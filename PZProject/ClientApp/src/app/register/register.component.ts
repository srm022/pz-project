import { ValidationPatterns } from './../models/validation.patterns';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isLoading = false;
  patterns = new ValidationPatterns();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() { }

  public register() {
    this.isLoading = true;
    const credentials = {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };

    this.http.post('https://pzproject.azurewebsites.net/auth/register', credentials, {
      responseType: 'text'
    })
      .subscribe(
        result => {
          console.log(result);
          this.isLoading = false;
          this.router.navigate(['/login']);
        },
        error => this.showEmailTakenError(error)
      );
  }

  showEmailTakenError(error: any) {
    this.isLoading = false;
    console.log(error);
    this.toastr.error('This email adress is already taken');
  }
}
