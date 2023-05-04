import { Component ,OnInit} from '@angular/core';
import { GraficosService } from 'src/app/services/graficos.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  constructor(private graficosService:GraficosService){}
  single = [];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  ngOnInit() {
    this.graficosService.mostrarDatosTercerGrafico().subscribe(datos => {
    this.single = datos;
    });
  }
}
