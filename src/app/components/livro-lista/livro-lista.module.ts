import { NgModule } from '@angular/core';
import { LivroListaComponent } from './livro-lista.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [LivroListaComponent],
  imports: [CommonModule],
  exports: [LivroListaComponent],
})
export class LivroListaModule {}
