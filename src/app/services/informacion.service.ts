import { Injectable } from '@angular/core';
import { Http } from '@angular/http'


@Injectable()
export class InformacionService {

  public info: any = {};
  public cargada:boolean = false;
  public cargada_sobre_nosotros = false;
  public equipo:any[] = [];

  constructor(private _http: Http) {
    this.carga_info();
    this.carga_sobre_nosoros();
  }

  public carga_info(){
    this._http.get("assets/data/info.pagina.json")
    .subscribe( data => {
      this.cargada = true;
      this.info = data.json();
    });
  }
  
  public carga_sobre_nosoros(){
        this._http.get("https://paginaweb-2cd14.firebaseio.com/equipo.json")
    .subscribe( data => {
      this.cargada_sobre_nosotros = true;
      this.equipo = data.json();
    });
  }

}
