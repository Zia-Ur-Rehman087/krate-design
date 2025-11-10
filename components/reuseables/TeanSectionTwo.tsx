'use client'
import React, { useMemo, useState } from 'react'
import { teamData } from '@/utils/enums/teamData'
import TeamCard from '../common/TeamCard'
import IconButtonArrow from '../icons/IconButtonArrow'
import { Button } from '../ui/button'
import useWindowSize from '@/utils/functions/HandleResize'
const TeamSectionTwo = () => {
    const { width } = useWindowSize()
    const [visibleDataCount, setVisibleDataCount] = useState(4)
    const visibleData = useMemo(() => teamData.slice(0, visibleDataCount), [visibleDataCount]);
    const handleLoadMore = () => {
    const currentPoint = 4;

    if (visibleDataCount < teamData?.length) {
        setVisibleDataCount(prev => prev + currentPoint);  
    } else {
        setVisibleDataCount(currentPoint);  
    }
};
    return (
        <div className="flex flex-col gap-5">
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-8 `}>
                {
                    visibleData?.map(team => (
                        <TeamCard key={team?.id} name={team?.name} image_url={team?.image} designation={team?.designation} className={`${visibleData.includes(team) ? 'animate-fadeInUp' : ''}`} />
                    ))
                }
            </div>
            <div className="group w-full">
                <Button
                    onClick={handleLoadMore}
                    className="w-full! bg-transparent text-white! border border-border-col rounded-full py-6! group-hover:bg-white! cursor-pointer group-hover:text-black! font-semibold"
                >
                    See all members
                    <IconButtonArrow className="text-white group-hover:text-black" />
                </Button>
            </div>
        </div>

    )
}

export default TeamSectionTwo