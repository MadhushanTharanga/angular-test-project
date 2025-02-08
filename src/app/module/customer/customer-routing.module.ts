import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerDefaultComponent} from "./components/customer-default/customer-default.component";

const routes: Routes = [
  {path:'',redirectTo:'/customer/customer-default',pathMatch:'full'},
  {path:'customer-default',component:CustomerDefaultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
