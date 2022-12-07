import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.scss']
})
export class BenchmarksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toppings = new FormControl();
  toppingsControl = new FormControl([]);
  toppingList: string[] = ['Accesso alla', 'Survey', 'Link Email','Accesso alla', 'Survey', 'Link Email'];

  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value;
    this.removeFirst(toppings!, topping);
    this.toppingsControl.setValue(toppings);
  }
  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
