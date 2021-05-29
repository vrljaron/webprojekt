import { EvidenceCardModule } from './../../evidence/card/evidence-card.module';
import { VisitedCardComponent } from '../card/visited-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: VisitedCardComponent,
        data: { title: 'Visited - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), EvidenceCardModule],
    exports: [RouterModule],
})
export class VisitedListRoutingModule { }
