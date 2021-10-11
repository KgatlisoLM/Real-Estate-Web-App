using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions
    {

        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IEstateRepository, EstateRepository>();
            services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>)));
            return services;
        }
    }
}
