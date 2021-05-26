import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  sCategoryTitle? : string;
  @Input() selectedCategoryTitle? : string;
  @Input() categories?: Category[];
  constructor() { }

  ngOnInit(): void {
  }

}
