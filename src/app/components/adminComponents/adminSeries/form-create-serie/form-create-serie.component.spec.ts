import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateSerieComponent } from './form-create-serie.component';

describe('FormCreateSerieComponent', () => {
  let component: FormCreateSerieComponent;
  let fixture: ComponentFixture<FormCreateSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateSerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreateSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
