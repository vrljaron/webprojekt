import { Component, OnDestroy, OnInit } from '@angular/core';
import { EVIDENCES } from './../../shared/database/evidence.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  evidences = EVIDENCES;
  category? = '';
  page = '';


  constructor() { }

  ngOnInit(): void {
    this.category = 'evidence';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

}
