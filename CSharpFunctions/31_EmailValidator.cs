using System;
using System.Text.RegularExpressions;

namespace CSharpFunctions
{
    public class EmailValidator
    {
        /// <summary>
        /// Validates if a string is a valid email address
        /// </summary>
        public static bool IsValidEmail(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
                return false;
            
            try
            {
                string pattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";
                return Regex.IsMatch(email, pattern);
            }
            catch
            {
                return false;
            }
        }
    }
}
