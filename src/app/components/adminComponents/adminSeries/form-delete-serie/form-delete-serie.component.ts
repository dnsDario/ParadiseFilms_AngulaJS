import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { SerieService } from '../../../../services/serie.service';

@Component({
  selector: 'app-form-delete-serie',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-delete-serie.component.html',
  styleUrl: './form-delete-serie.component.css'
})
export class FormDeleteSerieComponent {
  deleterSerie: FormGroup = this.formBuilder.group({
    id: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private serieService: SerieService,
    private router: Router
  ){}
  
  deleteSerie(){
    const id: string = this.deleterSerie.get('id')?.value
    this.serieService.deleteOne(id).subscribe({
      next: (res: any) => {
        alert('La siguiente serie fue eliminada: '+ res.serieDeleted.title),
        this.router.navigate(['/adminSeries']);
        console.log(res)
      },
      error: (err) => console.log('error al borrar la serie'),
    });
  }
}
