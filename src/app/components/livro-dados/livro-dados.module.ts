import { NgModule } from '@angular/core';
import { LivroDadosComponent } from './livro-dados.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LivroDadosComponent],
  imports: [FormsModule],
  exports: [LivroDadosComponent],
})
export class LivroDadosModule {}
