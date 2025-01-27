import { Component } from '@angular/core';
import { TableSeriesComponent } from '../../components/adminComponents/adminSeries/table-series/table-series.component';
import { FormCreateSerieComponent } from '../../components/adminComponents/adminSeries/form-create-serie/form-create-serie.component';
import { FormDeleteSerieComponent } from '../../components/adminComponents/adminSeries/form-delete-serie/form-delete-serie.component';

@Component({
  selector: 'app-admin-series',
  standalone: true,
  imports: [TableSeriesComponent, FormCreateSerieComponent, FormDeleteSerieComponent],
  templateUrl: './admin-series.component.html',
  styleUrl: './admin-series.component.css'
})
export class AdminSeriesComponent {

}
