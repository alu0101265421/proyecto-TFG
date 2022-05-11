import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponenteComponent } from './components/api-componente/api-componente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { AccesibilidadComponent } from './pages/accesibilidad/accesibilidad.component';
import { UsabilidadComponent } from './pages/usabilidad/usabilidad.component';
import { UxComponent } from './pages/ux/ux.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { PiepagToolbarComponent } from './components/piepag-toolbar/piepag-toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EstCanariasComponent } from './pages/estadisticas/canarias/est-canarias/est-canarias.component';
import { EstAndaluciaComponent } from './pages/estadisticas/andalucia/est-andalucia/est-andalucia.component';
import { EstValenciaComponent } from './pages/estadisticas/valencia/est-valencia/est-valencia.component';
import { EstMadridComponent } from './pages/estadisticas/madrid/est-madrid/est-madrid.component';
import { EstCatalunaComponent } from './pages/estadisticas/cataluna/est-cataluna/est-cataluna.component';
import { EstExtremaduraComponent } from './pages/estadisticas/extremadura/est-extremadura/est-extremadura.component';
import { EstGaliciaComponent } from './pages/estadisticas/galicia/est-galicia/est-galicia.component';
import { EstAsturiasComponent } from './pages/estadisticas/asturias/est-asturias/est-asturias.component';
import { EstCongresoComponent } from './pages/estadisticas/congreso/est-congreso/est-congreso.component';
import { EstSenadoComponent } from './pages/estadisticas/senado/est-senado/est-senado.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponenteComponent,
    HomeComponent,
    EstadisticasComponent,
    AccesibilidadComponent,
    UsabilidadComponent,
    UxComponent,
    QuiensoyComponent,
    ToolbarComponent,
    PiepagToolbarComponent,
    EstCanariasComponent,
    EstAndaluciaComponent,
    EstValenciaComponent,
    EstMadridComponent,
    EstCatalunaComponent,
    EstExtremaduraComponent,
    EstGaliciaComponent,
    EstAsturiasComponent,
    EstCongresoComponent,
    EstSenadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
