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
    public class EstateUrlResolver : IValueResolver<Estate, EstateToReturnDto, string>
    {
        private readonly IConfiguration _config;

        public EstateUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Estate source, EstateToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.EstatePhotos.FirstOrDefault(p =>p.isMain).ImageUrl))
            {
                return _config["ApiUrl"] + source.EstatePhotos.FirstOrDefault(p => p.isMain).ImageUrl;
            }
            return null;
        }
    }
}
