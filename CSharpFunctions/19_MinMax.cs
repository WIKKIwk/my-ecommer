using System;

namespace CSharpFunctions
{
    public class MinMaxFinder
    {
        /// <summary>
        /// Finds the minimum of two numbers
        /// </summary>
        public static int Min(int a, int b)
        {
            return a < b ? a : b;
        }
        
        /// <summary>
        /// Finds the maximum of two numbers
        /// </summary>
        public static int Max(int a, int b)
        {
            return a > b ? a : b;
        }
    }
}
