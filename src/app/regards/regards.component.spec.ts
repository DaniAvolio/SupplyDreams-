import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegardsComponent } from './regards.component';

describe('RegardsComponent', () => {
  let component: RegardsComponent;
  let fixture: ComponentFixture<RegardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
