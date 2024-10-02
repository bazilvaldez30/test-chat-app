import React from 'react'
import { MessageCircle, ArrowRight } from 'lucide-react'

interface MessageInputProps {
  inputMessage: string
  setInputMessage: React.Dispatch<React.SetStateAction<string>>
  handleSendMessage: (e: React.FormEvent) => void
}

const MessageInput: React.FC<MessageInputProps> = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
}) => {
  return (
    <div className='flex items-center'>
      <div className='mr-2 bg-blue-500 rounded-full p-2'>
        <MessageCircle className='w-6 h-6 text-white' />
      </div>
      <form
        onSubmit={handleSendMessage}
        className='flex-grow flex items-center bg-white rounded-full shadow-md'
      >
        <input
          type='text'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder='Ask me anything...'
          className='flex-grow p-3 bg-transparent focus:outline-none'
        />
        <button type='submit' className='p-2 text-gray-400 hover:text-gray-600'>
          <ArrowRight className='w-6 h-6' />
        </button>
      </form>
    </div>
  )
}

export default MessageInput
