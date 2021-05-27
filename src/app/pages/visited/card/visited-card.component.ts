import { Component, Input, OnInit } from '@angular/core';
import { Evidence } from '../../../shared/models/evidence.model';

@Component({
  selector: 'app-visited-card',
  templateUrl: './visited-card.component.html',
  styleUrls: ['./visited-card.component.scss']
})
export class VisitedCardComponent implements OnInit {
  @Input() visited?: Evidence;

  constructor() { }

  ngOnInit(): void {
  }

}
