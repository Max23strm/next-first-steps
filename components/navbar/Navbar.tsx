import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import ActiveLink from '../active-link/ActiveLink'

const navItems = [
    {path: '/about', text: 'About'},
    {path: '/pricing', text: 'Pricing'},
    {path: '/contact', text: 'Contact'},
]


const Navbar = () => {
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded gap-2'>
            <Link href='/' className='flex gap-1 flex-row '>
                <HomeIcon size={24} />
                Home
            </Link>

            <div className='flex flex-1'/>
            
            {
                navItems.map(( { path, text } ) => <ActiveLink key={path} path={path} text={text}/>)
            }
        </nav>
    )
}

export default Navbar