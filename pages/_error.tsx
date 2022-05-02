import NavLayout from '../components/navLayout/navLayout'
import { useEffect } from 'react'
import { pageview } from '../lib/gtag'

const ErrorPage = ({children}) => {
  useEffect(() => {
    pageview('/error', 'error')
  }, [])

  return (
    <NavLayout>
      <h1 style={{ color: 'white' }}>{children || '500: Unexpected Server Error Occurred'}</h1>
    </NavLayout>
  )
}

export default ErrorPage
