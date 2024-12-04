"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  userEmail: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  cart: any[]; // Replace 'any' with a more specific type if you have a defined cart item type
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userEmail, setUser] = useState<string | null>(null);
  const [cart, setCart] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ userEmail, setUser, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

