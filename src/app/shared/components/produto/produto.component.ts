import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent {
  public buyButton: string = '';
  public nome_prod: string = '';
  constructor(private router: Router) {}

  public buyItem(): void {
    window.open(
      `https://api.whatsapp.com/send?l=pt&pho&phone=55129921003778&text=Olá,%20gostaria%20de%20mais%20informações%20Sobre%20o%20produto%20${this.nome_prod}`,
      '_blank'
    );
  }
}
