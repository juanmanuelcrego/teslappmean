import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { BatteryService } from '../../services/battery.service'
import { CorrService } from '../../services/corr.service'
import { Battery } from 'src/app/models/battery';
import { Corr } from 'src/app/models/corr'
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AdmBatteryComponent } from '../adm-battery/adm-battery.component';
import { AdmCorrComponent } from '../adm-corr/adm-corr.component';

declare var M: any;

@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.component.html',
  styleUrls: ['./circuito.component.sass', '../../SASS/sass/materialize.css'],
  providers: [BatteryService, CorrService]
})
export class CircuitoComponent implements OnInit {  

  constructor(public batteryService: BatteryService, public corrService: CorrService,
     private _bottomSheet: MatBottomSheet) { }

    openBottomSheet(): void {
      this._bottomSheet.open(AdmBatteryComponent)
      // this._bottomSheet.open(AdmCorrComponent)
      this.getBatteries()
      this.getCorrs()
    }

  ngOnInit() {
    this.getBatteries()
    this.getCorrs()
  }

  addBattery(form: NgForm) {
    if(form.value._id){
      this.batteryService.putBattery(form.value)
      .subscribe(res => {
        this.resetForm(form)
        this.getBatteries()
        M.toast({html: 'Se actualizó el registro'})
      })
    }else {
      console.log(form.value)
      this.batteryService.postBattery(form.value)
      .subscribe(res => {
        this.resetForm(form)
        this.getBatteries()
        M.toast({html: 'Se agregó la batería'})
      })
    }
  }

  addCorr(form: NgForm) {
    if(form.value._id){
      this.corrService.putCorr(form.value)
      .subscribe(res => {
        this.resetForm(form)
        this.getCorrs()
        M.toast({html: 'Se actualizó el registro'})
      })
    }else {
      console.log(form.value)
      this.corrService.postCorr(form.value)
      .subscribe(res => {
        this.resetForm(form)
        this.getBatteries()
        M.toast({html: 'Se agregó el registro de corriente'})
      })
    }
  }
 
  getBatteries() {
    this.batteryService.getBatteries()
    .subscribe(res => {
      this.batteryService.batteries = res as Battery[]
      console.log(res)
    })
  }

  getCorrs() {
    this.corrService.getCorrs()
    .subscribe(res => {
      this.corrService.corrs = res as Corr[]
      console.log(res)
    })
  }

  editBattery(battery: Battery) {
    this.batteryService.selectedBattery = battery
  }

  editCorr(corr: Corr) {
    this.corrService.selectedCorr = corr
  }

  deleteBattery(_id: string) {
    if(confirm('¿Estás seguro de eliminar el registro?')){
      this.batteryService.deleteBattery(_id)
      .subscribe(res => { 
        this.getBatteries()
        M.toast({html: 'Se eliminó el registro'})
      })
    }
  }

  deleteCorr(_id: string) {
    if(confirm('¿Estás seguro de eliminar el registro?')){
      this.corrService.deleteCorr(_id)
      .subscribe(res => { 
        this.getCorrs()
        M.toast({html: 'Se eliminó el registro'})
      })
    }
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset()
      this.batteryService.selectedBattery = new Battery() 
    }
  }

  resetFormCorr(form?: NgForm) {
    if(form){
      form.reset()
      this.corrService.selectedCorr = new Corr() 
    }
  }
}

