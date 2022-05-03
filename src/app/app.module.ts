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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
