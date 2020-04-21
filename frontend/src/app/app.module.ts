import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapComponent } from './components/wrap/wrap.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ModbatComponent } from './components/modbat/modbat.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { ModcorComponent } from './components/modcor/modcor.component';
import { CircuitoComponent } from './components/circuito/circuito.component';
import { ExportComponent } from './components/export/export.component';
import { SettingsComponent } from './components/settings/settings.component'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AdmBatteryComponent } from './components/adm-battery/adm-battery.component'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AdmCorrComponent } from './components/adm-corr/adm-corr.component'; 


@NgModule({
  declarations: [
    AppComponent,
    WrapComponent,
    ModbatComponent,
    HeaderComponent,
    ModcorComponent,
    CircuitoComponent,
    ExportComponent,
    SettingsComponent,
    AdmBatteryComponent,
    AdmCorrComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatExpansionModule,
    MatTabsModule,
    MatSortModule,
    MatSlideToggleModule,
    FormsModule,
    MatSnackBarModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
