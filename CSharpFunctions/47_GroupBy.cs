using System;
using System.Linq;

namespace CSharpFunctions
{
    public class ArrayGrouper
    {
        /// <summary>
        /// Groups array elements by a key selector
        /// </summary>
        public static IGrouping<TKey, T>[] GroupBy<T, TKey>(T[] array, Func<T, TKey> keySelector)
        {
            if (array == null || keySelector == null)
                throw new ArgumentNullException();
            
            return array.GroupBy(keySelector).ToArray();
        }
    }
}
