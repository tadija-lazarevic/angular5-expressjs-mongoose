import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/modules/shared.module';
import { NavComponent } from './nav/nav.component';
import { SnackbarService } from './shared/snackbar.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [NavComponent],
  exports: [NavComponent],
  providers: [SnackbarService]
})
export class CoreModule {}
