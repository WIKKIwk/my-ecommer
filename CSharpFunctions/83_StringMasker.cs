using System;
using System.Linq;

namespace CSharpFunctions
{
    public class StringMasker
    {
        /// <summary>
        /// Masks a credit card number
        /// </summary>
        public static string MaskCreditCard(string cardNumber)
        {
            if (string.IsNullOrEmpty(cardNumber) || cardNumber.Length < 4)
                return cardNumber;
            
            string cleaned = new string(cardNumber.Where(char.IsDigit).ToArray());
            
            if (cleaned.Length < 4)
                return cardNumber;
            
            int maskLength = cleaned.Length - 4;
            return new string('*', maskLength) + cleaned.Substring(maskLength);
        }
        
        /// <summary>
        /// Masks an email address
        /// </summary>
        public static string MaskEmail(string email)
        {
            if (string.IsNullOrEmpty(email) || !email.Contains("@"))
                return email;
            
            string[] parts = email.Split('@');
            if (parts[0].Length <= 2)
                return email;
            
            string masked = parts[0].Substring(0, 2) + new string('*', parts[0].Length - 2);
            return masked + "@" + parts[1];
        }
    }
}
