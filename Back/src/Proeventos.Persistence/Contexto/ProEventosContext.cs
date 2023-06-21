using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contexto
{
    public class ProEventosContext : DbContext
    {
        public ProEventosContext(DbContextOptions <ProEventosContext> options) : base(options) {}

        public DbSet<Evento> Eventos { get; set; } = null!;
        public DbSet<Lote> Lotes { get; set; } = null!;
        public DbSet<Palestrante> Palestrantes { get; set; } = null!;
        public DbSet<PalestranteEvento> PalestranteEventos { get; set; } = null!;
        public DbSet<RedeSoicial> RedesSoiciais { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PalestranteEvento>()
                .HasKey(PE => new {PE.EventoId, PE.PalestranteId});

            modelBuilder.Entity<Evento>()
                .HasMany(e => e.RedesSociais)
                .WithOne(rs => rs.Evento)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Palestrante>()
                .HasMany(e => e.RedesSociais)
                .WithOne(rs => rs.Palestrante)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<RedeSoicial>()
                .HasOne(rs => rs.Evento)
                .WithMany(e => e.RedesSociais)
                .OnDelete(DeleteBehavior.Cascade);


        }
    }
}
