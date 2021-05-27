import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceCardComponent } from './evidence-card.component';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';

@NgModule({
  declarations: [EvidenceCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule
  ],
  exports: [EvidenceCardComponent]
})

export class EvidenceCardModule { }
