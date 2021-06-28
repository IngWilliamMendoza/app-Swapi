import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/peliculas.model';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  pelicula: Pelicula = new Pelicula();
  constructor(private http: HttpClient) {}

  leerPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>('https://swapi.dev/api/films');
  }
}
