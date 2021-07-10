import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsSectionComponent } from './home/product-section/products-section.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildishComponent } from './home/product-section/childish/childish.component';
import { ProtectionComponent } from './home/product-section/protection/protection.component';
import { DetailsProductsComponent } from './products-list/details-products/details-products.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsSectionComponent,
    ProductsListComponent,
    ChildishComponent,
    ProtectionComponent,
    DetailsProductsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule
  ],
  exports: [
    ProductsSectionComponent,
    ProductsListComponent
  ]
})
export class ModulesModule { }
