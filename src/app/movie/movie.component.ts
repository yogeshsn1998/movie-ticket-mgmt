import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  addMovieToggle: boolean = false;

  movieForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lang: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
    });


  movieList: { name: string, lang: string, year: number, price: number }[] = [
    { name: 'Movie 1', lang: 'English', year:2024, price: 200 },
    { name: 'Movie 2', lang: 'Tamil', year:2024, price: 300 },
    { name: 'Movie 3', lang: 'English', year:2024, price: 100 }
  ];

  addMovie(){
    this.movieList.push(this.movieForm.value);
    this.toggleForm();
  }

  toggleForm(){
    this.addMovieToggle = !this.addMovieToggle;
  }
}
