import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { ToastrModule } from 'ngx-toastr';

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
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import  {MatDialogModule } from '@angular/material/dialog'


import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { ConfirmeModalComponent } from './confirmeModal/confirmeModal.component';

@NgModule({
  declarations: [			
    AppComponent,
    EventosComponent,
      PalestrantesComponent,
      NavComponent,
      DateTimeFormatPipe,
      ConfirmeModalComponent
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
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    })
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
