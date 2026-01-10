using System;
using System.Text;

namespace CSharpFunctions
{
    public class Base64Encoder
    {
        /// <summary>
        /// Encodes a string to Base64
        /// </summary>
        public static string EncodeToBase64(string input)
        {
            if (string.IsNullOrEmpty(input))
                return string.Empty;
            
            byte[] bytes = Encoding.UTF8.GetBytes(input);
            return Convert.ToBase64String(bytes);
        }
        
        /// <summary>
        /// Decodes a Base64 string
        /// </summary>
        public static string DecodeFromBase64(string base64String)
        {
            if (string.IsNullOrEmpty(base64String))
                return string.Empty;
            
            try
            {
                byte[] bytes = Convert.FromBase64String(base64String);
                return Encoding.UTF8.GetString(bytes);
            }
            catch
            {
                return string.Empty;
            }
        }
    }
}
