import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Produto } from 'src/app/models/Produtos.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent {

  public produtos: Produto[] = [];
  public produto: Produto = new Produto("", "", "", "", 0);

  constructor(private _produtoService: ProdutoService,
    private router: Router,
    private _loginService: LoginService) { }

  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostrarMenu(false);
  }

  listarProdutos(): void {
    this._produtoService.getProdutos()
      .subscribe(
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
          )
        }
      )
  }

  excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe(
      vaga => {
        this.listarProdutos();
      },
      err => { console.log("erro ao Excluir") }
    );
    // window.location.href = "/restrito/lista";
    this.router.navigate(["/restrito/lista"]);
  }

}
