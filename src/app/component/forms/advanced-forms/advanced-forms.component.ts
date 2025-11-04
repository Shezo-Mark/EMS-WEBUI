import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-advanced-forms',
  templateUrl: './advanced-forms.component.html',
  styleUrls: ['./advanced-forms.component.scss'],
})
export class AdvancedFormsComponent {
  // dropzone
  files: File[] = [];
  filesPreview: File[] = [];
  filesDisabled: File[] = [];
  disable = true;
  fileUploadService: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  //mat teli input
  hasError(error: any) {
    console.log(error);
  }
  getNumber = (error: any) => {
    console.log(error);
  };
  telInputObject(error: any) {
    console.log(error);
  }
  onCountryChange(error: any) {
    console.log(error);
  }

  ////forms
  selectedAccounts = [{ name: 'Adam' }];
  hideselectedAccounts = [{ name: 'Adam' }];

  selectedCars = ['select cars'];
  cars = [
    { id: 0, name: 'Select all', disabled: true },
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  toppings = new FormControl('select all');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  //Items with already grouped children array
  selectedProjects = [];
  projects = [
    {
      id: 'p1',
      title: 'Project A',
      subprojects: [
        { title: 'Subproject 1 of A', id: 's1p1' },
        { title: 'Subproject 2 of A', id: 's2p1' },
      ],
    },
    {
      id: 'p2',
      title: 'Project B',
      subprojects: [
        { title: 'Subproject 1 of B', id: 's1p2' },
        { title: 'Subproject 2 of B', id: 's2p2' },
      ],
    },
  ];

  //Selectable groups
  selectedAccount = [{ country: 'Colombia' }];
  accounts = [
    {
      name: 'Jill',
      email: 'jill@email.com',
      age: 15,
      country: undefined,
      child: { state: 'Active' },
    },
    {
      name: 'Henry',
      email: 'henry@email.com',
      age: 10,
      country: undefined,
      child: { state: 'Active' },
    },
    {
      name: 'Meg',
      email: 'meg@email.com',
      age: 7,
      country: null,
      child: { state: 'Active' },
    },
    {
      name: 'Adam',
      email: 'adam@email.com',
      age: 12,
      country: 'United States',
      child: { state: 'Active' },
    },
    {
      name: 'Homer',
      email: 'homer@email.com',
      age: 47,
      country: '',
      child: { state: 'Active' },
    },
    {
      name: 'Samantha',
      email: 'samantha@email.com',
      age: 30,
      country: 'United States',
      child: { state: 'Active' },
    },
    {
      name: 'Amalie',
      email: 'amalie@email.com',
      age: 12,
      country: 'Argentina',
      child: { state: 'Active' },
    },
    {
      name: 'Estefanía',
      email: 'estefania@email.com',
      age: 21,
      country: 'Argentina',
      child: { state: 'Active' },
    },
    {
      name: 'Adrian',
      email: 'adrian@email.com',
      age: 21,
      country: 'Ecuador',
      child: { state: 'Active' },
    },
    {
      name: 'Wladimir',
      email: 'wladimir@email.com',
      age: 30,
      country: 'Ecuador',
      child: { state: 'Inactive' },
    },
    {
      name: 'Natasha',
      email: 'natasha@email.com',
      age: 54,
      country: 'Ecuador',
      child: { state: 'Inactive' },
      disabled: true,
    },
    {
      name: 'Nicole',
      email: 'nicole@email.com',
      age: 43,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
    {
      name: 'Michael',
      email: 'michael@email.com',
      age: 15,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
    {
      name: 'Nicolás',
      email: 'nicole@email.com',
      age: 43,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
  ];

  compareAccounts = (item: any, selected: any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };
  ///
  cities = [
    {
      id: 1,
      name: 'Vilnius',
      avatar:
        '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
    },
    {
      id: 2,
      name: 'Kaunas',
      avatar:
        '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15',
    },
    {
      id: 3,
      name: 'Pavilnys',
      avatar:
        '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15',
    },
    {
      id: 4,
      name: 'Siauliai',
      avatar:
        '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
    },
  ];
  selectedCity = this.cities[1].name;

  //DropZone
  onSelect(event: any) {
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  imgdata = ['./assets/img/users/7.jpg'];
 
  //    file.io
  // Variable to store shortLink from api response
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  fileUpload: File | any = null; // Variable to store fileUpload
  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    // console.log(this.fileUpload);
    this.fileUploadService.upload(this.fileUpload).subscribe((event: any) => {
      if (typeof event === 'object') {
        // Short link via api response
        this.shortLink = event.link;

        this.loading = false; // Flag variable
      }
    });
  }
}
