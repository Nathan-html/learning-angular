import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExoComponent } from './second-exo.component';

describe('SecondExoComponent', () => {
  let component: SecondExoComponent;
  let fixture: ComponentFixture<SecondExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondExoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
