using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpFunctions
{
    public class ListExtensions
    {
        /// <summary>
        /// Shuffles a list randomly
        /// </summary>
        public static void Shuffle<T>(List<T> list)
        {
            Random random = new Random();
            int n = list.Count;
            
            while (n > 1)
            {
                n--;
                int k = random.Next(n + 1);
                T value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }
        
        /// <summary>
        /// Gets a random element from the list
        /// </summary>
        public static T GetRandomElement<T>(List<T> list)
        {
            if (list == null || list.Count == 0)
                throw new ArgumentException("List cannot be null or empty");
            
            Random random = new Random();
            return list[random.Next(list.Count)];
        }
    }
}
