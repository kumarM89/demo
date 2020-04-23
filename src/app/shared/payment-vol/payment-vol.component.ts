import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-payment-vol',
  templateUrl: './payment-vol.component.html',
  styleUrls: ['./payment-vol.component.css']
})
export class PaymentVolComponent implements OnInit {
  
  pieChart;
  pieOptions = {};   
  pieData = [];
  @Input() cardHeader : String;
 
  ngOnInit(): void{
    this.initializeData();
    this.buildPieGraph();
  }

  initializeData(){
    this.pieData = [{
      type: 'pie',
      innerSize: '65%',
      showInLegend: true,
      data: [
          ['ACH', 15000],
          ['Check', 3000],
          ['Virtual Card', 6500]
      ]
    }];
  }
 
  buildPieGraph(){
    this.pieChart = Highcharts;
    this.pieOptions = {   
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        
    },
    credits: {
        enabled: false
    },
    exporting: {
      enabled: true
    },
    title: {
        text: '<span style="font-size: 24px;">24,500</span>',
        align: 'center',
        verticalAlign: 'middle',
        x: -80,
        style: {
          color: '#4bb8b0',
        }
    },
    subtitle: {
      text: '<span class="content-sm">Total Payments</span>',
      align: 'center',
      verticalAlign: 'middle',
      x: -80,
      y: 30,
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    legend: {
      enabled: true,
      itemMarginBottom: 20,
      verticalAlign: 'top',
      align: 'right',
      layout: 'vertical',
      x: -50,
      labelFormatter: function() {
        return '<span><span class="content-lg">' + this.name + '</span><br>'
                + '<span class="content-sm" style="color: #4bb8b0;">' + this.percentage.toFixed(0) + '%</span>'
                + '<span class="content-xs" style="color: #666666;"> (' + this.y + ')</span>'
                + '</span>';
      }
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            },
            center: ['55%', '50%'],
            size: '110%',
            showInLegend: true,
            startAngle: 360,
            endAngle: -360,
            colors: ['#009DDC','#7B64C0','#FED766']
        }
    },
      series: this.pieData
    };
  }
}
