using Microsoft.AspNetCore.Mvc;
using BasilTs.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BasilTs.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        // GET: api/<ProductController>
        
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            List<Product> products = new List<Product>();
            Product product = new Product()
            {
                Name = "Test",
                Price = 3
            }; 
            products.Add(product);
            product = new Product()
            {
                Name = "Test2",
                Price = 4
            };
            products.Add(product);
            return products.ToList();
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ProductController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
