import { fromEvent } from 'rxjs';
import * as sidebarFn from '../sidebar/sidebar';

export function localStorageBackUp() {
  let html = document.querySelector('html')?.style;
  let body = document.querySelector('body');
  if (localStorage.getItem('Adminorlight-primary-color') !== null) {
    body?.classList.add('light-theme');
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-theme');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('Adminorlight-primary-color')
    );
    html?.setProperty(
      '--primary-bg-hover',
      localStorage.getItem('Adminorlight-primary-hover')
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('Adminorlight-primary-border')
    );
  }
  if (localStorage.getItem('Adminordark-primary-color') !== null) {
    body?.classList.add('dark-theme');
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;
    body?.classList.remove('light-theme');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('Adminordark-primary-color')
    );
    html?.setProperty(
      '--primary-bg-hover',
      localStorage.getItem('Adminordark-primary-hover')
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('Adminordark-primary-border')
    );
  }
  if (localStorage.getItem('Adminordark-body') !== null) {
    body?.classList.add('dark-theme');
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;

    body?.classList.remove('light-theme');
    html?.setProperty('--dark-body', localStorage.getItem('Adminordark-body'));
  }

  if (localStorage.getItem('AdminorlightTheme') !== null) {
    body?.classList.add('light-theme');
    let light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;
  }
  if (localStorage.getItem('AdminordarkTheme') !== null) {
    body?.classList.add('dark-theme');
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;
  }

  if (localStorage.getItem('Adminortransparent-bg-color') !== null) {
    body?.classList.add('light-theme');
    let dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;

    body?.classList.remove('dark-theme');
    html?.setProperty(
      '--dark-body',
      localStorage.getItem('Adminortransparent-bg-color')
    );
    html?.setProperty(
      '--dark-theme',
      localStorage.getItem('Adminortransparent-primary-hover')
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('Adminortransparent-primary-border')
    );
  }

  

  if (localStorage.getItem('Adminorrtl')) {
    let rtl = document.getElementById('myonoffswitch55') as HTMLInputElement;
    rtl.checked = true;
    let styleId = document.querySelector('#style');
    document.querySelector('body')?.classList.add('rtl');
    document.querySelector('html')?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
  }
  if (localStorage.getItem('Adminorhorizontal') !== null) {
    let horizontal = document.getElementById(
      'myonoffswitch35'
    ) as HTMLInputElement;
    horizontal.checked = true;
    let mainContent: any = document.querySelector('.main-content');
    let mainContainer: any = document.querySelectorAll('.main-container');
    let appSidebar: any = document.querySelector('.app-sidebar');
    let header: any = document.querySelector('.header');
    let mainSidemenu: any = document.querySelector('.main-sidemenu');
    let sideMenu: any = document.querySelector('.horizontal .side-menu');
    //add
    body?.classList.add('horizontal');
    mainContent?.classList.add('hor-content');
    mainContainer.forEach((e: any) => {
      e.classList.add('container');
    });
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e: any) => {
      e.classList.remove('container-fluid');
    });
    header?.classList.remove('app-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');
    body?.classList.remove('horizontal-hover');
    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
   

    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
  }
  if (localStorage.getItem('AdminorhorizontalHover') !== null) {
    let horizontalHover = document.getElementById(
      'myonoffswitch111'
    ) as HTMLInputElement;
    horizontalHover.checked = true;
    let mainContent: any = document.querySelector('.main-content');
    let mainContainer: any = document.querySelectorAll('.main-container');
    let appSidebar: any = document.querySelector('.app-sidebar');
    let header: any = document.querySelector('.header');
    let mainSidemenu: any = document.querySelector('.main-sidemenu');
    let sideMenu: any = document.querySelector('.horizontal .side-menu');
    //add
    body?.classList.add('horizontal');
    body?.classList.add('horizontal-hover');
    mainContent?.classList.add('hor-content');
    mainContainer.forEach((e: any) => {
      e.classList.add('container');
    });
    
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-wrap');
    // remove
    sideMenu?.classList.remove('flex-nowrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e: any) => {
      e.classList.remove('container-fluid');
    });
    header?.classList.remove('app-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');

    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
  }
}

