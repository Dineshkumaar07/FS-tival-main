import React from 'react'

const Login = () => {
    return (
        <div className='mt-10 '>
            <div className='flex flex-col items-center text-center'>
                <span className='text-2xl text-gray-800 antialiased font-light'>Login to your Account</span>
                <div className='mt-4 bg-white shadow-md rounded-lg'>
                    <div className='h-2 bg-indigo-400 rounded-md'>
                        <div className='px-8 py-6 text-left'>
                            <label className="block font-semibold" htmlFor="">UserName or Email</label>
                            <input type="text" placeholder='Email' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' />
                            <label className="block font-semibold mt-3" htmlFor="">Password</label>
                            <input type="password" placeholder='Password' className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md' />
                            <div className='flex justify-between items-baseline'>
                                <button type='submit' className='mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600'>Login</button>
                                <a className="text-sm hover:underline" href="#">Forgot Password?</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login