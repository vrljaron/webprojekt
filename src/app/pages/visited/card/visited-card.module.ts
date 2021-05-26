import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitedCardComponent } from './visited-card.component';



@NgModule({
  declarations: [
    VisitedCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [VisitedCardComponent]
})
export class VisitedCardModule { }
