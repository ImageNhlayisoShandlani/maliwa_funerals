import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  getOffer() {
    this.router.navigate(['home/admin-landing']);
  }
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
  products() {
    this.router.navigate(['home/products']);
  }
}
