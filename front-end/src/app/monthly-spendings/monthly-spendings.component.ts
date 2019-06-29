import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-spendings',
  templateUrl: './monthly-spendings.component.html',
  styleUrls: ['./monthly-spendings.component.css']
})
export class MonthlySpendingsComponent implements OnInit {

  isSaving: boolean;
  costs: any;
  savedMoneyPerMonth: number;
  result: any;

  constructor(private httpService: HttpRequestService, private router: Router) { }

  ngOnInit() {
    this.result = this.httpService.getMonthlySpendings();

    if(this.result) {
      this.costs = this.result.dividedCosts;
      this.savedMoneyPerMonth = this.result.savedMoneyPerMonth;
      this.isSaving = (this.savedMoneyPerMonth > 0);
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
