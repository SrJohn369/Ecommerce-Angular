import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from './restrito.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';

const restritoRoutes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, children: [
            { path: 'cadastro', component: CadastroProdutosComponent },
            { path: 'lista', component: ListarProdutosComponent },
            { path: 'editar/:id', component: AtualizarProdutoComponent }
        ]
    },
    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }