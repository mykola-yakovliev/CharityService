using Microsoft.AspNetCore.Mvc;

namespace CharityService.Controllers
{
    public class PaymentsController : ApiController
    {
        [HttpPost]
        public IActionResult Submit() => Ok();
    }
}
