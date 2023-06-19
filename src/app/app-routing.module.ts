import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home/landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/home-pages/landing/landing.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'user-history',
    loadChildren: () =>
      import('./pages/dashboard/user/user-history/user-history.module').then(
        (m) => m.UserHistoryPageModule
      ),
  },
  {
    path: 'user-home',
    loadChildren: () =>
      import('./pages/dashboard/user/user-home/user-home.module').then(
        (m) => m.UserHomePageModule
      ),
  },
  {
    path: 'user-account',
    loadChildren: () =>
      import('./pages/dashboard/user/user-account-details/user-account-details.module').then(
        (m) => m.UserAccountDetailsPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/home-pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/home-pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/home-pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/home-pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'new-about',
    loadChildren: () => import('./pages/home-pages/new-about/new-about.module').then( m => m.NewAboutPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/home-pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./pages/dashboard/admin/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'admin-products',
    loadChildren: () => import('./pages/dashboard/admin/admin-products/admin-products.module').then( m => m.AdminProductsPageModule)
  },
  {
    path: 'admin-add-product',
    loadChildren: () => import('./pages/dashboard/admin/admin-add-product/admin-add-product.module').then( m => m.AdminAddProductPageModule)
  },
  {
    path: 'admin-members',
    loadChildren: () => import('./pages/dashboard/admin/admin-members/admin-members.module').then( m => m.AdminMembersPageModule)
  },
  {
    path: 'admin-deals',
    loadChildren: () => import('./pages/dashboard/admin/admin-deals/admin-deals.module').then( m => m.AdminDealsPageModule)
  },
  {
    path: 'admin-add-deals',
    loadChildren: () => import('./pages/dashboard/admin/admin-add-deals/admin-add-deals.module').then( m => m.AdminAddDealsPageModule)
  },
  {
    path: 'update-web',
    loadChildren: () => import('./pages/dashboard/admin/update-web/update-web.module').then( m => m.UpdateWebPageModule)
  },
  {
    path: 'add-policy-holder',
    loadChildren: () => import('./pages/dashboard/admin/add-policy-holder/add-policy-holder.module').then( m => m.AddPolicyHolderPageModule)
  },
  {
    path: 'add-to-gallery',
    loadChildren: () => import('./pages/dashboard/admin/add-to-gallery/add-to-gallery.module').then( m => m.AddToGalleryPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'admin-landing',
    loadChildren: () => import('./new-pages/dashboard/admin/admin-landing/admin-landing.module').then( m => m.AdminLandingPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./new-pages/home-pages/products/products.module').then( m => m.ProductsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
