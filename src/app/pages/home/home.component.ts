import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from './../../shared/database/category.database';
import { EVIDENCES } from './../../shared/database/evidence.database';
import { MatDialog } from '@angular/material/dialog';
import { EvidenceAddComponent } from '../evidence/add/evidence-add.component';
import { Evidence } from 'src/app/shared/models/evidence.model';

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
  visited: Evidence[] = [];


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.category = 'evidence';
    this.page = '';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  onSelect(event: string): void {
    this.category = event;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EvidenceAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.visited.push(result);
      if (result) {
        this.evidences.push(result);
      }
    });
  }

  onVisited(evidence: Evidence): void {
    if(!this.visited.some(x => x === evidence)){
      console.log('igaz');
      this.visited.push(evidence);
    }
  }

}
