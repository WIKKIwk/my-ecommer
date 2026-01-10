using System;

namespace CSharpFunctions
{
    public class PowerCalculator
    {
        /// <summary>
        /// Calculates base raised to the power of exponent
        /// </summary>
        public static double Power(double baseNumber, int exponent)
        {
            if (exponent == 0)
                return 1;
            
            if (exponent < 0)
                return 1.0 / Power(baseNumber, -exponent);
            
            double result = 1;
            for (int i = 0; i < exponent; i++)
            {
                result *= baseNumber;
            }
            
            return result;
        }
    }
}
