import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Evidence } from '../../../shared/models/evidence.model';

@Component({
  selector: 'app-evidence-card',
  templateUrl: './evidence-card.component.html',
  styleUrls: ['./evidence-card.component.scss']
})
export class EvidenceCardComponent implements OnInit {
  @Input() evidence?: Evidence;
  @Input() hasAction = true;
  @Output() getEvidence = new EventEmitter<Evidence>();

  constructor() { }

  ngOnInit(): void {
    
  }

}
