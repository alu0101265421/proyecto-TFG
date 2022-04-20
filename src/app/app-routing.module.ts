import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponenteComponent } from './components/api-componente/api-componente.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'validador', component: ApiComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
