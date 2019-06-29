import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthlySpendingsComponent } from './monthly-spendings/monthly-spendings.component';

const routes: Routes = [{
  path: 'details', component: MonthlySpendingsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
