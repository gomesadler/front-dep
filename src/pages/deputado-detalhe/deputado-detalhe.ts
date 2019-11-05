import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeputadoService } from '../../services/domain/deputado.service';
import { DeputadoDetalheDTO } from '../../models/deputadoDetalhe.dto';

/**
 * Generated class for the DeputadoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deputado-detalhe',
  templateUrl: 'deputado-detalhe.html',
})
export class DeputadoDetalhePage {

  idDep: String;
  idLeg: String;
  deputado: DeputadoDetalheDTO;
  urlImg: String;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public deputadoService: DeputadoService) {
    this.idDep = navParams.get('idDep');
    this.idLeg = navParams.get('idLeg');
    console.log(this.idDep);
    console.log(this.idLeg);
  }

  ionViewDidLoad() {

    this.deputadoService.findDep(this.idDep,this.idLeg)
      .subscribe(response => {
        this.deputado = response;
        this.urlImg = this.deputado.ultimoStatus.urlFoto;
        console.log(this.deputado)
        console.log(this.deputado.ultimoStatus.urlFoto)
      },
        error => {
          console.log(error)
        });


        
  }

  

}
