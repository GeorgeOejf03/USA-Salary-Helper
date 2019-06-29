import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-insights',
  templateUrl: './salary-insights.component.html',
  styleUrls: ['./salary-insights.component.css']
})
export class SalaryInsightsComponent implements OnInit {
  listVlaues: any;

  constructor(private httpService: HttpRequestService, private router: Router) { }

  ngOnInit() {
    this.listVlaues = {};
    this.httpService.getSalaryData()
      .subscribe((response) => {
        this.listVlaues = response;
      });
  }


  onSubmit(form) {
    this.httpService.getSpendings(form.value)
      .subscribe((result) => {
        this.httpService.setMonthlySpendings(result);
        this.router.navigateByUrl('/details');
      });
  }

}
