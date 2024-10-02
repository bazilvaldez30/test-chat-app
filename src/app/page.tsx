'use client'

import React, { useState } from 'react'
import MessageItem from './components/MessageItem'
import MessageInput from './components/MessageInput'

import RecentMessages from './components/RecentMessages'

interface Message {
  sender: 'user' | 'Copilot'
  content: string
}

const previousMessage: Message[] = [
  { sender: 'user', content: 'hi how are you today bing ai' },
  {
    sender: 'Copilot',
    content:
      "Hi there! I'm doing great, thanks for asking. How about you? Anything exciting happening today? 😊",
  },
]

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(previousMessage)

  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      const newMessage: Message = { sender: 'user', content: inputMessage }
      setMessages([...messages, newMessage])
      setInputMessage('')
    }
  }

  return (
    <div className='flex h-screen bg-gray-100'>
      <div className='flex-grow flex flex-col p-4'>
        <div className='flex-grow overflow-auto mb-4'>
          {messages.map((message, index) => (
            <MessageItem key={index} message={message} />
          ))}
        </div>
        <MessageInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
      <RecentMessages />
    </div>
  )
}

export default Home
