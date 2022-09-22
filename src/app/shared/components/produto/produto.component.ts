import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../interfaces/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent {
  public buyButton: string = '';
  public quantidade: number = 1;
  @Input() public dadosProduto: Produto = {
    nome: '',
    descricao: '',
    preco: 0,
    estoque: 0,
    imgProduto: '',
  };

  @Output() addToCartEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  public buyItem(): void {
    window.open(
      `https://api.whatsapp.com/send?l=pt&pho&phone=55129921003778&text=Olá,%20gostaria%20de%20mais%20informações%20Sobre%20o%20produto%20+%20 ${this.dadosProduto.nome} qnt%20 ${this.quantidade}`,
      '_blank'
    );
  }

  public addItem(): void {
    this.quantidade = this.quantidade + 1;
  }

  public removeItem(): void {
    this.quantidade = this.quantidade - 1;
  }

  public addToCart(): void {
    this.addToCartEmitter.emit();
    console.log('clickComponente');
  }
}
