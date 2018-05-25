import { Http, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../shared/snackbar.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private apiUrl: string;

  constructor(private http: Http, private snackbarService: SnackbarService) {
    this.apiUrl = 'http://localhost:4300/api/test';
  }

  ngOnInit() {}

  testAPI() {
    return this.http
      .get(this.apiUrl)
      .map(res => res.json())
      .subscribe(
        data => this.snackbarService.showToaster(data.message),
        err => this.snackbarService.showToaster(err.message),
        () => console.log('yay')
      );
  }
}
