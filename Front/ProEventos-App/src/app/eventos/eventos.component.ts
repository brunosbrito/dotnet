import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/Evento';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmeModalComponent } from '../confirmeModal/confirmeModal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista
  }

  public set filtroLista(value: string) {
    this._filtroLista = value
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter((evento: { tema: string, local: string }) => evento.tema.toLocaleLowerCase()
      .indexOf(filtrarPor) !== -1 || evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    public dialog: MatDialog,
    private toastr: ToastrService
    ) { }

    openDialog() {
      const dialogRef = this.dialog.open(ConfirmeModalComponent);
  
      dialogRef.afterClosed().subscribe(result => {
          if (result) {
              this.toastr.success('Olá mundo!', 'Toastr divertido!');
          }
          console.log(`Resultado do diálogo: ${result}`);
      });
  }
  

 public ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (value: Evento[]) => {
        this.eventos = value;
        this.eventosFiltrados = this.eventos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
