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
    { title: 'Enrollment Pending', value: '2500', percent: '42', icon: 'arrow_upward', color: 'green' },
    { title: 'Validation Pending', value: '500', percent: '35', icon: 'arrow_downward', color: 'red' }
  ]

  gridViewData = [
    { name: 'Change Media Group', email: 'custservice@mediagrp.com', contact: '7047581000', logo: 'changemedia', supplier_id: 'XXX09', isSelected: true },
    { name: 'Globex Corporation', email: 'gbcorp@comapp.com', contact: '18156850566', logo: 'w-t1', supplier_id: 'XXX01', isSelected: false },
    { name: 'ICP', email: 'custservice@icp.com', contact: '4567898765', logo: 'icp', supplier_id: 'XXX02', isSelected: false },
    { name: 'Reamax', email: 'custservice@reamax.com', contact: '185-656-5656', logo: 'reamax', supplier_id: 'XXX03', isSelected: false },
    { name: 'Greens Food', email: 'custservice@greens.com', contact: '5313337559', logo: 'greensfood', supplier_id: 'XXX04', isSelected: false },
    { name: 'Setra', email: 'custservice@setra.com', contact: '5313337559', logo: 'setra', supplier_id: 'XXX05', isSelected: false },
    { name: 'Veg & More', email: 'custservice@veg&more.com', contact: '4083767400', logo: 'vegandmore', supplier_id: 'XXX06', isSelected: false },
    { name: 'Gladiator', email: 'custservice@gladiator.com', contact: '7047581000', logo: 'gladiator', supplier_id: 'XXX07', isSelected: false },
    { name: 'Connxus', email: 'custservice@connxus.com', contact: '4083767400', logo: 'connxus', supplier_id: 'XXX08', isSelected: false }
  ]

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Suppliers")
  }

}
