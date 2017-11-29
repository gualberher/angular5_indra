import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { AcumuladorComponent } from './acumulador/acumulador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, TareaComponent, AcumuladorComponent],
  exports:[MainComponent]
})
export class MainModule { }
