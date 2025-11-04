import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponseModel } from '../models/api-response.model';
import { UserModel } from '../models/user.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  baseApiUrl: any;
  userDetails: UserModel | null = null;
  pageTitle = new BehaviorSubject<string>('');
  constructor(
    private titleService: Title,
    private httpClient: HttpClient,
    private route: Router,
    private configService:ConfigService) {
    this.baseApiUrl =this.configService.baseApiUrl;
  }
    ///HTTP Post Method
    post(relativeUrl: string, body: any): Observable<ApiResponseModel> {
      let absoluteUrl = `${this.baseApiUrl}${relativeUrl}`;
      return this.httpClient.post<ApiResponseModel>(absoluteUrl, JSON.stringify(body));
    }
    put(relativeUrl: string, body: any): Observable<ApiResponseModel> {
      let absoluteUrl = `${this.baseApiUrl}${relativeUrl}`;
      return this.httpClient.put<ApiResponseModel>(absoluteUrl, JSON.stringify(body));
    }
    delete(relativeUrl: string): Observable<ApiResponseModel>{
      let absoluteUrl = `${this.baseApiUrl}${relativeUrl}`;
      return this.httpClient.delete<ApiResponseModel>(absoluteUrl);
    }
    deleteWithParams(relativeUrl: string, params? : HttpParams): Observable<ApiResponseModel>{
      let absoluteUrl = `${this.baseApiUrl}${relativeUrl}`;
      return this.httpClient.delete<ApiResponseModel>(absoluteUrl, {params});
    }
  get(relativeUrl: string, id?: number | null): Observable<ApiResponseModel>;
  get(relativeUrl: string, params: { name: string, value: any }[] | null): Observable<ApiResponseModel>;
  get(relativeUrl: string, arg: { name: string, value: any }[] | number | null = null): Observable<ApiResponseModel> {
    if (Array.isArray(arg) && arg.length > 0) {
      let argArray = arg.filter(x => x.value);
      argArray.forEach((item, index) => {
        if (index == 0) {
          relativeUrl = `${relativeUrl}?${item.name}=${item.value}`;
          return;
        }
        relativeUrl = `${relativeUrl}&${item.name}=${item.value}`;
      })
    } else if (arg != null) {
      relativeUrl = `${relativeUrl}/${arg}`
    }
    let absoluteUrl = `${this.baseApiUrl}${relativeUrl}`;
    return this.httpClient.get<ApiResponseModel>(absoluteUrl);
  }
  setTitle(newTitle: string) {
    setTimeout(() => {
      const title =
        (this.route.url.split('/')[1]
          ? this.route.url.split('/')[1].toUpperCase() + ' / '
          : '') + newTitle;
      this.pageTitle.next(title);
    }, 200);

    this.titleService.setTitle(newTitle + ' | ' + this.configService?.projectTitle);
  }

  groupBy(array: Array<any>, field: string) {
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
}
