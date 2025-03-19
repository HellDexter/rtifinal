import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { getChatResponse } from '../api/chat';
import { ChatMessage, ChatState } from '../types/chat';

const ChatBot: React.FC = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isLoading: false,
    error: null,
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  // Inicializace chatbota při prvním otevření
  useEffect(() => {
    if (chatState.isOpen && !isInitialized) {
      const initializeChat = async () => {
        try {
          setChatState(prev => ({ ...prev, isLoading: true }));
          const response = await getChatResponse('');
          
          const botMessage: ChatMessage = {
            id: Date.now().toString(),
            content: response,
            role: 'assistant',
            timestamp: new Date(),
          };

          setChatState(prev => ({
            ...prev,
            messages: [botMessage],
            isLoading: false,
          }));
          setIsInitialized(true);
        } catch (error) {
          console.error('Error initializing chat:', error);
          setChatState(prev => ({
            ...prev,
            isLoading: false,
            error: 'Nepodařilo se inicializovat chat. Zkuste to prosím později.',
          }));
        }
      };

      initializeChat();
    }
  }, [chatState.isOpen, isInitialized]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
    }));
    setInputMessage('');

    try {
      const response = await getChatResponse(inputMessage);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Chat error:', error);
      setChatState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Omlouváme se, ale došlo k chybě při zpracování vaší zprávy.',
      }));
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Plovoucí tlačítko chatu */}
      <button
        onClick={() => setChatState(prev => ({ ...prev, isOpen: !prev.isOpen }))}
        className="bg-[#0aef0b] hover:bg-[#09d60a] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label={chatState.isOpen ? 'Zavřít chat' : 'Otevřít chat'}
      >
        {chatState.isOpen ? (
          <IoMdClose className="w-6 h-6" />
        ) : (
          <IoChatbubbleEllipsesOutline className="w-6 h-6" />
        )}
      </button>

      {/* Chat okno */}
      <AnimatePresence>
        {chatState.isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 left-0 w-96 h-[600px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Hlavička */}
            <div className="p-4 bg-[#0aef0b] text-white">
              <h3 className="text-lg font-semibold">Robotech Asistent</h3>
              <p className="text-sm opacity-90">Jak vám mohu pomoci?</p>
            </div>

            {/* Zprávy */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatState.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.role === 'user'
                        ? 'bg-[#0aef0b] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {chatState.isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-xl">
                    <p className="text-sm">Píši odpověď...</p>
                  </div>
                </div>
              )}
              {chatState.error && (
                <div className="flex justify-center">
                  <div className="bg-red-100 text-red-600 p-3 rounded-xl">
                    <p className="text-sm">{chatState.error}</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Napište zprávu..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-[#0aef0b]"
                  disabled={chatState.isLoading}
                />
                <button
                  type="submit"
                  disabled={chatState.isLoading || !inputMessage.trim()}
                  className="bg-[#0aef0b] hover:bg-[#09d60a] text-white px-4 py-2 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Odeslat
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
