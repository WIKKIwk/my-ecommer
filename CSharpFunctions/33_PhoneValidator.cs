using System;

namespace CSharpFunctions
{
    public class PhoneValidator
    {
        /// <summary>
        /// Validates if a string is a valid phone number (US format)
        /// </summary>
        public static bool IsValidPhoneNumber(string phoneNumber)
        {
            if (string.IsNullOrWhiteSpace(phoneNumber))
                return false;
            
            // Remove common formatting characters
            string cleaned = phoneNumber.Replace("-", "").Replace("(", "").Replace(")", "").Replace(" ", "");
            
            // Check if it's 10 digits (US format)
            return cleaned.Length == 10 && long.TryParse(cleaned, out _);
        }
    }
}
