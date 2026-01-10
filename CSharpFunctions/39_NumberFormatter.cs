using System;
using System.Linq;

namespace CSharpFunctions
{
    public class NumberFormatter
    {
        /// <summary>
        /// Formats a number with thousand separators
        /// </summary>
        public static string FormatWithCommas(long number)
        {
            return number.ToString("N0");
        }
        
        /// <summary>
        /// Formats a number as currency
        /// </summary>
        public static string FormatAsCurrency(decimal amount, string currencySymbol = "$")
        {
            return $"{currencySymbol}{amount:N2}";
        }
        
        /// <summary>
        /// Formats a number as percentage
        /// </summary>
        public static string FormatAsPercentage(double value, int decimals = 2)
        {
            return $"{(value * 100).ToString($"F{decimals}")}%";
        }
    }
}
