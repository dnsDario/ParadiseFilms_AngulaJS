import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditSerieComponent } from './form-edit-serie.component';

describe('FormEditSerieComponent', () => {
  let component: FormEditSerieComponent;
  let fixture: ComponentFixture<FormEditSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditSerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
