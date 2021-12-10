using Microsoft.AspNetCore.Mvc;

namespace NeedsCalloutsWebsite.Controllers
{
    [Route("")]
    public class HomeController : Controller
    {
        [Route("")]
        [Route("index")]
        public IActionResult Index() => View();

        [Route("/about-us")]
        public IActionResult About() => View();

        [Route("/how-to-join")]
        public IActionResult Join() => View();

        [Route("/free-company-ranks")]
        public IActionResult Ranks() => View();

        [Route("/free-company-rules-guidelines")]
        public IActionResult Rules() => View();
    }
}
