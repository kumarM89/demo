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
        data: [1.2,1.35,1.5,1.4,1.3,1.3,1.2,1.2,1.1,1.1,1.1,1.1]
      }, {
        name: 'Check',
        data: [5.2,5.4,5.6,6.0,5.7,5.2,6.0,6.3,6.8,6.7,6.6,6.5]
      },
      {
        name: 'Virtual Card',
        data: [1.0,1.1,1.2,1.3,1.3,1.2,1.1,1.0,1.0,1.0,1.2,1.3]
      },
      {
        name: 'Total',
        data: [7.2,7.4,7.6,8.0,7.7,7.2,8.0,8.3,8.8,8.7,8.6,8.5]
      }
    ];
  }
  buildGraph(){
    this.amountCharts = Highcharts;
    this.amountCharts.theme ={ 
      colors: ['#009DDC', '#7B64C0', '#FED766','#E273A2'],
     
    };

    this.amountChartOptions = {   
      chart: {
        type: 'line'
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      min:0,
      max:9,
      tickInterval: 1,
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
        line: {
            dataLabels: {
                enabled: false
            },
            marker:{
              enabled: false
            },

            enableMouseTracking: true
        }
    },
      series: this.volData
    };
    this.amountCharts.setOptions(this.amountCharts.theme);
  }

}
