using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using CyloAPI.Model;
using CyloAPI.Respository;
using System.Collections.Generic;

namespace CyloAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserDetailsController(IConfiguration config)
        {
            _configuration = config;
        }

        [HttpGet]
        public IActionResult Get()
        {
            UserRepository userRep = new UserRepository(_configuration);
            List<UserDetails> users = new List<UserDetails>();
            users = userRep.getUser();
            return Ok(users);
        }
        [HttpPost]

        public IActionResult Post(UserDetails user)
        {
            UserRepository userRep = new UserRepository(_configuration);
            return Ok(userRep.addUser(user));
        }
    }
}
