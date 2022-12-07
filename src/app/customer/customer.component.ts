import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteComponent } from './delete/delete.component';

export interface PeriodicElement {
  name: string;
  code: string;
  logo: string;
  industry: string;
  subscription: string;
  active: string;
  end: string;
  totalsurvey: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { code: 'EPC001', logo: 'assets/image/apple.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC002', logo: 'assets/image/wal.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Analyze', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC003', logo: 'assets/image/google.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Accelerate', active: 'No', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC004', logo: 'assets/image/amazon.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Accelerate', active: 'No', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC005', logo: 'assets/image/grog.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Accelerate', active: 'No', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC006', logo: 'assets/image/apple.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC007', logo: 'assets/image/apple.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC008', logo: 'assets/image/apple.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC009', logo: 'assets/image/apple.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC0010', logo: 'assets/image/google.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC0011', logo: 'assets/image/google.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC0012', logo: 'assets/image/google.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Analyze', active: 'No', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC0013', logo: 'assets/image/apple.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Accelerate', active: 'No', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC0014', logo: 'assets/image/grog.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Accelerate', active: 'No', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC0015', logo: 'assets/image/grog.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Accelerate', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC0016', logo: 'assets/image/grog.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC001', logo: 'assets/image/apple.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC001', logo: 'assets/image/google.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'No', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC001', logo: 'assets/image/google.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'No', end: '17/04/2022', totalsurvey: '-', action: '' },
  { code: 'EPC001', logo: 'assets/image/google.png', name: 'Apple.inc', industry: 'Electronics', subscription: 'Asses', active: 'Yes', end: '17/04/2022', totalsurvey: '-', action: '' },
];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatAccordion) accordion!: MatAccordion;


  panelOpenState = false;
  rofl: any;
  picker: any
  showFilter: boolean = false;
  removable = true;
  searchVal: any;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  options={
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  displayedColumns: string[] = [
    'select',
    'code',
    'logo',
    'name',
    'industry',
    'subscription',
    'active',
    'end',
    'totalsurvey',
    'action'
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  searchFeilds: any;
  customer:any;
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

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  search() {
    this.searchFeilds = {
      quick: "abc sehgal",
      subscription: "Analyze",
      status:"Active"
    }
    this.showFilter = !this.showFilter
  }

  remove(label:any){
    if(label=='quick'){
      this.searchFeilds.quick = "";
    }
    if(label=='subscription'){
      this.searchFeilds.subscription = "";
    }
    if(label=='status'){
      this.searchFeilds.status = "";
    }
    this.searchFeilds=((this.searchFeilds.quick != "") || (this.searchFeilds.subscription != "") || (this.searchFeilds.status = ""))?this.searchFeilds:'';

  }

  openDialog(): void {
    this.dialog.open(AddCustomerComponent);
  }
  delete(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
        title: 'Customer'
    };
    this.dialog.open(DeleteComponent,dialogConfig);
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

}
