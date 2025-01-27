import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteSerieComponent } from './form-delete-serie.component';

describe('FormDeleteSerieComponent', () => {
  let component: FormDeleteSerieComponent;
  let fixture: ComponentFixture<FormDeleteSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeleteSerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeleteSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
