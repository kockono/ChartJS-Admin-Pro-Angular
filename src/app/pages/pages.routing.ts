import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AccountsSettingsComponent } from './accounts-settings/accounts-settings.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { titulo:'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data:  { titulo: 'progress' } },
            { path: 'grafica1', component: Grafica1Component, data:  { titulo: 'grafica1' } },
            { path: 'account-settings', component: AccountsSettingsComponent, data: {titulo:  'account-settings' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'rxjs' } }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


