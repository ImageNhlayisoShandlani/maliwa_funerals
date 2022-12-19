import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  admin() {
    this.router.navigate(['home/login']);
  }
  home() {
    this.router.navigate(['home/landing']);
  }
  about() {
    this.router.navigate(['home/about-us']);
  }

  contact() {
    this.router.navigate(['home/contact-us']);
  }
  gallery() {
    this.router.navigate(['gallery']);
  }

  goToAdmin() {
    this.router.navigate(['admin-home']);
  }

  products() {
    this.router.navigate(['home/products']);
  }
}
