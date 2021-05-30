import { Evidence } from 'src/app/shared/models/evidence.model';
import { FbBaseService } from './../../services/fb-base.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
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
  inData: Subscription | null = null;
  form: FormGroup | null = null;
  ev: Evidence = {} as any;
  pageState = '';

  constructor(private route: ActivatedRoute, private service: FbBaseService<any>, private location: Location) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      this.getItem();
    }
  }

  ngOnDestroy(): void {
    if (this.inData) {
      console.log("unsub");
      this.inData.unsubscribe();
    }
  }

  initForm(): void {
    this.form = getEvidenceForm();
    this.form?.controls['title'].setValue(this.ev.title);
    this.form?.controls['shortTitle'].setValue(this.ev.shortTitle);
    this.form?.controls['version'].setValue(this.ev.version);
    this.form?.controls['status'].setValue(this.ev.status);
    this.form?.controls['publisher'].setValue(this.ev.publisher);
    this.form?.controls['description'].setValue(this.ev.description);
    this.form?.controls['exposureBackground'].setValue(this.ev.exposureBackground);
  }

  getItem(): void {
    this.pageState = 'loading';
    this.inData = this.service.getById(this.dataNameStr + 's', this.id).subscribe(
      result => {
        if (result.title) {
          this.ev = result;
          this.initForm();
          this.pageState = 'data';
        }else{
          this.pageState = 'noData';
        }
      },
      err => {
        console.log(err);
        this.pageState = '';
      }
    );

  }

  close(): void {
    this.location.back();
  }
  update(): void {
    this.service.update(this.dataNameStr + 's', this.id, this.ev);
    this.close();
  }

  delete(): void {
    this.service.delete(this.dataNameStr + 's', this.id);
    this.close();
  }

}
