import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ProdutoComponent } from './shared/components/produto/produto.component';
import { PageComponent } from './page/page.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProdutoComponent,
    PageComponent,

    ProdutosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
