import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-md'>
            <div>
               <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p>© 2025 Forever. All rights reserved. Shop the latest trends with confidence—quality, style, and unbeatable deals delivered to your door. Join our community and elevate your fashion game today!</p>  
            </div>
        </div>
      
    </div>
  )
}

export default Footer
