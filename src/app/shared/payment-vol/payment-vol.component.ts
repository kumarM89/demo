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
      innerSize: '75%',
      data: [
          ['ACH', 61],
          ['Check', 12],
          ['Virtual Card',27]
      ]
    }];
  }
 
  buildPieGraph(){
    this.pieChart = Highcharts;
    this.pieOptions = {   
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    credits: {
        enabled: false
    },
    exporting: {
      enabled: true
    },
    title: {
        text: '24,500<br>Total Payments',
        align: 'center',
        verticalAlign: 'middle'
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
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
