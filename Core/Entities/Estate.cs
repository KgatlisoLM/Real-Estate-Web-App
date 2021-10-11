using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.Entities
{
    public class Estate : BaseEntity
    {
       
        public double  Garage { get; set; }
        public double GarageSize { get; set; }
        public DateTime YearBuilt { get; set; }
        public double AreaSize { get; set; }

        public string Description { get; set; }

        public DateTime DateAdded { get; set; }

        //public bool isRelated { get; set; }

        public EstateBathrooms EstateBathrooms { get; set; }
        public int EstateBathroomsId { get; set; }

        public EstateBedrooms EstateBedrooms { get; set; }
        public int EstateBedroomsId { get; set; }

        public IReadOnlyList<EstatePhoto> EstatePhotos { get; set; }
     
        public EstateAddress EstateAddress { get; set; }
        public int EstateAddressId { get; set; }

        public FeaturedPrice FeaturedPrice { get; set; }
        public int FeaturedPriceId { get; set; } 

        public EstateAgent EstateAgent { get; set; }
        public int EstateAgentId { get; set; }

        public EstateType EstateType { get; set; }
        public int EstateTypeId { get; set; }

        public EstateCategory EstateCategory { get; set; }
        public int EstateCategoryId { get; set; }
    }
}
