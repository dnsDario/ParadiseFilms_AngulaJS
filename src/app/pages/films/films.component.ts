import { CookieService } from 'ngx-cookie-service';

import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/film';
import { FilmService } from '../../services/film.service';
import { Router, RouterModule } from '@angular/router';
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
  filmDeleted: Film[] = []
  isAdmin: string = this.cookie.get('role')

  searcherFilm: FormGroup = this.formBuilder.group({
    film: new FormControl(null, [Validators.required]),
  });

  constructor(
    private filmService: FilmService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService
  ){}

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

  deleteFilm(id: string){
    this.filmService.deleteOne(id).subscribe({
      next: (res: any) => {
        alert('La siguiente pelicula fue eliminada: '+ res.filmDeleted.title),
        this.router.navigate(['/films']);
      },
      error: (err) => console.log('error al borrar la película'),
    });
  }

  scrollToTop(){
    window.scrollTo(0,0)
  }
}
