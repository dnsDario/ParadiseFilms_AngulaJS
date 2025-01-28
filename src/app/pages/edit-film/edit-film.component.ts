import { Component } from '@angular/core';
import { FormEditFilmComponent } from '../../components/adminComponents/adminFilms/form-edit-film/form-edit-film.component';

@Component({
  selector: 'app-edit-film',
  standalone: true,
  imports: [FormEditFilmComponent],
  templateUrl: './edit-film.component.html',
  styleUrl: './edit-film.component.css'
})
export class EditFilmComponent {

}
