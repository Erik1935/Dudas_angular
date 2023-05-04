import { Component,OnInit } from '@angular/core';
import { GraficosService } from 'src/app/services/graficos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 constructor(private graficosService:GraficosService){}
  contenidoCuadros:any[] = [];
   // options
  
  finalizado:String = "0";
  pendiente:String = "0";
  usuarios_totales:String = "0";
  finalizado_anual:String = "0";

 
  ngOnInit() {
    this.graficosService.loadContentByRol().subscribe(datos => {
      //this.contenidoCuadros = datos;
      this.finalizado = datos.finalizado;
        this.pendiente = datos.pendiente;
        this.usuarios_totales = datos.usuarios_totales;
        this.finalizado_anual = datos.finalizados_anual;
    });
  }

}
