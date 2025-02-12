import React from 'react'

const NewTask = ({data}) => {
    return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
           <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.tasks[0].category}</h3>
           <h4 className='text-sm'>{data.tasks[0].date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.tasks[0].title}</h2>
        <p className='text-sm mt-2'>{data.tasks[1].decription}</p>
        <div className=' mt-4 '>
                <button className=''>Accept Task</button>
               
        </div>
    </div>
    )
}

export default NewTask