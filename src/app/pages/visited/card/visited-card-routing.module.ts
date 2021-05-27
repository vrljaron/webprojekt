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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VisitedCardRoutingModule { }
