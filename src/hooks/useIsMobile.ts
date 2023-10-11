import { useState, useEffect } from 'react'

const useMobile = () => {
  const checkMobile = () => {
    if (typeof window !== 'undefined') {
      // Check the screen width to determine if it's a mobile device
      return window.innerWidth < 768 // You can adjust the threshold as needed
    }
    return false
  }

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobile(checkMobile())

      // Add a listener to update the 'mobile' state if the window is resized
      const handleResize = () => {
        setMobile(checkMobile())
      }

      window.addEventListener('resize', handleResize)

      return () => {
        // Clean up the event listener when the component is unmounted
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return mobile
}

export default useMobile
