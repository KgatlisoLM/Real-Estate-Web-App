namespace Core.Entities
{
    public class FeaturedPrice : BaseEntity
    {
        public decimal Price { get; set; }
        public decimal MonthlyPrice { get; set; }
    }
}