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
    {name: 'Globex Corporation', email: 'gbcorp@comapp.com', contact: '18156850566', logo: 'w-t1', location: '1919 Davis St, San Leandro, CA 94577', isSelected: true },
    {name: 'Target', email: 'sherry@socialheit.com', contact: '4567898765', logo: 'target', location: '', isSelected: false },
    {name: 'Amazon', email: 'jk@amazon.com', contact: '185-656-5656', logo: 'amazon', location: 'New York, NY, USA', isSelected: false },
    {name: 'Costco', email: 'custservice@costco.com', contact: '5313337559', logo: 'costco', location: 'Wyvern Way, Derby DE21, UK', isSelected: false },
    {name: 'eBay', email: 'dwenig@ebay.com', contact: '4083767400', logo: 'ebay', location: 'Whittaker House, 2 Whittaker Ave, Richmond TW9 1EH, UK', isSelected: false },
    {name: 'Lowe\'s', email: 'mark.ellison@lowes.com', contact: '7047581000', logo: 'lowes', location: 'Lowe\'s Blvd Rd, Gaston, NC 27831, USA', isSelected: false },
  ]

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Suppliers")
  }

}
