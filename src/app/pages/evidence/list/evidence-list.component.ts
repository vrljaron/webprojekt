import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Evidence } from 'src/app/shared/models/evidence.model';
import { MatDialog } from '@angular/material/dialog';
import { EvidenceAddComponent } from '../add/evidence-add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evidence-list',
  templateUrl: './evidence-list.component.html',
  styleUrls: ['./evidence-list.component.scss']
})
export class EvidenceListComponent implements OnInit {

  list: Observable<Evidence[]> | null = null;

  constructor(private service: FbBaseService<Evidence>, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void{
    this.list = this.service.get('Evidences');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EvidenceAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((evidence: Evidence) => {
      console.log(evidence);
      if (evidence?.title) {
        this.service.add('Evidences', evidence);
      }
    }, err => {
      console.warn(err);
    });
  }

  onGetEvidence(event: Evidence): void{
    this.router.navigateByUrl('/details/Evidence/' + event.id);
  }

}
