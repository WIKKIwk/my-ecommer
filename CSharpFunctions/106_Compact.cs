using System;
using System.Collections.Generic;

namespace CSharpFunctions
{
    public class CollectionCompact
    {
        /// <summary>
        /// Removes null and default values from array
        /// </summary>
        public static T[] Compact<T>(T[] array)
        {
            if (array == null)
                return new T[0];
            
            var result = new List<T>();
            
            foreach (var item in array)
            {
                if (item != null && !EqualityComparer<T>.Default.Equals(item, default(T)))
                {
                    result.Add(item);
                }
            }
            
            return result.ToArray();
        }
    }
}
