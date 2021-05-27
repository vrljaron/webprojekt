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

@NgModule({
  declarations: [
    EvidenceListComponent
  ],
  imports: [
    CommonModule, EvidenceListRoutingModule, MatToolbarModule, ContainerModule, EvidenceCardModule, MatButtonModule,
    MatIconModule, EvidenceAddModule, MatDialogModule
  ],
  exports: [EvidenceListComponent]
})
export class EvidenceListModule { }
