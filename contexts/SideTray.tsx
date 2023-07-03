"use client"
import { createContext, useState } from "react"

export interface SideTray {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SideTrayContextProps {
    isOpen: SideTray
    setIsOpen:  React.Dispatch<React.SetStateAction<SideTray>>
}

export const initialState: SideTray = {
    isOpen: false,
    setIsOpen: ()=>{}
}

export const SideTrayContext = createContext<SideTrayContextProps>({
    isOpen: initialState,
    setIsOpen:()=>{}
})

export interface Props {
    children: React.ReactNode
}

export const SideTrayContextProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(initialState)
    
    return <SideTrayContext.Provider value={{isOpen, setIsOpen}}>
        {children}
    </SideTrayContext.Provider>
}