import { Component } from '@angular/core';
import { FormCreateSerieComponent } from '../../components/adminComponents/adminSeries/form-create-serie/form-create-serie.component';

@Component({
  selector: 'app-admin-series',
  standalone: true,
  imports: [FormCreateSerieComponent],
  templateUrl: './admin-series.component.html',
  styleUrl: './admin-series.component.css'
})
export class AdminSeriesComponent {

}
