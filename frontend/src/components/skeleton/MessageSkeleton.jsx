import React from 'react'

export const MessageSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    )
}
