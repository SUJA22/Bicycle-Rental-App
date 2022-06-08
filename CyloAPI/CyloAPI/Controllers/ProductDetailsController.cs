using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using CyloAPI.Model;
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
        public JsonResult Get()
        {
            string query = @"select * from dbo.product_details";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BicycleAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCmd = new SqlCommand(query, myConn))
                {
                    myReader = myCmd.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]

        public JsonResult Post(UserDetails user)
        {

            string query = @"insert into dbo.product_details values(
                            '" + user.Name + @"','" + user.Email + @"','" + user.Contact + @"','" + user.Password + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BicycleAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCmd = new SqlCommand(query, myConn))
                {
                    myReader = myCmd.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]

        public JsonResult Put(UserDetails user)
        {

            string query = @"update dbo.product_details set password=
                            '" + user.Password + @"'
                             where userId=" + user.UserId + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BicycleAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCmd = new SqlCommand(query, myConn))
                {
                    myReader = myCmd.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }
        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {

            string query = @"delete from dbo.product_details where userId='" + id + @"'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BicycleAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCmd = new SqlCommand(query, myConn))
                {
                    myReader = myCmd.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}

