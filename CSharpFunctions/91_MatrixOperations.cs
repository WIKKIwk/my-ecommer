using System;

namespace CSharpFunctions
{
    public class MatrixOperations
    {
        /// <summary>
        /// Transposes a matrix
        /// </summary>
        public static T[,] Transpose<T>(T[,] matrix)
        {
            int rows = matrix.GetLength(0);
            int cols = matrix.GetLength(1);
            
            T[,] result = new T[cols, rows];
            
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    result[j, i] = matrix[i, j];
                }
            }
            
            return result;
        }
        
        /// <summary>
        /// Multiplies two integer matrices
        /// </summary>
        public static int[,] Multiply(int[,] matrix1, int[,] matrix2)
        {
            int rows1 = matrix1.GetLength(0);
            int cols1 = matrix1.GetLength(1);
            int rows2 = matrix2.GetLength(0);
            int cols2 = matrix2.GetLength(1);
            
            if (cols1 != rows2)
                throw new ArgumentException("Matrix dimensions incompatible for multiplication");
            
            int[,] result = new int[rows1, cols2];
            
            for (int i = 0; i < rows1; i++)
            {
                for (int j = 0; j < cols2; j++)
                {
                    for (int k = 0; k < cols1; k++)
                    {
                        result[i, j] += matrix1[i, k] * matrix2[k, j];
                    }
                }
            }
            
            return result;
        }
    }
}
