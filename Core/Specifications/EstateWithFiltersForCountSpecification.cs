using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Specifications
{
    public class EstateWithFiltersForCountSpecification : BaseSpecification<Estate>
    {
        public EstateWithFiltersForCountSpecification(EstateSpecParams estateParams)
         : base(x =>
                 (string.IsNullOrEmpty(estateParams.Search) || x.EstateAddress.City.ToLower().Contains(estateParams.Search)
                        || x.EstateAddress.Province.ToLower().Contains(estateParams.Search)
                        || x.EstateAddress.ZipCode.ToLower().Contains(estateParams.Search)) &&
                    (!estateParams.EstateCategoryId.HasValue || x.EstateCategoryId == estateParams.EstateCategoryId) &&
                    (!estateParams.EstateBathroomsId.HasValue || x.EstateBathroomsId == estateParams.EstateBathroomsId) &&
                    (!estateParams.EstateBedroomsId.HasValue || x.EstateBedroomsId == estateParams.EstateBedroomsId)
               )
        {
        }
    }
}
