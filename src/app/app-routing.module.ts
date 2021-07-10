import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ChildishComponent } from './modules/home/product-section/childish/childish.component';
import { ProtectionComponent } from './modules/home/product-section/protection/protection.component';
import { DetailsProductsComponent } from './modules/products-list/details-products/details-products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'childish', component: ChildishComponent },
  { path: 'protection', component: ProtectionComponent },
  { path: 'details', component: DetailsProductsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
