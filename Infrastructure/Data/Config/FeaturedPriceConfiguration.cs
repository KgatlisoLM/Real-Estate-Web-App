using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Data.Config
{
    public class FeaturedPriceConfiguration : IEntityTypeConfiguration<FeaturedPrice>

    {
        public void Configure(EntityTypeBuilder<FeaturedPrice> builder)
        {
            builder.Property(p => p.Price).HasColumnType("decimal(18,2)");
            builder.Property(p => p.MonthlyPrice).HasColumnType("decimal(18,2)");
        }
    }
}
