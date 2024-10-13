import React from 'react'

const EducationCard = ({title, content, duration}: {title: string, content:string, duration: string}) => {
    return (
        <div className='bg-gray-800 p-5 rounded-md border-2 border-transparent hover:border-green-400 transition-colors duration-200 flex items-center justify-start gap-2 select-none'>
            <div className='flex flex-col'>
                <h3 className='text-xl font-semibold text-gray-300'>{title}</h3>
                <p className='text-sm text-gray-500 py-3'>{content}</p>
                <p className='text-green-500'>{duration}</p>
            </div>
        </div>
    )
}

export default EducationCard
