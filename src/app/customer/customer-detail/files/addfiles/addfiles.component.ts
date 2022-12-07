import { Component, OnInit, VERSION } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-addfiles',
  templateUrl: './addfiles.component.html',
  styleUrls: ['./addfiles.component.scss']
})
export class AddfilesComponent implements OnInit {
  filename: any;
  base64File: any;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  version = VERSION;

  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader()
      fReader.readAsDataURL(file)
      fReader.onloadend = (_event: any) => {
        this.filename = file.name;
        this.base64File = _event.target.result;
      }
    } catch (error) {
      this.filename = null;
      this.base64File = null;
    }
  }

}
