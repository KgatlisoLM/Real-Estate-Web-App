using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Specifications
{
    public class EstateWithOtherEntitiesSpecification : BaseSpecification<Estate>
    {
        public EstateWithOtherEntitiesSpecification(EstateSpecParams estateParams) 
            : base( x =>
                    (string.IsNullOrEmpty(estateParams.Search) || x.EstateAddress.City.ToLower().Contains(estateParams.Search)
                        || x.EstateAddress.Province.ToLower().Contains(estateParams.Search) 
                        || x.EstateAddress.ZipCode.ToLower().Contains(estateParams.Search)) &&
                    (!estateParams.EstateCategoryId.HasValue || x.EstateCategoryId == estateParams.EstateCategoryId) &&
                    (!estateParams.EstateBathroomsId.HasValue || x.EstateBathroomsId == estateParams.EstateBathroomsId) &&
                    (!estateParams.EstateBedroomsId.HasValue || x.EstateBedroomsId == estateParams.EstateBedroomsId)

                  )
        {
            AddInclude(x => x.EstateAddress);
            AddInclude(x => x.EstateCategory);
            AddInclude(x => x.EstatePhotos);
            AddInclude(x => x.EstateBathrooms);
            AddInclude(x => x.EstateBedrooms);
            AddInclude(x => x.EstateType);
            AddInclude(x => x.EstateAgent);
            AddInclude(x => x.FeaturedPrice);
            ApplyPaging(estateParams.PageSize * (estateParams.PageIndex - 1), estateParams.PageSize);
            if (!string.IsNullOrEmpty(estateParams.Sort))
            {
                switch (estateParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.FeaturedPrice.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.FeaturedPrice.Price);
                        break;
                    case "priceAscM":
                        AddOrderBy(p => p.FeaturedPrice.MonthlyPrice);
                        break;
                    case "priceDescM":
                        AddOrderByDescending(p => p.FeaturedPrice.MonthlyPrice);
                        break;
                    case "dateDesc":
                        AddOrderByDescending(p => p.DateAdded);
                        break;
                    default:
                        AddOrderBy(n => n.DateAdded);
                        break;
                    
                }
            }
        }

        public EstateWithOtherEntitiesSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.EstateAddress);
            AddInclude(x => x.EstateCategory);
            AddInclude(x => x.EstatePhotos);
            AddInclude(x => x.EstateBathrooms);
            AddInclude(x => x.EstateBedrooms);
            AddInclude(x => x.EstateType);
            AddInclude(x => x.FeaturedPrice);
            AddInclude(x => x.EstateAgent);
        }
    }
}
