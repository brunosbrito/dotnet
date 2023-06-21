using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos;

namespace Proeventos.Persistence.Contratos
{
    public interface IPalestrantePersist
    {
        //Palestrantes
        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string tema, bool includeEventos);

        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos);

        Task<Palestrante> GetAllPalestrantesByIdAsync(int palestranteId, bool includeEventos);
    }
}