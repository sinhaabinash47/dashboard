import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingDialogComponent } from './branding-dialog.component';

describe('BrandingDialogComponent', () => {
  let component: BrandingDialogComponent;
  let fixture: ComponentFixture<BrandingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
