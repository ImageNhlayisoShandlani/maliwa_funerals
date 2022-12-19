import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
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

  homePick() {
    document.getElementById('ill').classList.add('single-active');
    document.getElementById('sill').classList.remove('single-active');
    document.getElementById('hill').classList.remove('single-active');

    document.getElementById('tombs').style.display = 'flex';
    document.getElementById('casks').style.display = 'none';
    document.getElementById('tents').style.display = 'none';
  }

  contactick() {
    document.getElementById('ill').classList.remove('single-active');
    document.getElementById('sill').classList.add('single-active');
    document.getElementById('hill').classList.remove('single-active');

    document.getElementById('tombs').style.display = 'none';
    document.getElementById('casks').style.display = 'flex';
    document.getElementById('tents').style.display = 'none';
  }

  abou6tPick() {
    document.getElementById('ill').classList.remove('single-active');
    document.getElementById('sill').classList.remove('single-active');
    document.getElementById('hill').classList.add('single-active');

    document.getElementById('tombs').style.display = 'none';
    document.getElementById('casks').style.display = 'none';
    document.getElementById('tents').style.display = 'flex';
  }
}
