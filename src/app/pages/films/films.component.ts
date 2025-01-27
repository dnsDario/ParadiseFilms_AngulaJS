
import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/film';
import { FilmService } from '../../services/film.service';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-films',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit{
  films: Film[] = []
  filmsFiltered: Film[] = []

  searcherFilm: FormGroup = this.formBuilder.group({
    film: new FormControl(null, [Validators.required]),
  });

  constructor(
    private filmService: FilmService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.filmService.findAll().subscribe({
      next:(res) => this.films = res as Film[],
      error:(err) => console.log('algún error al cargar todas las películas')
    })
  }

  searchFilm(){
    const nombreFiltro = this.searcherFilm.get('film')?.value;
    this.filmsFiltered = this.films.filter((i)=> i.title.toLowerCase().includes(nombreFiltro.toLowerCase()))
  }

  scrollToTop(){
    window.scrollTo(0,0)
  }
}
