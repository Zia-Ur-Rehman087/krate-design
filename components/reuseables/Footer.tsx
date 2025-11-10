'use client'
import React from 'react'
import IconFooterLogo from '../icons/IconFooterLogo'
import { menuItems } from '@/utils/enums/header-menu'
import Link from 'next/link'
import { Button } from '../ui/button'
import { IconPenci } from '../icons/IconPenci'
import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import { handleScroll } from '@/utils/functions/HandleScroll'
const socialIcona = [
    {
        id: 1,
        title: "Facebook",
        icon: Facebook
    },
    {
        id: 2,
        title: "Instagram",
        icon: Instagram
    },
    {
        id: 3,
        title: "Twitter",
        icon: Twitter
    },
    {
        id: 4,
        title: "Email",
        icon: Mail
    }
]
const Footer = () => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap lg:border border-border-col items-center mb-10 rounded-2xl overflow-hidden">
            <div className="w-1/4 flex items-start lg:items-center justify-start lg:justify-center">
                <IconFooterLogo />
            </div>
            <div className="flex flex-wrap sm:flex-nowrap lg:flex-col w-full justify-between lg:w-4/5 lg:border-l border-border-col">
                <div className="flex  lg:border-b border-border-col justify-between items-center w-full lg:w-full">
                    <ul className="items-start lg:items-center justify-start lg:justify-center gap-10 flex flex-col w-full lg:flex-row lg:w-1/2 lg:border-r border-border-col m-0 px-0! py-4!">
                        {menuItems?.map((el) => (
                            <li key={el?.id} className="m-0">{/* remove li margin too */}
                                <Link href={`#`} className="text-primary" scroll={false} onClick={() => handleScroll(el?.link)}>{el?.linkText}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="text-lg hidden  w-full lg:flex items-center justify-center text-primary lg:w-1/2">
                        <a href="mailto:emailtozia0@gmail.com">emailtozia0@gmail.com</a>
                    </div>
                </div>
                <div className="flex flex-col sm:justify-between min-h-full items-start lg:flex-row w-full sm:items-center py-0! my-0!">
                    <div className="flex items-center lg:w-1/3 lg:h-full">
                        <Button className="bg-transparent flex p-0 text-xs md:text-sm lg:text-base font-normal md:font-semibold hover:bg-transparent border-none outline-none cursor-pointer text-primary w-full" onClick={() => handleScroll('services')}>
                            <IconPenci />
                            Services
                        </Button>
                    </div>
                    <div className="flex px-4 lg:border-x border-border-col justify-center gap-4 lg:w-1/3 items-center py-4">
                        {socialIcona?.map(SocialLogo => (
                            <div key={SocialLogo?.id} className="bg-border-col w-8 h-8 rounded-full flex justify-center items-center p-2">
                                <SocialLogo.icon />
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-1/3 flex items-center justify-center">
                        <p className="m-0 text-base">&copy; 2088 Nayzak Design</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer