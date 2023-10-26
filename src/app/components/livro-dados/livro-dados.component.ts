import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from 'src/app/controle-livros.service';
import { ControleEditoraService } from 'src/app/controle-editora.service';
import { Livro } from 'src/app/livro';
import { Editora } from 'src/app/editora';
import { Router } from '@angular/router';
@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = {
    codigo: 0,
    codEditora: 0,
    titulo: '',
    resumo: '',
    autores: [],
  };
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    console.log(
      '🚀 ~ file: livro-dados.component.ts:32 ~ LivroDadosComponent ~ ngOnInit ~  this.editoras :',
      this.editoras
    );
  }

  incluir() {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro).subscribe(() => {
      this.router.navigateByUrl('/lista');
    });
  }
}
