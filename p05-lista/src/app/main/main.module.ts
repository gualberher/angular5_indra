
import { NgModule , LOCALE_ID} from '@angular/core';
import { CommonModule , registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { MainComponent } from './main.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule } from '@angular/forms';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { PipesComponent } from './pipes/pipes.component';

registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, TareaComponent, AcumuladorComponent, PipesComponent],
  exports: [MainComponent],
  providers: [{provide: LOCALE_ID, useValue: 'es'}]
})
export class MainModule { }
