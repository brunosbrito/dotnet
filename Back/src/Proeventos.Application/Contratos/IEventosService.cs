using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;

namespace Proeventos.Application.Contratos
{
    public interface IEventoService
    {
        Task<Evento?> AddEventos(Evento model);
        Task<Evento?> UpdateEvento(int eventoId, Evento model);
        Task<bool> DeleteEvento(int eventoId);

        Task<Evento[]?> GetAllEventosAsync(bool includePalestrantes = false);
        Task<Evento[]?> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false);
        Task<Evento?> GetAllEventosByIdAsync(int eventoId, bool includePalestrantes = false);
    }
}