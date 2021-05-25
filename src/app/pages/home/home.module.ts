import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EvidenceCardModule } from '../evidence/card/evidence-card.module';
import { EvidenceCardComponent } from '../evidence/card/evidence-card.component';


@NgModule({
  declarations: [HomeComponent,EvidenceCardComponent],
  imports: [
    CommonModule,
    EvidenceCardModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
