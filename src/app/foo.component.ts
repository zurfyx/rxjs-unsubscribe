import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foo',
  templateUrl: 'foo.component.html'
})
export class FooComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient) {}

  ngOnInit()  {
    console.info('[Foo] Loaded');
    this.http.get('//localhost:3000').subscribe((val) => {
      console.info(`[Foo] Response: ${val}`);
    });
  }

  ngOnDestroy() {
    console.info('[Foo] Destroyed');
  }
}
