import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EvidenceCardModule } from '../evidence/card/evidence-card.module';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,EvidenceCardModule,OnHoverModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
