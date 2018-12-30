import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar',
  templateUrl: 'bar.component.html'
})
export class BarComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient) {}

  ngOnInit()  {
    console.info('[Bar] Loaded');
    this.http.get('//localhost:3000').subscribe((val) => {
      console.info(`[Bar] Response: ${val}`);
    });
  }

  ngOnDestroy() {
    console.info('[Bar] Destroyed');
  }
}
