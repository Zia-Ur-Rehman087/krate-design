import React from 'react'
import Image from 'next/image'

const TeamCard = ({
    image_url,
    name,
    designation,
    className
}:
    {
        image_url: string,
        name: string,
        designation: string
        className?: string
    }
) => {
    return (
        <div className={`flex flex-col gap-2  rounded-3xl overflow-hidden border border-border-col ${className}`}>
            <div className="relative h-80">
                <Image
                    src={image_url}
                    fill
                    alt={name}
                    className="w-full h-full grayscale"
                />
            </div>
            <div className="flex flex-col py-4 px-6">
                <h2 className="text-xl  font-semibold">{name}</h2>
                <p className="text-primary font-semibold">{designation}</p>
            </div>
        </div>
    )
}

export default TeamCard