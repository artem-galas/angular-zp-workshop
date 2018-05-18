import { Component, OnInit } from '@angular/core';
import {TokenService} from '../services/token/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngwzp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public tokenService: TokenService,
              private router: Router) { }

  ngOnInit() {
  }

  public goToProfile() {
    if (this.tokenService.userData) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['auth/sign-in']);
    }
  }

}
