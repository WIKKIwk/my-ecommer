using System;
using System.Linq;

namespace CSharpFunctions
{
    public class ArrayMinMax
    {
        /// <summary>
        /// Finds the maximum value in an array
        /// </summary>
        public static int FindMax(int[] array)
        {
            if (array == null || array.Length == 0)
                throw new ArgumentException("Array cannot be null or empty");
            
            return array.Max();
        }
        
        /// <summary>
        /// Finds the minimum value in an array
        /// </summary>
        public static int FindMin(int[] array)
        {
            if (array == null || array.Length == 0)
                throw new ArgumentException("Array cannot be null or empty");
            
            return array.Min();
        }
    }
}
