import { FilmService } from './../../../../services/film.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { FilmCreateData } from '../../../../interfaces/dto/film-create-data';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../../../interfaces/film';


@Component({
  selector: 'app-form-edit-film',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-edit-film.component.html',
  styleUrl: './form-edit-film.component.css'
})
export class FormEditFilmComponent {
  filmToEdit?: Film = {
              _id: '',
              title: '',
              year: 0,
              img: '',
              director: '',
              category: '',
              synopsis: '',
  }
  

  editFilmForm: FormGroup  = this.formBuilder.group({
        title: new FormControl(null, [Validators.required]),
        year: new FormControl(null, [Validators.required, Validators.email]),
        img: new FormControl(null, [Validators.required]),
        director: new FormControl(null, [Validators.required]),
        category: new FormControl(null, [Validators.required]),
        synopsis: new FormControl(null, [Validators.required]),
    })
  
    constructor(
      private formBuilder: FormBuilder,
      private filmService: FilmService,
      private route: ActivatedRoute,
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id === null) {
        console.error('ID no encontrado en la ruta');
        return;
      }
      this.filmService.findById(id).subscribe({
        next: (res) => {
          this.filmToEdit = res as Film;
          console.log('esta es la pelicula ' , this.filmToEdit)
          if (this.filmToEdit) {
            const film = this.filmToEdit;
            this.editFilmForm.patchValue({
              title: film.title,
              year: film.year,
              img: film.img,
              director: film.director,
              category: film.category,
              synopsis: film.synopsis,
            });
          }
        },
        error: (err) => console.log('algún error al cargar la película', err),
      });
    }
  
    editFilm(){
      const id = this.route.snapshot.paramMap.get('id')
      if (id === null) {
        console.error('ID no encontrado en la ruta');
        return;
      }
      const filmForEdit: FilmCreateData = {
        title: this.editFilmForm.get('title')?.value,
        year: this.editFilmForm.get('year')?.value,
        img: this.editFilmForm.get('img')?.value,
        director: this.editFilmForm.get('director')?.value,
        category: this.editFilmForm.get('category')?.value,
        synopsis: this.editFilmForm.get('synopsis')?.value,
      };
      this.filmService.update(id, filmForEdit).subscribe({
        next: (res:any) => alert('¡Película modificada con exito!'),
        error: (err) => console.log('error al modificar la pelicula')
      })
    }
}
