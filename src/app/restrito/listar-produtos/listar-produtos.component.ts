import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produtos.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent {
  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService, private _router: Router){}

  ngOnInit():void{
    this.listarProdutos();
  }

  listarProdutos():void{
    this._produtoService.getProdutos().subscribe(
      retornaProduto => {
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        );
      }
    );
  }

  excluir(id: number){
    this._produtoService.removerProduto(id).subscribe(
      produto => {
        this.listarProdutos();
      },
      err => {alert("erro ao excluir");}
    );

    this._router.navigate(["/restrito/lista"]);
  }

}
