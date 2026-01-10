using System;
using System.IO;

namespace CSharpFunctions
{
    public class FileHelper
    {
        /// <summary>
        /// Checks if a file exists
        /// </summary>
        public static bool FileExists(string filePath)
        {
            return File.Exists(filePath);
        }
        
        /// <summary>
        /// Gets the file extension
        /// </summary>
        public static string GetFileExtension(string fileName)
        {
            return Path.GetExtension(fileName);
        }
        
        /// <summary>
        /// Gets the file name without extension
        /// </summary>
        public static string GetFileNameWithoutExtension(string filePath)
        {
            return Path.GetFileNameWithoutExtension(filePath);
        }
    }
}
