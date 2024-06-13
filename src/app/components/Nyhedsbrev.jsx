import React from 'react'

function Nyhedsbrev() {
  return (
    <div className='p-4'>
        <div className='max-w-3xl mx-auto mb-20'>
            <p className='text-Hotpink text-3xl sm:text-4xl mb-5 font-semibold'>Join our newsletter</p>
            <p className='text-White max-w-xl text-lg sm:text-xl font-normal mb-5'>Dont miss out on exclusive Foo Festival updates! Sign up for our newsletter and be among the first to receive news about the line-up, ticket sales, and other exciting things</p>
            <input type="email" placeholder='example@gmail.com' id="email" pattern=".+@example\.com" className='p-1.5 rounded-md text-lg  w-52 sm:w-80' />
            <button className='bg-Hotpink font-bold py-2 sm:py-2 px-8 text-mg md:text-lg rounded-full ml-3 text-White hover:bg-Lightpink'>SEND</button>
        </div>
      
    </div>
  )
}

export default Nyhedsbrev
