import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from './../../shared/database/category.database';
import { EVIDENCES } from './../../shared/database/evidence.database';
import { MatDialog } from '@angular/material/dialog';
import { EvidenceAddComponent } from '../evidence/add/evidence-add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  evidences = EVIDENCES;
  categories = CATEGORIES;
  category? = '';
  page = '';


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.category = 'evidence';
    this.page = 'home';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EvidenceAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.evidences.push(result);
      }
    });
  }

}
