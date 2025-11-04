import { Routes } from "@angular/router";

export const landing_page_Routes: Routes = [
    {
        path: 'landing-page',
        loadChildren: ()=> import('src/app/component/landing-page/landing-page.module').then(m => m.LandingPageModule)
    }
];