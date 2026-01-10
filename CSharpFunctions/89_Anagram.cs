using System;
using System.Linq;

namespace CSharpFunctions
{
    public class Anagram
    {
        /// <summary>
        /// Checks if two strings are anagrams
        /// </summary>
        public static bool AreAnagrams(string str1, string str2)
        {
            if (str1 == null || str2 == null)
                return false;
            
            // Remove spaces and convert to lowercase
            string cleaned1 = new string(str1.Where(c => !char.IsWhiteSpace(c)).ToArray()).ToLowerInvariant();
            string cleaned2 = new string(str2.Where(c => !char.IsWhiteSpace(c)).ToArray()).ToLowerInvariant();
            
            if (cleaned1.Length != cleaned2.Length)
                return false;
            
            // Sort characters and compare
            char[] chars1 = cleaned1.ToCharArray();
            char[] chars2 = cleaned2.ToCharArray();
            
            Array.Sort(chars1);
            Array.Sort(chars2);
            
            return new string(chars1) == new string(chars2);
        }
    }
}
