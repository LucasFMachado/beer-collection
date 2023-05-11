'use client'
import './styles.scss'

import { debounce } from 'lodash'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ChangeEvent, useCallback, useState } from 'react'
import { useBeer } from '@/contexts/BeerContext'

export default function Header() {
  const router = useRouter()
  const path = usePathname()
  const { getBeers } = useBeer()
  const [search, setSearch] = useState('')

  const debounceFn = useCallback(debounce(handleDebounceFn, 300), [])
  function handleDebounceFn(filter: string) {
    getBeers(filter)
  }

  async function handleSearch({ target }: ChangeEvent<HTMLInputElement>) {
    console.log('target', target.value)
    setSearch(target.value)
    debounceFn(target.value)
  }

  return (
    <header>
      <div className="header_content">
        <div className="home">
          <Image
            src="/beer.png"
            alt="Application logo"
            width={30}
            height={30}
          />
          <h1 onClick={() => router.push('/')}>Beer Collection</h1>
        </div>
        {path === '/' && (
          <input
            value={search}
            onChange={handleSearch}
            placeholder="Search.."
          />
        )}
      </div>
    </header>
  )
}
