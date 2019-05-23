using System.Collections.Generic;
using System.Threading.Tasks;
using CharityService.Models;
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
        public async Task<IEnumerable<Category>> GetCategories()
        {
            var categories = await context.Categories.ToListAsync();

            return categories;
        }
    }
}
