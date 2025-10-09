import { create } from 'zustand';

export const useConversation = create((set, get) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: [],
  // 🧩 Updated to support functional updates
  setMessages: (updater) => {
    if (typeof updater === 'function') {
      // If you pass a function, it receives the current messages array
      set({ messages: updater(get().messages) });
    } else {
      // If you pass a direct array
      set({ messages: updater });
    }
  },
}));

