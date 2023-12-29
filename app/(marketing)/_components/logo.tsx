import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
    subsets: ["latin"],
    weight: ["400" , "600"]
})

const Logo = () => {
  return (
    
    <div className='hidden md:flex item-center gap-x-2'>
        <Image
            src="/logo_light.svg"
            height="20"
            width ="20"
            alt= "logo"
            className='dark:hidden'
        />
        <Image
            src="/logo_dark.svg"
            height="20"
            width ="20"
            alt= "logo"
            className='hidden dark:block'
        />
        <p className={cn("font-semibold", font.className)}>
            Potion
        </p>
    </div>
  )
}


export default Logo