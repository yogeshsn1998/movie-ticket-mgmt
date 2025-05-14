import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  movieForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lang: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  addMovie() {
    console.log("inside add comp")
    this.movieService.addMovie(this.movieForm.value)
    this.router.navigate(['/']);

  }
}
