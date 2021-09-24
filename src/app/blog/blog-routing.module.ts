import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {FavoriteCleanCodePrinciplesComponent} from "./articles/favorite-clean-code-principles/favorite-clean-code-principles.component";

const routes: Routes = [{
  path: '',
  component: BlogComponent

}, {
  path: 'favorite-clean-code-principles',
  component: FavoriteCleanCodePrinciplesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
