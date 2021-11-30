import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmestajComponent } from './add-smestaj.component';

describe('AddSmestajComponent', () => {
  let component: AddSmestajComponent;
  let fixture: ComponentFixture<AddSmestajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSmestajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSmestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
