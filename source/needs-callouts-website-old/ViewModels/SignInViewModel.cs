using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NeedsCalloutsWebsite
{
    /// <summary>
    ///     A data model class used for the account/signin view
    /// </summary>
    public class SignInViewModel
    {
        /// <summary>
        ///     Gets or Sets the <see cref="SignInModel"/> to be used for
        ///     mapping the sign in form values.
        /// </summary>
        public SignInModel Form { get; set; } = new SignInModel();

        /// <summary>
        ///     Gets or Sets a collection of validation errors to show on the
        ///     view if errors are found during sign in attempt.
        /// </summary>
        public List<string> Errors { get; set; } = new List<string>();
    }
}
