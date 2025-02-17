import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-base bg-gray-200 p-10'>
            <div>
               <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p>Shop the latest trends with confidence—quality, style, and unbeatable deals delivered to your door. Join our community and elevate your fashion game today!</p>  
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <p className='text-xl font-medium mb-5'>Get In Touch</p>
              <ul className='text-xl font-medium mb-5'>
                <li>+91-123-456-7890</li>
                <li>contact@forever.com</li>
              </ul>
            </div>

        </div>
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@forever.com - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
