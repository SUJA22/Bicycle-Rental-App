using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using CyloAPI.Model;
using CyloAPI.Respository;

namespace CyloAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductDetailsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ProductDetailsController(IConfiguration config)
        {
            _configuration = config;
        }

        [HttpGet]
        public IActionResult Get()
        {
            ProductRepository prodRep = new ProductRepository(_configuration); 
            return Ok(prodRep);
        }
        [HttpPost]

        public IActionResult Post(ProductDetails product)
        {
            ProductRepository prodRep = new ProductRepository(_configuration);
            return Ok(prodRep.addProduct(product));

        }
        [HttpPut]

        public IActionResult Put(ProductDetails product)
        {
            ProductRepository prodRep = new ProductRepository(_configuration);
            return Ok(prodRep.updateProduct(product));
        }
        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            ProductRepository prodRep = new ProductRepository(_configuration);
            return Ok(prodRep.deleteProduct(id));
        }
    }
}

