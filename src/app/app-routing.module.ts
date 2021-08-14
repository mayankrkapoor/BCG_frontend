import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PolicyMetricsComponent } from './components/policy-metrics/policy-metrics.component';

const routes: Routes = [
  {path : '', redirectTo: 'policies', pathMatch: 'full'},
  {path : 'policy/:id', component:PolicyDetailsComponent},
  {path : 'policies', component:PolicyListComponent},
  {path : 'create', component:PolicyDetailsComponent},
  {path : 'metrics', component:PolicyMetricsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
