import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { FavorieCleanCodePrinciplesComponent } from './articles/favorie-clean-code-principles/favorie-clean-code-principles.component';
import { FavoriteCleanCodePrinciplesComponent } from './articles/favorite-clean-code-principles/favorite-clean-code-principles.component';


@NgModule({
  declarations: [
    BlogComponent,
    FavorieCleanCodePrinciplesComponent,
    FavoriteCleanCodePrinciplesComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
