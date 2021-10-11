using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class EstateAgentToReturnDto
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
    }
}
