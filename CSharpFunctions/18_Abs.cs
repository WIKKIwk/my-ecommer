using System;

namespace CSharpFunctions
{
    public class AbsoluteValue
    {
        /// <summary>
        /// Returns the absolute value of a number
        /// </summary>
        public static double Abs(double number)
        {
            return number < 0 ? -number : number;
        }
        
        public static int Abs(int number)
        {
            return number < 0 ? -number : number;
        }
    }
}
