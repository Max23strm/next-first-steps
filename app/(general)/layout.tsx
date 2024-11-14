import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar/>
            <main className="flex flex-col items-center gap-1 p-24">
                {children}
                
            </main>
        </>
    )
}

export default GeneralLayout