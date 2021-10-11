using API.Dtos;
using AutoMapper;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Estate, EstateToReturnDto>()
                .ForMember(e => e.EstateType, o => o.MapFrom(m => m.EstateType.Name))
                .ForMember(e => e.EstateCategory, o => o.MapFrom(m => m.EstateCategory.Name))
                .ForMember(e => e.EstateBathroom, o => o.MapFrom(m => m.EstateBathrooms.Bathroom))
                .ForMember(e => e.EstateBedroom, o => o.MapFrom(m => m.EstateBedrooms.Bedroom))
                .ForMember(e => e.ImageUrl, o => o.MapFrom<EstateUrlResolver>())
                .ForMember(e => e.Price, o => o.MapFrom(m => m.FeaturedPrice.Price))
                .ForMember(e => e.MonthlyPrice, o => o.MapFrom(m => m.FeaturedPrice.MonthlyPrice))
                .ForMember(e => e.Street, o => o.MapFrom(m => m.EstateAddress.Street))
                .ForMember(e => e.City, o => o.MapFrom(m => m.EstateAddress.City))
                .ForMember(e => e.Province, o => o.MapFrom(m => m.EstateAddress.Province))
                .ForMember(e => e.ZipCode, o => o.MapFrom(m => m.EstateAddress.ZipCode));

            CreateMap<Estate, EstateDetailToReturnDto>()
                .ForMember(e => e.EstateType, o => o.MapFrom(m => m.EstateType.Name))
                .ForMember(e => e.EstateCategory, o => o.MapFrom(m => m.EstateCategory.Name))
                .ForMember(e => e.EstateBathroom, o => o.MapFrom(m => m.EstateBathrooms.Bathroom))
                .ForMember(e => e.EstateBedroom, o => o.MapFrom(m => m.EstateBedrooms.Bedroom))
                .ForMember(e => e.ImageUrl, o => o.MapFrom<EstateDetailUrlResolver>())
                .ForMember(e => e.Price, o => o.MapFrom(m => m.FeaturedPrice.Price))
                .ForMember(e => e.MonthlyPrice, o => o.MapFrom(m => m.FeaturedPrice.MonthlyPrice))
                .ForMember(e => e.Street, o => o.MapFrom(m => m.EstateAddress.Street))
                .ForMember(e => e.City, o => o.MapFrom(m => m.EstateAddress.City))
                .ForMember(e => e.Province, o => o.MapFrom(m => m.EstateAddress.Province))
                .ForMember(e => e.ZipCode, o => o.MapFrom(m => m.EstateAddress.ZipCode))
                .ForMember(e => e.AgentFullName, o => o.MapFrom(m => m.EstateAgent.FullName))
                .ForMember(e => e.AgentDescription, o => o.MapFrom(m => m.EstateAgent.Description))
                .ForMember(e => e.AgentImageUrl, o => o.MapFrom<AgentUrlResolver>())
                .ForMember(e => e.AgentTitle, o => o.MapFrom(m => m.EstateAgent.Title));

           
            CreateMap<EstatePhoto, EstatePhotosToReturnDto>()
                  .ForMember(e => e.ImageUrl, o => o.MapFrom<EstatePhotosUrlResolver>());

            CreateMap<EstateAgent, EstateAgentToReturnDto>();


        }
    }
}
