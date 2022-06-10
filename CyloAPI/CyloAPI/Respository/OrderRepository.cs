using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using CyloAPI.Model;
using System.Collections.Generic;
using System;

namespace CyloAPI.Respository
{
    
    public class OrderRepository
    {
        private readonly IConfiguration _configuration;
        public OrderRepository(IConfiguration config)
        {
            _configuration = config;
        }

        public string addOrder(OrderDetails order)
        {
            string query = "insert into dbo.OrderDetails values(@userId,@prodName,@cost,@address,@startDate,@endDate)";
            string sqlDataSource = _configuration.GetConnectionString("BicycleAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCmd = new SqlCommand(query, myConn))
                {
                    myCmd.Parameters.AddWithValue("@userId", order.userId);
                    myCmd.Parameters.AddWithValue("@prodName", order.prodName);
                    myCmd.Parameters.AddWithValue("@cost", order.cost);
                    myCmd.Parameters.AddWithValue("@address", order.address);
                    myCmd.Parameters.AddWithValue("@startDate", order.startDate);
                    myCmd.Parameters.AddWithValue("@endDate", order.endDate);
                    myReader = myCmd.ExecuteReader();
                    myReader.Close();
                    myConn.Close();
                }
            }
            return "Added Successfully";
        }

        public List<OrderDetails> getOrder()
        {
            List<OrderDetails> orders = new List<OrderDetails>();
            string query = @"select * from dbo.OrderDetails";
            string sqlDataSource = _configuration.GetConnectionString("BicycleAppCon");
            SqlDataReader myReader;
            using (SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCmd = new SqlCommand(query, myConn))
                {
                    myReader = myCmd.ExecuteReader();
                    while (myReader.Read())
                    {
                        OrderDetails order = new OrderDetails();
                        order.id = Convert.ToInt32(myReader["id"]);
                        order.userId= Convert.ToInt32(myReader["userId"]);
                        order.prodName = myReader["prodName"].ToString();
                        order.startDate = myReader["startDate"].ToString();
                        order.endDate = myReader["endDate"].ToString();
                        order.cost = Convert.ToInt32(myReader["cost"]);
                        orders.Add(order);

                    }
                    myReader.Close();
                    myConn.Close();
                }
            }
            return orders;
        }
    }
}
