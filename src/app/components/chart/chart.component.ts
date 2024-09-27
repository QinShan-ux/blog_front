import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initChart()
  }
  chart: any;
  @ViewChild('chartTpl') chartTpl!: ElementRef<HTMLDivElement>
  initChart(): void {
    this.chart = echarts.init(this.chartTpl.nativeElement);
    /**
     * 绑定resize
     */
    window.addEventListener('resize', () => {
      this.chart.resize();
    });
    this.chart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    });
  }
}
