import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-campaign-completion',
  templateUrl: './campaign-completion.component.html',
  styleUrls: ['./campaign-completion.component.css']
})
export class CampaignCompletionComponent implements OnInit {
  camAchart;
  camBchart;
  camCchart;
  camAOptions = {}; 
  camBOptions = {};
  camCOptions = {};   
  camAdata = [];
  camBdata = [];
  camCdata = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeData();
    this.buildCamA();
    this.buildCamB();
    this.buildCamC();
  }

  initializeData(){
    this.camAdata = [{
      type: 'pie',
      innerSize: '65%',
      data: [
          ['Complete', 73],
          ['Pending', 27]
      ]
    }];
    this.camBdata = [{
      type: 'pie',
      innerSize: '65%',
      data: [
          ['Complete', 82],
          ['Pending', 18]
      ]
    }];
    this.camCdata = [{
      type: 'pie',
      innerSize: '65%',
      data: [
          ['Complete', 65],
          ['Pending', 35]
      ]
    }];
  }
  buildCamA(){
    this.camAchart = Highcharts;
    this.camAOptions = {   
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    credits: {
        enabled: false
    },
    exporting: {
      enabled: false
    },
    title: {
        text: '73%<br>Complete',
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
            startAngle: 360,
            endAngle: -360,
            colors: ['#009ddc', '#cccccc']
        }
    },
      series: this.camAdata
    };
  }
  buildCamB(){
    this.camBchart = Highcharts;
    this.camBOptions = {   
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    credits: {
        enabled: false
    },
    exporting: {
      enabled: false
    },
    title: {
        text: '82%<br>Complete',
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
            startAngle: 360,
            endAngle: -360,
            colors: ['#009ddc', '#cccccc']
        }
    },
      series: this.camBdata
    };
  }
  buildCamC(){
    this.camCchart = Highcharts;
    this.camCOptions = {   
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    credits: {
        enabled: false
    },
    exporting: {
      enabled: false
    },
    title: {
        text: '65%<br>Complete',
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
            startAngle: 360,
            endAngle: -360,
            colors: ['#009ddc', '#cccccc']
        }
    },
      series: this.camCdata
    };
  }

}
