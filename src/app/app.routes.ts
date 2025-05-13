import { Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [{
    path: 'addMovie',
    component: AddMovieComponent
},
{
    path: '**',
    component: MovieComponent
}
];
