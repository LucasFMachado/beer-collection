'use client'
import './styles.scss'

import BeerCard from '@/components/Card'
import Wrapper from '@/components/Wrapper'
import { useBeer } from '@/contexts/BeerContext'
import { useEffect } from 'react'

export default function Home() {
  const { getBeers, beers } = useBeer()

  useEffect(() => {
    getBeers()
  }, [])

  return (
    <Wrapper>
      {beers.map(beer => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </Wrapper>
  )
}
