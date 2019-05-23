using Bogus;
using CharityService.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CharityService.Utils
{
    public class FakeDataInitializer
    {
        private static IEnumerable<Category> categories;
        private static IEnumerable<Foundation> foundations;
        private static IEnumerable<Project> projects;
        private static IEnumerable<ProjectCategory> projectCategories;

        private ApplicationDbContext applicationDbContext;

        public FakeDataInitializer(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public void Init()
        {
            foundations = InitFoundations(20);

            applicationDbContext.Foundations.AddRange(foundations);
            applicationDbContext.SaveChanges();

            categories = InitCategories(10);

            applicationDbContext.Categories.AddRange(categories);
            applicationDbContext.SaveChanges();

            projects = InitProjects(20, foundations);

            applicationDbContext.Projects.AddRange(projects);
            applicationDbContext.SaveChanges();

            projectCategories = InitProjectCategories(10, projects, categories);

            applicationDbContext.ProjectCategories.AddRange(projectCategories);
            applicationDbContext.SaveChanges();
        }


        private IEnumerable<Foundation> InitFoundations(int amount)
        {
            var foundations = new Faker<Foundation>()
            .RuleFor(c => c.Name, f => f.Lorem.Word())
            .Generate(amount);

            return foundations;
        }

        private IEnumerable<Category> InitCategories(int amount)
        {
            var categories = new Faker<Category>()
            .RuleFor(c => c.Name, f => f.Lorem.Word())
            .Generate(amount);

            return categories;
        }

        private IEnumerable<Project> InitProjects(int amount, IEnumerable<Foundation> foundations)
        {
            var projects = new Faker<Project>()
            .RuleFor(c => c.Name, f => f.Lorem.Sentence(5))
            .RuleFor(c => c.Description, f => f.Lorem.Paragraph(2))
            .RuleFor(c => c.Image, f => f.Image.LoremPixelUrl("random", 640, 480, true, false))
            .RuleFor(c => c.FoundationId, f => f.PickRandom(foundations).Id)
            .Generate(amount);

            return projects;
        }

        private IEnumerable<ProjectCategory> InitProjectCategories(int amount, IEnumerable<Project> projects, IEnumerable<Category> categories)
        {
            var projectCategories = new Faker<ProjectCategory>()
            .RuleFor(c => c.ProjectId, f => f.PickRandom(projects).Id)
            .RuleFor(c => c.CategoryId, f => f.PickRandom(categories).Id)
            .Generate(amount);

            return projectCategories.Distinct(new ProjectCategoryEqualityComparer());
        }

        class ProjectCategoryEqualityComparer : IEqualityComparer<ProjectCategory>
        {
            public bool Equals(ProjectCategory x, ProjectCategory y)
            {
                return x.CategoryId == y.CategoryId && x.ProjectId == y.ProjectId;
            }

            public int GetHashCode(ProjectCategory obj)
            {
                return obj.CategoryId.GetHashCode() + obj.ProjectId.GetHashCode();
            }
        }
    }
}
