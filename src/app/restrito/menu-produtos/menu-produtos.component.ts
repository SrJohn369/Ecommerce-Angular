import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu-produtos',
  templateUrl: './menu-produtos.component.html',
  styleUrls: ['./menu-produtos.component.css']
})
export class MenuProdutosComponent {

  constructor(private router: Router, private _loginService: LoginService){}

  logout(){
    localStorage.clear();
    this._loginService.setMostrarMenu(false);
    this.router.navigate(["/login"]);
  }
}
