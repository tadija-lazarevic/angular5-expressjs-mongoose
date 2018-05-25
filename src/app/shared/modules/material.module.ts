import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
