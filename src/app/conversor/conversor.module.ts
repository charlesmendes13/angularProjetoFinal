import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes/data-br.pipe';
import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorRoutingComponent } from './conversor-routing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ConversorRoutingModule
  ], 
  declarations: [
    ConversorComponent, 
    NumeroDirective, 
    ModalCotacaoComponent, 
    DataBrPipe,
    ConversorRoutingComponent
  ],   
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
