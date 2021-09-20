import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog-routing.module').then(m => m.BlogRoutingModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
