import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent {
  public show: boolean = false;

  constructor(private viewScroller: ViewportScroller) {}

  ngOnInit(): void {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 400) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  backtotop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
