import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedPieChartComponent } from './advanced-pie-chart/advanced-pie-chart.component';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NumberCardChartComponent } from './number-card-chart/number-card-chart.component';
import { PieGridChartComponent } from './pie-grid-chart/pie-grid-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    AdvancedPieChartComponent,
    VerticalBarChartComponent,
    NumberCardChartComponent,
    PieGridChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports:[
    AdvancedPieChartComponent,
    VerticalBarChartComponent,
    NumberCardChartComponent,
    PieGridChartComponent,
    PieChartComponent
  ]
})
export class GraficosModule { }
