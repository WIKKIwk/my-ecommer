using System;
using System.Threading;

namespace CSharpFunctions
{
    public class RateLimiter
    {
        private int requestCount = 0;
        private DateTime windowStart = DateTime.UtcNow;
        private readonly int maxRequests;
        private readonly TimeSpan timeWindow;
        private readonly object lockObject = new object();
        
        public RateLimiter(int maxRequests, TimeSpan timeWindow)
        {
            this.maxRequests = maxRequests;
            this.timeWindow = timeWindow;
        }
        
        /// <summary>
        /// Checks if request is allowed under rate limit
        /// </summary>
        public bool AllowRequest()
        {
            lock (lockObject)
            {
                DateTime now = DateTime.UtcNow;
                
                if (now - windowStart >= timeWindow)
                {
                    // Reset window
                    windowStart = now;
                    requestCount = 0;
                }
                
                if (requestCount < maxRequests)
                {
                    requestCount++;
                    return true;
                }
                
                return false;
            }
        }
        
        /// <summary>
        /// Waits until request is allowed
        /// </summary>
        public void WaitForSlot()
        {
            while (!AllowRequest())
            {
                Thread.Sleep(100);
            }
        }
    }
}
