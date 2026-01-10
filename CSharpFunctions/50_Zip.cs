using System;
using System.Linq;

namespace CSharpFunctions
{
    public class ArrayZipper
    {
        /// <summary>
        /// Zips two arrays together using a result selector
        /// </summary>
        public static TResult[] Zip<T1, T2, TResult>(T1[] first, T2[] second, Func<T1, T2, TResult> resultSelector)
        {
            if (first == null || second == null || resultSelector == null)
                throw new ArgumentNullException();
            
            return first.Zip(second, resultSelector).ToArray();
        }
    }
}
