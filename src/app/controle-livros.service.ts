import { Injectable } from '@angular/core';
import { Livro } from './livro';

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
        'Clean Code',
        'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of a software craftsman and make you a better programmer—but only if you work at it. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of a software craftsman and make you a better programmer—but only if you work at it. Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code—of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.',
        ['Robert C Martin']
      ),
    ];
  }
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const codLivros = this.livros.map((livro) => livro.codigo);
    const maiorCodigo = Math.max(...codLivros);

    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);
  }
  excluir(codigo: number): void {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
