import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DetailsRoutingModule } from './details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { ContainerModule } from 'src/app/shared/components/container/container.module';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    DetailsRoutingModule, MatCardModule, MatButtonModule, MatIconModule,
    MatTabsModule, MatFormFieldModule, MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    ContainerModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
