import { Component } from '@angular/core';
import { StudentService } from 'src/app/domain/services/student.service';
import { environment } from 'src/environments/environment';
import { FilePathEnum } from '../../Enum/documentTableName-enum';
import { AuthService } from '../../security/auth-service.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent {
  userDetails: any
  public isCollapsed = true;
  loginUserId:any;
  studentDetails:any;
  baseUrl:any = this.configService.baseApiUrl;
  FilePath:any = FilePathEnum;
  constructor(
    public studentService:StudentService,private authService: AuthService,private configService:ConfigService
  ) {
    this.userDetails = this.authService.getUserDetails();
    this.loginUserId = this.userDetails.user.userId;
    this.getStudentDetails();
  }

  getStudentDetails(){
    this.studentService.getStudentBasicInfoByUserId().subscribe({
      next: result => {
        this.studentDetails =  result.data[0];
      },
      error: (err: any) => {},
      });
  }
}
