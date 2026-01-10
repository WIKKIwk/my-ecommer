using System;
using System.Linq;

namespace CSharpFunctions
{
    public class WordCounter
    {
        /// <summary>
        /// Counts the number of words in a string
        /// </summary>
        public static int CountWords(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return 0;
            
            return input.Split(new[] { ' ', '\t', '\n', '\r' }, 
                StringSplitOptions.RemoveEmptyEntries).Length;
        }
    }
}
