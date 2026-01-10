using System;
using System.Linq;

namespace CSharpFunctions
{
    public class CapitalizeHelper
    {
        /// <summary>
        /// Capitalizes the first letter of each word in a string
        /// </summary>
        public static string CapitalizeWords(string input)
        {
            if (string.IsNullOrEmpty(input))
                return input;
            
            return string.Join(" ", input.Split(' ')
                .Select(word => word.Length > 0 
                    ? char.ToUpper(word[0]) + word.Substring(1).ToLower() 
                    : word));
        }
    }
}
