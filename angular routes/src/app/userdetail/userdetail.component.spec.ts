import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailComponent } from './userdetail.component';

describe('UserdetailComponent', () => {
  let component: UserdetailComponent;
  let fixture: ComponentFixture<UserdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
