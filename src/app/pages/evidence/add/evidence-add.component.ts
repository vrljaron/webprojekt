import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-evidence-add',
  templateUrl: './evidence-add.component.html',
  styleUrls: ['./evidence-add.component.scss']
})
export class EvidenceAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    shortTitle: new FormControl(''),
    version: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<EvidenceAddComponent>) { }

  ngOnInit(): void {
  }

}
