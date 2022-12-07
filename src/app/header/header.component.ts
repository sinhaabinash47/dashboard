import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() drawerClick = new EventEmitter<any>();
  @Input() isOpened:any=false;
  
  language:any;
  languages = [
    {lang: 'UK', url: 'assets/image/flag1.png'},
    {lang: 'IT', url: 'assets/image/italy.png'}
  ];

  constructor() {
    this.language = 'UK';
   }

ngOnInit(): void { }
   toggle(): void {
    this.drawerClick.emit();
   }

   getLangFlag(){
    let index = this.languages.findIndex(res => res.lang === this.language);
    let url;
    if(index >= 0){
      url = this.languages[index].url;
    }
    return url;
   }  
}
