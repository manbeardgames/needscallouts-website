using Microsoft.AspNetCore.Mvc;

namespace NeedsCallouts.Components.OpenGraph
{
    public class OpenGraphComponent : ViewComponent
    {
        public OpenGraphComponent() { }
        public IViewComponentResult Invoke(string local, string type, string title, string description, string url, string siteName, string image)
        {
            OpenGraphModel model = new OpenGraphModel()
            {
                Local = local,
                Type = type,
                Title = title,
                Description = description,
                URL = url,
                SiteName = siteName,
                Image = image
            };
            return View("OpenGraph", model)
        }
    }
}