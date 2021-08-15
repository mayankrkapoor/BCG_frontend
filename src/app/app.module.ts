import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PolicyMetricsComponent } from './components/policy-metrics/policy-metrics.component';
import { ChartsModule } from 'ng2-charts';
import { PolicySearchComponent } from './components/policy-search/policy-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyDetailsComponent,
    PolicyListComponent,
    PolicyMetricsComponent,
    PolicySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
