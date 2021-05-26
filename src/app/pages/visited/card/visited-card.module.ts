import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitedCardComponent } from './visited-card.component';
import { EvidenceCardModule } from '../../evidence/card/evidence-card.module';



@NgModule({
  declarations: [
    VisitedCardComponent
  ],
  imports: [
    CommonModule, EvidenceCardModule
  ],
  exports: [VisitedCardComponent]
})
export class VisitedCardModule { }
