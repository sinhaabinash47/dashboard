import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isExpanded=false;
  isOpened: boolean = true;
  desktopViewWidth: number = 1100;

  tabs=[
    {name:'Dashboard',   icon:'home', url:'/'},
    {name:'Benchmarks',  icon:'verified',  url:'/'},
    {name:'Customer',    icon:'people_alt',  url:'/'},
    {name:'Templates',   icon:'view_quilt',  url:'/'},
    {name:'Centro',      icon:'star_border', url:'/'},
  ]

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isOpened = width >= this.desktopViewWidth;
  }
  toggle(){
    this.isOpened=!this.isOpened;
  }

}
