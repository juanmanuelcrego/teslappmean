import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass', '../../SASS/sass/materialize.css']
})
export class HeaderComponent implements OnInit {

  cabecera= {
    title: 'Teslapp'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
