using System;
using System.Text.RegularExpressions;

namespace CSharpFunctions
{
    public class HtmlStripper
    {
        /// <summary>
        /// Removes HTML tags from a string
        /// </summary>
        public static string StripHtmlTags(string html)
        {
            if (string.IsNullOrEmpty(html))
                return html;
            
            return Regex.Replace(html, @"<[^>]*>", string.Empty);
        }
        
        /// <summary>
        /// Decodes HTML entities
        /// </summary>
        public static string DecodeHtmlEntities(string text)
        {
            if (string.IsNullOrEmpty(text))
                return text;
            
            return System.Net.WebUtility.HtmlDecode(text);
        }
        
        /// <summary>
        /// Encodes HTML entities
        /// </summary>
        public static string EncodeHtmlEntities(string text)
        {
            if (string.IsNullOrEmpty(text))
                return text;
            
            return System.Net.WebUtility.HtmlEncode(text);
        }
    }
}
