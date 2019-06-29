import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'USA Salary Helper';
  window: object;

  ngOnInit() {
    this.window = window;
  }
}
