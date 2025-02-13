import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% Off</p>
        <p className='text-gray-600 text-xl mt-3'>Stay ahead of the trends! Subscribe to our newsletter for exclusive deals and the latest styles. 🚀</p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your E-mail' />
            <button type='submit' className='bg-black text-white text-sm px-10 py-4'>Subsribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox
