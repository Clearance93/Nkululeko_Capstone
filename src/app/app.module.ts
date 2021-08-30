import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { FeatureAddProductComponent } from './feature-add-product/feature-add-product.component';
import { FeatureAddComponent } from './feature-add/feature-add.component';
import { FeatureUpdateComponent } from './feature-update/feature-update.component';
import { SaleUpdateComponent } from './sale-update/sale-update.component';
import { SaleAddProductComponent } from './sale-add-product/sale-add-product.component';
import { SaleAddComponent } from './sale-add/sale-add.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    MainComponent,
    CartComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CheckoutComponent,
    PrivacyComponent,
    ContactComponent,
    ServiceComponent,
    AboutComponent,
    InvoiceComponent,
    AdminRegistrationComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    FeatureAddProductComponent,
    FeatureAddComponent,
    FeatureUpdateComponent,
    SaleUpdateComponent,
    SaleAddProductComponent,
    SaleAddComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
