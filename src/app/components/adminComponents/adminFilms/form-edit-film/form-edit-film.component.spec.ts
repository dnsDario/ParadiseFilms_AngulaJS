import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditFilmComponent } from './form-edit-film.component';

describe('FormEditFilmComponent', () => {
  let component: FormEditFilmComponent;
  let fixture: ComponentFixture<FormEditFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
