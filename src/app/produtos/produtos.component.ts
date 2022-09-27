import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/interfaces/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public objProdutos: Produto[] = [];
  public myCart: Produto[] = [];
  constructor() {}

  ngOnInit() {
    this.objProdutos = [
      {
        nome: 'Volumão',
        preco: 15.9,
        estoque: 18,
        imgProduto: 'produto1.jpg',
      },
      {
        nome: 'Qualquer coisa',
        preco: 2,
        estoque: 9,
        imgProduto: 'produto1.jpg',
      },
      {
        nome: 'plug',
        preco: 10,
        estoque: 74,
        imgProduto: 'exemple_img.jpg',
      },
      {
        nome: 'molhada',
        preco: 100,
        estoque: 6,
        imgProduto: 'produto1.jpg',
      },
    ];
  }

  public addToCart(index: number): void {
    this.myCart.push(this.objProdutos[index]);
    console.log('objeto foda', this.myCart);
  }
}
