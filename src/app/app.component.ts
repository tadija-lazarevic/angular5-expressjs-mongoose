import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: Http) {}

  ngOnInit() {
    return this.http.get('http://localhost:4300/api/user').subscribe(res => {
      console.log(res);
    });
  }
}
