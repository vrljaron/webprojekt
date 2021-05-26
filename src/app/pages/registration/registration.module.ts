import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule, MatCardModule,MatButtonModule
  ],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
