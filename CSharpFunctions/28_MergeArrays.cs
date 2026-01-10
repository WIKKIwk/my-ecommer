using System;
using System.Linq;

namespace CSharpFunctions
{
    public class ArrayMerger
    {
        /// <summary>
        /// Merges two arrays into one
        /// </summary>
        public static T[] MergeArrays<T>(T[] array1, T[] array2)
        {
            if (array1 == null && array2 == null)
                return null;
            
            if (array1 == null)
                return (T[])array2.Clone();
            
            if (array2 == null)
                return (T[])array1.Clone();
            
            return array1.Concat(array2).ToArray();
        }
    }
}