export function handleThemeUpdate(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue: any) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: any, chunkSize: any) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: any, alpha: any) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue: any, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function customClickFn() {
  let body: HTMLBodyElement | any = document.querySelector('body');
  let html: any = document.querySelector('html');
  let ltr: any = document.querySelectorAll('#myonoffswitch54');
  let rtl: any = document.querySelectorAll('#myonoffswitch55');
  let vertical: any = document.querySelectorAll('#myonoffswitch34');
  let horizontal: any = document.querySelectorAll('#myonoffswitch35');
  let horizontalHover: any = document.querySelectorAll('#myonoffswitch111');
  let mainContainer: any = document.querySelectorAll('.main-container');
  let defaultTheme: any = document.querySelector('#myonoffswitch9');
  let boxed: any = document.querySelector('#myonoffswitch10');
  let fixedLayout: any = document.querySelector('#myonoffswitch11');
  let scrollableLayout: any = document.querySelector('#myonoffswitch12');
  let mainContent: any = document.querySelector('.main-content');
  let appSidebar: any = document.querySelector('.app-sidebar');
  let header: any = document.querySelector('.header');
  let mainSidemenu: any = document.querySelector('.main-sidemenu');
  let lightBtn: any = document.getElementById(
    'myonoffswitch1'
  ) as HTMLInputElement;
  let darkBtn: any = document.getElementById(
    'myonoffswitch2'
  ) as HTMLInputElement;
  let sideMenu: any = document.querySelector('.horizontal .side-menu');
  let lightMenu: any = document.querySelector('#myonoffswitch3');
  let colorMenu: any = document.querySelector('#myonoffswitch4');
  let darkMenu: any = document.querySelector('#myonoffswitch5');
  // let gradientMenu: any = document.querySelector('#myonoffswitch25');
  let lightHeader: any = document.querySelector('#myonoffswitch6');
  let darkHeader: any = document.querySelector('#myonoffswitch8');
  // let gradientHeader: any = document.querySelector('#myonoffswitch26');
  let colorHeader: any = document.querySelector('#myonoffswitch7');

  let styleId = document.querySelector('#style');
  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.css'
    );
    //remove
    body?.classList.remove('rtl');
    sidebarFn.checkHoriMenu();
    localStorage.setItem('Adminorltr', 'true');
    localStorage.removeItem('Adminorrtl');
  });
  // RTL
  fromEvent(rtl, 'click').subscribe(() => {
    //add
    body?.classList.add('rtl');
    html?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();
    localStorage.setItem('Adminorrtl', 'true');
    localStorage.removeItem('Adminorltr');
  });
  // Layouts
  fromEvent(vertical, 'click').subscribe(() => {
    
    //add
    mainContent?.classList.add('app-content');
    mainContainer.forEach((e: any) => {
      e.classList.add('container-fluid');
    });
    header?.classList.add('app-header');
    body?.classList.add('sidebar-mini');
    //remove
    body?.classList.remove('horizontal');
    body?.classList.remove('horizontal-hover');
    appSidebar?.classList.remove('horizontal-main');
    
    mainContent?.classList.remove('hor-content');
    header?.classList.remove('hor-header');
    document.querySelectorAll('.main-header').forEach((e: any) => {
      e.classList.remove('hor-header');
    });
    document.querySelectorAll('.main-sidemenu').forEach((e: any) => {
      e.classList.remove('container');
    });
     document.querySelectorAll('.main-container').forEach((e: any) => {
       e.classList.remove('container');
     });
    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    localStorage.setItem('AdminorsidebarMini', 'true');
    localStorage.removeItem('Adminorhorizontal');
    localStorage.removeItem('AdminorhorizontalHover');
  });
  fromEvent(horizontal, 'click').subscribe(() => {
    //add
    body?.classList.add('horizontal');
    mainContent?.classList.add('hor-content');
    mainContainer.forEach((e: any) => {
      e.classList.add('container');
    });
    document.querySelectorAll('.main-header').forEach((e: any) => {
      e.classList.add('hor-header');
    });
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e: any) => {
      e.classList.remove('container-fluid');
    });
    header?.classList.remove('app-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');
    body?.classList.remove('horizontal-hover');
    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
    localStorage.setItem('Adminorhorizontal', 'true');
    localStorage.removeItem('AdminorhorizontalHorizontal');
    localStorage.removeItem('AdminorsidebarMini');
  });
  fromEvent(horizontalHover, 'click').subscribe(() => {
    //add
    body?.classList.add('horizontal');
    body?.classList.add('horizontal-hover');
    mainContent?.classList.add('hor-content');
    mainContainer.forEach((e: any) => {
      e.classList.add('container');
    });
    // console.log(mainContainer);
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e: any) => {
      e.classList.remove('container-fluid');
    });
    header?.classList.remove('app-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');

    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
   
    localStorage.setItem('AdminorhorizontalHover', 'true');
    localStorage.removeItem('Adminorhorizontal');
    localStorage.removeItem('AdminorsidebarMini');
  });

  
  // Theme
  if (lightBtn) {
    fromEvent(lightBtn, 'click').subscribe(() => {
     
      localStorage.removeItem('Adminortransparent-primary-border');
      let lightheader = document.getElementById(
        'myonoffswitch3'
      ) as HTMLInputElement;
      lightheader.checked = true;
      let lightmenu = document.getElementById(
        'myonoffswitch6'
      ) as HTMLInputElement;
      lightmenu.checked = true;
  
      lightBtn.checked = true;
      document.documentElement.style.setProperty(
        '--primary-bg-color',
        'var(--primary)'
      );
      document.documentElement.style.setProperty(
        '--primary02',
        'rgba(var(--primary),0.2)'
      );
      document.documentElement.style.setProperty('--primary0', 'var(--primary)');
      // add
      document.querySelector('body')?.classList.add('light-theme');
      // remove
      document.querySelector('body')?.classList.remove('dark-theme');
      localStorage.setItem('Adminorlight-theme', 'true');
      localStorage.removeItem('Adminordark-theme');
    });
  }
  if (darkBtn) {
    fromEvent(darkBtn, 'click').subscribe(() => {
      let darkheader = document.getElementById(
        'myonoffswitch8'
      ) as HTMLInputElement;
      darkheader.checked = true;
      let darkmenu = document.getElementById(
        'myonoffswitch5'
      ) as HTMLInputElement;
      darkmenu.checked = true;


      darkBtn.checked = true;
      document.documentElement.style.setProperty(
        '--primary-bg-color',
        'var(--primary)'
      );
      document.documentElement.style.setProperty(
        '--primary02',
        'rgba(var(--primary),0.2)'
      );
      document.documentElement.style.setProperty('--primary0', 'var(--primary)');

      localStorage.removeItem('Adminorlight-primary-border');

      // add
      document.querySelector('body')?.classList.add('dark-theme');
      // remove
      document.querySelector('body')?.classList.remove('light-theme');

      localStorage.setItem('Adminordark-theme', 'true');
      localStorage.removeItem('Adminorlight-theme');
    });
  }
  // layout width  style
  if (defaultTheme) {
    fromEvent(defaultTheme, 'click').subscribe(() => {
      body?.classList.add('layout-fullwidth');
      body?.classList.remove('layout-boxed');
      sidebarFn.checkHoriMenu();
    });
  }
  if (boxed) {
    fromEvent(boxed, 'click').subscribe(() => {
      body?.classList.add('layout-boxed');
      body?.classList.remove('layout-fullwidth');
      sidebarFn.checkHoriMenu();
    });
  }
  // layout position
  if (fixedLayout) {
    fromEvent(fixedLayout, 'click').subscribe(() => {
      body?.classList.add('fixed-layout');
      body?.classList.remove('scrollable-layout');
    });
  }
  if (scrollableLayout) {
    fromEvent(scrollableLayout, 'click').subscribe(() => {
      body?.classList.add('scrollable-layout');
      body?.classList.remove('fixed-layout');
    });
  }
  // menu
  if (lightMenu) {
    fromEvent(lightMenu, 'click').subscribe(() => {
      body?.classList.add('light-menu');
      body?.classList.remove('color-menu');
      body?.classList.remove('dark-menu');
      body?.classList.remove('gradient-menu');
    });
  }
  if (colorMenu) {
    fromEvent(colorMenu, 'click').subscribe(() => {
      body?.classList.add('color-menu');
      body?.classList.remove('light-menu');
      body?.classList.remove('dark-menu');
      body?.classList.remove('gradient-menu');
    });
  }
  if (darkMenu) {
    fromEvent(darkMenu, 'click').subscribe(() => {
      body?.classList.add('dark-menu');
      body?.classList.remove('color-menu');
      body?.classList.remove('light-menu');
      body?.classList.remove('gradient-menu');
    });
  }

  // header
  if (lightHeader) {
    fromEvent(lightHeader, 'click').subscribe(() => {
      body?.classList.add('light-header');
      body?.classList.remove('color-header');
      body?.classList.remove('gradient-header');
      body?.classList.remove('dark-header');
    });
  }
  if (darkHeader) {
    fromEvent(darkHeader, 'click').subscribe(() => {
      body?.classList.add('dark-header');
      body?.classList.remove('light-header');
      body?.classList.remove('color-header');
      body?.classList.remove('gradient-header');
    });
  }
  if (colorHeader) {
    fromEvent(colorHeader, 'click').subscribe(() => {
      body?.classList.add('color-header');
      body?.classList.remove('light-header');
      body?.classList.remove('dark-header');
    });
  }
}

