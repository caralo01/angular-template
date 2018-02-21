import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {
  public id:string;
  constructor(private _aroute: ActivatedRoute,
              private _ps:ProductosService) { 
    this._aroute.params.subscribe(params =>{
        this.id = params['id'];
        this._ps.cargar_producto(this.id);
    });
  }

  ngOnInit() {
  }

}
