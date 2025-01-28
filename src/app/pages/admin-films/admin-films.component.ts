import { Component } from '@angular/core';
import { FormCreateFilmComponent } from '../../components/adminComponents/adminFilms/form-create-film/form-create-film.component';

@Component({
  selector: 'app-admin-films',
  standalone: true,
  imports: [FormCreateFilmComponent],
  templateUrl: './admin-films.component.html',
  styleUrl: './admin-films.component.css'
})
export class AdminFilmsComponent {

}
