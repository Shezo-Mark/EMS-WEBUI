import { Component, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  images = [
    './assets/img/media/1.jpg',
    './assets/img/media/2.jpg',
    './assets/img/media/3.jpg',
    './assets/img/media/4.jpg',
    './assets/img/media/5.jpg',
    './assets/img/media/6.jpg',
  ];
  images1 = [
    './assets/img/media/4.jpg',
    './assets/img/media/5.jpg',
    './assets/img/media/6.jpg',
    './assets/img/media/7.jpg',
    './assets/img/media/8.jpg',
  ];
  showNavigationArrows = true;
  showNavigationIndicators = true;

  backgroundColorImages = [
    './assets/img/photos/33.jpg',
    './assets/img/photos/34.jpg',
    './assets/img/photos/35.jpg',
  ];

  GradientBackgroundcolor = [
    './assets/img/photos/30.jpg',
    './assets/img/photos/31.jpg',
    './assets/img/photos/32.jpg',
    
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: any;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
