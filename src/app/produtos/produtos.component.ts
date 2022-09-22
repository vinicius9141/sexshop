import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/interfaces/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public objProdutos: Produto[] = [];
  constructor() {}

  ngOnInit() {
    this.objProdutos = [
      {
        nome: 'Bruno',
        preco: 1000000,
        estoque: 1,
      },
      {
        nome: 'wendo',
        preco: 2,
        estoque: 9,
      },
      {
        nome: 'EU MEMO',
        preco: 1,
        estoque: 7,
      },
    ];
  }
}
