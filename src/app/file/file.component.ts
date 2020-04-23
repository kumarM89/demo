import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import * as Highcharts from 'highcharts';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  name: string;
  date: string;
  amount: string;
  fileid: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: "1_123_PYMY201811211",
    date: '04/05/20',
    amount: '$50,000',
    fileid: 15053332,
    status: "File Initiated"
  }, {
    name: "PMTX__002",
    date: '04/06/20',
    amount: '$150,000',
    fileid: 12053302,
    status: "Processed",
  }, {
    name: "PMTX__003",
    date: '04/04/20',
    amount: '$50,000',
    fileid: 11053130,
    status: "Exception",
  }
];

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class FileComponent implements OnInit {

  title = "Files";
  constructor(private titleService: TitleService) { }

  highcharts;
  pieChart;
  chartOptions = {};
  pieOptions = {};
  data = [];
  pieData = [];

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.initializeData();
    this.buildGraph();
    this.buildPieGraph();

  }

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'date', 'amount', 'fileid', 'status'];
  expandedElement: PeriodicElement | null;

  initializeData() {
    this.data = [{
      name: 'ACH',
      data: [1200000, 1350000, 1500000, 1400000, 1300000, 1300000, 1200000, 1200000, 1100000, 1100000, 1100000, 1100000]
    }, {
      name: 'Check',
      data: [5200000, 5400000, 5600000, 6000000, 5700000, 5200000, 6000000, 6300000, 6800000, 6700000, 6600000, 6500000]
    },
    {
      name: 'Virtual Card',
      data: [1000000, 1100000, 1200000, 1300000, 1300000, 1200000, 1100000, 1000000, 1000000, 1000000, 1200000, 1300000,]
    },
    {
      name: 'Total',
      data: [7200000, 7400000, 7600000, 8000000, 7700000, 7200000, 8000000, 8300000, 8800000, 8700000, 8600000, 8500000]
    }
    ];
    this.pieData = [{
      type: 'pie',
      size: '100%',
      innerSize: '75%',
      data: [
        ['ACH', 61],
        ['Check', 12],
        ['Virtual Card', 27]
      ]
    }];
  }
  buildGraph() {
    this.highcharts = Highcharts;
    this.highcharts.theme = {
      colors: ['#009DDC', '#7B64C0', '#FED766', '#E273A2'],
      yAxis: {
        min: 0,
        max: 9000000,
        tickInterval: 1000000,
        title: {
          text: null
        }
      },
    };

    this.chartOptions = {
      chart: {
        type: 'line',
        width: 1000
      },
      title: {
        text: null
      },
      tooltip: {
        formatter: function () {
          return '$' + this.y / 1000000 + 'M';
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          formatter: function () {
            return '$' + this.value / 1000000 + 'M';
          }
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: false
          },
          marker: {
            enabled: false
          },

          enableMouseTracking: true
        }
      },
      series: this.data
    };
    this.highcharts.setOptions(this.highcharts.theme);
  }
  buildPieGraph() {
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
        text: '24,500<br>Total Files',
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
          colors: ['#009DDC', '#7B64C0', '#FED766']
        }
      },
      series: this.pieData
    };
  }
}


