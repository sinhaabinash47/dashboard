import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  tabButtons=[
    'Assess','Analyze','Accelerate'
  ];

  selectedTab:any="Assess";
  changed: any;
  constructor() { }

  ngOnInit(): void {
  }

  content=[
    {title:'Partecipanti',
    list:[
      {label:'Possiblità di precodificare info demografiche in EDF',status:false},
      {label:'Possibilità di lancio progetti multinazionali',status:true},
      {label:'Accesso alla Survey tramite link email',status:false},
      {label:'Possiblità di precodificare info demografiche in EDF',status:false},
      {label:'Possibilità di lancio progetti multinazionali',status:true},
      {label:'Accesso alla Survey tramite link email',status:false},
      {label:'Possiblità di precodificare info demografiche in EDF',status:false},
      {label:'Possibilità di lancio progetti multinazionali',status:true},
      {label:'Accesso alla Survey tramite link email',status:false},
      {label:'Possiblità di precodificare info demografiche in EDF',status:false},
      {label:'Possibilità di lancio progetti multinazionali',status:true},
    ]},
    {title:'Accessi',
    list:[
      {label:'Possiblità di precodificare info demografiche in EDF',status:false},
      {label:'Possibilità di lancio progetti multinazionali',status:true},
      {label:'Accesso alla Survey tramite link email',status:false},
      {label:'Possiblità di precodificare info demografiche in EDF',status:false},
      {label:'Possibilità di lancio progetti multinazionali',status:true},
      {label:'Accesso alla Survey tramite link email',status:false}
    ]},
  ]

  changeStatus(contentIndex:any,listIndex:any){
    this.content[contentIndex].list[listIndex].status=!this.content[contentIndex].list[listIndex].status;
  }
  }
