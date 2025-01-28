import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SerieCreateData } from '../../../../interfaces/dto/serie-create-data';
import { SerieService } from '../../../../services/serie.service';
import { Serie } from '../../../../interfaces/serie';

@Component({
  selector: 'app-form-edit-serie',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-edit-serie.component.html',
  styleUrl: './form-edit-serie.component.css'
})
export class FormEditSerieComponent {
  serieToEdit?: Serie = {
                _id: '',
                title: '',
                year: 0,
                img: '',
                director: '',
                category: '',
                synopsis: '',
    }
  editSerieForm: FormGroup  = this.formBuilder.group({
          title: new FormControl(null, [Validators.required]),
          year: new FormControl(null, [Validators.required, Validators.email]),
          img: new FormControl(null, [Validators.required]),
          director: new FormControl(null, [Validators.required]),
          category: new FormControl(null, [Validators.required]),
          synopsis: new FormControl(null, [Validators.required]),
      })
    
      constructor(
        private formBuilder: FormBuilder,
        private serieService: SerieService,
        private route: ActivatedRoute,
      ){}

      ngOnInit(): void {
            const id = this.route.snapshot.paramMap.get('id');
            if (id === null) {
              console.error('ID no encontrado en la ruta');
              return;
            }
            this.serieService.findById(id).subscribe({
              next: (res) => {
                this.serieToEdit = res as Serie;
                console.log('esta es la pelicula ' , this.serieToEdit)
                if (this.serieToEdit) {
                  const serie = this.serieToEdit;
                  this.editSerieForm.patchValue({
                    title: serie.title,
                    year: serie.year,
                    img: serie.img,
                    director: serie.director,
                    category: serie.category,
                    synopsis: serie.synopsis,
                  });
                }
              },
              error: (err) => console.log('algún error al cargar la película', err),
            });
          }
    
      editSerie(){
        const id = this.route.snapshot.paramMap.get('id')
        if (id === null) {
          console.error('ID no encontrado en la ruta');
          return;
        }
        const serieForEdit: SerieCreateData = {
          title: this.editSerieForm.get('title')?.value,
          year: this.editSerieForm.get('year')?.value,
          img: this.editSerieForm.get('img')?.value,
          director: this.editSerieForm.get('director')?.value,
          category: this.editSerieForm.get('category')?.value,
          synopsis: this.editSerieForm.get('synopsis')?.value,
        };
        this.serieService.update(id, serieForEdit).subscribe({
          next: (res:any) => alert('¡Serie editada con exito!'),
          error: (err) => console.log('error al editar la serie')
        })
      }
}
