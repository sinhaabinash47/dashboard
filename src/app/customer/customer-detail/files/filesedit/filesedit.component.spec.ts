import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileseditComponent } from './filesedit.component';

describe('FileseditComponent', () => {
  let component: FileseditComponent;
  let fixture: ComponentFixture<FileseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
