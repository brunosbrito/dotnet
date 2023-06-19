import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this._http.get('http://localhost:5212/api/evento').subscribe({
      next: (value) => { 
        this.eventos = value;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
