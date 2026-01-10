using System;

namespace CSharpFunctions
{
    public class BinarySearch
    {
        /// <summary>
        /// Performs binary search on a sorted array
        /// </summary>
        public static int Search<T>(T[] array, T value) where T : IComparable<T>
        {
            if (array == null)
                return -1;
            
            int left = 0;
            int right = array.Length - 1;
            
            while (left <= right)
            {
                int mid = left + (right - left) / 2;
                int comparison = array[mid].CompareTo(value);
                
                if (comparison == 0)
                    return mid;
                else if (comparison < 0)
                    left = mid + 1;
                else
                    right = mid - 1;
            }
            
            return -1;
        }
    }
}
