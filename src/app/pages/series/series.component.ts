import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Serie } from '../../interfaces/serie';
import { SerieService } from '../../services/serie.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series: Serie[] = []
  seriesFiltered: Serie[] = []
  seriesDeleted: Serie[] = []
  isAdmin: string = this.cookie.get('role')

  searcherSerie: FormGroup = this.FormBuilder.group({
    serie: new FormControl(null, [Validators.required]),
  });

  constructor(
    private serieService: SerieService,
    private FormBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService
  ){}

    ngOnInit(): void {
      this.serieService.findAll().subscribe({
        next:(res) => this.series = res as Serie[],
        error:(err) => console.log('algún error al cargar todas las series')
      })
    }
  
    searchSerie(){
      const nombreFiltro = this.searcherSerie.get('serie')?.value;
      this.seriesFiltered = this.series.filter((i)=> i.title.toLowerCase().includes(nombreFiltro.toLowerCase()))
    }

    deleteSerie(id: string){
      this.serieService.deleteOne(id).subscribe({
        next: (res: any) => {
          alert('La siguiente pelicula fue eliminada: '+ res.serieDeleted.title),
          this.router.navigate(['/series']);
        },
        error: (err) => console.log('error al borrar la película'),
      });
    }

    scrollToTop(){
      window.scrollTo(0,0)
    }
}
