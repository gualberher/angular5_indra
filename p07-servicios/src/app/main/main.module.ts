import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { MockLibrosComponent } from './mock-libros/mock-libros.component';
import { LibrosService } from './libros.service';
import { MockLibrosAsyncComponent } from './mock-libros-async/mock-libros-async.component';
import { BuscarGoogleComponent } from './buscar-google/buscar-google.component';
import { BuscarHttpsrvComponent } from './buscar-httpsrv/buscar-httpsrv.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent,
    MockLibrosComponent,
    MockLibrosAsyncComponent,
    BuscarGoogleComponent,
    BuscarHttpsrvComponent],
  providers: [LibrosService],
  exports: [MainComponent]
})
export class MainModule { }
