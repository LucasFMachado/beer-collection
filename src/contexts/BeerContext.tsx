'use client'

import { getBeersList } from '@/requests/getBeersList'
import { IBeer } from '@/utils/types'
import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

interface IBeerProviderProps {
  children: ReactNode
}

interface IBeerContext {
  beers: IBeer[]
  getBeers: (filter: string) => void
}

const BeerContext = createContext({} as IBeerContext)

const BeerProvider = ({ children }: IBeerProviderProps) => {
  const [beers, setBeers] = useState<IBeer[]>([])

  async function getBeers(search = '') {
    let filter = ''
    if (search) {
      filter = `&beer_name=${search}`
    }

    const beers = await getBeersList(filter)
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
