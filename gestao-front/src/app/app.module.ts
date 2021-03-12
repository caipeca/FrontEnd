import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import {ToastrModule} from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { CaixaAvisoComponent } from './caixa-aviso/caixa-aviso.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CriarComponent,
    AtualizarComponent,
    CaixaAvisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
    }),
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
