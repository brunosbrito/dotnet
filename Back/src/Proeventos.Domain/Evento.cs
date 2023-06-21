using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Domain
{
    public class Evento
    {
        public int Id { get; set; }
        public string Local { get; set; } = null!;
        public DateTime? DataEvento { get; set; } = null!;
        public string Tema { get; set; } = null!;
        public int QtdPessoas { get; set; }
        public string ImagemURL { get; set; } = null!;
        public string Telefone { get; set; } = null!;
        public string Email { get; set; } = null!;
        public IEnumerable<Lote>? Lote { get; set; } = null!;
        public IEnumerable<RedeSocial>? RedesSociais { get; set; } = null!;
        public IEnumerable<PalestranteEvento>? PalestrantesEventos { get; set; } = null!;
    }
}