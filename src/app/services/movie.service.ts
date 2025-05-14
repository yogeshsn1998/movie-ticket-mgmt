import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  movieList: Movie[] = [
    new Movie('Movie 1', 'English', 2024, 200 ),
    new Movie('Movie 2', 'Tamil', 2024, 300 ),
    new Movie('Movie 3', 'Hindi', 2024, 100 )
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
