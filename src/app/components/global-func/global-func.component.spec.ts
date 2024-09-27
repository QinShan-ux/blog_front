import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFuncComponent } from './global-func.component';

describe('GlobalFuncComponent', () => {
  let component: GlobalFuncComponent;
  let fixture: ComponentFixture<GlobalFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalFuncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
