using System;

namespace CSharpFunctions
{
    public class SelectionSort
    {
        /// <summary>
        /// Sorts an array using Selection Sort algorithm
        /// </summary>
        public static void Sort<T>(T[] array) where T : IComparable<T>
        {
            if (array == null || array.Length <= 1)
                return;
            
            for (int i = 0; i < array.Length - 1; i++)
            {
                int minIndex = i;
                
                for (int j = i + 1; j < array.Length; j++)
                {
                    if (array[j].CompareTo(array[minIndex]) < 0)
                        minIndex = j;
                }
                
                if (minIndex != i)
                {
                    T temp = array[i];
                    array[i] = array[minIndex];
                    array[minIndex] = temp;
                }
            }
        }
    }
}
