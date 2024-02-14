import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produtos.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent {
  public produto: Produto = new Produto("", "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _router: Router){}

  ngOnInit(): void{}

  cadastrar(){
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto("","","","",0);
        alert("Cadastro efetuado com sucesso!");
      },
      err => {
        alert("Erro ao cadastrar");
      }
    );
    this._router.navigate(["/restrito/lista"]);
  }
}
