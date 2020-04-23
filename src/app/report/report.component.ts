import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  dataType = [
    {value: 'payment', viewValue: 'Payment'},
    {value: 'supplier', viewValue: 'Supplier'},
    {value: 'campaign', viewValue: 'Campaign'}
  ];
  xAxis = [
    {value: 'paymentId', viewValue: 'Payment Id'},
    {value: 'supplierName', viewValue: 'Supplier Name'},
    {value: 'paymentType', viewValue: 'Payment Type'}
  ];
  yAxis = [
    {value: 'paymentAmount', viewValue: 'Payment Amount'}
  ];
  cumulativeFunc = [
    {value: 'sum', viewValue: 'Sum'},
    {value: 'count', viewValue: 'Count'}
  ];
  reportCharts;
  reportChartOptions ={};   
  reportData = [];
  showFilter: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initializeData();
    this.buildGraph();
  }

  initializeData(){
    this.reportData = [{
        name: 'Enrolled',
        data: [4000,5000,6500,8000]
       }
    ];
  }
  buildGraph(){
    this.reportCharts = Highcharts;
    this.reportCharts.theme ={ 
      colors: ['#009DDC']
  
    };

    this.reportChartOptions = {   
      chart: {
        type: 'column'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4']
    },
    yAxis: {
      min:0,
      max:10000,
      tickInterval: 2000,
      title: {
          text: null
      }
    },
    credits: {
        enabled: false
    },
      series: this.reportData
    };

    this.reportCharts.setOptions(this.reportCharts.theme);
  }

  handleClick(){
    if(!this.showFilter)
      this.showFilter = true;
    else
    this.showFilter = false;
  }

}
