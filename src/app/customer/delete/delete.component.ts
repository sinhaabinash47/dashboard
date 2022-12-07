import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  title: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) data:any) {
    this.title = data.title;
  }

  ngOnInit(): void {
  }

}
