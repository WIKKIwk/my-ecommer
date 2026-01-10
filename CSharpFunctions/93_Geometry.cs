using System;

namespace CSharpFunctions
{
    public class GeometryCalculator
    {
        /// <summary>
        /// Calculates distance between two points
        /// </summary>
        public static double DistanceBetweenPoints(double x1, double y1, double x2, double y2)
        {
            return Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2));
        }
        
        /// <summary>
        /// Calculates area of a circle
        /// </summary>
        public static double CircleArea(double radius)
        {
            return Math.PI * radius * radius;
        }
        
        /// <summary>
        /// Calculates area of a triangle
        /// </summary>
        public static double TriangleArea(double baseLength, double height)
        {
            return 0.5 * baseLength * height;
        }
        
        /// <summary>
        /// Calculates area of a rectangle
        /// </summary>
        public static double RectangleArea(double width, double height)
        {
            return width * height;
        }
    }
}
