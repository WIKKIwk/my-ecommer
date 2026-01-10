using System;
using System.Collections.Generic;

namespace CSharpFunctions
{
    public class BinaryTreeNode<T>
    {
        public T Data { get; set; }
        public BinaryTreeNode<T> Left { get; set; }
        public BinaryTreeNode<T> Right { get; set; }
        
        public BinaryTreeNode(T data)
        {
            Data = data;
            Left = null;
            Right = null;
        }
    }
    
    public class BinaryTreeHelper<T> where T : IComparable<T>
    {
        private BinaryTreeNode<T> root;
        
        /// <summary>
        /// Inserts a value into the binary search tree
        /// </summary>
        public void Insert(T data)
        {
            root = InsertRecursive(root, data);
        }
        
        private BinaryTreeNode<T> InsertRecursive(BinaryTreeNode<T> node, T data)
        {
            if (node == null)
                return new BinaryTreeNode<T>(data);
            
            if (data.CompareTo(node.Data) < 0)
                node.Left = InsertRecursive(node.Left, data);
            else if (data.CompareTo(node.Data) > 0)
                node.Right = InsertRecursive(node.Right, data);
            
            return node;
        }
        
        /// <summary>
        /// Searches for a value in the tree
        /// </summary>
        public bool Search(T data)
        {
            return SearchRecursive(root, data);
        }
        
        private bool SearchRecursive(BinaryTreeNode<T> node, T data)
        {
            if (node == null)
                return false;
            
            if (data.CompareTo(node.Data) == 0)
                return true;
            
            if (data.CompareTo(node.Data) < 0)
                return SearchRecursive(node.Left, data);
            else
                return SearchRecursive(node.Right, data);
        }
    }
}
