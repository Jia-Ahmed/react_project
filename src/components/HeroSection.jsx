export const HeroSection=()=>{
    return( <section className='bg-black text-white relative overflow-hidden mt-8'>
      <div className='mx-auto max-w-5xl flex  flex-col md:flex-row justify-between items-center py-4 px-6'>
        {/* Left Content */}
        <div className='text-center md:text-left max-w-xl'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug'>
            Explore the World, One <br /> Country at a Time.
          </h1>
          <p className='mt-6 text-gray-300 text-lg'>
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button
            className="relative mt-8 px-3 py-1 transition duration-300
    hover:text-indigo-400 hover:shadow-md hover:shadow-indigo-500/50
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:w-0 after:h-[2px] after:bg-indigo-400 
    after:transition-all after:duration-300 
    hover:after:w-full"
          >
            Start Exploring →
          </button>
        </div>
        {/* Right Side Image */}
        <div className='mt-12 md:mt-0'>
          <img
            src='/hero.png' // <-- replace with your world image
            alt='World Landmarks'
            className='w-full max-w-lg'
          />
        </div>
      </div>
    </section>);
}
export default HeroSection;