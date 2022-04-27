import { TechnicianCreateComponent } from './components/technician/technician-create/technician-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { TechnicianCrudComponent } from './views/technician-crud/technician-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"products",
  component: ProductCrudComponent
},
{
  path:"technician",
  component: TechnicianCrudComponent
},
{
  path:"products/create",
  component: ProductCreateComponent
},
{
  path:"technician/create",
  component: TechnicianCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
