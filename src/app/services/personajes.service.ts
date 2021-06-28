import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>('http https://swapi.dev/api/people');
  }
}
