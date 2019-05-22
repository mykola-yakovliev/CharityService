import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const ROUTES: Routes = [
    {
        path: appRoutes.ProjectList.fullPath,
        component: ProjectListComponent
    },
    {
        path: appRoutes.ProjectDetails.fullPath,
        component: ProjectDetailsComponent
    },
    {
        path: appRoutes.PaymentPage.fullPath,
        component: PaymentPageComponent
    },
    {
        path: appRoutes.ThankYouPage.fullPath,
        component: ThankYouComponent
    },
    {
        path: '**',
        redirectTo: appRoutes.ProjectList.fullPath
    }
];
