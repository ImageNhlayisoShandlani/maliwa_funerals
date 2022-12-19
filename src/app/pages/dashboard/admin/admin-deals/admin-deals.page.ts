import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-deals',
  templateUrl: './admin-deals.page.html',
  styleUrls: ['./admin-deals.page.scss'],
})
export class AdminDealsPage implements OnInit {
  constructor(private router: Router, private menuCtrl: MenuController) {}

  ngOnInit() {}

  adminMenu(menu) {
    this.menuCtrl.enable(true, 'adminMenu' + menu);
    this.menuCtrl.open('adminMenu' + menu);
  }

  navigate(num: number) {
    if (num == 1) {
      this.router.navigate(['admin-home']);
    }

    if (num == 2) {
      this.router.navigate(['add-policy-holder']);
    }

    if (num == 3) {
      this.router.navigate(['admin-members']);
    }

    if (num == 4) {
      this.router.navigate(['admin-deals']);
    }

    if (num == 5) {
      this.router.navigate(['update-web']);
    }

    if (num == 6) {
      this.router.navigate(['add-to-gallery']);
    }

    if (num == 7) {
      this.router.navigate(['pages']);
    }

    if (num == 0) {
      this.router.navigate(['home/landing']);
    }
  }
}
