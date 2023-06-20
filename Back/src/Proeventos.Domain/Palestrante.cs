using ProEventos.Domain;

namespace ProEventos
{
    public class Palestrante
    {
        public int Id { get; set; }
        public string Nome { get; set; }= null!;
        public string MiniCurriculo {get; set;}= null!;
        public string ImagemURL { get; set; }= null!;
        public string Telefone { get; set; }= null!;
        public string Email { get; set; }= null!;
        public IEnumerable<RedeSoicial> RedesSociais { get; set; } = null!;
        public IEnumerable<PalestranteEvento> PalestranteEventos { get; set; } = null!;
    }
}