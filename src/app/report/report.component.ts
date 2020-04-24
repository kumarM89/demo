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
  displayedColumns: string[] = ['name', 'email', 'contact', 'location'];
  gridViewData = [
    {name: 'Walmart', email: 'walmart@comapp.com', contact: '18156850566', logo: 'walmart-t', location: '1919 Davis St, San Leandro, CA 94577', isSelected: true },
    {name: 'Target', email: 'sherry@socialheit.com', contact: '4567898765', logo: 'target', location: '', isSelected: false },
    {name: 'Amazon', email: 'jk@amazon.com', contact: '185-656-5656', logo: 'amazon', location: 'New York, NY, USA', isSelected: false },
    {name: 'Costco', email: 'custservice@costco.com', contact: '5313337559', logo: 'costco', location: 'Wyvern Way, Derby DE21, UK', isSelected: false },
    {name: 'eBay', email: 'dwenig@ebay.com', contact: '4083767400', logo: 'ebay', location: 'Whittaker House, 2 Whittaker Ave, Richmond TW9 1EH, UK', isSelected: false },
    {name: 'Lowe\'s', email: 'mark.ellison@lowes.com', contact: '7047581000', logo: 'lowes', location: 'Lowe\'s Blvd Rd, Gaston, NC 27831, USA', isSelected: false },
  ]
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

  removeSelection(elm) {
    debugger
  }

  handleClick(){
    if(!this.showFilter)
      this.showFilter = true;
    else
    this.showFilter = false;
  }

}
