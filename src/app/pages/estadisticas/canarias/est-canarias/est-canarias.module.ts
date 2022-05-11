import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstCanariasComponent } from './est-canarias.component';

const routes: Routes = [{ path: '', component: EstCanariasComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class EstCanariasModule {}
