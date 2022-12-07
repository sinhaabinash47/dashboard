import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filesedit',
  templateUrl: './filesedit.component.html',
  styleUrls: ['./filesedit.component.scss']
})
export class FileseditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  removable = true;

  fruits=[] = [
    {name: 'Logo'},
    {name: 'Corporate'},
    {name: 'Industry'},
  ];

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
