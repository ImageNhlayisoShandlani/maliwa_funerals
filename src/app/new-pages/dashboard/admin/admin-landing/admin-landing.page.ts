import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.page.html',
  styleUrls: ['./admin-landing.page.scss'],
})
export class AdminLandingPage implements OnInit {
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
    this.router.navigate(['home/gallery']);
  }

  getOffer() {
    this.router.navigate(['home/admin-landing']);
  }

  products() {
    this.router.navigate(['home/products']);
  }

  apply() {
    window.alert('Application Sent!!! \nAgents Will Be Contact With You');
  }
}
