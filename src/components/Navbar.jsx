import React,{useState} from 'react'

function Navbar() {

  const [menuState, setMenuState] = useState(false);
  function toggleMenu(){
    setMenuState(!menuState)
    console.log(menuState)
  }
  return (
    <>
      <nav >
        <div className='px-6 md:flex justify-between bg-red-200 items-center relative'>
          <div className='flex w-full items-center justify-between '>
            <a href='https://tailwindcss.com/'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/480px-Tailwind_CSS_Logo.svg.png' alt='Tailwind CSS'
                className='h-16' />
            </a>
            <button onClick={toggleMenu} className='rounded-md px-3 py-2 bg-red-600 text-white md:hidden '>Menu</button>
          </div>
          <div className={menuState? "hidden": "block"}>
            <ul className='gap-5 mt-5 md:mt-0  md:flex items-center }'>
              <li className='rounded-md px-3 py-2 bg-red-600 text-white'><a href="https://www.google.com/">Home</a></li>
              <li className='relative font-bold px-3 py-2 text-red-600  hover:bg-red-600 hover:text-red-100 group'><a href="">Services</a>
                <ul className='absolute top-10 hidden group-hover:block bg-red-400 w-56 md:left-0 left-20 '>
                  <li className='px-3 py-2 hover:bg-red-600 cursor-pointer'>Web Deveopment</li>
                  <li className='px-3 py-2 hover:bg-red-600 cursor-pointer'>App Development</li>
                </ul>
              </li>
              <li className='font-bold px-3 py-2 text-red-700  hover:bg-red-600 hover:text-red-100 group'><a href="https://www.google.com/">About</a></li>
              <li className='font-bold px-3 py-2 text-red-700  hover:bg-red-600 hover:text-red-100 group'><a href="https://www.google.com/">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar