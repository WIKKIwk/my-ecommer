using System;
using System.Linq;
using System.Collections.Generic;

namespace CSharpFunctions
{
    public class CollectionBatching
    {
        /// <summary>
        /// Batches collection into groups of specified size
        /// </summary>
        public static List<List<T>> Batch<T>(T[] collection, int batchSize)
        {
            if (collection == null || batchSize <= 0)
                return new List<List<T>>();
            
            var batches = new List<List<T>>();
            
            for (int i = 0; i < collection.Length; i += batchSize)
            {
                var batch = collection.Skip(i).Take(batchSize).ToList();
                batches.Add(batch);
            }
            
            return batches;
        }
    }
}
