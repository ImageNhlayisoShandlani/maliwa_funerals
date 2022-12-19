import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-update-web',
  templateUrl: './update-web.page.html',
  styleUrls: ['./update-web.page.scss'],
})
export class UpdateWebPage implements OnInit {
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

  homePick() {
    document.getElementById('ill').classList.add('single-active');
    document.getElementById('sill').classList.remove('single-active');
    document.getElementById('hill').classList.remove('single-active');

    document.getElementById('one').style.display = 'flex';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
  }

  contactick() {
    document.getElementById('ill').classList.remove('single-active');
    document.getElementById('sill').classList.add('single-active');
    document.getElementById('hill').classList.remove('single-active');

    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'flex';
    document.getElementById('three').style.display = 'none';
  }

  abou6tPick() {
    document.getElementById('ill').classList.remove('single-active');
    document.getElementById('sill').classList.remove('single-active');
    document.getElementById('hill').classList.add('single-active');

    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'flex';
  }
}
