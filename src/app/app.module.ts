import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [AppComponent, LivroListaComponent, LivroDadosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
