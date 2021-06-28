export class Pelicula {
  idPelicula: number;
  title: string;
  created: string;
  director: string;
  opening_crawl: string;
  producer: string;

  constructor() {
    this.created = '';
    this.director = '';
    this.opening_crawl = '';
    this.producer = '';
  }
}
