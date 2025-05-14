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
    this.movieService.addMovie(this.movieForm.value)
    this.router.navigate(['/']);
  }

  canExit(){
    if(this.movieForm.value.name || this.movieForm.value.lang || this.movieForm.value.year||this.movieForm.value.price){
      return confirm("Data is not saved. Do you want to navigate avay from the page?");
    }
    return true;
  }
}
