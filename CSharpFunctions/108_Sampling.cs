using System;
using System.Linq;

namespace CSharpFunctions
{
    public class ArraySampling
    {
        private static Random random = new Random();
        
        /// <summary>
        /// Gets N random samples from array
        /// </summary>
        public static T[] Sample<T>(T[] array, int count)
        {
            if (array == null || count <= 0)
                return new T[0];
            
            if (count >= array.Length)
                return (T[])array.Clone();
            
            return array.OrderBy(x => random.Next()).Take(count).ToArray();
        }
    }
}
