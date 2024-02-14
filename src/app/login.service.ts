import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostrarMenu = new Subject<boolean>();

  constructor() { }

  login(usuario:string, senha:string){
    console.log("chamou a função");
    
    if(usuario=='test' && senha=='1234'){
      localStorage.setItem('token', 'qwer1234');
      this.mostrarMenu.next(false);
      alert("Bem-vindo(a) de volta!");
    }else{
      this.mostrarMenu.next(true);
      window.location.reload();
      alert("Erro ao efetuar login");
    }
  }

  setMostrarMenu(valor:boolean){
    this.mostrarMenu.next(valor);
  }

  getMostrarMenu() {
    return this.mostrarMenu.asObservable();
  }
}
