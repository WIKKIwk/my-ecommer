using System;
using System.Linq;

namespace CSharpFunctions
{
    public class ArrayCounter
    {
        /// <summary>
        /// Counts occurrences of a specific value in an array
        /// </summary>
        public static int CountOccurrences<T>(T[] array, T value)
        {
            if (array == null)
                return 0;
            
            return array.Count(item => item.Equals(value));
        }
    }
}
