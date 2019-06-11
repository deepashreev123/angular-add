import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component: HomeComponent},
  {path:'result/:id',component: SearchComponent},
  {path:'login',component: LoginComponent},
  {path:'wishlist',component: WishlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
