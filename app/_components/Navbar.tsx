
import React from 'react'
import Link from "next/link"
import LogoutButton from './LogoutButton';
import { getSession } from '../_lib/session';


const Navbar = async () => {
  const session=await getSession();
  return (
    <nav className='bg-white text-black shadow-sm'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        <Link href="/" className='text-blue-600 text-xl font-bold'>
        Contact Manager
        </Link>
        <div className='flex items-center space-x-4'>
          {session?(
            <>
            <Link href="/contact" className='hover:text-blue-400 mr-8'>
               Contacts
            </Link>
            <LogoutButton/>
            </>
          ):(
            <>
            <Link href="/login" className='hover:text-blue-400 mr-5'>
            Login
            </Link>
            <Link href="/register" className='hover:text-blue-400' >
            Register
            </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

