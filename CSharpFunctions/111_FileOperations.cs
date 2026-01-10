using System;
using System.IO;

namespace CSharpFunctions
{
    public class FileOperations
    {
        /// <summary>
        /// Reads all text from a file
        /// </summary>
        public static string ReadTextFile(string filePath)
        {
            if (!File.Exists(filePath))
                throw new FileNotFoundException("File not found", filePath);
            
            return File.ReadAllText(filePath);
        }
        
        /// <summary>
        /// Writes text to a file
        /// </summary>
        public static void WriteTextFile(string filePath, string content)
        {
            File.WriteAllText(filePath, content);
        }
        
        /// <summary>
        /// Appends text to a file
        /// </summary>
        public static void AppendTextFile(string filePath, string content)
        {
            File.AppendAllText(filePath, content);
        }
    }
}
