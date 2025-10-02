import { useRouteError, Link } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className='flex h-screen w-full items-center justify-center bg-gray-900 text-white px-4'>
      <div className='bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg text-center animate-fade-in'>
        {/* Error Emoji */}
        <div className='text-6xl mb-4'>😢</div>

        {/* Title */}
        <h1 className='text-3xl font-bold mb-2'>Oops! Something went wrong</h1>
        <p className='text-gray-400 mb-6'>
          We couldn’t load this page. Please try again later.
        </p>

        {/* Error Details */}
        {error && (
          <p className='text-red-400 font-mono text-sm mb-6'>
            {error.status} - {error.statusText || error.data}
          </p>
        )}

        {/* Go Home Button */}
        <Link
          to='/'
          className='inline-block bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 text-white font-medium px-6 py-2 rounded-lg shadow-lg'
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
