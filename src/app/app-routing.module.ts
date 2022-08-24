import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvMatchComponent } from './cv-match/cv-match.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobProfileFormComponent } from './job-profile-form/job-profile-form.component';
import { JobProfileMatchComponent } from './job-profile-match/job-profile-match.component';
import { JobSeekerFormComponent } from './job-seeker-form/job-seeker-form.component';

const routes: Routes = [
  // { path: '/',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
  path: 'home',
  component: HomeContainerComponent
    
  },
  {
  path: 'job-create',
  component: JobProfileFormComponent
}, {
  path: 'cv-create',
  component: JobSeekerFormComponent
  },
  {
    path:'job-list',
    component:JobListComponent
  },
  {
    path:'cv-list',
    component:CvListComponent
  },
  {
    path:'cv-match',
    component:CvMatchComponent
  },
  {
    path:'job-match',
    component:JobProfileMatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
