import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Array<Livro> = [];
  constructor() {
    this.livros = [
      new Livro(
        1,
        1,
        'Use a Cabeça: Java',
        'Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (POO) e Java',
        ['Bert Bates', 'Kathy Sierra']
      ),
      new Livro(
        2,
        2,
        'Java, como programar',
        'Milhões de alunos e profissionais aprendem programaçãoe desenvolvimento de software com os livros Deitel',
        ['Paul Deitel', 'Harvey Deitel']
      ),
      new Livro(
        3,
        3,
        'Gua prático de TypeScript',
        'Desenvolvido e mantido pela Microsoft, o TypeScript é um pré-processador open source de códigos JavaScript que auxilia na escrita de códigos, desde os mais simples até os mais complexos, utilizando tipagem de dados e os princípios da Orientação a Objetos para o desenvolvimento de aplicações front-end, back-end e mobile',
        ['Thiago da Silva Adriano']
      ),
      new Livro(
        4,
        1,
        'Código Limpo: Habilidades práticas do Agile software',
        'Clean Code é um livro mundialmente conchecido na área de programação, ele é um dos 3 livros de uma serie do Robert C Martin, os outros dois são Arquitetura Limpa e o Codificador Limpo',
        ['Robert C Martin']
      ),
      new Livro(
        5,
        1,
        'Arquitetura Limpa: O guia do artesão para estrutura e desing de software',
        'As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers "Código Limpo" e "O Codificador Limpo", o lendário artesão de software Robert C. Martin (“Uncle Bob”) vai revelar essas regras e ajudar o leitor a aplicá-las.A "Arquitetura Limpa" de Martin não é só mais um catálogo de opções',
        ['Robert C Martin']
      ),
      new Livro(
        6,
        1,
        'O codificador limpo: um código de conduta para programadores profissionais ',
        'Verdadeiros profissionais praticam e trabalham firme para manter suas habilidades afiadas e prontas. Não é o bastante simplesmente fazer suas tarefas diárias e chamar isso de prática. Realizar seu trabalho diário é performance, e não prática. Prática é quando você especificamente exercita as habilidades fora do seu ambiente de trabalho com o único propósito de potencializá-las.',
        ['Robert C Martin']
      ),
    ];
  }
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): Observable<void> {
    const codLivros = this.livros.map((livro) => livro.codigo);
    const maiorCodigo = Math.max(...codLivros);

    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);

    return of(undefined);
  }
  excluir(codigo: number): void {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
