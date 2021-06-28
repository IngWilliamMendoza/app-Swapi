import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// components
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { NavesComponent } from './components/naves/naves.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PersonajesComponent,
    NavesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
