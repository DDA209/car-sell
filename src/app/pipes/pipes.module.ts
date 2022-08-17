import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCharUpperCasePipe } from './../pipes/first-char-upper-case.pipe';

@NgModule({
  declarations: [FirstCharUpperCasePipe],
  imports: [CommonModule],
  exports: [FirstCharUpperCasePipe],
})
export class PipesModule {}
