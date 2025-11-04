import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiUrl = 'http://localhost:5086/api/File';

  constructor(private http: HttpClient) {}

  addCV(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  getAllCVs(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
