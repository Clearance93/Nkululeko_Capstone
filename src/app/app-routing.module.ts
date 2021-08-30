import { UsersComponent } from './users/users.component';
import { SaleUpdateComponent } from './sale-update/sale-update.component';
import { SaleAddProductComponent } from './sale-add-product/sale-add-product.component';
import { FeatureUpdateComponent } from './feature-update/feature-update.component';
import { FeatureAddComponent } from './feature-add/feature-add.component';
import { FeatureAddProductComponent } from './feature-add-product/feature-add-product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleAddComponent } from './sale-add/sale-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'privacy/:_id', component: PrivacyComponent },
  { path: 'product-update/:_id', component: ProductUpdateComponent },
  { path: 'admin-registration', component: AdminRegistrationComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'feature-add-product/:_id', component: FeatureAddProductComponent },
  { path: 'feature-add', component: FeatureAddComponent }, 
  { path: 'feature-update/:_id', component: FeatureUpdateComponent }, 
  { path: 'sale-add-product/:_id', component: SaleAddProductComponent },
  { path: 'sale-update/:_id', component: SaleUpdateComponent },
  { path: 'sale-add', component: SaleAddComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
