import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-foo',
  templateUrl: 'foo.component.html'
})
export class FooComponent implements OnInit, OnDestroy {
  subject = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnInit()  {
    console.info('[Foo] Loaded');
    this.http.get('//localhost:3000').subscribe((val) => {
      console.info(`[Foo-bad] Response: ${val}`);
    });
    this.http.get('//localhost:3000').pipe(
      takeUntil(this.subject),
    ).subscribe((val) => {
      console.info(`[Foo-good] Response: ${val}`);
    });
  }

  ngOnDestroy() {
    console.info('[Foo] Destroyed');
    this.subject.next();
    this.subject.complete();
  }
}
