import { useState } from 'react'

const ContactPage = () => {
  async function handleFormSubmit (formData) {
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)

    // ✅ show message directly
    const msgBox = document.getElementById('successMsg')
    if (msgBox) {
      msgBox.textContent = '✅ Your message has been sent!'
      msgBox.style.display = 'block'

      // hide again after 3s
      setTimeout(() => {
        msgBox.style.display = 'none'
      }, 3000)
    }

    // ✅ clear form after submission
    document.querySelector('form').reset()
  }

  return (
    <section className=' bg-black flex items-center justify-center px-4 py-16'>
      <div className='w-full max-w-lg text-center'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-white mb-8'>Contact Us</h2>

        {/* Form */}
        <form action={handleFormSubmit} className=' space-y-5'>
          {/* Name */}
          <input
            type='text'
            placeholder='Enter Your Name'
            name='username'
            required
            autoComplete='off'
            className='w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />

          {/* Email */}
          <input
            type='email'
            placeholder='Enter Your Email'
            name='email'
            required
            autoComplete='off'
            className='w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />

          {/* Message */}
          <textarea
            rows='5'
            placeholder='Enter Your Message'
            name='message'
            required
            autoComplete='off'
            className='w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-indigo-500'
          ></textarea>

          {/* Button */}
          <button
            type='submit'
            className='w-full py-3 rounded-md bg-[linear-gradient(71deg,#0c0a0e,#5f6fad,#0c0a0e)] text-white font-semibold 
            hover:opacity-90 transition duration-300'
          >
            SEND
          </button>
        </form>
        <p
          id='successMsg'
          className='mt-4 text-green-400 font-medium'
          style={{ display: 'none' }}
        ></p>
      </div>
    </section>
  )
}

export default ContactPage
