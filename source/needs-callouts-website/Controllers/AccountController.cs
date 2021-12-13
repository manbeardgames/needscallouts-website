using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace NeedsCalloutsWebsite.Controllers
{
    [Route("account")]
    [AllowAnonymous]
    public class AccountController : Controller
    {
        [HttpGet, Route("sign-in")]
        public IActionResult SignIn()
        {
            //  Create a new SigninViewModel
            SignInViewModel viewModel = new SignInViewModel();

            //  Return the view with the model.
            return View(viewModel);
        }

        [HttpPost, Route("sign-in")]
        [ValidateAntiForgeryToken]
        public IActionResult SignIn(SignInViewModel viewModel)
        {
            //  Validate the model
            if (!ModelState.IsValid)
            {
                foreach (var value in ModelState.Values)
                {
                    foreach (var error in value.Errors)
                    {
                        viewModel.Errors.Add(error.ErrorMessage);
                    }
                }

                //  Return back the view with the view model now contining the
                //  error messages.
                return View(viewModel);
            }

            return View(viewModel);
        }

        [Route("google-login")]
        public IActionResult GoogleLogin()
        {
            var properties = new AuthenticationProperties { RedirectUri = Url.Action("GoogleResponse") };
            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [Route("google-response")]
        public async Task<IActionResult> GoogleResponse()
        {
            AuthenticateResult result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            var claims = result.Principal.Identities
                .FirstOrDefault().Claims.Select(claim => new
                {
                    claim.Issuer,
                    claim.OriginalIssuer,
                    claim.Type,
                    claim.Value
                });

            return Json(claims);
        }
    }
}

