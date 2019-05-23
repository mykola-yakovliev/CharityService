using System.Threading.Tasks;
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
        public async Task<IActionResult> List()
        {
            var foundations = await context.Foundations.ToListAsync();

            return Ok(foundations);
        }
    }
}
