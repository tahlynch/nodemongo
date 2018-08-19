import {Component} from '@angular/core';
import {Router} from "@angular/router";

import {AuthenticationService, TokenPayload} from "../authentication.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/taxcalculator');
    }, (err) => {
      console.error(err);
    });
  }
}
