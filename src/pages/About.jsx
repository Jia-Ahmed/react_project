import React from 'react'
import countryData from '../api/countryData.json'
import CountryCard from '../components/CountryCard'

const About = () => {
  return (
    <section className='bg-black text-center py-12'>
      <h1 className='text-3xl font-semibold leading-snug text-white mb-10'>
        Here are the Interesting Facts <br /> we're proud of
      </h1>

      {/* Grid layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {countryData.map(country => (
          <CountryCard
            key={country.id}
            countryName={country.countryName}
            capital={country.capital}
            population={country.population}
            interestingFact={country.interestingFact}
          />
        ))}
      </div>
    </section>
  )
}

export default About
