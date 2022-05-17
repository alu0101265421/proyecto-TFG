import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponenteComponent } from './components/api-componente/api-componente.component';
import { AccesibilidadComponent } from './pages/accesibilidad/accesibilidad.component';
import { EstAndaluciaComponent } from './pages/estadisticas/andalucia/est-andalucia/est-andalucia.component';
import { EstAsturiasComponent } from './pages/estadisticas/asturias/est-asturias/est-asturias.component';
import { EstCanariasComponent } from './pages/estadisticas/canarias/est-canarias/est-canarias.component';
import { EstCatalunaComponent } from './pages/estadisticas/cataluna/est-cataluna/est-cataluna.component';
import { EstCongresoComponent } from './pages/estadisticas/congreso/est-congreso/est-congreso.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { EstExtremaduraComponent } from './pages/estadisticas/extremadura/est-extremadura/est-extremadura.component';
import { EstGaliciaComponent } from './pages/estadisticas/galicia/est-galicia/est-galicia.component';
import { EstMadridComponent } from './pages/estadisticas/madrid/est-madrid/est-madrid.component';
import { EstSenadoComponent } from './pages/estadisticas/senado/est-senado/est-senado.component';
import { EstValenciaComponent } from './pages/estadisticas/valencia/est-valencia/est-valencia.component';
import { HomeComponent } from './pages/home/home.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { UsabilidadComponent } from './pages/usabilidad/usabilidad.component';
import { UxAndaluciaComponent } from './pages/ux/ux-andalucia/ux-andalucia.component';
import { UxAsturiasComponent } from './pages/ux/ux-asturias/ux-asturias.component';
import { UxCanariasComponent } from './pages/ux/ux-canarias/ux-canarias.component';
import { UxCatalunaComponent } from './pages/ux/ux-cataluna/ux-cataluna.component';
import { UxCongresoComponent } from './pages/ux/ux-congreso/ux-congreso.component';
import { UxExtremaduraComponent } from './pages/ux/ux-extremadura/ux-extremadura.component';
import { UxGaliciaComponent } from './pages/ux/ux-galicia/ux-galicia.component';
import { UxMadridComponent } from './pages/ux/ux-madrid/ux-madrid.component';
import { UxSenadoComponent } from './pages/ux/ux-senado/ux-senado.component';
import { UxValenciaComponent } from './pages/ux/ux-valencia/ux-valencia.component';
import { UxComponent } from './pages/ux/ux.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'validador', component: ApiComponenteComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'accesibilidad', component: AccesibilidadComponent },
  { path: 'usabilidad', component: UsabilidadComponent },
  { path: 'ux', component: UxComponent },
  { path: 'quiensoy', component: QuiensoyComponent },
  { path: 'canarias', component: EstCanariasComponent },
  { path: 'andalucia', component: EstAndaluciaComponent },
  { path: 'asturias', component: EstAsturiasComponent },
  { path: 'cataluna', component: EstCatalunaComponent },
  { path: 'congreso', component: EstCongresoComponent },
  { path: 'extremadura', component: EstExtremaduraComponent },
  { path: 'galicia', component: EstGaliciaComponent },
  { path: 'madrid', component: EstMadridComponent },
  { path: 'senado', component: EstSenadoComponent },
  { path: 'valencia', component: EstValenciaComponent },
  { path: 'uxcanarias', component: UxCanariasComponent },
  { path: 'uxandalucia', component: UxAndaluciaComponent },
  { path: 'uxasturias', component: UxAsturiasComponent },
  { path: 'uxcataluna', component: UxCatalunaComponent },
  { path: 'uxcongreso', component: UxCongresoComponent },
  { path: 'uxextremadura', component: UxExtremaduraComponent },
  { path: 'uxgalicia', component: UxGaliciaComponent },
  { path: 'uxmadrid', component: UxMadridComponent },
  { path: 'uxsenado', component: UxSenadoComponent },
  { path: 'uxvalencia', component: UxValenciaComponent },
  /*   {
    path: 'sidenav',
    children: [
      {
        path: 'canarias',
        loadChildren: () =>
          import(
            './pages/estadisticas/canarias/est-canarias/est-canarias.module'
          ).then((m) => m.EstCanariasModule),
      },
      {
        path: 'andalucia',
        loadChildren: () =>
          import(
            './pages/estadisticas/andalucia/est-andalucia/est-andalucia.module'
          ).then((m) => m.EstAndaluciaModule),
      },
    ],
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
