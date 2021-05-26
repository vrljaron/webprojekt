import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() categories?: Category[];
  @Input() selectedCategory?: string;
  @Output() callSelectC = new EventEmitter<string>();
  @Output() callSelectPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.selectedCategory) {
      this.selectedCategory = changes.selectedCategory.currentValue;
    }
  }

  select(target: string): void {
    this.callSelectC.emit(target);
  }

}
