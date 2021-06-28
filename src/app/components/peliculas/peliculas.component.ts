import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Pelicula } from 'src/app/models/peliculas.model';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent implements OnInit {
  peliculas: Array<Pelicula> = new Array<Pelicula>();
  constructor(private PeliculasApi: PeliculasService) {}

  ngOnInit(): void {
    this.PeliculasApi.leerPeliculas().subscribe(
      (res) => {
        this.peliculas = res;
        // console.log(typeof this.peliculas);
        // console.log(typeof res);
        console.log(res);
        // console.log(this.peliculas);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
