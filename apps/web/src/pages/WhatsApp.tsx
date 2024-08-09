import React from "react";
import ChatList from "@/components/ChatList";
import ChatListSearch from "@/components/ChatListSearch";
import ChatListFilter from "@/components/ChatListFilter";
import { MdEmojiEmotions } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";

const WhatsApp: React.FC = () => {
  return (
    <div className="flex h-screen text-gray-100">

      <aside className="w-1/3 bg-customDarkGreen border-r border-customGrey flex flex-col">
        <header className="flex items-center p-3.5 bg-customLightGreen border-b border-none">
          <img
            src="hyerdev.png"
            alt="HyerDev"
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <h2 className="text-lg font-semibold">Hyerdev Chats</h2>
        </header>

        <div className="flex items-center p-4">
          <ChatListSearch />
          <div className="ml-3">
            <ChatListFilter />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ChatList />
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-customDarkGreen">
        <header className="p-6 bg-customLightGreen">
          <h2 className="text-lg font-semibold">Chat Name</h2>
        </header>

        <div className="flex-1 p-4 overflow-y-auto bg-[url('/wallpaper.png')] bg-cover bg-center">
          <div className="mb-2 flex justify-start">
            <div className="bg-customMessageReceived p-3 rounded inline-block">Message from contact</div>
          </div>
          <div className="mb-2 flex justify-end">
            <div className="bg-customMessageSend p-3 rounded inline-block text-gray-100">My message</div>
          </div>
        </div>

        <footer className="p-4 bg-customLightGreen border-t border-customGrey flex items-center">
          <div className="flex items-center">
            <MdEmojiEmotions style={{ color: '#62717a', fontSize: '25px', marginRight: '20px' }} />
            <FaPlus style={{ color: '#62717a', fontSize: '25px' }} />
          </div>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 mx-4 p-2 border border-customGrey bg-customLighterGreen text-gray-100 rounded"
            style={{outline:'none'}}
          />
          <AiFillAudio style={{ color: '#62717a', fontSize: '25px' }} />
        </footer>
      </main>
    </div>
  );
}

export default WhatsApp;
