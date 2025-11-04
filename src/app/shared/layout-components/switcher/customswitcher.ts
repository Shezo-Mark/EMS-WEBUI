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
  let lightBtn: any = document.getElementById(
    'myonoffswitch1'
  ) as HTMLInputElement;
  let darkBtn: any = document.getElementById(
    'myonoffswitch2'
  ) as HTMLInputElement;

  let styleId = document.querySelector('#style');
  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.min.css'
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
  
  // Theme
  fromEvent(lightBtn, 'click').subscribe(() => {
    // localStorage.removeItem('AdminorbgImage');
    // // localStorage.removeItem('AdminorBgImage');
    //  localStorage.removeItem('Adminortransparent-primary-color');
    localStorage.removeItem('Adminortransparent-primary-border');
    let lightheader = document.getElementById(
      'myonoffswitch3'
    ) as HTMLInputElement;
    lightheader.checked = true;
    let lightmenu = document.getElementById(
      'myonoffswitch6'
    ) as HTMLInputElement;
    lightmenu.checked = true;

    // localStorage.clear()
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
    // localStorage.clear();
    localStorage.setItem('Adminorlight-theme', 'true');
    localStorage.removeItem('Adminordark-theme');
    // localStorage.removeItem('AdminortransparentTheme');
    // console.log('ok');
  });
  fromEvent(darkBtn, 'click').subscribe(() => {
    let darkheader = document.getElementById(
      'myonoffswitch8'
    ) as HTMLInputElement;
    darkheader.checked = true;
    let darkmenu = document.getElementById(
      'myonoffswitch5'
    ) as HTMLInputElement;
    darkmenu.checked = true;

    // localStorage.removeItem('Adminortransparent-primary-color');
    // localStorage.removeItem('Adminortransparent-primary-border');

    // localStorage.clear()
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

    //localStorage.clear();
    localStorage.setItem('Adminordark-theme', 'true');
    localStorage.removeItem('Adminorlight-theme');
  });
 
 

 
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
  // console.log("myVarVal is ", myVarVal);

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
