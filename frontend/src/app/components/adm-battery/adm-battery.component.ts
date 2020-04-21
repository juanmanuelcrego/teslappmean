import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { BatteryService } from '../../services/battery.service'
import { Battery } from 'src/app/models/battery';

declare var M: any

@Component({
  selector: 'app-adm-battery',
  templateUrl: './adm-battery.component.html',
  styleUrls: ['./adm-battery.component.sass', '../../SASS/sass/materialize.css'],
  providers: [BatteryService]
})
export class AdmBatteryComponent implements OnInit {

  constructor(public batteryService: BatteryService) { }

  ngOnInit() {
    this.getBatteries() 
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

  getBatteries() {
    this.batteryService.getBatteries()
    .subscribe(res => {
      this.batteryService.batteries = res as Battery[]
      console.log(res)
    })
  }

  editBattery(battery: Battery) {
    this.batteryService.selectedBattery = battery
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

  resetForm(form?: NgForm) {
    if(form){
      form.reset()
      this.batteryService.selectedBattery = new Battery() 
    }
  }

}
