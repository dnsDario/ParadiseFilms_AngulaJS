import { Component } from '@angular/core';
import { Serie } from '../../../interfaces/serie';
import { SerieService } from '../../../services/serie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent {
  serieId: string = '';
  serie: Serie = {_id:"", title: "", year: 0, img: "", category: "",  director: "", synopsis:"" } 

  constructor(private activatedRoute: ActivatedRoute, private serieService: SerieService) {
    this.activatedRoute.params.subscribe({
      next:(res: any)=> {
        this.serieId = res.id,
        this.serieService.findById(this.serieId).subscribe({
          next: (res) => this.serie = res as Serie,
          error: (err) => console.log(err)
        })
      },
      error:(err) => console.log(err)
    })
    
  }
}
