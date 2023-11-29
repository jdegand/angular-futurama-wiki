import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    { path: 'character/:id', component: DetailComponent },
    { path: '', component: HomeComponent },
    { path: '**', title: "404 Not Found", component: NotFoundComponent },
];
