import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponentComponent} from './navbar-component/navbar-component.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {ShopComponentComponent} from './shop-component/shop-component.component';

import {DrinkService} from './drink.service';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    ShopComponentComponent,
    LoginComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponentComponent},
      {path: 'shop', component: ShopComponentComponent}
    ]),
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [DrinkService]
})
export class AppModule {
}
