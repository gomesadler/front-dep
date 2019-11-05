import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeputadoService } from '../../services/domain/deputado.service';
import { DeputadoDTO } from '../../models/deputado.dto';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deputados',
  templateUrl: 'deputado.html',
})
export class DeputadosPage {

  deputados: DeputadoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public deputadoService: DeputadoService
  ) {
  }

  ionViewDidLoad() {

    this.deputadoService.findAll()
      .subscribe(response => {
        this.deputados = response;
        console.log(this.deputados)

      },
        error => {
          console.log(error)
        });

  }

  onSearch(event) {
    this.deputadoService.findByUf(event.target.value).subscribe(response => {
      console.log(event.target.value);
      this.deputados = response;
      console.log(this.deputados)
    },
      error => {
        console.log(error)
      });
  }


  detalhe(idDep: String, idLeg: String) {
    this.navCtrl.push('DeputadoDetalhePage',
      {
        idDep,
        idLeg
      });
  }



}
