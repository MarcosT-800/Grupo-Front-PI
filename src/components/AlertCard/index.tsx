'use client'
import React from 'react'


type AlertCardProps = {
	message : string
    show: boolean
};

function AlertCard({
    message,
    show
} : AlertCardProps) {
  return (
    <div className={show 
    ? 'w-max h-max rounded-md border-[1px] p-2 z-50 fixed right-4 top-36 bg-[#ffff] shadow-md transition-all delay-300' 
    : 'w-max h-max rounded-md border-[1px] p-2 z-50 fixed right-[-2000px] top-36 bg-[#ffff] shadow-md transition-all delay-300'} > 
        <span>{message}</span>
    </div>
  )
}

export default AlertCard