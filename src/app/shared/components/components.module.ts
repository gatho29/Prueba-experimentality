import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    MenuComponent,
    FooterComponent,
    CardsComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    MenuComponent,
    FooterComponent,
    CardsComponent,
    TitleComponent
  ]
})
export class ComponentsModule { }
