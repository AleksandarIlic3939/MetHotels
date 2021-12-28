import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmestajListingComponent } from './smestaj-listing.component';

describe('SmestajListingComponent', () => {
  let component: SmestajListingComponent;
  let fixture: ComponentFixture<SmestajListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmestajListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmestajListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
