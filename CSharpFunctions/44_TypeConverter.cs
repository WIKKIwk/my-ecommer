using System;

namespace CSharpFunctions
{
    public class TypeConverter
    {
        /// <summary>
        /// Converts string to integer with default value
        /// </summary>
        public static int ToInt(string value, int defaultValue = 0)
        {
            return int.TryParse(value, out int result) ? result : defaultValue;
        }
        
        /// <summary>
        /// Converts string to double with default value
        /// </summary>
        public static double ToDouble(string value, double defaultValue = 0.0)
        {
            return double.TryParse(value, out double result) ? result : defaultValue;
        }
        
        /// <summary>
        /// Converts string to boolean
        /// </summary>
        public static bool ToBool(string value, bool defaultValue = false)
        {
            return bool.TryParse(value, out bool result) ? result : defaultValue;
        }
    }
}
