import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awaiting-approval',
  templateUrl: './awaiting-approval.component.html',
  styleUrls: ['./awaiting-approval.component.css']
})
export class AwaitingApprovalComponent implements OnInit {
  approveData = [
    {
      name: 'Payments',
      rs: '100',
      dl: '$50,000' 
    },
    {
      name: 'Files',
      rs: '10',
      dl: '$540,000' 
    },
    {
      name: 'Supplier Profiles',
      rs: '10',
      dl: '$40,000' 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
