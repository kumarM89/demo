import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-activation',
  templateUrl: './supplier-activation.component.html',
  styleUrls: ['./supplier-activation.component.css']
})
export class SupplierActivationComponent implements OnInit {
  supplyCharts;
  supplyChartOptions ={};   
  supplyData = [];

  constructor(public router: Router) {}
 
  ngOnInit(): void{
    this.initializeData();
    this.buildGraph();
  }

  initializeData(){
    this.supplyData = [{
        name: 'Enrolled',
        data: [4000,5000,6500,8000]
       }
       //, {
      //   name: 'Pending',
      //   data: [5500,3200,3800,4200,4400,4300,3200,2100,2800,4100,3200,5200]
      // }, {
      //   name: 'Rejected',
      //   data: [500,900,1200,1800,2100,2000,1100,1500,1900,2200,1100,2200]
      // }
    ];
  }
  buildGraph(){
    this.supplyCharts = Highcharts;
    this.supplyCharts.theme ={ 
      colors: ['#009DDC']
  
    };

    this.supplyChartOptions = {   
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
      tickInterval: 2500,
      title: {
          text: null
      }
    },
    credits: {
        enabled: false
    },
      series: this.supplyData
    };

    this.supplyCharts.setOptions(this.supplyCharts.theme);
  }
}
