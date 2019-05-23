using Microsoft.AspNetCore.Mvc;

namespace CharityService.Controllers
{
    [Produces("application/json")]
    [Consumes("application/json")]
    [Route("api/[controller]")]
    public abstract class ApiController : ControllerBase
    {
    }
}
