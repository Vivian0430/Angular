import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MinePageComponent } from './pages/mine-page/mine-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CommonHeaderComponent } from './components/common-header/common-header.component';
import { NavComponent } from './components/nav/nav.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { CommonBannerComponent } from './components/common-banner/common-banner.component';
import { SectionComponent } from './components/section/section.component';
import { DetailComponent } from './pages/detail/detail.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPageComponent,
    CartPageComponent,
    MinePageComponent,
    LoginPageComponent,
    CommonHeaderComponent,
    NavComponent,
    NotfoundComponent,
    HomeHeaderComponent,
    CommonBannerComponent,
    SectionComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
