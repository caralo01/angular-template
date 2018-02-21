import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ProductosService {


  productos:any[] = [];
  productosFiltrados:any[] = [];
  producto:any = {};
  cargando_productos: boolean = true;
  cargando_productos_filtrados = true;
  cargando_producto: boolean = true;

  constructor(private _http: Http) { 
    this.cargar_productos();
  }


  public cargar_productos(){
    let promesa = new Promise( ( resolve, reject )=>{
    
    this._http.get('https://paginaweb-2cd14.firebaseio.com/productos_idx.json')
          .subscribe(data =>{
            setTimeout(() =>{
            this.productos = data.json();
            this.cargando_productos = false;
            resolve();
            }, 1500);
          });
    });

    return promesa;
  }

  public cargar_producto(id){
    this.cargando_producto = true;

     this._http.get(`https://paginaweb-2cd14.firebaseio.com/productos/${id}.json` )
        .subscribe(data =>{
          this.producto = data.json();
          this.cargando_producto = false;
      });
  }

  public buscar_producto(termino:string){
    this.cargando_productos_filtrados = true;
    if(this.productos.length === 0){
      this.cargar_productos().then( () => {
         this.filtrar_productos(termino);
      });
    }
    else{
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino:string){
    this.productosFiltrados = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      if(prod.categoria.indexOf(termino)>= 0 || prod.titulo.toLowerCase().indexOf(termino)>= 0){
        this.productosFiltrados.push(prod);      
      }
    });
    this.cargando_productos_filtrados = false;
  }
}
