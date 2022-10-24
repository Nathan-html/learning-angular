import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExoComponent } from './first-exo.component';

describe('FirstExoComponent', () => {
  let component: FirstExoComponent;
  let fixture: ComponentFixture<FirstExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstExoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