export function removeForTransparent() {
  if (document.querySelector('body')?.classList.contains('light-header')) {
    document.querySelector('body')?.classList.remove('light-header');
  }
  // color header
  if (document.querySelector('body')?.classList.contains('color-header')) {
    document.querySelector('body')?.classList.remove('color-header');
  }
  // gradient header
  if (document.querySelector('body')?.classList.contains('gradient-header')) {
    document.querySelector('body')?.classList.remove('gradient-header');
  }
  // dark header
  if (document.querySelector('body')?.classList.contains('dark-header')) {
    document.querySelector('body')?.classList.remove('dark-header');
  }

  // light menu
  if (document.querySelector('body')?.classList.contains('light-menu')) {
    document.querySelector('body')?.classList.remove('light-menu');
  }
  // color menu
  if (document.querySelector('body')?.classList.contains('color-menu')) {
    document.querySelector('body')?.classList.remove('color-menu');
  }
  // gradient menu
  if (document.querySelector('body')?.classList.contains('gradient-menu')) {
    document.querySelector('body')?.classList.remove('gradient-menu');
  }
  // dark menu
  if (document.querySelector('body')?.classList.contains('dark-menu')) {
    document.querySelector('body')?.classList.remove('dark-menu');
  }
}

export function checkOptions() {
  // light header
  if (document.querySelector('body')?.classList.contains('light-header')) {
    let light = document.getElementById('myonoffswitch6') as HTMLInputElement;
    light.checked = true;
  }
  // color header
  if (document.querySelector('body')?.classList.contains('color-header')) {
    let light = document.getElementById('myonoffswitch7') as HTMLInputElement;
    light.checked = true;
  }
  // gradient header
  if (document.querySelector('body')?.classList.contains('gradient-header')) {
    let light = document.getElementById('myonoffswitch26') as HTMLInputElement;
    light.checked = true;
  }
  // dark header
  if (document.querySelector('body')?.classList.contains('dark-header')) {
    let light = document.getElementById('myonoffswitch8') as HTMLInputElement;
    light.checked = true;
  }

  // light menu
  if (document.querySelector('body')?.classList.contains('light-menu')) {
    let light = document.getElementById('myonoffswitch3') as HTMLInputElement;
    light.checked = true;
  }
  // color menu
  if (document.querySelector('body')?.classList.contains('color-menu')) {
    let light = document.getElementById('myonoffswitch4') as HTMLInputElement;
    light.checked = true;
  }
  // gradient menu
  if (document.querySelector('body')?.classList.contains('gradient-menu')) {
    let light = document.getElementById('myonoffswitch25') as HTMLInputElement;
    light.checked = true;
  }
  // dark menu
  if (document.querySelector('body')?.classList.contains('dark-menu')) {
    let light = document.getElementById('myonoffswitch5') as HTMLInputElement;
    light.checked = true;
  }
}

