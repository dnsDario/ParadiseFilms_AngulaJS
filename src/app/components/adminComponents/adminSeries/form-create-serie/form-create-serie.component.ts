import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SerieService } from '../../../../services/serie.service';
import { SerieCreateData } from '../../../../interfaces/dto/serie-create-data';

@Component({
  selector: 'app-form-create-serie',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-create-serie.component.html',
  styleUrl: './form-create-serie.component.css',
})
export class FormCreateSerieComponent {

  createSerieForm: FormGroup = this.formBuilder.group({
    title: new FormControl(null, [Validators.required]),
    year: new FormControl(null, [Validators.required, Validators.email]),
    img: new FormControl(null, [Validators.required]),
    director: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    synopsis: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private serieService: SerieService
  ) {}

  createSerie() {
    const serieForCreate: SerieCreateData = {
      title: this.createSerieForm.get('title')?.value,
      year: this.createSerieForm.get('year')?.value,
      img: this.createSerieForm.get('img')?.value,
      director: this.createSerieForm.get('director')?.value,
      category: this.createSerieForm.get('category')?.value,
      synopsis: this.createSerieForm.get('synopsis')?.value,
    };
    this.serieService.insert(serieForCreate).subscribe({
      next: (res: any) => alert('¡Serie creada con exito!'),
      error: (err) => console.log('error al crear la serie'),
    });
  }
}
