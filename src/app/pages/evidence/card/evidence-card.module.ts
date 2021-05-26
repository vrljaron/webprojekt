import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceCardComponent } from './evidence-card.component';

@NgModule({
  declarations: [EvidenceCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule
  ],
  exports: [EvidenceCardComponent]
})

export class EvidenceCardModule { }
