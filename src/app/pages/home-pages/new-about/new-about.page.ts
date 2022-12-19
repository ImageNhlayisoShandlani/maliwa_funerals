import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.page.html',
  styleUrls: ['./new-about.page.scss'],
})
export class NewAboutPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  admin() {
    this.router.navigate(['home/login']);
  }
  home() {
    this.router.navigate(['home/landing']);
  }
  about() {
    this.router.navigate(['new-about']);
  }

  contact() {
    this.router.navigate(['home/contact-us']);
  }
}
