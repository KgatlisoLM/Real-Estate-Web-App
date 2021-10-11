namespace Core.Entities
{
    public class EstateAddress : BaseEntity
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string ZipCode { get; set; }
    }
}