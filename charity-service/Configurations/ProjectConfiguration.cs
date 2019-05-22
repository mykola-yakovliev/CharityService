using CharityService.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CharityService.Configurations
{
    public class ProjectConfiguration : IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            builder.HasKey(entity => entity.Id);
            builder.Property(entity => entity.Name)
                .IsRequired();
            builder.Property(entity => entity.Description)
                .IsRequired();
            builder.Property(entity => entity.Image)
                .IsRequired();
            builder.HasOne(entity => entity.Foundation)
                .WithMany()
                .HasForeignKey(entity => entity.FoundationId);
        }
    }
}
