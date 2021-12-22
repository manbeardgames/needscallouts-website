using Microsoft.AspNetCore.Mvc;

namespace NeedsCallouts
{
    public class OpenGraphViewComponent : ViewComponent
    {
        public OpenGraphViewComponent() { }
        public IViewComponentResult Invoke(string local,
                                           string type,
                                           string title,
                                           string description,
                                           string url,
                                           string sitename,
                                           string image)
        {
            OpenGraphModel model = new OpenGraphModel()
            {
                Local = local,
                Type = type,
                Title = title,
                Description = description,
                URL = url,
                SiteName = sitename,
                Image = image
            };
            return View(model);
        }
    }
}