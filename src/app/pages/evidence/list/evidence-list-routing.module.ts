import { EvidenceListComponent } from './evidence-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: EvidenceListComponent,
        data: { title: 'Evidences - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EvidenceListRoutingModule { }
