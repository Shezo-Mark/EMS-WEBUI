import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) { }

  loadConfig(): Promise<void> {
    return this.http.get<any>('assets/config.json')
      .toPromise()
      .then((config) => this.config = config)
      .catch(() => console.error('Error loading configuration file.'));
  }

  get baseApiUrl(): string {
    return this.config?.baseApiUrl || '';
  }
  get projectTitle(): string {
    return this.config?.projectTitle || '';
  }
  // getFormattedData(data:any) {
  //   if(data){
  //     // let jdata=JSON.parse(data);
  //     // let mydt=jdata.filter((n: any) => n !== null);
  //     // return mydt;
  //     try {
  //       // Try parsing the data
  //       const parsed = JSON.parse(data);
  //       // If parsed is an array, filter out nulls
  //       if (Array.isArray(parsed)) {
  //         return parsed.filter((item: any) => item !== null);
  //       }
    
  //       // If it's not an array, return it as-is
  //       return parsed;
  //     } catch (e) {
  //       // If data is not valid JSON, just return it as-is
  //       let mydata:any[]=[];
  //       mydata.push(data);
  //       return mydata.filter((item: any) => item !== null);
  //     }
    
  //   }else{
  //     return null;
  //   }
    
  // }
// getFormattedData(data: any): any {
//   if (!data) return null;

//   const tryParseAndClean = (input: any): any => {
//     try {
//       const parsed = JSON.parse(input);
//       return Array.isArray(parsed) ? parsed.filter((item: any) => item !== null) : parsed;
//     } catch (e) {
//       if (Array.isArray(input)) {
//         return input.filter((item: any) => item !== null);
//       }
//       return input;
//     }
//   };

//   // If it's an object with multiple fields, process each
//   if (typeof data === 'object' && !Array.isArray(data)) {
//     const result: any = {};
//     for (const key of Object.keys(data)) {
//       result[key] = tryParseAndClean(data[key]);
//     }
//     return result;
//   }

//   // If it's a single field, just process it directly
//   return tryParseAndClean(data);
// }
getFormattedData(data: any, requiredFields: string[] = []): any[] | any {
  if (!data) return null;

  try {
    const parsed = JSON.parse(data);

    if (Array.isArray(parsed)) {
      return parsed.filter((item: any) => {
        if (item === null || typeof item !== 'object') return false;

        // Check if all required fields are present and non-null
        if (requiredFields.length > 0) {
          return requiredFields.every(field => item[field] !== null && item[field] !== undefined);
        }

        return true;
      });
    }

    // Not an array, return as-is if it satisfies field requirement
    if (requiredFields.length > 0 && typeof parsed === 'object') {
      const isValid = requiredFields.every(field => parsed[field] !== null && parsed[field] !== undefined);
      return isValid ? parsed : null;
    }
    

    return parsed;
  } catch (e) {
    // If not valid JSON, treat it as single item
    const fallbackArray: any[] = [data];

    return fallbackArray.filter((item: any) => {
      if (item === null || typeof item !== 'object') return false;

      if (requiredFields.length > 0) {
        return requiredFields.every(field => item[field] !== null && item[field] !== undefined);
      }

      return true;
    });
  }
}

}
