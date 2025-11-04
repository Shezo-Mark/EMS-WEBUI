import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
import * as switcher from 'src/app/shared/layout-components/switcher/switcher';

@Component({
  selector: 'app-switcher-one',
  templateUrl: './switcher-one.component.html',
  styleUrls: ['./switcher-one.component.scss'],
})
export class SwitcherOneComponent {
  // theme style
  layoutSub: Subscription;
  body = document.querySelector('body');
  @ViewChild('switcher', { static: true }) switcher!: ElementRef;

  constructor(
    public renderer: Renderer2,
    public switcherServic: SwitcherService
  ) {
    this.layoutSub = switcherServic.changeEmitted.subscribe((value) => {
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
      document.querySelector('.slide-leftRTL')?.classList.add('d-none');
      document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    });
  }
  ngOnInit(): void {
     switcher.localStorageBackUp();
      switcher.customClickFn();
     switcher.updateChanges();
    // document.querySelector('#myonoffswitch1').checked = true
    if (
      document.body.classList.contains('transparent-mode') ||
      document.body.classList.contains('dark-mode')
    ) {
      // console.log('true');
      let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
      if (light){
        light.checked = false;
      }
    } else {
      // console.log('false');
      let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
      if (light) { 
        light.checked = true;
      }
    }
  }
  reset() {
    let btnlight = document.getElementById(
      'myonoffswitch1'
    ) as HTMLInputElement;
    btnlight.checked = true;
    let lightmenu = document.getElementById(
      'myonoffswitch3'
    ) as HTMLInputElement;
    lightmenu.checked = true;
    let vertical = document.getElementById(
      'myonoffswitch34'
    ) as HTMLInputElement;
    vertical.checked = true;
    let ltr = document.getElementById('myonoffswitch54') as HTMLInputElement;
    ltr.checked = true;
    let lightheader = document.getElementById(
      'myonoffswitch6'
    ) as HTMLInputElement;
    lightheader.checked = true;
    let fullwidth = document.getElementById(
      'myonoffswitch9'
    ) as HTMLInputElement;
    fullwidth.checked = true;
    let fixed = document.getElementById('myonoffswitch11') as HTMLInputElement;
    fixed.checked = true;

    localStorage.clear();
    let html: any = document.querySelector('html');
    let body = document.querySelector('body');
    html.style = '';
    body?.classList.remove('rtl');
    body?.classList.remove('dark-theme');
    body?.classList.remove('light-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('layout-boxed');
    body?.classList.remove('scrollable-layout');
    body?.classList.remove('transparent-theme');
    switcher.updateChanges();
    switcher.checkOptions();
    html.setAttribute('dir', 'ltr');
    let styleId = document.querySelector('#style');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.min.css'
    );
    localStorage.removeItem('Adminorhorizontal');
    localStorage.removeItem('AdminorhorizontalHover');
    let mainContent: any = document.querySelector('.main-content');
    let mainContainer1: any = document.querySelectorAll('.main-container');
    let appSidebar: any = document.querySelector('.app-sidebar');
    let header: any = document.querySelector('.header');
    let mainSidemenu: any = document.querySelector('.main-sidemenu');
    mainContent?.classList.add('app-content');
    mainContainer1.forEach((e: any) => {
      e.classList.add('container-fluid');
    });
    header?.classList.add('app-header');
    body?.classList.add('sidebar-mini');
    //remove
    body?.classList.remove('horizontal');
    body?.classList.remove('horizontal-hover');
    appSidebar?.classList.remove('horizontal-main');
    mainSidemenu?.classList.remove('container');
    mainContent?.classList.remove('hor-content');
    header?.classList.remove('hor-header');
    mainContainer1.forEach((e: any) => {
      e.classList.remove('container');
    });
    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
  }

  public color1: string = '#623AA2';
  public color2: string = '#623AA2';
  public color3: string = '#623AA2';
  public color4: string = '#623AA2';
  public color13: string = '#623AA2';

  public dynamicBgPrimary(data: any): void {
    this.color3 = data;

    const dynamicPrimaryBg = document.querySelectorAll('.color-primary-Bg');

    switcher.dynamicBgPrimaryColor(dynamicPrimaryBg, this.color3);
    localStorage.setItem('Adminortransparent-primary-color', this.color3);
    localStorage.setItem('Adminortransparent-primary-hover', this.color3);
    localStorage.setItem('Adminortransparent-primary-border', this.color3);
    let transparent = document.getElementById(
      'myonoffswitch1'
    ) as HTMLInputElement;
    transparent.checked = true;

    // Adding
    this.body?.classList.add('dark-theme');
    localStorage.setItem('AdminordarkTheme', 'true');

    // Removing
    this.body?.classList.remove('dark-theme');
    this.body?.classList.remove('light-theme');
    localStorage.removeItem('AdminorDarkTheme');
    localStorage.removeItem('AdminorLightTheme');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');
    document
      .querySelector('.app-header')
      ?.classList.add(
        'hor-header',
        'fixed-header',
        'visible-title',
        'stickyClass'
      );

    localStorage.removeItem('Adminorlight-primary-color');
    localStorage.removeItem('Adminorlight-primary-hover');
    localStorage.removeItem('Adminorlight-primary-border');
    localStorage.removeItem('Adminordark-primary-color');
    localStorage.removeItem('Adminordark-primary-hover');
    localStorage.removeItem('Adminordark-primary-border');
    localStorage.removeItem('Adminordark-body');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }

  public dynamicBgDarkPrimary(data: any): void {
    document.body.classList.add('dark-theme');

    this.color4 = data;

    const dynamicPrimaryBgDark = document.querySelectorAll('.color-bg-Dark');

    switcher.dynamicBgDarkPrimaryColor(dynamicPrimaryBgDark, this.color4);
    localStorage.setItem('Adminortransparent-bg-color', this.color4);
    let BgDark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    BgDark.checked = false;


    // Removing
    localStorage.removeItem('AdminorLightTheme');
    this.body?.classList.remove('light-mode');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');
    document
      .querySelector('.app-header')
      ?.classList.add(
        'hor-header',
        'fixed-header',
        'visible-title',
        'stickyClass'
      );

    localStorage.removeItem('Adminorlight-primary-color');
    localStorage.removeItem('Adminorlight-primary-hover');
    localStorage.removeItem('Adminorlight-primary-border');
    localStorage.removeItem('Adminordark-primary-color');
    localStorage.removeItem('AdminorBgImage');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }
}
