using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace Infrastructure.Data
{
    public class EstateContext : DbContext
    {
        public EstateContext(DbContextOptions<EstateContext> options) : base(options)
        {
        }

        public DbSet<Estate> Estate { get; set; }
        public DbSet<EstateAddress> EstateAddress { get; set; }
        public DbSet<EstateAgent> EstateAgent { get; set; }
        public DbSet<EstateCategory> EstateCategory { get; set; }
        public DbSet<EstateBedrooms> EstateBedrooms { get; set; }
        public DbSet<EstateBathrooms> EstateBathrooms { get; set; }
        public DbSet<EstatePhoto> EstatePhoto { get; set; }
        public DbSet<EstateType> EstateType { get; set; }
        public DbSet<FeaturedPrice> FeaturedPrice { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
