using System;
using System.Text;

namespace CSharpFunctions
{
    public class StringRotation
    {
        /// <summary>
        /// Rotates a string left by N positions
        /// </summary>
        public static string RotateLeft(string input, int positions)
        {
            if (string.IsNullOrEmpty(input) || positions <= 0)
                return input;
            
            positions = positions % input.Length;
            return input.Substring(positions) + input.Substring(0, positions);
        }
        
        /// <summary>
        /// Rotates a string right by N positions
        /// </summary>
        public static string RotateRight(string input, int positions)
        {
            if (string.IsNullOrEmpty(input) || positions <= 0)
                return input;
            
            positions = positions % input.Length;
            return input.Substring(input.Length - positions) + input.Substring(0, input.Length - positions);
        }
        
        /// <summary>
        /// Checks if one string is a rotation of another
        /// </summary>
        public static bool IsRotation(string str1, string str2)
        {
            if (str1 == null || str2 == null || str1.Length != str2.Length)
                return false;
            
            return (str1 + str1).Contains(str2);
        }
    }
}
