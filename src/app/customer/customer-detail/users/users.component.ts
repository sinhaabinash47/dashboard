import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableUtil } from './tableUtil';
import * as XLSX from "xlsx";
import { DeleteComponent } from '../../delete/delete.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UseremailComponent } from './useremail/useremail.component';
import { UserlockComponent } from './userlock/userlock.component';

export interface PeriodicElement {
  name: string;
  username: string;
  role: string;
  lastlogin: string;
  lastpasswordchange: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { username: 'asalam@123', name: 'Jatin', role: 'UX/UI', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
  { username: 'sinha@234', name: 'Suraj', role: 'Fullstack', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
  { username: 'jatin12', name: 'Aslam', role: 'Deovps', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
  { username: 'kanchan@86', name: 'Abinash', role: 'Angular', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
  { username: 'vikash#2445', name: 'Morgen', role: 'Associtate', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
  { username: 'abinash$547', name: 'Stock', role: 'Cloud', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
  { username: 'arjun@456', name: 'Ken', role: 'React', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
  { username: 'seghal@78945', name: 'Vikash', role: 'Java', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
  { username: 'mook@7856', name: 'Raket', role: 'C/C++', lastlogin: '17/04/2022', lastpasswordchange: '17/04/2022', action: '' },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  panelOpenState = false;
  rofl: any;
  picker: any
  showFilter: boolean = false;
  removable = true;
  searchVal: any;
  name!: string;

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

  displayedColumns: string[] = [
    'select',
    'name',
    'username',
    'role',
    'lastlogin',
    'lastpasswordchange',
    'action'
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  searchFeilds: any;
  customer: any;
  constructor(public dialog: MatDialog) { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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
    this.searchFeilds = ((this.searchFeilds.quick != "") || (this.searchFeilds.lastlogin != "") || (this.searchFeilds.status = "")) ? this.searchFeilds : '';
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

 addbut(){
   window.alert("addbutton");
 }
 editbut(){
   window.alert("editbutton");
 }
 delete(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = {
      title: 'User'
  };
  this.dialog.open(DeleteComponent,dialogConfig);
 }
  exportTable() {
    TableUtil.exportTableToExcel("ExampleMaterialTable");
    this.loading = true;
    setTimeout(() => this.loading = false, 500)
  }
  adduser(): void {
    this.dialog.open(AddUsersComponent)
  }
  edituser(): void {
    this.dialog.open(EdituserComponent)
  }
  useremail(): void {
    this.dialog.open(UseremailComponent)
  }
  userlock(): void {
    this.dialog.open(UserlockComponent)
  }
}
