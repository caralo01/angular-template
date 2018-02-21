import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private _aroute: ActivatedRoute,
              private _ps:ProductosService) { 
  	this._aroute.params.subscribe(params =>{
        let termino = params['termino'];
        this._ps.buscar_producto(termino);
    });
  }

  ngOnInit() {
  }

}
