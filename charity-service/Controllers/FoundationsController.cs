using System.Collections.Generic;
using System.Threading.Tasks;
using CharityService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CharityService.Controllers
{
    public class FoundationsController : ApiController
    {
        private readonly ApplicationDbContext context;

        public FoundationsController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Foundation>> List()
        {
            var foundations = await context.Foundations.ToListAsync();

            return foundations;
        }
    }
}
