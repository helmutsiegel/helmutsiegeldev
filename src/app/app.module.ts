import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LanguagesComponent } from './languages/languages.component';
import { CertificationsComponent } from './certifications/certifications.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent,
    AboutMeComponent,
    LanguagesComponent,
    CertificationsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
