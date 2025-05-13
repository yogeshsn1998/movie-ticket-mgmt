import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  movieList: { name: string, lang: string, year: number, price: number }[] = [
    { name: 'Movie 1', lang: 'English', year:2024, price: 200 },
    { name: 'Movie 2', lang: 'Tamil', year:2024, price: 300 },
    { name: 'Movie 3', lang: 'English', year:2024, price: 100 }
  ];

  getAllMovies(){
    return this.movieList;
  }
  
 addMovie(movie: any){
      console.log("inside add serv")

    this.movieList.push(movie);
    console.log(this.movieList)
  }
}
