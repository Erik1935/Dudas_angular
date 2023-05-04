import { Component,OnInit } from '@angular/core';
import { GraficosService } from 'src/app/services/graficos.service';

@Component({
  selector: 'app-pie-grid-chart',
  templateUrl: './pie-grid-chart.component.html',
  styleUrls: ['./pie-grid-chart.component.css']
})
export class PieGridChartComponent implements OnInit {
  constructor(private graficosService:GraficosService){}
  single = [];
  showLegend: boolean = true;
  showLabels: boolean = true;
  ngOnInit() {
    this.graficosService.mostrarDatosCuartoGrafico().subscribe(datos => {
    this.single = datos;
    });
  }
}
