import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OnboardingService } from 'src/app/domain/services/onboarding.service';
import { StateService } from 'src/app/domain/services/state.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit{
 companyList: any[] = [];


 constructor(
   private onboard: OnboardingService,
    private toast: ToastrService,
     private router: Router,
     private stateService: StateService
 ) {}

  ngOnInit(): void {
    this.companyName();
  }
  companyName() {
    this.onboard.getAll().subscribe({
      next: (result) => {
        this.companyList = result.data;
        console.log( "Check Data" ,this.companyList);
      },
      error: (err: any) => {
         this.toast.error(err.message);
      },
    });
  }

openJobDescription(item: any) {
  this.stateService.setSelectedCompany(item);
  this.stateService.setOpenedFromCompany(true);
  this.router.navigate(['/job-description/jd']);
}

}
