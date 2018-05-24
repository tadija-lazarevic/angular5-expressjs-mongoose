import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string;
  public testApiUrl: string;

  constructor(private http: Http) {
    this.testApiUrl = 'http://localhost:4300/api/test';
  }

  ngOnInit() {
    return this.http
      .get(this.testApiUrl)
      .map(res => res.json())
      .subscribe(
        data => (this.title = data.message),
        err => (this.title = 'It doesnt work :('),
        () => console.log('yay')
      );
  }
}
