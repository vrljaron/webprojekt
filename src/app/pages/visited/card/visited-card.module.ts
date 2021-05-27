import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitedCardComponent } from './visited-card.component';
import { EvidenceCardModule } from '../../evidence/card/evidence-card.module';
import { VisitedCardRoutingModule } from './visited-card-routing.module';

@NgModule({
  declarations: [
    VisitedCardComponent
  ],
  imports: [
    CommonModule, EvidenceCardModule, VisitedCardRoutingModule
  ],
  exports: [VisitedCardComponent]
})
export class VisitedCardModule { }
