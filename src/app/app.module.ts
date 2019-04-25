import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShopComponentComponent } from './shop-component/shop-component.component';

import { DrinkService } from './drink.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    ShopComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponentComponent},
      {path: 'shop', component: ShopComponentComponent}
    ])
  ],
  bootstrap: [AppComponent],
  providers: [DrinkService]
})
export class AppModule { }
