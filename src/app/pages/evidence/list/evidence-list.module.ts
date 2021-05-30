import { VisitedCardModule } from './../../visited/card/visited-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceListComponent } from './evidence-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EvidenceAddModule } from '../add/evidence-add.module';
import { EvidenceListRoutingModule } from './evidence-list-routing.module';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { EvidenceCardModule } from '../card/evidence-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    EvidenceListComponent
  ],
  imports: [
    CommonModule, EvidenceListRoutingModule, MatToolbarModule, ContainerModule, EvidenceCardModule, MatButtonModule,
    MatIconModule, EvidenceAddModule, MatDialogModule, MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule,
    MatProgressSpinnerModule, VisitedCardModule
  ],
  exports: [EvidenceListComponent]
})
export class EvidenceListModule { }
