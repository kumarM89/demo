import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awaiting-approval',
  templateUrl: './awaiting-approval.component.html',
  styleUrls: ['./awaiting-approval.component.css']
})
export class AwaitingApprovalComponent implements OnInit {
  displayedColumns: string[] = ['name', 'rs','btn'];
  dataSource = [
    {name: 'Payments', rs: '100',btn:'PROCESS APPROVALS'},
    {name: 'Files', rs: '10',btn:'PROCESS APPROVALS'},
    {name: 'Supplier Profiles', rs: '10',btn:'PROCESS APPROVALS'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
