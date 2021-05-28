import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getEvidenceForm } from 'src/app/shared/forms/evidence.form';
import { getTopicForm } from 'src/app/shared/forms/topic.form';


@Component({
  selector: 'app-evidence-add',
  templateUrl: './evidence-add.component.html',
  styleUrls: ['./evidence-add.component.scss']
})
export class EvidenceAddComponent implements OnInit {

  form: FormGroup | null = null;

  constructor(public dialogRef: MatDialogRef<EvidenceAddComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getEvidenceForm();
  }

  get getTopic(): FormArray {
    return this.form?.get('topic') as FormArray;
  }

  addTopic(): void {
    const idFormArray = this.form?.get('topic') as FormArray;
    idFormArray.push(getTopicForm());
  }

  removeTopic(index: number): void {
    const formArray = this.form?.get('topic') as FormArray;
    formArray.removeAt(index);
  }

  log(): void {
    console.log(this.form?.value);
  }

}
