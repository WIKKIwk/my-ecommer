using System;
using System.Linq;

namespace CSharpFunctions
{
    public class ArrayAggregator
    {
        /// <summary>
        /// Aggregates array elements using a function
        /// </summary>
        public static T Aggregate<T>(T[] array, Func<T, T, T> func)
        {
            if (array == null || array.Length == 0)
                throw new ArgumentException("Array cannot be null or empty");
            
            if (func == null)
                throw new ArgumentNullException(nameof(func));
            
            return array.Aggregate(func);
        }
        
        /// <summary>
        /// Aggregates with a seed value
        /// </summary>
        public static TAccumulate Aggregate<T, TAccumulate>(T[] array, TAccumulate seed, Func<TAccumulate, T, TAccumulate> func)
        {
            if (array == null || func == null)
                throw new ArgumentNullException();
            
            return array.Aggregate(seed, func);
        }
    }
}
