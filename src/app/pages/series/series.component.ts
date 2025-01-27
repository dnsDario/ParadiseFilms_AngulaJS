import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Serie } from '../../interfaces/serie';
import { SerieService } from '../../services/serie.service';

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

  searcherSerie: FormGroup = this.FormBuilder.group({
    serie: new FormControl(null, [Validators.required]),
  });

  constructor(
    private serieService: SerieService,
    private FormBuilder: FormBuilder){}

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

    scrollToTop(){
      window.scrollTo(0,0)
    }
}
