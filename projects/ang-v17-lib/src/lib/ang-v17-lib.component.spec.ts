import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngV17LibComponent } from './ang-v17-lib.component';

describe('AngV17LibComponent', () => {
  let component: AngV17LibComponent;
  let fixture: ComponentFixture<AngV17LibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngV17LibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngV17LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
