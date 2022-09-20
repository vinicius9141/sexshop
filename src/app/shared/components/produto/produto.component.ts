import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent {
  public buyButton: string = '';
  public nome_prod: string = '';
  public quantidade: number = 1;
  constructor() {}

  public buyItem(): void {
    window.open(
      `https://api.whatsapp.com/send?l=pt&pho&phone=55129921003778&text=Olá,%20gostaria%20de%20mais%20informações%20Sobre%20o%20produto%20${this.nome_prod} +%20qnt%20  ${this.quantidade}`,
      '_blank'
    );
  }

  public addItem(): void {
    this.quantidade = this.quantidade + 1;
  }

  public removeItem(): void {
    this.quantidade = this.quantidade - 1;
  }
}
