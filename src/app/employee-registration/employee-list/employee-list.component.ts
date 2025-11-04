import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LovService } from 'src/app/domain/services/Lov.service';
import { DocumentService } from 'src/app/domain/services/document.service';
import { EmployeeService } from 'src/app/domain/services/employee.service';
import { TeacherService } from 'src/app/domain/services/teacher.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import { DocumentModel } from 'src/app/shared/models/document.Model';
import { v4 as uuidv4 } from 'uuid';
import { DocumentTableNameEnum, FilePathEnum } from 'src/app/shared/Enum/documentTableName-enum';
import { employeeServiceDocumentService } from 'src/app/domain/services/employee-document.service';
import { ConfigService } from 'src/app/shared/services/config.service';
declare var require: any;
const Swal = require('sweetalert2');
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [DatePipe]
})
export class EmployeeListComponent {
  public teacherForm!: FormGroup;
  documentUploader: any = {};
  modelType: any = {};
  submitted = false;
  curdBtnIsList:boolean = true;
  gridList: any[] = [];
  pagination:any = paginationEnum;
  genderList: any[] = [];
  dateofJoiningDatePicker: { day?: number; month: number; year: number };
  dateofBirthDatePicker: { day?: number; month: number; year: number };
  isEdit:boolean=false;
  searchText:string='';
  tempEmployeeId: string='';
  employeesList: any[]=[];
  model: DocumentModel = new DocumentModel();
  widthDrawForm!: FormGroup;
  selectedDocumentId: any;
  attachmentList: any[] = [];
  getAttachment: any[] = [];
  baseUrl: any = this.configService.baseApiUrl;
  FilePath: any = FilePathEnum;
  constructor(
    private modalService: NgbModal,
    private readonly fb: FormBuilder,
    private readonly toast: ToastrService,
    private LovServ: LovService,
    private readonly teacherSrv:TeacherService,
    private readonly documentService:DocumentService,
    private readonly employeeDocumentService:employeeServiceDocumentService,
    private readonly employeeService: EmployeeService,
    private readonly configService:ConfigService,
    private authSrv: AuthService
  ) {
    this.teacherForm = this.fb.group({
      teacherId: uuidv4(),
      firstName: ["", Validators.required],
      middleName: [""],
      lastName: ["", Validators.required],
      teacherEmail: ["", Validators.required],
      teacherPhoneNo: ["", Validators.required],

    });
    this.dateofBirthDatePicker = {
      day: 1,
      month: 1,
      year: new Date().getFullYear(),
    };
    this.dateofJoiningDatePicker = {
      day: 1,
      month: 1,
      year: new Date().getFullYear(),
    };
  }
  ngOnInit(): void {
    this.getEmployees();
    this.getEmployeeDocument();
  }
  openScrollableContentMd(ScroleContent: any, employeeId: string) {
    this.modalService.open(ScroleContent);
    this.tempEmployeeId = employeeId;
  }
  uploadEmployeeDocument(DocumentModel: DocumentModel): void {

    this.documentService.employeeUploadDocument(DocumentModel).subscribe({
      next: (result) => {
        this.toast.success(result.message);
        this.selectedDocumentId = null;
        this.getUploadDocument();
        this.documentUploader.target.value = '';
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getUploadDocument(): void {
    debugger;
    this.documentService
      .getEmployeeDocument(DocumentTableNameEnum.Employee, this.tempEmployeeId)
      .subscribe({
        next: (result) => {
          debugger;
          this.getAttachment = result.data;
        },
        error: (err: any) => {
          this.toast.error(err?.error?.message);
        },
      });
  }
  getEmployeeDocument(): void {
    this.employeeDocumentService.getDocuments().subscribe({
      next: (result) => {
        this.attachmentList = result.data;
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  setDefaultTime(){
    this.dateofBirthDatePicker = {
      day: 1,
      month: 1,
      year: new Date().getFullYear(),
    };
    this.dateofJoiningDatePicker = {
      day: 1,
      month: 1,
      year: new Date().getFullYear(),
    };
  }
  get basicFormControl() {
    return this.teacherForm.controls;
  }
  onPageChange(event: any) {
    
    this.pagination.pageNo = event;
    this.getEmployees();
    // You can perform any necessary actions with the selected page number here
  }
  onSearchText(){
    this.pagination.pageNo=1;
    this.pagination.pageSize=10;
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getEmployees(
      this.pagination.pageNo,
        this.pagination.pageSize,
        this.searchText
    ).subscribe({
      next: (result) => {
        this.employeesList = result.data;
        this.pagination.totalCount = result.data[0]?.totalRecords || 0;
      },
      error: (err: any) => {
        this.toast.error(err.message);
      },
    });
  }
  changeCurdView(bitVal: boolean) {
    this.curdBtnIsList = bitVal;
    this.isEdit=false;
  }
  setValueToForm(row: any) {
    this.teacherForm.controls['teacherId'].setValue(row.teacherId);
    this.teacherForm.controls['branchId'].setValue(row.branchId);
    this.teacherForm.controls['firstName'].setValue(row.firstName);
    this.teacherForm.controls['middleName'].setValue(row.middleName);
    this.teacherForm.controls['lastName'].setValue(row.lastName);
    this.teacherForm.controls['teacherEmail'].setValue(row.teacherEmail);
    // this.teacherForm.controls['nationality'].setValue(row.nationality);
    // let FormatedateOfBirth = this.datePipe.transform(row?.dateOfBirth,"yyyy-MM-dd");
    // let splitdateOfBirth:any = FormatedateOfBirth?.split('-');
    // this.dateofBirthDatePicker.year = Number(splitdateOfBirth[0]);
    // this.dateofBirthDatePicker.month = Number(splitdateOfBirth[1]);
    // this.dateofBirthDatePicker.day = Number(splitdateOfBirth[2]);
    // let FormatedateOfJoining = this.datePipe.transform(row?.dateOfJoining,"yyyy-MM-dd");
    // let splitdateOfJoining:any = FormatedateOfJoining?.split('-');
    // this.dateofJoiningDatePicker.year = Number(splitdateOfJoining[0]);
    // this.dateofJoiningDatePicker.month = Number(splitdateOfJoining[1]);
    // this.dateofJoiningDatePicker.day = Number(splitdateOfJoining[2]);
    this.teacherForm.controls['teacherPhoneNo'].setValue(row.teacherPhoneNo);
    // this.teacherForm.controls['religion'].setValue(row.religion);
    // this.teacherForm.controls['genderId'].setValue(row.genderId);
    // this.teacherForm.controls['streetName'].setValue(row.streetName);
    // this.teacherForm.controls['houseNo'].setValue(row.houseNo);
    // this.teacherForm.controls['area'].setValue(row.area);
    // this.teacherForm.controls['zone'].setValue(row.zone);
    // this.teacherForm.controls['address'].setValue(row.address);
    this.isEdit=true;
    this.curdBtnIsList = false;
  }
  formSubmit() {
    
    this.submitted = true;
    if (!this.teacherForm.valid)
      return;
      // let joiningDate = this.dateofJoiningDatePicker.year +'-'+ this.dateofJoiningDatePicker.month +'-'+ this.dateofJoiningDatePicker.day;
      // let dateofBirth = this.dateofBirthDatePicker.year +'-'+ this.dateofBirthDatePicker.month +'-'+ this.dateofBirthDatePicker.day;
      // this.teacherForm.value['dateOfJoining'] = joiningDate;
      // this.teacherForm.value['dateOfBirth'] = dateofBirth;
    this.teacherSrv.saveteacher(this.teacherForm.value).subscribe({
      next: (data: any) => {
        this.teacherForm.reset();

        this.teacherForm.controls['teacherId'].setValue(uuidv4());
        this.toast.success("Teacher  has been Saved.");
        this.isEdit=false;
        this.curdBtnIsList = true;
        this.getEmployees();
        this.setDefaultTime();
      },
      error: (err: any) => {
        this.toast.error(err.error);
      },
    });
  }
  IsActive(row: any) {
    
    this.employeeService.active(row.employeeId).subscribe({
      next: result => {
        if (result.status) {
          this.getEmployees();
          this.toast.success(result.message)
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  formatBytes(bytes: number): string {
    const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = 1024;
    let index = 0;
    while (bytes >= factor) {
      bytes /= factor;
      index++;
    }
    return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
  }
  onSelectAttachment(event: any,employeeDocumentId:any) {
    this.selectedDocumentId=employeeDocumentId;
    if (
      this.selectedDocumentId == null ||
      this.selectedDocumentId == undefined ||
      this.selectedDocumentId == ''
    ) {
      this.toast.warning('Please select document type');
      event.target.value = '';
      return;
    }
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      const file = event.target.files[0];
      let ext = event.target.files[0].name.split('.').pop();
      if (ext !== 'pdf') {
        this.toast.warning('Please select PDF formate file');
        event.target.value = '';
        return;
      }
      let FileName = file.name.split('.').slice(0, -1).join('.');
      let Filesize = this.formatBytes(file.size);
      this.documentUploader = event;
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target) {
          let url = event.target.result;
          this.model.DocumentId = uuidv4();
          this.model.Base64Url = url;
          this.model.DocumentName = FileName;
          this.model.DocumentExtention = ext;
          this.model.DocumentSize = Filesize;
          this.model.LovId = this.selectedDocumentId;
          this.model.Table = DocumentTableNameEnum.Employee;
          this.model.DocumentPath = FilePathEnum.EmployeeDocuments;
          this.model.TableRefrenceId = this.tempEmployeeId;
        }
        this.uploadEmployeeDocument(this.model);
      };
    }
  }
  
  deleteDocument(documentId: string) {
    if (confirm('Are you sure to delete ')) {
      this.documentService.deleteDocument(documentId).subscribe({
        next: (result) => {
          this.toast.success('Deleted SuccessFully');
          this.getUploadDocument();
        },
        error: (err: any) => {
          this.toast.error(err?.error?.message);
        },
      });
    }
  }
}