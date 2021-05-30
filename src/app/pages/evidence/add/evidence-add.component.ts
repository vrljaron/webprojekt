import { Evidence } from 'src/app/shared/models/evidence.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { getEvidenceForm } from 'src/app/shared/forms/evidence.form';


@Component({
  selector: 'app-evidence-add',
  templateUrl: './evidence-add.component.html',
  styleUrls: ['./evidence-add.component.scss']
})
export class EvidenceAddComponent implements OnInit {

  form: FormGroup | null = null;

  inData: Evidence = {} as any;

  constructor(public dialogRef: MatDialogRef<EvidenceAddComponent>,private fbService: FbBaseService<Evidence>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getEvidenceForm();
  }

  log(): void {
    console.log(this.form?.value);
  }

}
