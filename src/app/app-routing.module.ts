import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadePageComponent } from './shared/pages/acercade-page/acercade-page.component';
import { InformacionPageComponent } from './shared/pages/informacion-page/informacion-page.component';
import { ProcesocompraPageComponent } from './shared/pages/procesocompra-page/procesocompra-page.component';
import { InicioComponent } from './shared/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path:'acerca',
  component: AcercadePageComponent,
  },
  {
    path:'informacion',
    component: InformacionPageComponent
  },
  {
    path:'compra',
    component:ProcesocompraPageComponent
  },
  {
    path:'',
component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
