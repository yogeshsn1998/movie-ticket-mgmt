import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from "./movie/movie.component";
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieComponent, CommonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-ticket';
}
