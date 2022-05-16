import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { OrderComponent } from './Components/order/order.component';

const routes: Routes = [
  {path:'', redirectTo:'Layout',pathMatch:'full'},
  {path:'Layout', component:LayoutComponent},
  {path:'products', component: BodyComponent},
  {path:'cart', component: OrderComponent},
 
  {path:'**',redirectTo:'/Layout'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
