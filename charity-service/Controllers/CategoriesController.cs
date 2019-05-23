using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CharityService.Controllers
{
    public class CategoriesController : ApiController
    {
        private readonly ApplicationDbContext context;

        public CategoriesController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var categories = await context.Categories.ToListAsync();

            return Ok(categories);
        }
    }
}
