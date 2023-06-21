import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable(
  // {providedIn: 'root'}
  )
export class EventoService {
  baseUrl = 'http://localhost:5212/api/evento'

  constructor(private htpp: HttpClient) { }

  getEventos(): Observable<Evento[]> {
    return this.htpp.get<Evento[]>(this.baseUrl);
  }

  geEventosByTema(tema: string): Observable<Evento[]> {
    return this.htpp.get<Evento[]>(`${this.baseUrl}/tema/${tema}`);
  }

  getEventoById(id: number): Observable<Evento> {
    return this.htpp.get<Evento>(`${this.baseUrl}/${id}`);
  }
}
