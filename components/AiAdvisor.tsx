
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, MessageSender } from '../types';
import { streamAiAdvisorResponse } from '../services/geminiService';
import { SparklesIcon } from './icons/SparklesIcon';
import { SendIcon } from './icons/SendIcon';
import { UserIcon } from './icons/UserIcon';
import { RobotIcon } from './icons/RobotIcon';

const AiAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: MessageSender.AI,
      text: "Hello! I'm your AI-powered advisor from English Tour Study Abroad. How can I help you explore your study or work abroad options today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: MessageSender.USER, text: input };
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    setMessages((prev) => [
      ...prev,
      userMessage,
      { sender: MessageSender.AI, text: '' },
    ]);
    
    try {
      await streamAiAdvisorResponse(currentInput, (chunk) => {
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.sender === MessageSender.AI) {
            const updatedMessages = [...prev];
            updatedMessages[prev.length - 1] = {
              ...lastMessage,
              text: lastMessage.text + chunk,
            };
            return updatedMessages;
          }
          return prev;
        });
      });
    } catch (error) {
        console.error("Error streaming response:", error);
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
           if (lastMessage.sender === MessageSender.AI) {
              const updatedMessages = [...prev];
              updatedMessages[prev.length - 1] = {
                ...lastMessage,
                text: "An error occurred while getting a response.",
              };
              return updatedMessages;
           }
           return prev;
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center bg-brand-teal text-white rounded-full p-3 mb-4">
             <SparklesIcon />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Your Personal AI Advisor</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Get instant answers to your questions about courses, visas, job markets, and more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-brand-light rounded-xl shadow-2xl border border-gray-200 flex flex-col h-[600px]">
          <div className="flex-grow p-6 space-y-6 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-4 ${msg.sender === MessageSender.USER ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === MessageSender.AI && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white">
                    <RobotIcon />
                  </div>
                )}
                <div className={`max-w-md p-4 rounded-2xl ${msg.sender === MessageSender.USER ? 'bg-brand-blue text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
                 {msg.sender === MessageSender.USER && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                    <UserIcon />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about studying in the UK..."
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-teal transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-brand-teal text-white rounded-full p-3 hover:bg-brand-blue disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
                disabled={isLoading}
              >
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAdvisor;