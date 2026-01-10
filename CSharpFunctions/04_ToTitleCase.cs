using System;
using System.Text;

namespace CSharpFunctions
{
    public class CaseConverter
    {
        /// <summary>
        /// Converts a string to Title Case
        /// </summary>
        public static string ToTitleCase(string input)
        {
            if (string.IsNullOrEmpty(input))
                return input;
            
            var textInfo = System.Globalization.CultureInfo.CurrentCulture.TextInfo;
            return textInfo.ToTitleCase(input.ToLower());
        }
    }
}
