import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  loading: boolean = false; // Flag variable

  
  selectedCompanies: any;
  companies: any[] = [];
  companiesNames = ['Uber', 'Microsoft', 'Flexigen'];

  addTagPromise(name: any) {
    return new Promise((resolve) => {
      this.loading = true;
      // Simulate backend call.
      setTimeout(() => {
        resolve({ id: 5, name: name, valid: true });
        this.loading = false;
      }, 1000);
    });
  }
}
