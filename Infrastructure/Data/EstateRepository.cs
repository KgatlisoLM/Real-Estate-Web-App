using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class EstateRepository : IEstateRepository
    {
        private readonly EstateContext _context;

        public EstateRepository(EstateContext context)
        {
            _context = context;
        }

        public async Task<IReadOnlyList<Estate>> GetEstateAsync()
        {
            return await _context.Estate
                .Include(e => e.EstateAddress)
                .Include(e => e.EstateCategory)
                .Include(e => e.EstateBathrooms)
                .Include(e => e.EstateBedrooms)
                .Include(e => e.EstatePhotos)
                .Include(e => e.EstateType)
                .Include(e => e.FeaturedPrice)
                .Include(e => e.EstateAgent)
                .ToListAsync();
        }


        public async Task<Estate> GetEstateById(int id)
        {
            return await _context.Estate
                .Include(e => e.EstateAddress)
                .Include(e => e.EstateCategory)
                .Include(e => e.EstatePhotos)
                .Include(e => e.EstateBathrooms)
                .Include(e => e.EstateBedrooms)
                .Include(e => e.EstateType)
                .Include(e => e.FeaturedPrice)
                .Include(e =>e.EstateAgent)
                .FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<EstateCategory>> GetEstateCategoryAsync()
        {
            return await _context.EstateCategory.ToListAsync();
        }

        public async Task<IReadOnlyList<EstateAgent>> GetEstateAgentAsync()
        {
            return await _context.EstateAgent.ToListAsync();
        }

        public async Task<IReadOnlyList<EstateBathrooms>> GetEstateBathroomsAsync()
        {
            return await _context.EstateBathrooms.ToListAsync();
        }

        public async Task<IReadOnlyList<EstateBedrooms>> GetEstateBedroomsAsync()
        {
            return await _context.EstateBedrooms.ToListAsync();
        }

        //public async Task<IReadOnlyList<Estate>> GetRelatedEstate()
        //{
        //    return await _context.Estate
        //        .Include(e => e.EstateAddress)
        //        .Include(e => e.EstateCategory)
        //        .Include(e => e.EstatePhotos)
        //        .Include(e => e.EstateBathrooms)
        //        .Include(e => e.EstateBedrooms)
        //        .Include(e => e.EstateType)
        //        .Include(e => e.FeaturedPrice)
        //        .Include(e => e.EstateAgent)
        //        .Where(e => e.isRelated == true)
        //        .ToListAsync();
        //}
    }
}
