import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Battery } from '../models/battery';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {

  selectedBattery: Battery
  batteries: Battery[]

  readonly URL_API = "http://localhost:3000/baterias"

  constructor(private http: HttpClient) { 
    this.selectedBattery = new Battery()
  }

  getBatteries() {
    return this.http.get(this.URL_API)
  }

  postBattery(Battery: Battery) {
    return this.http.post(this.URL_API, Battery)
  }

  putBattery(battery: Battery) {
    return this.http.put(this.URL_API + `/${battery._id}`, battery)
  }

  deleteBattery(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`)
  }


}
