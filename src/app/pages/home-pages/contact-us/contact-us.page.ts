import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
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

  products() {
    this.router.navigate(['home/products']);
  }
}
