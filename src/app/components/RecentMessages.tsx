import React from 'react'
import { Pencil, Trash2, MoreHorizontal } from 'lucide-react'

const RecentMessages: React.FC = () => {
  return (
    <div className='w-96 bg-gray-200 p-4 border-l border-gray-200'>
      <h2 className='mb-2 text-sm'>Recents</h2>
      <div className='border border-gray-500 rounded-lg shadow-sm overflow-hidden p-1'>
        <div className='flex items-center bg-white rounded-lg'>
          <div className='w-1 h-8 ms-1 bg-blue-500 mr-3'></div>
          <span className='text-sm text-gray-800 flex-grow'>
            Friendly Greeting
          </span>
          <div className='flex items-center space-x-2 p-3'>
            <Pencil className='w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer' />
            <Trash2 className='w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer' />
            <MoreHorizontal className='w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='border-gray-400 border rounded-lg p-3 mt-4 flex justify-between items-center px-6'>
        <p className='text-sm'>Personalization is currently off</p>
        <button className='text-blue-500 text-sm mt-1 font-semibold'>
          Turn on
        </button>
      </div>
    </div>
  )
}

export default RecentMessages
