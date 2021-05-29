import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Evidence } from '../../../shared/models/evidence.model';

@Component({
  selector: 'app-visited-card',
  templateUrl: './visited-card.component.html',
  styleUrls: ['./visited-card.component.scss']
})
export class VisitedCardComponent implements OnInit {
  @Input() isVisited: Evidence = {} as any;
  constructor() { }

  ngOnInit(): void {
  }

}
