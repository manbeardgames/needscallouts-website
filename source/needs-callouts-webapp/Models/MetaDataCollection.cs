using System.Collections.Generic;

namespace NeedsCallouts.Models
{
    /// <summary>
    ///     A dictionary utility class that stores key-values of the 
    ///     page meta data models.
    /// </summary>
    /// <remarks>
    ///     Instances of this class should not be created manually. Instead, the
    ///     values are stored inside the metadata.json project file which gets
    ///     loaded in when the application first starts.
    /// </remarks>
    public class MetaDataCollection
    {
        /// <summary>
        ///     Gets or Sets the <see cref="MetaDataModel"/> object that contains
        ///     the default values to use if a value is mising from one of the
        ///     page specific models.
        /// </summary>
        public MetaDataModel Default { get; set; }

        /// <summary>
        ///     Gets or Sets a key-value collection of 
        ///     <see cref="MetaDataModel"/> objects that contain the meta data
        ///     values to set for various pages within the application.
        /// </summary>
        public Dictionary<string, MetaDataModel> Pages { get; set; }
    }
}