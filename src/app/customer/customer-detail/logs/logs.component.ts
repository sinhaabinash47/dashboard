import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  Category: string;
  Updatedby: string;
  Updatedon: string;
  Message: string;
  Group: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Category: 'Customer_Subscription_Management', Updatedby: '-', Updatedon: '17/04/2022',Message: 'L`abbonamento con Inizio/Fine / è stato modificato in /10/20/2022',  Group: 'Customer' },
  { Category: 'Survey_Viewer_Management', Updatedby: '-', Updatedon: '17/04/2022',        Message: 'Accesso Manager Stefano Zucconelli rimosso ',  Group: 'Survey' },
  { Category: 'Customer_Subscription_Benchmark_Management	', Updatedby: '-', Updatedon: '17/04/2022', Message: '	Benchmark aaa disabilitato',  Group: 'Customer' },
  { Category: 'Customer_Subscription_Benchmark_Management	', Updatedby: '-', Updatedon: '17/04/2022', Message: 'Accesso Manager Stefano Zucconelli rimosso ',  Group: 'Customer' },
  { Category: 'Customer_Subscription_Benchmark_Management	', Updatedby: '-', Updatedon: '17/04/2022', Message: '	Benchmark aaa disabilitato',  Group: 'Survey' },
  { Category: 'Survey_Viewer_Management	', Updatedby: '-', Updatedon: '17/04/2022',Message: 'Accesso Manager Stefano Zucconelli rimosso ',  Group: 'Customer' },
  { Category: 'Customer_Subscription_Benchmark_Management	', Updatedby: '-', Updatedon: '17/04/2022',Message: '	Benchmark aaa disabilitato',  Group: 'Survey' },
  { Category: 'Survey_Viewer_Management	', Updatedby: '-', Updatedon: '17/04/2022',Message: 'Accesso Manager Stefano Zucconelli rimosso ',  Group: 'Survey' },
  { Category: 'Customer_Subscription_Benchmark_Management	', Updatedby: '-', Updatedon: '17/04/2022',Message: '	Benchmark aaa disabilitato',  Group: 'Customer' },
];


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {


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
    Message: new FormControl()
  });


  options={
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  displayedColumns: string[] = [
    'select',
    'Category',
    'Updatedby',
    'Updatedon',
    'Message',
    'Group'
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
      Updatedon: "Analyze",
      status:"Active"
    }
    this.showFilter = !this.showFilter
  }

  remove(label:any){
    if(label=='quick'){
      this.searchFeilds.quick = "";
    }
    if(label=='Updatedon'){
      this.searchFeilds.Updatedon = "";
    }
    if(label=='status'){
      this.searchFeilds.status = "";
    }
    this.searchFeilds=((this.searchFeilds.quick != "") || (this.searchFeilds.Updatedon != "") || (this.searchFeilds.status = ""))?this.searchFeilds:'';

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
