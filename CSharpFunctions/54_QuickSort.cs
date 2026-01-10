using System;

namespace CSharpFunctions
{
    public class QuickSort
    {
        /// <summary>
        /// Sorts an array using QuickSort algorithm
        /// </summary>
        public static void Sort<T>(T[] array) where T : IComparable<T>
        {
            if (array == null || array.Length <= 1)
                return;
            
            QuickSortRecursive(array, 0, array.Length - 1);
        }
        
        private static void QuickSortRecursive<T>(T[] array, int low, int high) where T : IComparable<T>
        {
            if (low < high)
            {
                int pivotIndex = Partition(array, low, high);
                QuickSortRecursive(array, low, pivotIndex - 1);
                QuickSortRecursive(array, pivotIndex + 1, high);
            }
        }
        
        private static int Partition<T>(T[] array, int low, int high) where T : IComparable<T>
        {
            T pivot = array[high];
            int i = low - 1;
            
            for (int j = low; j < high; j++)
            {
                if (array[j].CompareTo(pivot) < 0)
                {
                    i++;
                    T temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            
            T temp2 = array[i + 1];
            array[i + 1] = array[high];
            array[high] = temp2;
            
            return i + 1;
        }
    }
}
