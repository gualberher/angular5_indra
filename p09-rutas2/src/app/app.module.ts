import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { appRouting } from './app.routing';
import { AboutModule } from './about/about.module';
import { AutoresModule } from './autores/autores.module';
import { NoticiasModule } from './noticias/noticias.module';
import { CatalogoModule } from './catalogo/catalogo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    MainModule,
    AboutModule,
    AutoresModule,
    NoticiasModule,
    CatalogoModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
