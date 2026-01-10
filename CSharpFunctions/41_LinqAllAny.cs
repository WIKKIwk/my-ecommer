using System;
using System.Linq;

namespace CSharpFunctions
{
    public class LinqExtensions
    {
        /// <summary>
        /// Checks if all elements in array satisfy a condition
        /// </summary>
        public static bool All<T>(T[] array, Func<T, bool> predicate)
        {
            if (array == null || predicate == null)
                throw new ArgumentNullException();
            
            return array.All(predicate);
        }
        
        /// <summary>
        /// Checks if any element in array satisfies a condition
        /// </summary>
        public static bool Any<T>(T[] array, Func<T, bool> predicate)
        {
            if (array == null || predicate == null)
                throw new ArgumentNullException();
            
            return array.Any(predicate);
        }
    }
}
