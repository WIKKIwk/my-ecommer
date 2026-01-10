using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpFunctions
{
    public class StringDifference
    {
        /// <summary>
        /// Finds the longest common substring between two strings
        /// </summary>
        public static string LongestCommonSubstring(string str1, string str2)
        {
            if (string.IsNullOrEmpty(str1) || string.IsNullOrEmpty(str2))
                return string.Empty;
            
            int[,] lengths = new int[str1.Length + 1, str2.Length + 1];
            int maxLength = 0;
            int endIndex = 0;
            
            for (int i = 1; i <= str1.Length; i++)
            {
                for (int j = 1; j <= str2.Length; j++)
                {
                    if (str1[i - 1] == str2[j - 1])
                    {
                        lengths[i, j] = lengths[i - 1, j - 1] + 1;
                        
                        if (lengths[i, j] > maxLength)
                        {
                            maxLength = lengths[i, j];
                            endIndex = i;
                        }
                    }
                }
            }
            
            return str1.Substring(endIndex - maxLength, maxLength);
        }
    }
}
