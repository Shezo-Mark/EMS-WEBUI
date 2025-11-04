import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
 public emailPatteren='[a-zA-Z0-9.-_+]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  generateRandomCode(length: number) {
    let code = 'TEMP';
    for (let i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
    }
    return code;
  }
  calculate_age(dob: any) {
    let dateofbirth = new Date(dob);
    var diff_ms = Date.now() - dateofbirth.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  sortByProperty(values: any[], orderType: any) {
    return values.sort((a, b) => {
      if (a[orderType] < b[orderType]) {
        return -1;
      }

      if (a[orderType] > b[orderType]) {
        return 1;
      }

      return 0;
    });
  }
  isMobile():boolean{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      return true;
    }
    return false
  }
}
