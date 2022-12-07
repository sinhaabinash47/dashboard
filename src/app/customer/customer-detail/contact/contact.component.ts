import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteComponent } from '../../delete/delete.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  contacts: any = [{
    name: 'Jatin Sehgal',
    email: 'jatilsehgal@gmail.com',
    cont: '+919536878787',
    owner: 'CEO',
  },
  {
    name: 'Mohd Aslam',
    email: 'aslamvisionvivante@gmail.com',
    cont: '+91902329517',
    owner: 'Sales and marketing'
  }
  ]
  public dialogContact(): void {
    this.dialog.open(AddContactComponent)
  }
  public delete(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
        title: 'Contact'
    };
    this.dialog.open(DeleteComponent,dialogConfig);
  }
  public editcontact(): void {
    this.dialog.open(EditcontactComponent)
  }

 

  
}


