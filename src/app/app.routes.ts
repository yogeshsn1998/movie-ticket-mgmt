import { Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { CanActivate } from './auth.guard';

export const routes: Routes = [{
    path: 'addMovie',
    component: AddMovieComponent,
    canActivate: [CanActivate]
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: '**',
    component: MovieComponent
}
];
