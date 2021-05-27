import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, NavModule, HomeRoutingModule, MatCardModule, MatRippleModule, OnHoverModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
