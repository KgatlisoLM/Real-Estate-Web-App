using Microsoft.VisualBasic;
using System;

namespace Core.Entities
{
    public class EstatePhoto : BaseEntity
    {
        public string ImageUrl { get; set; }
        public bool isMain { get; set; }

        public Estate Estate { get; set; }
        public int EstateId { get; set; }


    }
}