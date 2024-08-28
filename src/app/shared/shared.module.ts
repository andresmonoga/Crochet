import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercadePageComponent } from './pages/acercade-page/acercade-page.component';
import { InformacionPageComponent } from './pages/informacion-page/informacion-page.component';
import { ProcesocompraPageComponent } from './pages/procesocompra-page/procesocompra-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from '../angular-material/angular-material.module';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    AcercadePageComponent,
    InformacionPageComponent,
    ProcesocompraPageComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatSlideToggleModule,
  ],
  exports: [

  ]
})
export class SharedModule { }
