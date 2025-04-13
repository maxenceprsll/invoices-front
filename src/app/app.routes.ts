import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'clients', component: ClientsComponent},
];
