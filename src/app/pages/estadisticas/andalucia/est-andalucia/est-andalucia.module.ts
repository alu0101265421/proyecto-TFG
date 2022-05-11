import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstAndaluciaComponent } from './est-andalucia.component';

const routes: Routes = [{ path: '', component: EstAndaluciaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class EstAndaluciaModule {}
