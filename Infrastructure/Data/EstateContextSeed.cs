using Core.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class EstateContextSeed
    {
        public static async Task SeedASync(EstateContext context, ILoggerFactory loggerFactory)
        {
            try
              {


                if (!context.EstateCategory.Any())
                {
                    var estateCategoryData = File.ReadAllText("../Infrastructure/Data/SeedData/EstateCategory.json");
                    var categories = JsonSerializer.Deserialize<List<EstateCategory>>(estateCategoryData);

                    foreach (var item in categories)
                    {
                        context.EstateCategory.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                if (!context.EstateAddress.Any())
                {
                    var estateAddressData = File.ReadAllText("../Infrastructure/Data/SeedData/estateAddress.json");
                    var address = JsonSerializer.Deserialize<List<EstateAddress>>(estateAddressData);

                    foreach (var item in address)
                    {
                        context.EstateAddress.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                if (!context.EstateType.Any())
                {
                    var estateTypeData = File.ReadAllText("../Infrastructure/Data/SeedData/estateType.json");
                    var types = JsonSerializer.Deserialize<List<EstateType>>(estateTypeData);

                    foreach (var item in types)
                    {
                        context.EstateType.Add(item);
                    }
                    await context.SaveChangesAsync();
                }


                if (!context.EstateAgent.Any())
                {
                    var estateAgentData = File.ReadAllText("../Infrastructure/Data/SeedData/estateAgent.json");
                    var agents = JsonSerializer.Deserialize<List<EstateAgent>>(estateAgentData);

                    foreach (var item in agents)
                    {
                        context.EstateAgent.Add(item);
                    }
                    await context.SaveChangesAsync();
                }


                if (!context.FeaturedPrice.Any())
                {
                    var priceData = File.ReadAllText("../Infrastructure/Data/SeedData/featuredPrice.json");
                    var prices = JsonSerializer.Deserialize<List<FeaturedPrice>>(priceData);

                    foreach (var item in prices)
                    {
                        context.FeaturedPrice.Add(item);
                    }
                    await context.SaveChangesAsync();
                }


                if (!context.EstateBathrooms.Any())
                {
                    var bathroomData = File.ReadAllText("../Infrastructure/Data/SeedData/EstateBathrooms.json");
                    var bathrooms = JsonSerializer.Deserialize<List<EstateBathrooms>>(bathroomData);

                    foreach (var item in bathrooms)
                    {
                        context.EstateBathrooms.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

                if (!context.EstateBedrooms.Any())
                {
                    var bedroomData = File.ReadAllText("../Infrastructure/Data/SeedData/EstateBedrooms.json");
                    var bedrooms = JsonSerializer.Deserialize<List<EstateBedrooms>>(bedroomData);

                    foreach (var item in bedrooms)
                    {
                        context.EstateBedrooms.Add(item);
                    }
                    await context.SaveChangesAsync();
                }


                if (!context.Estate.Any())
                {
                    var estateData = File.ReadAllText("../Infrastructure/Data/SeedData/Estate.json");
                    var estates = JsonSerializer.Deserialize<List<Estate>>(estateData);

                    foreach (var item in estates)
                    {
                        context.Estate.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<EstateContextSeed>();
                logger.LogError(ex.Message);
            }
        } 
    }
}
