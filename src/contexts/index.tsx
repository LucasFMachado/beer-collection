import type { ReactNode } from 'react'

import { BeerProvider } from './BeerContext'

interface IContextProviderProps {
  children: ReactNode
}

export function ContextProvider({ children }: IContextProviderProps) {
  return <BeerProvider>{children}</BeerProvider>
}
