import { Component, OnInit } from '@angular/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-campaign-progress',
  templateUrl: './campaign-progress.component.html',
  styleUrls: ['./campaign-progress.component.css']
})
export class CampaignProgressComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'buffer';
  value = 50;
  bufferValue = 75;

  progressList = [
    {
        name: 'Campaign 1',
        value: 73,
        bufferValue : 17
    },
    {
      name: 'Campaign 2',
      value: 82,
      bufferValue : 18
    },
    {
      name: 'Campaign 3',
      value: 65,
      bufferValue : 35
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
