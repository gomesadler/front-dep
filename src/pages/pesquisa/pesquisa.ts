import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PesquisaService } from '../../services/domain/pesquisa.service';
import { PesquisaDTO } from '../../models/pesquisa.dto';

/**
 * Generated class for the PesquisaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {

  pesquisas : PesquisaDTO[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public pesquisaService: PesquisaService) {
  }

  ionViewDidLoad() {
    this.pesquisaService.findAll()
    .subscribe(response =>{
      this.pesquisas = response;
      console.log(this.pesquisas);
    },error => {
      console.log(error)
    });
  
  
  }

}
