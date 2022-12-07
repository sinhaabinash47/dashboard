import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlockComponent } from './userlock.component';

describe('UserlockComponent', () => {
  let component: UserlockComponent;
  let fixture: ComponentFixture<UserlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
