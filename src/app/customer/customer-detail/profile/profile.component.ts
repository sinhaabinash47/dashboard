import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrandingDialogComponent } from './branding-dialog/branding-dialog.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = {
    code: 'EPC001',
    name: 'CVS Health',
    customer: 'Information Technology - Software',
    business: 'Private Company',
    region: 'Lombardia',
    province: 'MI',
    city: 'Sestri Levante',
    company: 'www.jatin.com',
    blue: 'Yes',
    multi: 'No',
    recent: 'Not answered yet',
    total: '10055'
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetailDialog(): void {
    this.dialog.open(ProfileDialogComponent)
  }
  openBradingDialog(): void {
    this.dialog.open(BrandingDialogComponent)
  }
}
