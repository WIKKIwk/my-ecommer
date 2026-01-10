using System;
using System.Linq;

namespace CSharpFunctions
{
    public class StringAnalysis
    {
        /// <summary>
        /// Counts the number of vowels in a string
        /// </summary>
        public static int CountVowels(string input)
        {
            if (string.IsNullOrEmpty(input))
                return 0;
            
            char[] vowels = { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };
            return input.Count(c => vowels.Contains(c));
        }
    }
}
