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
    public class EstatePhotosUrlResolver : IValueResolver<EstatePhoto, EstatePhotosToReturnDto, string>
    {
        private readonly IConfiguration _config;

        public EstatePhotosUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(EstatePhoto source, EstatePhotosToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ImageUrl))
            {
                return _config["ApiUrl"] + source.ImageUrl;
            }
            return null;
        }
    }
}
