using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class EstateToReturnDto
    {
        public int Id { get; set; }
        public double EstateBedroom { get; set; }
        public double EstateBathroom { get; set; }
        public double Garage { get; set; }
        public double AreaSize { get; set; }
        public DateTime DateAdded { get; set; }
        public string EstateType { get; set; }
        public string EstateCategory { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public decimal MonthlyPrice { get; set; }
        public string  Street { get; set; }
        public string  City { get; set; }
        public string  Province { get; set; }
        public string  ZipCode { get; set; }

    }
}
