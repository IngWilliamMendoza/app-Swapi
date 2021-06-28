import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'personajes', component: PersonajesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
