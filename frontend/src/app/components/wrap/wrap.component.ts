import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css', '../../SASS/sass/materialize.css']
})
export class WrapComponent {
  // /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Módulo baterías', cols: 1, rows: 1,
  //           icon: 'battery_charging_full',
  //           description: 'Ingresar al módulo de baterías',
  //           url: '/modbat'},
  //         { title: 'Módulo corriente', cols: 1, rows: 1,
  //           icon: 'flash_on',
  //           description: 'Ingresar al módulo de corriente',
  //           url: '/modcor'},
  //         { title: 'Módulo circuito completo', cols: 1, rows: 1,
  //           icon: 'speed',
  //           description: 'Ingresar al módulo del circuito completo',
  //           url: '/circuito'}
  //       ];
  //     }

  //     return [
  //       { title: 'Módulo baterías', cols: 1, rows: 1,
  //         icon: 'battery_charging_full',
  //         description: 'Ingresar al módulo de baterías',
  //         url: '/modbat'},
  //       { title: 'Módulo corriente', cols: 1, rows: 1,
  //         icon: 'flash_on',
  //         description: 'Ingresar al módulo de corriente',
  //         url: '/modcor'},
  //       { title: 'Módulo circuito completo', cols: 1, rows: 1,
  //         icon: 'speed',
  //         description: 'Ingresar al módulo del circuito completo',
  //         url: '/circuito' }
  //     ];
  //   })
  // );

  constructor() {}
}
