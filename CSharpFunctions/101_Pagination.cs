using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpFunctions
{
    public class CollectionPagination
    {
        /// <summary>
        /// Paginates a collection
        /// </summary>
        public static T[] Paginate<T>(T[] collection, int page, int pageSize)
        {
            if (collection == null || page < 1 || pageSize < 1)
                return new T[0];
            
            return collection
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToArray();
        }
        
        /// <summary>
        /// Gets total number of pages
        /// </summary>
        public static int GetTotalPages(int totalItems, int pageSize)
        {
            if (pageSize <= 0)
                return 0;
            
            return (int)Math.Ceiling(totalItems / (double)pageSize);
        }
    }
}
