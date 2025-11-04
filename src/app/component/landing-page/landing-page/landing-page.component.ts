import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription, fromEvent } from 'rxjs';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  imageIndex = 1;
  galleryId = 1;
  autoPlay = true;
  showArrows = false;
  showDots = false;

  layoutSub: Subscription;
  @ViewChild('switcher', { static: false }) switcher!: ElementRef;
  public isMenuCollapsed = true;
  constructor(
    public SwitcherService: SwitcherService,
    public renderer: Renderer2,
    private navServices: NavService,
    private modalService: NgbModal
  ) {
    document.querySelector('body')?.classList.remove('sidebar-mini');
    document.querySelector('body')?.classList.add('landing-page', 'horizontal');

    this.layoutSub = SwitcherService.changeEmitted.subscribe((value) => {
      if (value) {
        this.renderer.addClass(
          this.switcher.nativeElement.firstElementChild,
          'active'
        );
        this.renderer.setStyle(
          this.switcher.nativeElement.firstElementChild,
          'right',
          '0px'
        );
        value = true;
      } else {
        this.renderer.removeClass(
          this.switcher.nativeElement.firstElementChild,
          'active'
        );
        this.renderer.setStyle(
          this.switcher.nativeElement.firstElementChild,
          'right',
          '-270px'
        );
        value = false;
      }
    });
  }

  ngOnInit(): void {
    let body: HTMLBodyElement | any = document.querySelector('body');
    let html: any = document.querySelector('html');
    let ltr: any = document.querySelector('#myonoffswitch23');
    let rtl: any = document.querySelector('#myonoffswitch24');
    let lightBtn: any = document.getElementById('myonoffswitch1');
    let darkBtn: any = document.getElementById('myonoffswitch2');
    let styleId = document.querySelector('#style');

    // LTR
    if (ltr) {
      fromEvent(ltr, 'click').subscribe(() => {
        //add
        body?.classList.add('ltr');
        html?.setAttribute('dir', 'ltr');
        styleId?.setAttribute(
          'href',
          './assets/plugins/bootstrap/css/bootstrap.min.css'
        );
        this.customOptions = { ...this.customOptions, rtl: false }; // this will make the carousel refresh
        //remove
        body?.classList.remove('rtl');
        localStorage.removeItem('Adminorrtl');
      });
    }
    // RTL
      if (rtl) {
        fromEvent(rtl, 'click').subscribe(() => {
          //add
          body?.classList.add('rtl');
          html?.setAttribute('dir', 'rtl');
          styleId?.setAttribute(
            'href',
            './assets/plugins/bootstrap/css/bootstrap.rtl.css'
          );
          this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
    
          //remove
          body?.classList.remove('ltr');
          localStorage.setItem('Adminorrtl', 'true');
          localStorage.removeItem('Adminorltr');
        });
      }
    // Theme
      if (lightBtn) {
        fromEvent(lightBtn, 'click').subscribe(() => {
          lightBtn.checked = true;
          // add
          document.querySelector('body')?.classList.add('light-theme');
          // remove
          document.querySelector('body')?.classList.remove('dark-theme');
          localStorage.clear();
          localStorage.setItem('Adminorlight-theme', 'true');
          localStorage.removeItem('Adminordark-theme');
        });
      }
    if (darkBtn) {
      fromEvent(darkBtn, 'click').subscribe(() => {
        darkBtn.checked = true;
        // add
        document.querySelector('body')?.classList.add('dark-theme');
        // remove
        document.querySelector('body')?.classList.remove('light-theme');
        localStorage.clear();
        localStorage.setItem('Adminordark-theme', 'true');
        localStorage.removeItem('Adminorlight-theme');
      });
    }
    this.localStorageBackup();
    
  }

  sidebarClose() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
      this.navServices.collapseSidebar = false;
    }
  }
  ngOnDestroy() {
    document
      .querySelector('body')
      ?.classList.remove('horizontal', 'landing-page');
    document.querySelector('body')?.classList.add('sidebar-mini');
  }

  // ngx owl carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 50,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 4,
      },
      740: {
        items: 6,
      },
      940: {
        items: 8,
      },
    },
    nav: false,
  };

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 64;
  }

  reset() {
    let body: HTMLBodyElement | any = document.querySelector('body');
    let html: any = document.querySelector('html');
    let lightBtn: any = document.getElementById('myonoffswitch1');
    let styleId = document.querySelector('#style');
    lightBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('light-theme');
    // remove
    document.querySelector('body')?.classList.remove('dark-theme');
    localStorage.clear();
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.css'
    );
    this.customOptions = { ...this.customOptions, rtl: false }; // this will make the carousel refresh
    //remove
    body?.classList.remove('rtl');
  }
  toggleSwitcher() {
    if (
      this.switcher.nativeElement.firstElementChild.classList.contains('active')
    ) {
      this.SwitcherService.emitChange(false);
    } else {
      this.SwitcherService.emitChange(true);
    }
  }
  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth >= 992) {
      document.querySelector('body')?.classList.remove('sidenav-toggled');
    }
  }
  localStorageBackup() {
    if (localStorage.getItem('Adminorrtl')) {
      let body: HTMLBodyElement | any = document.querySelector('body');
      let html: any = document.querySelector('html');
      let styleId = document.querySelector('#style');
      body?.classList.add('rtl');
      html?.setAttribute('dir', 'rtl');
      styleId?.setAttribute(
        'href',
        './assets/plugins/bootstrap/css/bootstrap.rtl.css'
      );
      this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh

      //remove
      body?.classList.remove('ltr');
    }
    // if (localStorage.getItem('Adminordark-theme')) {
    //   let darkBtn: any = document.getElementById('myonoffswitch2');
    //   darkBtn.checked = true;
    //   // add
    //   document.querySelector('body')?.classList.add('dark-theme');
    //   // remove
    //   document.querySelector('body')?.classList.remove('light-theme');
    //   localStorage.clear();
    //   localStorage.setItem('Adminordark-theme', 'true');
    //   localStorage.removeItem('Adminorlight-theme');
    // }
  }

  toggleSwitcherBody() {
    this.SwitcherService.emitChange(false);
  }

  toggleSidebar() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('body')?.classList.toggle('sidenav-toggled');
    }
  }
  closeResult = '';
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  images = [
    './assets/landing/web/1.png',
    './assets/landing/web/2.png',
    './assets/landing/web/3.png',
    './assets/landing/web/4.png',
    './assets/landing/web/5.png',
    './assets/landing/web/6.png',
  ];
}
