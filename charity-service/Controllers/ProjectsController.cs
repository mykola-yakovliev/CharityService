using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CharityService.Attributes;
using CharityService.Models;
using CharityService.Models.Api;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CharityService.Controllers
{
    public class ProjectsController : ApiController
    {
        private readonly ApplicationDbContext context;

        public ProjectsController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<ProjectApiModel>> GetProjects([CommaSeparated] IEnumerable<int> foundationIds, [CommaSeparated] IEnumerable<int> categoryIds)
        {
            IQueryable<Project> projectEntities = context
                .Projects
                .Include(project => project.Foundation)
                .Include(project => project.Categories)
                .ThenInclude(project => project.Category);

            if (foundationIds != null && foundationIds.Any())
            {
                projectEntities = projectEntities.Where(project => foundationIds.Contains(project.FoundationId));
            }
            if (categoryIds != null && categoryIds.Any())
            {
                IEnumerable<int> allowedProjects = await context
                    .ProjectCategories
                    .Where(pc => categoryIds.Contains(pc.CategoryId))
                    .Select(pc => pc.ProjectId)
                    .ToListAsync();
                projectEntities = projectEntities.Where(project => allowedProjects.Contains(project.Id));
            }

            IEnumerable<ProjectApiModel> projects = (await projectEntities.ToListAsync())
                .Select(project => new ProjectApiModel
                {
                    Id = project.Id,
                    Name = project.Name,
                    Description = project.Description,
                    Image = project.Image,
                    FoundationName = project.Foundation.Name,
                    CategoryNames = project.Categories.Select(c => c.Category.Name)
                });

            return projects;
        }

        [HttpGet]
        public async Task<ProjectApiModel> GetProject(int id)
        {
            Project project = await context.Projects
                .Include(p => p.Foundation)
                .Include(p => p.Categories)
                .ThenInclude(p => p.Category)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (project == null)
            {
                return null;
            }

            return new ProjectApiModel
            {
                Id = project.Id,
                Name = project.Name,
                Description = project.Description,
                Image = project.Image,
                FoundationName = project.Foundation.Name,
                CategoryNames = project.Categories.Select(c => c.Category.Name)
            };
        }
    }
}
