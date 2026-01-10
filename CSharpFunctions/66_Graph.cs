using System;
using System.Collections.Generic;

namespace CSharpFunctions
{
    public class GraphHelper
    {
        private Dictionary<int, List<int>> adjacencyList = new Dictionary<int, List<int>>();
        
        /// <summary>
        /// Adds a vertex to the graph
        /// </summary>
        public void AddVertex(int vertex)
        {
            if (!adjacencyList.ContainsKey(vertex))
                adjacencyList[vertex] = new List<int>();
        }
        
        /// <summary>
        /// Adds an edge between two vertices
        /// </summary>
        public void AddEdge(int source, int destination)
        {
            if (!adjacencyList.ContainsKey(source))
                AddVertex(source);
            
            if (!adjacencyList.ContainsKey(destination))
                AddVertex(destination);
            
            adjacencyList[source].Add(destination);
        }
        
        /// <summary>
        /// Performs depth-first search
        /// </summary>
        public List<int> DFS(int startVertex)
        {
            List<int> result = new List<int>();
            HashSet<int> visited = new HashSet<int>();
            DFSRecursive(startVertex, visited, result);
            return result;
        }
        
        private void DFSRecursive(int vertex, HashSet<int> visited, List<int> result)
        {
            visited.Add(vertex);
            result.Add(vertex);
            
            if (adjacencyList.ContainsKey(vertex))
            {
                foreach (int neighbor in adjacencyList[vertex])
                {
                    if (!visited.Contains(neighbor))
                        DFSRecursive(neighbor, visited, result);
                }
            }
        }
    }
}
