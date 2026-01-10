using System;
using System.Collections.Generic;

namespace CSharpFunctions
{
    public class BloomFilter
    {
        private bool[] bits;
        private int size;
        private int hashCount;
        
        public BloomFilter(int size, int hashCount)
        {
            this.size = size;
            this.hashCount = hashCount;
            this.bits = new bool[size];
        }
        
        /// <summary>
        /// Adds an item to the bloom filter
        /// </summary>
        public void Add(string item)
        {
            for (int i = 0; i < hashCount; i++)
            {
                int hash = GetHash(item, i);
                bits[hash] = true;
            }
        }
        
        /// <summary>
        /// Checks if an item might be in the set
        /// </summary>
        public bool MightContain(string item)
        {
            for (int i = 0; i < hashCount; i++)
            {
                int hash = GetHash(item, i);
                if (!bits[hash])
                    return false;
            }
            return true;
        }
        
        private int GetHash(string item, int seed)
        {
            int hash = item.GetHashCode() + seed * 31;
            return Math.Abs(hash % size);
        }
    }
}
