import { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndData } from '../api/postApi'
import Loader from './UI/Loader'

export const CountryDetails = () => {
  const params = useParams()
  const [isPending, startTransition] = useTransition()
  const [country, setCountry] = useState()

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id)
      if (res.status === 200) {
        setCountry(res.data[0])
      }
    })
  }, [params.id])

  if (isPending) return <Loader />

  return (
    <section className='px-6 py-10 max-w-6xl mx-auto text-white flex flex-col items-center'>
      {country && (
        <div className='p-[1px] rounded-2xl bg-[linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)] w-full'>
          <div
            className='rounded-2xl bg-black p-8 text-white grid md:grid-cols-2 gap-8 
                          hover:shadow-xl transition-all duration-500 ease-out'
          >
            {/* Flag */}
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className='w-full h-64 object-cover rounded-xl shadow-md'
            />

            {/* Details */}
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold mb-4'>
                {country.name.official}
              </h2>

              <p>
                <span className='font-semibold text-gray-300'>
                  Native Names:
                </span>{' '}
                {Object.keys(country.name.nativeName)
                  .map(key => country.name.nativeName[key].common)
                  .join(', ')}
              </p>

              <p>
                <span className='font-semibold text-gray-300'>Population:</span>{' '}
                {country.population.toLocaleString()}
              </p>

              <p>
                <span className='font-semibold text-gray-300'>Region:</span>{' '}
                {country.region}
              </p>

              <p>
                <span className='font-semibold text-gray-300'>Sub Region:</span>{' '}
                {country.subregion}
              </p>

              <p>
                <span className='font-semibold text-gray-300'>Capital:</span>{' '}
                {country.capital}
              </p>

              <p>
                <span className='font-semibold text-gray-300'>
                  Top Level Domain:
                </span>{' '}
                {country.tld[0]}
              </p>

              <p>
                <span className='font-semibold text-gray-300'>Currencies:</span>{' '}
                {Object.keys(country.currencies)
                  .map(curElem => country.currencies[curElem].name)
                  .join(', ')}
              </p>

              <p>
                <span className='font-semibold text-gray-300'>Languages:</span>{' '}
                {Object.keys(country.languages)
                  .map(key => country.languages[key])
                  .join(', ')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className='mt-6'>
        <NavLink to='/country'>
          <button
            className='mt-3 px-4 py-2 w-full rounded-xl 
              bg-[linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)] text-white text-sm 
              shadow-md hover:shadow-gray-500/90 transition duration-300'
          >
            Go Back
          </button>
        </NavLink>
      </div>
    </section>
  )
}
