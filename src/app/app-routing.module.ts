import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MinePageComponent } from './pages/mine-page/mine-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailComponent } from './pages/detail/detail.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'list',component:ListPageComponent},
  {path:'cart',component:CartPageComponent, canActivate:[GuardService]},
  {path:'mine',component:MinePageComponent, canActivate:[GuardService]},
  {path:'login',component:LoginPageComponent},
  {path:'detail',component:DetailComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
