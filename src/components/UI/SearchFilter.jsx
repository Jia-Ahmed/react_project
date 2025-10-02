import { ChevronDown } from 'lucide-react'
export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries
}) => {
  const handleInputChange = event => setSearch(event.target.value)
  const handleSelectChange = event => setFilter(event.target.value)

  const sortCountries = value => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === 'asc'
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    })
    setCountries(sortCountry)
  }

  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
      {/* 🔍 Search Box */}
      <input
        type='text'
        placeholder='Search country...'
        value={search}
        onChange={handleInputChange}
        className='px-4 py-2 rounded-full bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500'
      />

      {/* Sort Buttons */}
      <div className='flex gap-2'>
        <button
          onClick={() => sortCountries('asc')}
          className='px-4 py-1 border border-gray-500 rounded-full hover:bg-gray-800 transition'
        >
          Asc
        </button>
        <button
          onClick={() => sortCountries('des')}
          className='px-4 py-1 border border-gray-500 rounded-full hover:bg-gray-800 transition'
        >
          Desc
        </button>
      </div>

      {/* 🌍 Region Filter */}

      <div className='relative inline-block w-full md:w-auto'>
        <select
          className='appearance-none bg-black border border-gray-600 px-4 py-2 pr-12 rounded-full text-white cursor-pointer w-full'
          value={filter}
          onChange={handleSelectChange}
        >
          <option value='all'>All Regions</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>

        {/* Lucide React Custom Arrow */}
        <ChevronDown
          size={18}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'
        />
      </div>
    </div>
  )
}
