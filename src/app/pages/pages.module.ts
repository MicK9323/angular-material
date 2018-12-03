import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  providers: [],
  exports: [
    DashboardComponent
  ],
})
export class PagesModule {
}
