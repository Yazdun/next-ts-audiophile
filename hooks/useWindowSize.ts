/*-------------------------------------------------------------------
|  Hook useWindowSize
|
|  Purpose:  FINDS OUT THE WIDTH AND HEIGHT OF THE DOCUMENT
|
|  Returns:  WIDTH, HEIGHT OF THE DOCUMENT, AND A BOOLEAN WHICH TELLS 
|            IF THE DOCUMENT IS BEING VIEWED IN TOUCH DEVICES OR NOT
*-------------------------------------------------------------------*/

import { useState, useEffect } from 'react'

// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined
  height: number | undefined
  isTouch: boolean
}

// Hook
export function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
    isTouch: false,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isTouch: window.innerWidth < 768,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}
