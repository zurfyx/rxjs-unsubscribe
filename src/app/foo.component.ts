import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foo',
  templateUrl: 'foo.component.html'
})
export class FooComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit()  {
    this.http.get('//localhost:3000').subscribe((val) => {
      console.info(`[Foo] Response: ${val}`);
    });
  }
}
