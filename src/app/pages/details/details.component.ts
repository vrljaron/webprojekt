import { Evidence } from 'src/app/shared/models/evidence.model';
import { FbBaseService } from './../../services/fb-base.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { getEvidenceForm } from 'src/app/shared/forms/evidence.form';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  id = '';
  dataNameStr = '';
  inData: Observable<Evidence> | null = null;
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

  ngOnDestroy(): void{}

  initForm(): void {
    this.form = getEvidenceForm();
    this.form.controls['title'].setValue(this.inData);
  }

    getItem(): void {
    this.inData = this.service.getById(this.dataNameStr + 's', this.id);
  }

  close(): void {
    this.location.back();
  }

}
