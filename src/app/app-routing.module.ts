import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import * as components from './components/index-components';

const routes: Routes = [
  // {path: '', component: components.}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
