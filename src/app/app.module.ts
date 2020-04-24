import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from "@angular/common/http";
import { HomeModule } from './modules/home/home.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';


import { HighchartsChartModule } from 'highcharts-angular';
import { AmountPerPayTypeComponent } from './shared/amount-per-pay-type/amount-per-pay-type.component';
import { SupplierActivationComponent } from './shared/supplier-activation/supplier-activation.component';
import { CampaignCompletionComponent } from './shared/campaign-completion/campaign-completion.component';
import { PaymentVolComponent } from './shared/payment-vol/payment-vol.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CampaignProgressComponent } from './shared/campaign-progress/campaign-progress.component';
import { AwaitingApprovalComponent } from './shared/awaiting-approval/awaiting-approval.component';
import { FileComponent } from './file/file.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaymentComponent,
    AmountPerPayTypeComponent,
    SupplierActivationComponent,
    CampaignCompletionComponent,
    PaymentVolComponent,
    SuppliersComponent,
    CampaignProgressComponent,
    AwaitingApprovalComponent,
    FileComponent,
    ReportComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDividerModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatExpansionModule,
    HttpClientModule,
    HomeModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
