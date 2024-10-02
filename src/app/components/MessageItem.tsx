import React from 'react'
import {
  ThumbsUp,
  ThumbsDown,
  Copy,
  ArrowDown,
  Repeat,
  Volume2,
} from 'lucide-react'

interface MessageItemProps {
  message: {
    sender: 'user' | 'Copilot'
    content: string
  }
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <div className='flex items-start mb-4'>
      <div className='mr-3'>
        {message.sender === 'user' ? (
          <img
            src='/profile-user.png'
            alt='User'
            className='w-8 h-8 rounded-full'
          />
        ) : (
          <img
            src='/copilot-icon.png'
            alt='Copilot'
            className='w-8 h-8 rounded-full'
          />
        )}
      </div>
      <div
        className={`rounded-lg p-3 max-w-3/4 min-w-20 ${
          message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white'
        }`}
      >
        <span className='text-lg capitalize font-bold'>
          {message.sender === 'user' ? 'You' : message.sender}
        </span>
        <p>{message.content}</p>
        {message.sender === 'Copilot' && (
          <div className='flex mt-2 text-gray-500'>
            <ThumbsUp className='w-4 h-4 mr-2 cursor-pointer' />
            <ThumbsDown className='w-4 h-4 mr-2 cursor-pointer' />
            <Copy className='w-4 h-4 mr-2 cursor-pointer' />
            <ArrowDown className='w-4 h-4 mr-2 cursor-pointer' />
            <Repeat className='w-4 h-4 mr-2 cursor-pointer' />
            <Volume2 className='w-4 h-4 cursor-pointer' />
            <span className='ml-2 text-xs'>1 of 30</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageItem
