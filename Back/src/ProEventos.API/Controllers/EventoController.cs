using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly IEnumerable<Evento> _eventos = new List<Evento>
        {
            new Evento
            {
                EventoId = 1,
                Tema = "Angular 11 e .NET 7",
                Local = "Betim",
                Lote = "1 Lote",
                QtdPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy")
            },
            new Evento
            {
                EventoId = 2,
                Tema = "Angular 12 e .NET 7",
                Local = "Belo Horizonte",
                Lote = "2 Lote",
                QtdPessoas = 200,
                DataEvento = DateTime.Now.AddDays(3).ToString("dd/MM/yyyy")
            }
        };

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _eventos;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _eventos.Where( evento => evento.EventoId == id);
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Delete com id = {id}";
        }
    }
}