//////Bg Transparent  primary
export function dynamicBgPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    const cssPropName3 = `--primary-${item.getAttribute('data-id9')}`;

    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
      [cssPropName3]: hexToRgba(color),
    });
  });
}

///background dark
export function dynamicBgDarkPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--dark-${item.getAttribute('data-id5')}`;
    const cssPropName2 = `--dark-${item.getAttribute('data-id6')}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color, 0.9),
      [cssPropName2]: hexToRgba(color, 1.2),
    });
  });
}
let myVarVal;
export function updateChanges() {
  let primaryColorVal = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-bg-color')
    .trim();

  //get variable
  myVarVal =
    localStorage.getItem('Adminorlight-primary-color') ||
    localStorage.getItem('Adminordark-primary-color') ||
    localStorage.getItem('Adminortransparent-primary-color') ||
    primaryColorVal;

  let colorData1 = hexToRgba(myVarVal, 0.1);
  document.querySelector('html')?.style.setProperty('--primary01', colorData1);

  let colorData2 = hexToRgba(myVarVal, 0.2);
  document.querySelector('html')?.style.setProperty('--primary02', colorData2);
  let colorData3 = hexToRgba(myVarVal, 0.3);
  document.querySelector('html')?.style.setProperty('--primary03', colorData3);
  let colorData5 = hexToRgba(myVarVal, 0.3);
  document.querySelector('html')?.style.setProperty('--primary05', colorData5);

  let colorData6 = hexToRgba(myVarVal, 0.6);
  document.querySelector('html')?.style.setProperty('--primary06', colorData6);
  let colorData7 = hexToRgba(myVarVal, 0.3);
  document.querySelector('html')?.style.setProperty('--primary07', colorData7);
  let colorData8 = hexToRgba(myVarVal, 0.6);
  document.querySelector('html')?.style.setProperty('--primary08', colorData8);

  let colorData9 = hexToRgba(myVarVal, 0.7);
  document.querySelector('html')?.style.setProperty('--primary09', colorData9);
}
updateChanges();
