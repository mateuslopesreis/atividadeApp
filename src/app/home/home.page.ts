
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public pessoa={
    usuario: '',
    senha:    ''
  }

  constructor(private toast: ToastController, public nav: NavController) {}



  async presentToast(position: 'top' | 'middle' | 'bottom') {
   
    if(this.pessoa.usuario=='mateus' && this.pessoa.senha=='123'){
      
      const toast = await this.toast.create({
        message: 'Bem vindo ',
        duration: 2000,
        position: position,
      });
  
      await toast.present();

    }

   
  }

  

  abrirPagina(x: string){
    if(this.pessoa.usuario=='mateus' && this.pessoa.senha=='123'){
            this.nav.navigateForward(x);

    }

  }

  abrirPagina2(x: string){
      this.nav.navigateForward(x);

  }



  ngOnInit() {
  }


}
