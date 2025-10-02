// import { NavLink } from 'react-router-dom'

// export const Cards = ({ country }) => {
//   const { flags, name, population, region, capital } = country

//   return (
//     <li className='p-[1px] rounded-2xl bg-[linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)]  w-60'>
//       <div
//         className='rounded-2xl bg-black text-white 
//         hover:scale-105 hover:shadow-xl hover:-translate-y-2 
//         transition-all duration-500 ease-out cursor-pointer'
//       >
//         <img
//           src={flags.svg}
//           alt={flags.alt}
//           className='w-full h-32 object-cover rounded-t-2xl'
//         />

//         <div className='p-5 space-y-2 text-center'>
//           <p className='font-bold text-lg  truncate'>
//             {name.common.length > 10
//               ? name.common.slice(0, 10) + '...'
//               : name.common}
//           </p>
//           <p className='text-sm text-gray-400'>
//             <span className='font-semibold text-gray-300'>Population:</span>{' '}
//             {population.toLocaleString()}
//           </p>
//           <p className='text-sm text-gray-400'>
//             <span className='font-semibold text-gray-300'>Region:</span>{' '}
//             {region}
//           </p>
//           <p className='text-sm text-gray-400'>
//             <span className='font-semibold text-gray-300'>Capital:</span>{' '}
//             {capital?.[0] || 'N/A'}
//           </p>

//           <NavLink to={`/country/${name.common}`}>
//             <button
//               className='mt-3 px-4 py-2 w-full rounded-xl 
//               bg-[linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)] text-white text-sm 
//               shadow-md hover:shadow-gray-500/90 transition duration-300'
//             >
//               Read More
//             </button>
//           </NavLink>
//         </div>
//       </div>
//     </li>
//   )
// }

import { NavLink } from 'react-router-dom'

export const Cards = ({ country }) => {
  const { flags, name, population, region, capital } = country

  return (
    <li className='p-[1px] rounded-2xl bg-[linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)] w-60'>
      <div
        className='rounded-2xl bg-black text-white 
        hover:scale-105 hover:shadow-xl hover:-translate-y-2 
        transition-all duration-500 ease-out cursor-pointer 
        pt-6 px-5 pb-5 h-[22rem]'
      >
        {/* Image wrapper */}
        <div className="flex justify-center mb-6">
          <img
            src={flags.svg}
            alt={flags.alt}
            className="max-w-[10rem] max-h-[6rem] object-contain 
            shadow-[0px_20px_50px_rgba(255,255,255,0.1)] rounded-md"
          />
        </div>

        {/* Info */}
        <div className='space-y-2 text-center'>
          <p className='font-bold text-lg truncate'>
            {name.common.length > 10
              ? name.common.slice(0, 10) + '...'
              : name.common}
          </p>
          <p className='text-sm text-gray-400'>
            <span className='font-semibold text-gray-300'>Population:</span>{' '}
            {population.toLocaleString()}
          </p>
          <p className='text-sm text-gray-400'>
            <span className='font-semibold text-gray-300'>Region:</span>{' '}
            {region}
          </p>
          <p className='text-sm text-gray-400'>
            <span className='font-semibold text-gray-300'>Capital:</span>{' '}
            {capital?.[0] || 'N/A'}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button
              className='mt-3 px-4 py-2 w-full rounded-xl 
              bg-[linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)] text-white text-sm 
              shadow-md hover:shadow-gray-500/90 transition duration-300'
            >
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  )
}
