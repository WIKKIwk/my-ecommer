using System;
using System.Linq;

namespace CSharpFunctions
{
    public class ArrayChunker
    {
        /// <summary>
        /// Splits an array into chunks of specified size
        /// </summary>
        public static T[][] ChunkArray<T>(T[] array, int chunkSize)
        {
            if (array == null)
                return null;
            
            if (chunkSize <= 0)
                throw new ArgumentException("Chunk size must be positive");
            
            return array
                .Select((value, index) => new { value, index })
                .GroupBy(x => x.index / chunkSize)
                .Select(group => group.Select(x => x.value).ToArray())
                .ToArray();
        }
    }
}
