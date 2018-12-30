import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bar',
  templateUrl: 'bar.component.html'
})
export class BarComponent implements OnInit, OnDestroy {
  subject = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnInit()  {
    console.info('[Bar] Loaded');
    this.http.get('//localhost:3000').subscribe((val) => {
      console.info(`[Bar-bad] Response: ${val}`);
    });
    this.http.get('//localhost:3000').pipe(
      takeUntil(this.subject),
    ).subscribe((val) => {
      console.info(`[Bar-good] Response: ${val}`);
    });
  }

  ngOnDestroy() {
    console.info('[Bar] Destroyed');
    this.subject.next();
    this.subject.complete();
  }
}
