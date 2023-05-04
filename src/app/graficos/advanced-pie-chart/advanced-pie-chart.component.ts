import { Component,OnInit } from '@angular/core';
import { GraficosService } from 'src/app/services/graficos.service';

@Component({
  selector: 'app-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.css']
})
export class AdvancedPieChartComponent implements OnInit {
  constructor(private graficosService:GraficosService){
  }
  showXAxis = true;
  showYAxis = true;
 
  showXAxisLabel = true;
  showYAxisLabel = true;
  //Grafico avanzado:
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendposition: string = 'below';
 single = [];
 ngOnInit() {
  this.graficosService.mostrarDatosPrimerGrafico().subscribe(datos => {
  this.single = datos;
  });
}
}
