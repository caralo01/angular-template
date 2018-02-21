import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public _is:InformacionService, 
  			  private _router:Router) { }

  ngOnInit() {
  }

  buscar_producto(termino:string){
  	this._router.navigate(['/buscar', termino]);
  }

}
