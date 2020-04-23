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
      
      innerSize: '70%',
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
        plotShadow: false,
        margin: [0, 300, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0
        
    },
    credits: {
        enabled: false
    },
    exporting: {
      enabled: true
    },
    title: {
        text: '24,500<br>Total Payments',
        align: 'left',
        verticalAlign: 'bottom',
        style: {
          // margin: '50px', // does not work for some reasons, see workaround below
          color: '#707070',
          fontSize: '12px',
          fontWeight: 'normal',
          margin:'10px'
        }
       
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    legend: {
      enabled: true,
      floating: true,
      verticalAlign: 'xbottom',
      align: 'right',
      layout: 'vertical',
      
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
