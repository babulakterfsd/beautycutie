'use client'
import { createContext } from 'react';
import useAllStates from '../hooks/useAllStates';

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const allContexts = useAllStates();
    return <AppContext.Provider value={allContexts}>{children}</AppContext.Provider>;
}

export default AppContextProvider;