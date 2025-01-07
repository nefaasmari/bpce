import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageTestLibComponent} from './pages/page-test-lib/page-test-lib-vue.component';

const routes: Routes = [
  {
    path: '',
    component: PageTestLibComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
