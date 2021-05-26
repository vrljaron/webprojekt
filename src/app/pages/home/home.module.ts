import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EvidenceCardModule } from '../evidence/card/evidence-card.module';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { NavModule } from '../nav/nav.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { VisitedCardModule } from '../visited/card/visited-card.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, EvidenceCardModule, VisitedCardModule, OnHoverModule, LoginModule, RegistrationModule, NavModule, MatButtonModule, MatIconModule, MatDialogModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
