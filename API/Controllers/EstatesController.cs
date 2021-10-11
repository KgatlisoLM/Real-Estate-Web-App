using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
   
    public class EstatesController : BaseApiController
    {
        private readonly IGenericRepository<Estate> _estateRepo;
        private readonly IGenericRepository<EstateCategory> _estateCategoryRepo;
        private readonly IGenericRepository<EstateAgent> _estateAgentRepo;
        private readonly IGenericRepository<EstateBathrooms> _estateBathrepo;
        private readonly IGenericRepository<EstateBedrooms> _estateBedrepo;
        private readonly IMapper _mapper;

        public EstatesController(IGenericRepository<Estate> estateRepo, 
                                IGenericRepository<EstateCategory> estateCategoryRepo,
                                IGenericRepository<EstateAgent> estateAgentRepo,
                                IGenericRepository<EstateBathrooms> estateBathrepo,
                                IGenericRepository<EstateBedrooms> estateBedrepo,
                                IMapper mapper)
        {
            _estateRepo = estateRepo;
            _estateCategoryRepo = estateCategoryRepo;
            _estateAgentRepo = estateAgentRepo;
            _estateBathrepo = estateBathrepo;
            _estateBedrepo = estateBedrepo;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<ActionResult<Pagination<EstateToReturnDto>>> GetEstates([FromQuery] EstateSpecParams estateParams)
        {
            var spec = new EstateWithOtherEntitiesSpecification(estateParams);
            var countSpec = new EstateWithFiltersForCountSpecification(estateParams);
            var totalItems = await _estateRepo.CountAsync(countSpec);
            var estates = await _estateRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<Estate>, IReadOnlyList<EstateToReturnDto>>(estates);
            return Ok(new Pagination<EstateToReturnDto>(estateParams.PageIndex, estateParams.PageSize, totalItems, data));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EstateDetailToReturnDto>> GetEstate(int id)
        {
            var spec = new EstateWithOtherEntitiesSpecification(id);
            var estate = await _estateRepo.GetEntityWithSpec(spec);
            if (estate == null) return NotFound();
            return _mapper.Map<Estate, EstateDetailToReturnDto>(estate);
        }

        [HttpGet("category")]
        public async Task<ActionResult<IReadOnlyList<EstateCategory>>> GetEstateCategory()
        {
            return Ok(await _estateCategoryRepo.ListAllAsync());
        }

        [HttpGet("bathrooms")]
        public async Task<ActionResult<IReadOnlyList<EstateBathrooms>>> GetEstateBathrooms()
        {
            return Ok(await _estateBathrepo.ListAllAsync());
        }

        [HttpGet("bedrooms")]
        public async Task<ActionResult<IReadOnlyList<EstateBedrooms>>> GetEstateBedrooms()
        {
            return Ok(await _estateBedrepo.ListAllAsync());
        }

        [HttpGet("agents")]
        public async Task<ActionResult<IReadOnlyList<EstateAgentToReturnDto>>> GetEstateAgents()
        {
            var agents = await _estateAgentRepo.ListAllAsync();
            return Ok(_mapper.Map<IReadOnlyList<EstateAgent>, IReadOnlyList<EstateAgentToReturnDto>>(agents));
        }

    }
}