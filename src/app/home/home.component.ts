import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Home";
  color: ThemePalette = 'primary';
  checked = false;
  cardHeader = 'Amount Per Payment Type';
  
  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  testChange(event){
    this.checked = event.checked;
    if(this.checked)
      this.cardHeader = 'Volume Of Payment Types';
    else
      this.cardHeader = 'Amount Per Payment Type';
  }

}
