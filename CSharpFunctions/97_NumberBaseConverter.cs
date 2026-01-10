using System;

namespace CSharpFunctions
{
    public class NumberBaseConverter
    {
        /// <summary>
        /// Converts decimal to binary
        /// </summary>
        public static string DecimalToBinary(int number)
        {
            if (number == 0)
                return "0";
            
            return Convert.ToString(number, 2);
        }
        
        /// <summary>
        /// Converts binary to decimal
        /// </summary>
        public static int BinaryToDecimal(string binary)
        {
            return Convert.ToInt32(binary, 2);
        }
        
        /// <summary>
        /// Converts decimal to hexadecimal
        /// </summary>
        public static string DecimalToHex(int number)
        {
            return number.ToString("X");
        }
        
        /// <summary>
        /// Converts hexadecimal to decimal
        /// </summary>
        public static int HexToDecimal(string hex)
        {
            return Convert.ToInt32(hex, 16);
        }
    }
}
