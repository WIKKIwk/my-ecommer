using System;
using System.Text;

namespace CSharpFunctions
{
    public class RandomGenerator
    {
        private static Random random = new Random();
        
        /// <summary>
        /// Generates a random string of specified length
        /// </summary>
        public static string GenerateRandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            StringBuilder result = new StringBuilder(length);
            
            for (int i = 0; i < length; i++)
            {
                result.Append(chars[random.Next(chars.Length)]);
            }
            
            return result.ToString();
        }
        
        /// <summary>
        /// Generates a random integer between min and max (inclusive)
        /// </summary>
        public static int GenerateRandomInt(int min, int max)
        {
            return random.Next(min, max + 1);
        }
    }
}
