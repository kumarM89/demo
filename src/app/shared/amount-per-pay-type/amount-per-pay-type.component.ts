import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-amount-per-pay-type',
  templateUrl: './amount-per-pay-type.component.html',
  styleUrls: ['./amount-per-pay-type.component.css']
})
export class AmountPerPayTypeComponent implements OnInit {
  amountCharts;
  amountChartOptions = {};
  volData = [];
  @Input() cardHeader: String;
  constructor() { }

  ngOnInit(): void{
    this.initializeData();
    this.buildGraph();
  }

  initializeData(){
    this.volData = [{
        name: 'ACH',
        data: [1.8,0.3,2.0,0.2]
      }, {
        name: 'Check',
        data: [5.2,7.5,8.1,5.0]
      },
      {
        name: 'Virtual Card',
        data: [0.2,2.6,1.5,2.3]
      },
      {
        name: 'Total',
        data: [9.5,5.5,8.3,8.4]
      }
    ];
  }
  buildGraph(){
    this.amountCharts = Highcharts;
    this.amountCharts.theme ={ 
      colors: ['#009DDC', '#7B64C0', '#FED766','#E273A2']
         };

    this.amountChartOptions = {   
      chart: {
        type: 'spline'
    },
    title: {
        text: null
    },
    tooltip: {
      formatter: function() {
        return '$'+this.y + 'M';
      }
    },
    credits: {
      enabled: false
  },
    xAxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4']
    },
    yAxis: {
      min:0,
      max:9,
      tickInterval: 2.5,
      title: {
          text: null
      },
      labels: {
               formatter: function() {
                 return '$'+this.value + 'M';
               }
            }
    },
    plotOptions: {
        spline: {
            dataLabels: {
                enabled: false
            },
            marker:{
              enabled: true
            },

            enableMouseTracking: true
        }
    },
      series: this.volData
    };
    this.amountCharts.setOptions(this.amountCharts.theme);
  }

}
