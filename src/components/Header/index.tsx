'use client'
import './styles.scss'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const router = useRouter()

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
      </div>
    </header>
  )
}
