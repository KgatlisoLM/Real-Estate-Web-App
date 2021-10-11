using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class EstateDetailUrlResolver : IValueResolver<Estate, EstateDetailToReturnDto, string>
    {
        private readonly IConfiguration _config;

        public EstateDetailUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Estate source, EstateDetailToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.EstatePhotos.FirstOrDefault(p => p.isMain).ImageUrl))
            {
                return _config["ApiUrl"] + source.EstatePhotos.FirstOrDefault(p => p.isMain).ImageUrl;
            }
            return null;
        }
    }
}
