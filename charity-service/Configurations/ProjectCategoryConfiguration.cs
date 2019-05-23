using CharityService.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CharityService.Configurations
{
    public class ProjectCategoryConfiguration : IEntityTypeConfiguration<ProjectCategory>
    {
        public void Configure(EntityTypeBuilder<ProjectCategory> builder)
        {
            builder.HasKey(entity => new
            {
                entity.CategoryId,
                entity.ProjectId,
            });

            builder.HasOne(entity => entity.Category)
                .WithMany()
                .HasForeignKey(entity => entity.CategoryId);
            builder.HasOne(entity => entity.Project)
                .WithMany()
                .HasForeignKey(entity => entity.ProjectId);
        }
    }
}
