import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeputadoDetalhePage } from './deputado-detalhe';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
  declarations: [
    DeputadoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(DeputadoDetalhePage),
    CommonModule,
    IonicModule
  ],
})
export class DeputadoDetalhePageModule {}
