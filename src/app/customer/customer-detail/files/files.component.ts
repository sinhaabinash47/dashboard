import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteComponent } from '../../delete/delete.component';
import { AddfilesComponent } from './addfiles/addfiles.component';
import { FileseditComponent } from './filesedit/filesedit.component';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {


  panelOpenState = false;
  rofl: any;
  picker: any
  showFilter: boolean = false;
  removable = true;
  searchVal: any;

  range = new FormGroup({
    start: new FormControl(),
    lastpasswordchange: new FormControl()
  });


  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };


  searchFeilds: any;
  customer: any;
  dataSource: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  search() {
    this.searchFeilds = {
      quick: "abc sehgal",
      lastlogin: "Analyze",
      status: "Active"
    }
    this.showFilter = !this.showFilter
  }

  remove(label: any) {
    if (label == 'quick') {
      this.searchFeilds.quick = "";
    }
    if (label == 'lastlogin') {
      this.searchFeilds.lastlogin = "";
    }
    if (label == 'status') {
      this.searchFeilds.status = "";
    }
    this.searchFeilds = ((this.searchFeilds.quick != "") || (this.searchFeilds.lastlogin != "") || (this.searchFeilds.status != "")) ? this.searchFeilds : '';

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  addbut() {
    window.alert("addbutton");
  }
  editbut() {
    window.alert("editbutton");
  }

  contacts: any = [{
    imageurl:'Cattura.PNG',
    date:'7/19/2022 - 9:24 PM',
    head: 'Apple Logo',
  },
  {
    imageurl:'Epicentro_Questionario_answers_files.xlsx',
    date:'7/19/2022 - 9:24 PM',
    head: 'Epicentro Questionario...',
  }
  ]

  tramite: any[] = [
    {name: 'logo'},
    {name: 'corporate'},
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.tramite, event.previousIndex, event.currentIndex);
  }
  public delete(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
        title: 'File'
    };
    this.dialog.open(DeleteComponent,dialogConfig);
  }
  public filesedit(): void {
    this.dialog.open(FileseditComponent)
  }
  public addfiles(): void {
    this.dialog.open(AddfilesComponent)
  }
}
