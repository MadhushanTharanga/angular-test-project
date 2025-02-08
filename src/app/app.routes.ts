import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ServiceComponent} from "./components/service/service.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'service',component:ServiceComponent},
  {path:'customer', loadChildren:()=>import('./module/customer/customer.module').then(m=>m.CustomerModule)},
  {path:'order', loadChildren:()=>import('./module/order/order.module').then(m=>m.OrderModule)},
  {path:'product', loadChildren:()=>import('./module/product/product.module').then(m=>m.ProductModule)},
  {path:'**',component:NotFoundPageComponent},
];
