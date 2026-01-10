using System;
using System.Linq;
using System.Collections.Generic;

namespace CSharpFunctions
{
    public class CollectionPartition
    {
        /// <summary>
        /// Partitions collection into two based on predicate
        /// </summary>
        public static (T[] matching, T[] notMatching) Partition<T>(T[] collection, Func<T, bool> predicate)
        {
            if (collection == null || predicate == null)
                return (new T[0], new T[0]);
            
            var matching = collection.Where(predicate).ToArray();
            var notMatching = collection.Where(x => !predicate(x)).ToArray();
            
            return (matching, notMatching);
        }
    }
}
