import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { JobProfileFormComponent } from './job-profile-form/job-profile-form.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
