
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private toast: ToastController, public nav: NavController) {}



  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toast.create({
      message: 'Bem vindo ',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  abrirPagina(x: string){
    //console.log("Você clicou no botão");
    this.nav.navigateForward(x);

  }



  ngOnInit() {
  }


}
