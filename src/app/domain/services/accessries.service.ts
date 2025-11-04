import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AccessriesService {
  
  private apiUrl = 'api/Accessories';
  constructor(private http: HttpRequestService, private toast: ToastrService) {}

  
  getAllAccessories() {
    return this.http.get(`${this.apiUrl}/GetAllAccessories`);
  }
  
  

  // 2) Create Accessory
  createAccessory(accessory: any) {
    return this.http.post(`${this.apiUrl}/Create`, accessory);
  }

  // 3) Update Accessory
  update(accessory: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Update`, accessory);
  }

  // 4) Activate Accessory by Id
  activate(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/Active/${id}`, {});
  }

  // 5) Delete Accessory by Id
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Delete/${id}`);
  }


  saveAccessories(accessories: any[]): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateMultiple`, accessories);
  }
  
}
