import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branding-dialog',
  templateUrl: './branding-dialog.component.html',
  styleUrls: ['./branding-dialog.component.scss']
})
export class BrandingDialogComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  Upload: any;
  imageUrl: any;
  customer: any;

  colors = [
    { name: 'Primary', bgColor: '', textColor: '' },
    { name: 'Secondary', bgColor: '', textColor: '' },
    { name: 'Tertiary', bgColor: '', textColor: '' }
  ]
  changeImage(file: FileList) {
    this.Upload = file[0];
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.Upload);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
