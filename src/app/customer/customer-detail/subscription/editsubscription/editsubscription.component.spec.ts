import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubscriptionComponent } from './editsubscription.component';

describe('EditsubscriptionComponent', () => {
  let component: EditsubscriptionComponent;
  let fixture: ComponentFixture<EditsubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
