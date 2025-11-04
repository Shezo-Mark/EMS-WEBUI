import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form-wizards',
  templateUrl: './form-wizards.component.html',
  styleUrls: ['./form-wizards.component.scss'],
})
export class FormWizardsComponent {
  //Archwizard Content
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  maxDate!: Date | any;

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Archwizard Content
    this.firstFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
    });

    this.thirdFormGroup = this.fb.group({
      birthdate: ['', Validators.required],
      age: [''],
      hasPassport: ['', Validators.required],
    });
    this.fourthFormGroup = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  public finish() {
    this.toaster.success('Successfully Done!');
  }

  files: File[] = [];

  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
