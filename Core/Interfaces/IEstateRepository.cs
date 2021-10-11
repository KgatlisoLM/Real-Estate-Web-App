using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IEstateRepository
    {
        Task<Estate> GetEstateById(int id);
        Task<IReadOnlyList<Estate>> GetEstateAsync();
        Task<IReadOnlyList<EstateCategory>> GetEstateCategoryAsync();
        Task<IReadOnlyList<EstateAgent>> GetEstateAgentAsync();
        Task<IReadOnlyList<EstateBathrooms>> GetEstateBathroomsAsync();
        Task<IReadOnlyList<EstateBedrooms>> GetEstateBedroomsAsync();
        //Task<IReadOnlyList<Estate>> GetRelatedEstate();

    }
}
