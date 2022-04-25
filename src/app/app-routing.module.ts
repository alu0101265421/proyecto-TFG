import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponenteComponent } from './components/api-componente/api-componente.component';
import { AccesibilidadComponent } from './pages/accesibilidad/accesibilidad.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { HomeComponent } from './pages/home/home.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { UsabilidadComponent } from './pages/usabilidad/usabilidad.component';
import { UxComponent } from './pages/ux/ux.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'validador', component: ApiComponenteComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'accesibilidad', component: AccesibilidadComponent },
  { path: 'usabilidad', component: UsabilidadComponent },
  { path: 'ux', component: UxComponent },
  { path: 'quiensoy', component: QuiensoyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
