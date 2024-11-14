import type { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title:'SEO Title',
    description:'Que se yoooooo'
}

const AboutPage = () => {

    return (
        <div className='flex flex-col gap-1'>
            <h1 className="text-5xl">About Page</h1>
        </div>
    )
}

export default AboutPage