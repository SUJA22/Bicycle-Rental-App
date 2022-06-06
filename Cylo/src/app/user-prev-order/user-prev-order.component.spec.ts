import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrevOrderComponent } from './user-prev-order.component';

describe('UserPrevOrderComponent', () => {
  let component: UserPrevOrderComponent;
  let fixture: ComponentFixture<UserPrevOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPrevOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPrevOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
