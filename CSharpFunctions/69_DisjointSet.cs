using System;
using System.Collections.Generic;

namespace CSharpFunctions
{
    public class DisjointSet
    {
        private Dictionary<int, int> parent = new Dictionary<int, int>();
        private Dictionary<int, int> rank = new Dictionary<int, int>();
        
        /// <summary>
        /// Makes a new set with the given element
        /// </summary>
        public void MakeSet(int x)
        {
            parent[x] = x;
            rank[x] = 0;
        }
        
        /// <summary>
        /// Finds the representative of the set containing x
        /// </summary>
        public int Find(int x)
        {
            if (!parent.ContainsKey(x))
                MakeSet(x);
            
            if (parent[x] != x)
                parent[x] = Find(parent[x]);
            
            return parent[x];
        }
        
        /// <summary>
        /// Unites the sets containing x and y
        /// </summary>
        public void Union(int x, int y)
        {
            int xRoot = Find(x);
            int yRoot = Find(y);
            
            if (xRoot == yRoot)
                return;
            
            if (rank[xRoot] < rank[yRoot])
                parent[xRoot] = yRoot;
            else if (rank[xRoot] > rank[yRoot])
                parent[yRoot] = xRoot;
            else
            {
                parent[yRoot] = xRoot;
                rank[xRoot]++;
            }
        }
    }
}
