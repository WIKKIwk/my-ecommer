using System;
using System.IO;

namespace CSharpFunctions
{
    public class PathUtilities
    {
        /// <summary>
        /// Combines path parts
        /// </summary>
        public static string CombinePaths(params string[] paths)
        {
            if (paths == null || paths.Length == 0)
                return string.Empty;
            
            return Path.Combine(paths);
        }
        
        /// <summary>
        /// Gets file name from path
        /// </summary>
        public static string GetFileName(string filePath)
        {
            return Path.GetFileName(filePath);
        }
        
        /// <summary>
        /// Gets directory name from path
        /// </summary>
        public static string GetDirectoryName(string filePath)
        {
            return Path.GetDirectoryName(filePath);
        }
    }
}
