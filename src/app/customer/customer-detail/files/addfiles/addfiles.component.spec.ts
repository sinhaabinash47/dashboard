import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfilesComponent } from './addfiles.component';

describe('AddfilesComponent', () => {
  let component: AddfilesComponent;
  let fixture: ComponentFixture<AddfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
