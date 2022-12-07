import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteComponent } from '../../delete/delete.component';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
import { BenchmarksComponent } from './benchmarks/benchmarks.component';
import { EditsubscriptionComponent } from './editsubscription/editsubscription.component';
import { PoliciesComponent } from './policies/policies.component';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  accelerate = 165;
  total_accelerate = 365;
  progress = 0;

  progressBar = document.querySelector('.progress-bar');
  title:any;
  units: any;
  contact: any =
    {
      paticipate: 'Partecipanti',
      paragraph: 'Possiblità di precodificare info demografiche in EDF',
      paragraph1: ' Possibilità di lancio progetti multinazionali',
      head1: 'Accessi',
      content: 'Accesso alla Survey tramite link email',
      head2: 'Survey',
      content1: 'Survey multilingua'
    }
    subscriptions:any=['Accelerate  1/1/2022 - 12/31/2022','Date  1/1/2022 - 12/31/2022']
    benchmarks: any = [{
    head: 'Benchmarks',
  },
  {
    head: 'Templates',
  }
  ]
  tramite: any[] = [
    { name: 'Accesso alla' },
    { name: 'Survey tramite' },
    { name: 'Link email' },
  ];


  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.tramite, event.previousIndex, event.currentIndex);
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.progress=(this.accelerate/this.total_accelerate)*100;
    this.title=this.accelerate+'/';
    this.units=this.total_accelerate;
  }
  openDetailDialog(): void {
    this.dialog.open(BenchmarksComponent,{width:'400px'})
  }
  policies(): void {
    this.dialog.open(PoliciesComponent)
  }
  public addsubscription(): void {
    this.dialog.open(AddSubscriptionComponent)
  }
  public edit(): void {
    this.dialog.open(EditsubscriptionComponent)
  }
  public delete(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
        title: 'Subscription Policies'
    };
    this.dialog.open(DeleteComponent,dialogConfig);
  }
}
