import { Routes } from "@angular/router";
import { AuthGuardService } from "../security/auth-guard.service";

export const content: Routes = [
  {
    path: 'dashboard',
   // canLoad: [AuthGuardService],
    loadChildren: () =>
      import('src/app/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'master-data',
   // canLoad: [AuthGuardService],
    loadChildren: () =>
      import('src/app/master-data/master-data.module').then(
        (m) => m.MasterDataModule
      ),
  },
  {
    path: 'job-description',
   // canLoad: [AuthGuardService],
    loadChildren: () =>
      import('src/app/job-description/job-description.module').then(
        (m) => m.JobDescriptionModule
      ),
  },
  {
    path: 'user-management',
    //canLoad: [AuthGuardService],
    loadChildren: () =>
      import('src/app/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
  },
  // {
  //   path: 'registration',
   
  //   loadChildren: () =>
  //     import('src/app/student-registration/student-registration.module').then(
  //       (m) => m.StudentRegistrationModule
  //     ),
  // },
  {
    path: 'register',
    //canLoad: [AuthGuardService],
    loadChildren: () =>
      import('src/app/employee-registration/employee-registration.module').then(
        (m) => m.EmployeeRegistrationModule
      ),
  },
  {
    path: 'boarding',
    //canLoad: [AuthGuardService],
    loadChildren: () =>
      import('src/app/onboarding/onboarding.module').then(
        (m) => m.OnBoardingModule
      ),
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('src/app/component/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  // {
  //   path: 'advanced-ui',
  //   loadChildren: () =>
  //     import('src/app/component/advance-ui/advance-ui.module').then(
  //       (m) => m.AdvanceUiModule
  //     ),
  // },
  // {
  //   path: 'elements',
  //   loadChildren: () =>
  //     import('src/app/component/elements/elements.module').then(
  //       (m) => m.ElementsModule
  //     ),
  // },
  // {
  //   path: 'apps',
  //   loadChildren: () =>
  //     import('src/app/component/apps/apps.module').then((m) => m.AppsModule),
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () =>
  //     import('src/app/component/forms/forms.module').then((m) => m.FormModule),
  // },
  // {
  //   path: 'charts',
  //   loadChildren: () =>
  //     import('src/app/component/charts/charts.module').then(
  //       (m) => m.ChartsModule
  //     ),
  // },
  {
    path: 'pages',
    loadChildren: () =>
      import('src/app/component/pages/pages.module').then((m) => m.PagesModule),
  },
  // {
  //   path: 'icons',
  //   loadChildren: () =>
  //     import('src/app/component/icons/icons.module').then((m) => m.IconsModule),
  // },
  // {
  //   path: 'ecommerce',
  //   loadChildren: () =>
  //     import('src/app/component/ecommerce/ecommerce.module').then(
  //       (m) => m.EcommerceModule
  //     ),
  // },
  // {
  //   path: 'utilities',
  //   loadChildren: () =>
  //     import('src/app/component/utilities/utilities.module').then(
  //       (m) => m.UtilitiesModule
  //     ),
  // },
];