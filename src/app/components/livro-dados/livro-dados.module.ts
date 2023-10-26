import { NgModule } from '@angular/core';
import { LivroDadosComponent } from './livro-dados.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LivroDadosComponent],
  imports: [FormsModule, BrowserModule],
  exports: [LivroDadosComponent],
})
export class LivroDadosModule {}

// Airam, funcionou, oq é o BrowserModule?
