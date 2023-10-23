import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [];

  constructor() {
    this.editoras = [
      { codEditora: 1, nome: 'Alta Books' },
      { codEditora: 2, nome: 'Pearson' },
      { codEditora: 3, nome: 'Pearson' },
    ];
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditoras(codEditora: number): string | undefined {
    const findedEditor = this.editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return findedEditor ? findedEditor.nome : undefined;
  }
}
