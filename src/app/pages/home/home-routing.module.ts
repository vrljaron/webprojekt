import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'evidence', pathMatch: 'full',
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'evidence',
                loadChildren: () => import('./../evidence/list/evidence-list.module').then(m => m.EvidenceListModule),
            },
            {
                path: 'visited',
                loadChildren: () => import('./../visited/card/visited-card.module').then(m => m.VisitedCardModule),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
