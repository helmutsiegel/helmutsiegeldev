import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog/blog.component';
import {FavoriteCleanCodePrinciplesComponent} from './articles/favorite-clean-code-principles/favorite-clean-code-principles.component';
import {SoftwareEngineerVocabularyComponent} from './articles/software-engineer-vocabulary/software-engineer-vocabulary.component';


@NgModule({
  declarations: [
    BlogComponent,
    FavoriteCleanCodePrinciplesComponent,
    SoftwareEngineerVocabularyComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
  ],
})
export class BlogModule {
}
