import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  exlcuir = (codigo: number): void => {
    this.excluirLivro(codigo);
  };

  private excluirLivro(codigo: number): void {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);

    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

  obterNome = (codEditora: number): string => {
    const editora = this.servEditora.getNomeEditoras(codEditora);
    return editora ? editora : '';
  };

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }
}
