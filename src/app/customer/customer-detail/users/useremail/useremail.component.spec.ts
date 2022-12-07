import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseremailComponent } from './useremail.component';

describe('UseremailComponent', () => {
  let component: UseremailComponent;
  let fixture: ComponentFixture<UseremailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseremailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
