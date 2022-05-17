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
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UxCanariasComponent } from './pages/ux/ux-canarias/ux-canarias.component';
import { UxAndaluciaComponent } from './pages/ux/ux-andalucia/ux-andalucia.component';
import { UxAsturiasComponent } from './pages/ux/ux-asturias/ux-asturias.component';
import { UxCatalunaComponent } from './pages/ux/ux-cataluna/ux-cataluna.component';
import { UxCongresoComponent } from './pages/ux/ux-congreso/ux-congreso.component';
import { UxExtremaduraComponent } from './pages/ux/ux-extremadura/ux-extremadura.component';
import { UxGaliciaComponent } from './pages/ux/ux-galicia/ux-galicia.component';
import { UxMadridComponent } from './pages/ux/ux-madrid/ux-madrid.component';
import { UxSenadoComponent } from './pages/ux/ux-senado/ux-senado.component';
import { UxValenciaComponent } from './pages/ux/ux-valencia/ux-valencia.component';

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
    UxCanariasComponent,
    UxAndaluciaComponent,
    UxAsturiasComponent,
    UxCatalunaComponent,
    UxCongresoComponent,
    UxExtremaduraComponent,
    UxGaliciaComponent,
    UxMadridComponent,
    UxSenadoComponent,
    UxValenciaComponent,
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
    NgxChartsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
