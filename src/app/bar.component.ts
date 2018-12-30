import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar',
  templateUrl: 'bar.component.html'
})
export class BarComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit()  {
    this.http.get('//localhost:3000').subscribe((val) => {
      console.info(`[Bar] Response: ${val}`);
    });
  }
}
