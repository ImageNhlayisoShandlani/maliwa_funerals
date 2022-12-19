import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'landing',
        loadChildren: () =>
          import('../pages/home-pages/landing/landing.module').then(
            (m) => m.LandingPageModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../pages/home-pages/login/login.module').then(
            (m) => m.LoginPageModule
          ),
      },

      {
        path: 'register',
        loadChildren: () =>
          import('../pages/home-pages/register/register.module').then(
            (m) => m.RegisterPageModule
          ),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('../pages/home-pages/about-us/about-us.module').then(
            (m) => m.AboutUsPageModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('../pages/home-pages/contact-us/contact-us.module').then(
            (m) => m.ContactUsPageModule
          ),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('../pages/home-pages/gallery/gallery.module').then(
            (m) => m.GalleryPageModule
          ),
      },
      {
        path: 'admin-landing',
        loadChildren: () =>
          import(
            '../new-pages/dashboard/admin/admin-landing/admin-landing.module'
          ).then((m) => m.AdminLandingPageModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../new-pages/home-pages/products/products.module').then(
            (m) => m.ProductsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
