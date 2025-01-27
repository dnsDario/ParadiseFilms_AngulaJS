import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Serie } from '../../../../interfaces/serie';
import { SerieService } from '../../../../services/serie.service';

@Component({
  selector: 'app-table-series',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './table-series.component.html',
  styleUrl: './table-series.component.css'
})
export class TableSeriesComponent {
  series: Serie[] = []
  seriesFiltered: Serie[] = []

  searcherSerie: FormGroup = this.formBuilder.group({
    serie: new FormControl(null, [Validators.required]),
  });

  constructor(
    private serieService: SerieService,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void {
    this.serieService.findAll().subscribe({
      next:(res) =>{
        this.series = res as Serie[]
      },
      error:(err) => console.log('error al cargar las series')
    })
  }

  searchSerie(){
    const nombreFiltro = this.searcherSerie.get('serie')?.value;
    this.seriesFiltered = this.series.filter((i)=> i.title.toLowerCase().includes(nombreFiltro.toLowerCase()))
  }
}
