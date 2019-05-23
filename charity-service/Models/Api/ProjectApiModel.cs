using System.Collections.Generic;

namespace CharityService.Models.Api
{
    public class ProjectApiModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }

        public string FoundationName { get; set; }

        public IEnumerable<string> CategoryNames { get; set; }
    }
}
