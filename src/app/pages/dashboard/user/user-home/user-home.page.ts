import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

  constructor(private menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
  }


  userMenu(menu) {
    this.menuCtrl.enable(true, 'userMenu' + menu);
    this.menuCtrl.open('userMenu' + menu);
  }

  navigate(num: number) {
    if (num == 1) {
      this.router.navigate(['user-home']);
    }

    if (num == 2) {
      this.router.navigate(['user-account']);
    }

    if (num == 3) {
      this.router.navigate(['user-history']);
    }

    if (num == 0) {
      this.router.navigate(['home/landing']);
    }
  }
}
