import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  imports: [ CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  addMovieToggle: boolean = false;

  movieList: any;

  constructor(
    private movieService: MovieService) { }

  ngOnInit() {
    this.movieList = this.movieService.getAllMovies();
  }

}
