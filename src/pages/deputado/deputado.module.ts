import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeputadosPage } from './deputado';

@NgModule({
  declarations: [
    DeputadosPage,
  ],
  imports: [
    IonicPageModule.forChild(DeputadosPage),
  ],
})
export class CategoriasPageModule {}
