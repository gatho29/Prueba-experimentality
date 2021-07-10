import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import swiper from 'swiper/bundle';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterViewInit {

  @Input() data: any;

  constructor() { }


  ngAfterViewInit(): void {
    const mySwiper = new swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      slidesPerView: 5,
      spaceBetween: 30,

    });
  }

  ngOnInit(): void {
  }

}
