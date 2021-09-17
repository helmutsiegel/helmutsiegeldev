import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent,
    AboutMeComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
