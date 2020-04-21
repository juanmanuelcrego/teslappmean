import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CorrService } from '../../services/corr.service'
import { Corr } from 'src/app/models/corr';

declare var M: any

@Component({
  selector: 'app-adm-corr',
  templateUrl: './adm-corr.component.html',
  styleUrls: ['./adm-corr.component.sass', '../../SASS/sass/materialize.css'],
  providers: [CorrService]
})
export class AdmCorrComponent implements OnInit {

  constructor(public corrService: CorrService) { }

  ngOnInit() {
    this.getCorrs()
  }

  addCorr(form: NgForm) {
    if(form.value._id){
      this.corrService.putCorr(form.value)
      .subscribe(res => {
        this.resetFormCorr(form)
        this.getCorrs()
        M.toast({html: 'Se actualizó el registro'})
      })
    }else {
      console.log(form.value)
      this.corrService.postCorr(form.value)
      .subscribe(res => {
        this.resetFormCorr(form)
        this.getCorrs()
        M.toast({html: 'Se agregó el registro de corriente'})
      })
    }
  }

  getCorrs() {
    this.corrService.getCorrs()
    .subscribe(res => {
      this.corrService.corrs = res as Corr[]
      console.log(res)
    })
  }

  editCorr(corr: Corr) {
    this.corrService.selectedCorr = corr
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

  resetFormCorr(form?: NgForm) {
    if(form){
      form.reset()
      this.corrService.selectedCorr = new Corr() 
    }
  }


}
