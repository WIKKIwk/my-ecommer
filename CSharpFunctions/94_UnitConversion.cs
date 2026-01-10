using System;

namespace CSharpFunctions
{
    public class ConversionUtilities
    {
        /// <summary>
        /// Converts Celsius to Fahrenheit
        /// </summary>
        public static double CelsiusToFahrenheit(double celsius)
        {
            return (celsius * 9.0 / 5.0) + 32;
        }
        
        /// <summary>
        /// Converts Fahrenheit to Celsius
        /// </summary>
        public static double FahrenheitToCelsius(double fahrenheit)
        {
            return (fahrenheit - 32) * 5.0 / 9.0;
        }
        
        /// <summary>
        /// Converts kilometers to miles
        /// </summary>
        public static double KilometersToMiles(double kilometers)
        {
            return kilometers * 0.621371;
        }
        
        /// <summary>
        /// Converts miles to kilometers
        /// </summary>
        public static double MilesToKilometers(double miles)
        {
            return miles / 0.621371;
        }
    }
}
