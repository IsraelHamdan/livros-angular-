import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Array<Editora>;

  constructor() {
    this.editoras = [
      new Editora(1, 'Alta Books'),
      new Editora(2, 'Person'),
      new Editora(3, 'Casa do Código'),
    ];
  }
}
