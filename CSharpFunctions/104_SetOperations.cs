using System;
using System.Linq;

namespace CSharpFunctions
{
    public class CollectionIntersection
    {
        /// <summary>
        /// Finds intersection of two arrays
        /// </summary>
        public static T[] Intersect<T>(T[] array1, T[] array2)
        {
            if (array1 == null || array2 == null)
                return new T[0];
            
            return array1.Intersect(array2).ToArray();
        }
        
        /// <summary>
        /// Finds union of two arrays
        /// </summary>
        public static T[] Union<T>(T[] array1, T[] array2)
        {
            if (array1 == null && array2 == null)
                return new T[0];
            
            if (array1 == null)
                return array2.Distinct().ToArray();
            
            if (array2 == null)
                return array1.Distinct().ToArray();
            
            return array1.Union(array2).ToArray();
        }
        
        /// <summary>
        /// Finds difference (elements in first but not in second)
        /// </summary>
        public static T[] Except<T>(T[] array1, T[] array2)
        {
            if (array1 == null)
                return new T[0];
            
            if (array2 == null)
                return array1;
            
            return array1.Except(array2).ToArray();
        }
    }
}
