import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Corr } from '../models/corr'
import { throwIfEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CorrService {
  selectedCorr: Corr
  corrs: Corr[]

  readonly URL_API = 'http://localhost:3000/corriente'

  constructor(private http: HttpClient) {
    this.selectedCorr = new Corr()
   }

   getCorrs() {
     return this.http.get(this.URL_API)
   }

   postCorr(Corr: Corr) {
     return this.http.post(this.URL_API, Corr)
   }

   putCorr(corr: Corr) {
     return this.http.put(this.URL_API + `/${corr._id}`, corr)
   }

   deleteCorr(_id: string) {
     return this.http.delete(this.URL_API + `/${_id}`)
   }

}
