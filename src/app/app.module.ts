import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EduHomeComponent } from './educare/edu-home/edu-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextComponentComponent } from './text-component/text-component.component';
import { OptionBoxComponent } from './option-box/option-box.component';
import { JobSeekerFormComponent } from './job-seeker-form/job-seeker-form.component';
import { JobProfileFormComponent } from './job-profile-form/job-profile-form.component';
import { JobProfileMatchComponent } from './job-profile-match/job-profile-match.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppLoginComponent } from './app-login/app-login.component';
import { JobListComponent } from './job-list/job-list.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvMatchComponent } from './cv-match/cv-match.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeContainerComponent,
    TopBarComponent,
    EduHomeComponent,
    TextComponentComponent,
    OptionBoxComponent,
    JobSeekerFormComponent,
    JobProfileFormComponent,
    JobProfileMatchComponent,
    TopMenuComponent,
    AppLoginComponent,
    JobListComponent,
    CvListComponent,
    CvMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
