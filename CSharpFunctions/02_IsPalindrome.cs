using System;
using System.Linq;

namespace CSharpFunctions
{
    public class StringCheckers
    {
        /// <summary>
        /// Checks if a string is a palindrome
        /// </summary>
        public static bool IsPalindrome(string input)
        {
            if (string.IsNullOrEmpty(input))
                return false;
            
            string cleaned = new string(input.Where(char.IsLetterOrDigit).ToArray()).ToLower();
            return cleaned.SequenceEqual(cleaned.Reverse());
        }
    }
}
