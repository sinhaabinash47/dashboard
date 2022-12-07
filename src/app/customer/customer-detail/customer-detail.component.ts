import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  tabs=[
    {name:'Overview', url:'/home/customer-deatil/profile'},
    {name:'Contacts',  url:'/home/customer-deatil/contact'},
    {name:'Subscription', url:'/home/customer-deatil/subscription'},
    {name:'Users', url:'/home/customer-deatil/users'},
    {name:'Files', url:'/home/customer-deatil/files'},
    {name:'Logs', url:'/home/customer-deatil/logs'},
  ]

  cards=[
    {icon:'bookmarks',no:'4',text:'Bazze - MOCK'},
    {icon:'assignment_turned_in',no:'10',text:'Programmate - MOCK'},
    {icon:'rocket_launch',no:'1',text:'LIve - MOCK'},
    {icon:'bar_chart',no:'5',text:'Risultati - MOCK'},
    {icon:'lens_blur',no:'20',text:'Survey - MOCK'}
  ]
  accelerate = 165;
  total_accelerate=365;
  progress=0;
  constructor() {}

  ngOnInit(): void {
    this.progress=(this.accelerate/this.total_accelerate)*100;
  }
}
