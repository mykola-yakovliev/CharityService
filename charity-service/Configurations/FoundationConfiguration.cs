using CharityService.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CharityService.Configurations
{
    public class FoundationConfiguration : IEntityTypeConfiguration<Foundation>
    {
        public void Configure(EntityTypeBuilder<Foundation> builder)
        {
            builder.HasKey(entity => entity.Id);
            builder.Property(entity => entity.Name)
                .IsRequired();
        }
    }
}
