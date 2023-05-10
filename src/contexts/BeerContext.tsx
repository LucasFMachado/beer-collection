'use client'

import { getBeersList } from '@/requests/getBeersList'
import { IBeer } from '@/utils/types'
// import { destroyCookie, parseCookies, setCookie } from 'nookies'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

interface IBeerProviderProps {
  children: ReactNode
}

interface IBeerContext {
  beers: IBeer[]
  getBeers: () => void
}

const BeerContext = createContext({} as IBeerContext)

const BeerProvider = ({ children }: IBeerProviderProps) => {
  const [beers, setBeers] = useState<IBeer[]>([])

  async function getBeers() {
    const beers = await getBeersList()
    setBeers(beers)
  }

  return (
    <BeerContext.Provider
      value={{
        beers,
        getBeers,
      }}
    >
      {children}
    </BeerContext.Provider>
  )
}

const useBeer = () => useContext(BeerContext)

export { BeerContext, BeerProvider, useBeer }
