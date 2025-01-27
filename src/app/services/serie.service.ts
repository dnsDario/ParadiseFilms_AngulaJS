import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SerieCreateData } from '../interfaces/dto/serie-create-data';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  URL_API: string = /* "https://paradise-films-backend.vercel.app" || */ 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  

  findAll(){
    return this.http.get(`${this.URL_API}/api/series?token=${this.cookies.get('token')}`)
  }

  findById(id:string){
    return this.http.get(`${this.URL_API}/api/series/${id}?token=${this.cookies.get('token')}`)
  }

  insert(data: SerieCreateData){
    return this.http.post(`${this.URL_API}/api/series?token=${this.cookies.get('token')}`, data)
  }

  deleteOne(id: string){
    return this.http.delete(`${this.URL_API}/api/series/${id}?token=${this.cookies.get('token')}`)
  }
}
