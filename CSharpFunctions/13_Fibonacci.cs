using System;

namespace CSharpFunctions
{
    public class FibonacciGenerator
    {
        /// <summary>
        /// Generates Fibonacci number at position n
        /// </summary>
        public static long Fibonacci(int n)
        {
            if (n < 0)
                throw new ArgumentException("Position must be non-negative");
            
            if (n == 0) return 0;
            if (n == 1) return 1;
            
            long a = 0, b = 1;
            for (int i = 2; i <= n; i++)
            {
                long temp = a + b;
                a = b;
                b = temp;
            }
            
            return b;
        }
    }
}
