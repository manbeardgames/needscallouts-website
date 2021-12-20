using System.ComponentModel.DataAnnotations;

namespace NeedsCalloutsWebsite
{
    /// <summary>
    ///     A data-model that maps username and password values to be used with
    ///     sign in form
    /// </summary>
    public class SignInModel
    {
        /// <summary>
        ///     Gets or Sets the value for the Username field on the sign in
        ///     form.
        /// </summary>
        [DataType(DataType.Text)]
        public string Username { get; set; }

        /// <summary>
        ///     Gets or Sets the value for the Password field on the sign in
        ///     form.
        /// </summary>
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
