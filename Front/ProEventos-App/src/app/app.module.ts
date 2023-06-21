import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule } from '@angular/flex-layout'
import { NavComponent } from './nav/nav.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { EventoService } from './services/evento.service';

@NgModule({
  declarations: [		
    AppComponent,
    EventosComponent,
      PalestrantesComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
