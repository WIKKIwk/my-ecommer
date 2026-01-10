using System;

namespace CSharpFunctions
{
    public class BitManipulation
    {
        /// <summary>
        /// Counts set bits (1s) in a number
        /// </summary>
        public static int CountSetBits(int number)
        {
            int count = 0;
            while (number > 0)
            {
                count += number & 1;
                number >>= 1;
            }
            return count;
        }
        
        /// <summary>
        /// Checks if a number is power of 2
        /// </summary>
        public static bool IsPowerOfTwo(int number)
        {
            return number > 0 && (number & (number - 1)) == 0;
        }
        
        /// <summary>
        /// Swaps two integers using XOR
        /// </summary>
        public static void SwapWithoutTemp(ref int a, ref int b)
        {
            if (a != b)
            {
                a ^= b;
                b ^= a;
                a ^= b;
            }
        }
    }
}
