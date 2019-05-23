namespace CharityService.Models
{
    public class ProjectCategory
    {
        public int ProjectId { get; set; }

        public int CategoryId { get; set; }

        public virtual Project Project { get; set; }

        public virtual Category Category { get; set; }
    }
}
