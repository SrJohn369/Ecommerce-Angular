import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produtos.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent {

  public produtoID: number = 0;
  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _activateRoute: ActivatedRoute,
    private _router: Router) {
    this._activateRoute.params.subscribe(
      params => this.produtoID = params['id']
    );
  }

  listarProduto():void{
    this._produtoService.getProduto(this.produtoID).subscribe(
      (res:any) => { 
        console.log(res[0].produto);
        this.produto = new Produto(
          res[0].id,
          res[0].produto,
          res[0].descricao,
          res[0].foto,
          res[0].preco
        );
       }
    )
  }

  atualizar(id: number){
    this._produtoService.atualizarProduto(id, this.produto).subscribe(
      produto => {this.produto = new Produto(0,"","","",0);},
      err => {console.log("erro ao atualizar");}
    );

    this._router.navigate(["/restrito/lista"]);
  }
}
