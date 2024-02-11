import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatToolbarModule} from '@angular/material/toolbar';

import { RestritoRoutingModule } from './restrito/restrito-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RestritoComponent } from './restrito/restrito.component';
import { AtualizarProdutoComponent } from './restrito/atualizar-produto/atualizar-produto.component';
import { CadastroProdutosComponent } from './restrito/cadastro-produtos/cadastro-produtos.component';
import { ListarProdutosComponent } from './restrito/listar-produtos/listar-produtos.component';
import { MenuProdutosComponent } from './restrito/menu-produtos/menu-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    RestritoComponent,
    AtualizarProdutoComponent,
    CadastroProdutosComponent,
    ListarProdutosComponent,
    MenuProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,  
    MatFormFieldModule, 
    MatGridListModule,  
    MatIconModule,  
    MatInputModule, 
    MatMenuModule,  
    MatToolbarModule,
    RestritoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
