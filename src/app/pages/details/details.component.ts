import { FbBaseService } from './../../services/fb-base.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FormArray, FormGroup } from '@angular/forms';
import { getEvidenceForm } from 'src/app/shared/forms/evidence.form';
import { getTopicForm } from 'src/app/shared/forms/topic.form';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id = '';
  dataNameStr = '';
  inData: Observable<any> | null = null;
  form: FormGroup | null = null;
  constructor(private route: ActivatedRoute, private service: FbBaseService<any>, private location: Location) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      this.getItem();
    }
    this.initForm();
  }

  initForm(): void {
    this.form = getEvidenceForm();
  }

    getItem(): void {
    this.inData = this.service.getById(this.dataNameStr + 's', this.id);
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

  close(): void {
    this.location.back();
  }

}
