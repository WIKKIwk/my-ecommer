using System;

namespace CSharpFunctions
{
    public class EvenOddChecker
    {
        /// <summary>
        /// Checks if a number is even
        /// </summary>
        public static bool IsEven(int number)
        {
            return number % 2 == 0;
        }
        
        /// <summary>
        /// Checks if a number is odd
        /// </summary>
        public static bool IsOdd(int number)
        {
            return number % 2 != 0;
        }
    }
}
