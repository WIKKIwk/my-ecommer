using System;

namespace CSharpFunctions
{
    public class GCDCalculator
    {
        /// <summary>
        /// Calculates the Greatest Common Divisor of two numbers
        /// </summary>
        public static int GCD(int a, int b)
        {
            a = Math.Abs(a);
            b = Math.Abs(b);
            
            while (b != 0)
            {
                int temp = b;
                b = a % b;
                a = temp;
            }
            
            return a;
        }
    }
}
