import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GroupBy {
    groupBy(array: Array<any>, field: string | number) {
        if (array) {
          const groupedObj = array.reduce((prev, cur) => {
            if (!prev[cur[field]]) {
              prev[cur[field]] = [cur];
            } else {
              prev[cur[field]].push(cur);
            }
            return prev; 
          }, {});
          return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
        }
        return [];
      }

     groupByWithValues = (array: any[], property: string, values: any) => {
        return array.reduce((result, item) => {
          const value = item[property];
          if (values.includes(value)) {
            if (!result[value]) {
              result[value] = [];
            }
            result[value].push(item);
          }
          return result;
        }, {});
      };

}