import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
const Navigation = () => {
  return (
  <div>
    <head>
      <title>Ansari Danish Portfolio</title>
      <meta name='description' content='Danish Portfolio'/>
      <link rel="shortcut icon" href="../../public/favicon.ico" type="image/x-icon" />
    </head>
    <main className='bg-white'>
      <section className="min-h-screen px-6">
        <nav className='py-8 mb-12 flex justify-between'>
          <h1 className='text-xl '>Danish</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill  className='text-2xl cursor-pointer' />
            </li>
            <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-600 py-2 px-4 ml-4 text-white rounded-md'>Resume</a></li>
          </ul>
        </nav>

        <div></div>
      </section>
    </main>
  </div>
  )
}

export default Navigation;