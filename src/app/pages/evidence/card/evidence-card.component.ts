import { Component, Input, OnInit } from '@angular/core';
import { Evidence } from '../../../shared/models/evidence.model';

@Component({
  selector: 'app-evidence-card',
  templateUrl: './evidence-card.component.html',
  styleUrls: ['./evidence-card.component.scss']
})
export class EvidenceCardComponent implements OnInit {
  @Input() evidence?: Evidence;

  constructor() { }

  ngOnInit(): void {
  }

}
