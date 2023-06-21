namespace ProEventos.Domain
{

    public class RedeSoicial
    {
        public int id { get; set; }
        public string Nome { get; set; } = null!;
        public string URL { get; set; } = null!;
        public int? EventoId { get; set; }
        public Evento? Evento { get; set; } = null!;
        public int? PalestranteId { get; set; }
        public Palestrante? Palestrante { get; set; } = null!;
    }
}