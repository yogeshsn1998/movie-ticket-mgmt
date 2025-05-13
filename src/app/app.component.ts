import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from "./movie/movie.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-ticket';
}
