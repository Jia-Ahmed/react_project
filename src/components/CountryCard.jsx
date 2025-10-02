const CountryCard = ({ countryName, capital, population, interestingFact }) => {
  return (
    <div className='p-[1px] rounded-2xl bg-[linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)]'>
      <div
        className='rounded-2xl bg-black p-6 text-white 
        hover:scale-105 hover:shadow-xl hover:-translate-y-2 
        transition-all duration-500 ease-out cursor-pointer min-h-[250px]'
      >
        {/* Country Title */}
        <h2 className='text-xl font-bold mb-4'>{countryName}</h2>

        {/* Info Section */}
        <div className='text-left space-y-2'>
          <p>
            <span className='font-semibold text-gray-400'>Capital:</span>{' '}
            {capital}
          </p>
          <p>
            <span className='font-semibold text-gray-400'>Population:</span>{' '}
            {population}
          </p>
          <p className='mt-3 text-sm text-gray-300 leading-relaxed'>
            <span className='font-semibold text-gray-200'>
              Interesting Fact:
            </span>{' '}
            <br />
            {interestingFact}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
