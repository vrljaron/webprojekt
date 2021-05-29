import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitedCardComponent } from './visited-card.component';
import { EvidenceCardModule } from '../../evidence/card/evidence-card.module';
import { VisitedListRoutingModule } from './visited-list-routing.module';

@NgModule({
  declarations: [
    VisitedCardComponent
  ],
  imports: [
    CommonModule, EvidenceCardModule, VisitedListRoutingModule
  ],
  exports: [VisitedCardComponent]
})
export class VisitedCardModule { }
