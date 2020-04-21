import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModbatComponent } from './components/modbat/modbat.component';
import { WrapComponent } from './components/wrap/wrap.component';
import { ModcorComponent } from './components/modcor/modcor.component';
import { ExportComponent } from './components/export/export.component';
import { CircuitoComponent } from './components/circuito/circuito.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AdmBatteryComponent } from './components/adm-battery/adm-battery.component';
import { AdmCorrComponent } from './components/adm-corr/adm-corr.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: CircuitoComponent },
  { path: 'modbat', component: ModbatComponent },
  { path: 'modcor', component: ModcorComponent },
  { path: 'export', component: ExportComponent },
  { path: 'circuito', component: CircuitoComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'admbat', component: AdmBatteryComponent },
  { path: 'admcor', component: AdmCorrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
