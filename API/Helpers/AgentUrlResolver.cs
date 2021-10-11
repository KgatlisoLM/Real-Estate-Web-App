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
    public class AgentUrlResolver : IValueResolver<Estate, EstateDetailToReturnDto, string>
    {
        private readonly IConfiguration _config;

        public AgentUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Estate source, EstateDetailToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.EstateAgent.ImageUrl))
            {
                return _config["ApiUrl"] + source.EstateAgent.ImageUrl;
            }

            return null;
        }
    }
}
