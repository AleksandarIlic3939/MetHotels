import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSmestajComponent } from './view-smestaj.component';

describe('ViewSmestajComponent', () => {
  let component: ViewSmestajComponent;
  let fixture: ComponentFixture<ViewSmestajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSmestajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSmestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
