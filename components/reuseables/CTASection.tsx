'use client'
import React from 'react'
import { Button } from '../ui/button'
import IconCalendar from '../icons/IconCalendar'

const CTASection = () => {
    return (
        <div className="w-full h-full bg-[url('/assets/parallelX.png')] bg-cover bg-center rounded-2xl p-20 relative" id='contact'>
            <div className="absolute w-full h-full top-0 left-0 bg-black/60 "></div>
            <div className="relative z-20 text-center text-white flex flex-col gap-4 md:gap-8  w-full items-center">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">Have an idea? </h2>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">Let&apos;s talk.</h2>
                <p className="mt-4 text-lg">Visually attractive design from concept to final result. We create
                    <br className='hidden lg:block' />
                    solutions that are bold and forward-looking.</p>
                <div className="group " >
                    <Button className='  px-6! bg-white group-hover:bg-transparent! py-2.5! group-hover:border group-hover:border-white w-fit rounded-full text-theme-black group-hover:text-white cursor-pointer'>
                        <IconCalendar className='text-theme-black group-hover:text-white text-sm! sm:text-base! font-semibold!' />
                        Free Consultation
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CTASection
