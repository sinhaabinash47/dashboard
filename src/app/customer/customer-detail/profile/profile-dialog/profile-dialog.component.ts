import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
  ];
  industry: string[] = [
    'Aerospace - Other / Not Applicable',
   ' Aging Services - Senior Housing & Care',
   ' Aging Services - At-Home Care',
   ' Aging Services - Other',
   ' Agriculture - Other / Not Applicable',
   ' Biotechnology & Pharmaceuticals - Biotechnology',
   ' Biotechnology & Pharmaceuticals - Pharmaceuticals'
  ]
  business: string[] = [
    'Listed company',
    'Private company',
    'Partnership',
    'Non-Profit o Not-For-Profit',
    'Cooperative',
    'Government agency',
    'Public company',
  ]
}
