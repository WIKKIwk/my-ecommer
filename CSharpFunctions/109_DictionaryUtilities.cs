using System;
using System.Linq;

namespace CSharpFunctions
{
    public class DictionaryUtilities
    {
        /// <summary>
        /// Inverts a dictionary (keys become values, values become keys)
        /// </summary>
        public static System.Collections.Generic.Dictionary<TValue, TKey> Invert<TKey, TValue>(
            System.Collections.Generic.Dictionary<TKey, TValue> dictionary)
        {
            if (dictionary == null)
                return new System.Collections.Generic.Dictionary<TValue, TKey>();
            
            return dictionary.ToDictionary(kvp => kvp.Value, kvp => kvp.Key);
        }
        
        /// <summary>
        /// Merges two dictionaries
        /// </summary>
        public static System.Collections.Generic.Dictionary<TKey, TValue> Merge<TKey, TValue>(
            System.Collections.Generic.Dictionary<TKey, TValue> dict1,
            System.Collections.Generic.Dictionary<TKey, TValue> dict2)
        {
            var result = new System.Collections.Generic.Dictionary<TKey, TValue>(dict1 ?? new System.Collections.Generic.Dictionary<TKey, TValue>());
            
            if (dict2 != null)
            {
                foreach (var kvp in dict2)
                {
                    result[kvp.Key] = kvp.Value;
                }
            }
            
            return result;
        }
    }
}
