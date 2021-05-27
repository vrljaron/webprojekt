import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceAddComponent } from './evidence-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    EvidenceAddComponent
  ],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [EvidenceAddComponent]
})
export class EvidenceAddModule { }
