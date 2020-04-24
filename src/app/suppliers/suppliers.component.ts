import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  view = "grid";
  displayedColumns: string[] = ['name', 'email', 'contact', 'location'];
  overviewTiles = [
    { title: 'Enrollment Initiated', value: '25000', percent: '48', icon: 'arrow_downward', color: 'yellow', isSelected: true },
    { title: 'Active', value: '22000', percent: '42', icon: 'arrow_upward', color: 'green' },
    { title: 'Enrollment Pending', value: '2500', percent: '42', icon: 'arrow_upward', color: 'blue' },
    { title: 'Validation Pending', value: '500', percent: '35', icon: 'arrow_downward', color: 'red' }
  ]

  gridViewData = [
    { name: 'Globex Corporation', email: 'gbcorp@comapp.com', contact: '18156850566', logo: 'w-t1', location: '1919 Davis St, San Leandro, CA 94577', isSelected: false },
    { name: 'ICP', email: 'custservice@icp.com', contact: '4567898765', logo: 'icp', location: '', isSelected: false },
    { name: 'Reamax', email: 'custservice@reamax.com', contact: '185-656-5656', logo: 'reamax', location: 'New York, NY, USA', isSelected: false },
    { name: 'Greens Food', email: 'custservice@greens.com', contact: '5313337559', logo: 'greensfood', location: 'Wyvern Way, Derby DE21, UK', isSelected: false },
    { name: 'Setra', email: 'custservice@setra.com', contact: '5313337559', logo: 'setra', location: 'Wyvern Way, Derby DE21, UK', isSelected: false },
    { name: 'Veg & More', email: 'custservice@veg&more.com', contact: '4083767400', logo: 'vegandmore', location: 'Whittaker House, 2 Whittaker Ave, Richmond TW9 1EH, UK', isSelected: false },
    { name: 'Gladiator', email: 'custservice@gladiator.com', contact: '7047581000', logo: 'gladiator', location: 'Lowe\'s Blvd Rd, Gaston, NC 27831, USA', isSelected: false },
    { name: 'Connxus', email: 'custservice@connxus.com', contact: '4083767400', logo: 'connxus', location: 'Whittaker House, 2 Whittaker Ave, Richmond TW9 1EH, UK', isSelected: false },
    { name: 'Change Media Group', email: 'custservice@mediagrp.com', contact: '7047581000', logo: 'changemedia', location: 'Lowe\'s Blvd Rd, Gaston, NC 27831, USA', isSelected: false },
  ]

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Suppliers")
  }

}
