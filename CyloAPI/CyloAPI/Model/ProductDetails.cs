namespace CyloAPI.Model
{
    public class ProductDetails
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public double PerHourCost { get; set; }
        public int NumOrders { get; set; }
        public string ImageLine { get;set; }
    }
}
