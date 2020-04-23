import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AwaitingApprovalComponent } from './shared/awaiting-approval/awaiting-approval.component';
import { FileComponent } from './file/file.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'files', component: FileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'approval', component: AwaitingApprovalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
