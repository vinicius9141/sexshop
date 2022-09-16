import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public menu: boolean = false;
  constructor() {}

  public toggleMenu(): void {
    this.menu = !this.menu;
  }
}
