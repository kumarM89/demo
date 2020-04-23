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
  cardHeader = 'Amount Per Payment Type';
  
  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  handleChange(event){
    if(event.value == 'amount')
      this.cardHeader = 'Amount Per Payment Type';
    else
      this.cardHeader = 'Volume Of Payment Types';
  }

}
