using System;

namespace CSharpFunctions
{
    public class ArrayFilling
    {
        /// <summary>
        /// Fills an array with a value
        /// </summary>
        public static T[] Fill<T>(int length, T value)
        {
            if (length <= 0)
                return new T[0];
            
            T[] result = new T[length];
            for (int i = 0; i < length; i++)
            {
                result[i] = value;
            }
            
            return result;
        }
        
        /// <summary>
        /// Creates a range of integers
        /// </summary>
        public static int[] Range(int start, int end, int step = 1)
        {
            if (step == 0)
                throw new ArgumentException("Step cannot be zero");
            
            var result = new System.Collections.Generic.List<int>();
            
            if (step > 0)
            {
                for (int i = start; i < end; i += step)
                    result.Add(i);
            }
            else
            {
                for (int i = start; i > end; i += step)
                    result.Add(i);
            }
            
            return result.ToArray();
        }
    }
}
