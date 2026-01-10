using System;

namespace CSharpFunctions
{
    public class ArrayReverser
    {
        /// <summary>
        /// Reverses an array in place
        /// </summary>
        public static void ReverseArray<T>(T[] array)
        {
            if (array == null || array.Length <= 1)
                return;
            
            Array.Reverse(array);
        }
        
        /// <summary>
        /// Returns a new reversed array without modifying original
        /// </summary>
        public static T[] GetReversedArray<T>(T[] array)
        {
            if (array == null)
                return null;
            
            T[] result = (T[])array.Clone();
            Array.Reverse(result);
            return result;
        }
    }
}
