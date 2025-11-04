import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostHostService } from 'src/app/domain/services/posthost.service';
import { FileUploadService } from 'src/app/domain/services/file-upload.service';
import { JobService } from 'src/app/domain/services/job.service ';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  curdBtnIsList: boolean = true;
  isEdit: boolean = false;

  postHostList: any[] = [];
  jobDescriptionList: any[] = [];
  cvList: any[] = [];

  cvForm!: FormGroup;

 constructor(
    private fb: FormBuilder,
    private posthostService: PostHostService,
    private jobService: JobService,
    private fileUploadService: FileUploadService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
   this.cvForm = this.fb.group({
  id: [0],
  cvCount: ['', [Validators.required, Validators.min(1)]], 
  postHostId: [null, Validators.required],
  jobDescriptionId: [null, Validators.required]
});


    this.loadPostHosts();
    this.getjobDescriptions();
    this.loadCVs();
  }

 changeCurdView(isList: boolean): void {
    this.curdBtnIsList = isList;
    this.isEdit = false;
  }

  loadPostHosts(): void {
    this.posthostService.getall().subscribe((res: any) => {
      this.postHostList = res.data || res;
    });
  }
  getPostHostName(id: string): string {
    const item = this.postHostList.find((x) => x.postHostId === id);
    return item ? item.postHostName : '';
  }

  getjobDescriptions() {
    this.jobService.getall().subscribe({
      next: (result) => {
        debugger;
        this.jobDescriptionList = [];
        this.jobDescriptionList = result.data;
      },
      error: (err: any) => {
        this.toast.error(err.message);
      },
    });
  }
   loadCVs(): void {
    this.fileUploadService.getAllCVs().subscribe({
      next: (res) => {
        this.cvList = res.data || [];
      },
      error: (err) => {
        this.toast.error('Error loading CVs');
      }
    });
  }
   onSubmit(): void {
    if (this.cvForm.invalid) return;

    this.fileUploadService.addCV(this.cvForm.value).subscribe({
      next: (res) => {
        this.toast.success('CV saved successfully!');
        this.cvForm.reset({ id: 0 });
        this.loadCVs();
        this.changeCurdView(true);
      },
      error: (err) => {
        this.toast.error('Failed to save CV');
      }
    });
  }
}
