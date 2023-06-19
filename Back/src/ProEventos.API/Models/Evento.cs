using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.API.Models
{
    public class Evento
    {
        public int EventoId { get; set; }

        public string Local { get; set; } = null!;

        public string DataEvento { get; set; } = null!;

        public string Tema { get; set; } = null!;

        public int QtdPessoas { get; set; }

        public string Lote { get; set; } = null!;

        public string ImagemURL { get; set; } = null!;
    }
}