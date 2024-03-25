import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
//import Swiper from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
@HostListener('window:scroll', ['$event'])
export class LandingPage {
  @ViewChild('swiper')
  //swiperRef: ElementRef | undefined;
  //swiper?: Swiper;

  constructor(private router: Router) {}

  ngOnInit() {
    //this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  opj() {
    let element = document.getElementById('tests');
    element.scrollIntoView({ behavior: 'smooth' });
  }
  swiperReady() {
   // this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (document.getElementById('nl').scrollTop > 1) {
      document.getElementById('non').style.display = 'none';
    }

    if (window.screenTop > 1) {
      document.getElementById('non').style.display = 'none';
    }
  }

  take() {
    if (document.getElementById('nl').scrollTop > 1) {
      document.getElementById('non').style.display = 'none';
    }
  }

  onWindowScroll() {
    let pic = document.getElementById('non');
    if (window.scrollY > pic.clientHeight) {
      pic.style.display = 'none';
    }
  }

  goPrev() {
    ////this.swiper?.slidePrev();
  }

  goNext() {
    //this.swiper?.slideNext();
  }

  swiperSlideChanged(e: any) {
    console.log('changed', e);
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
    this.router.navigate(['home/gallery']);
  }

  getOffer() {
    this.router.navigate(['home/admin-landing']);
  }

  products() {
    this.router.navigate(['home/products']);
  }
}
