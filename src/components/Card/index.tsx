'use client'
import './styles.scss'

import { IBeer } from '@/utils/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface IBeerCardProps {
  beer: IBeer
}

export default function BeerCard({ beer }: IBeerCardProps) {
  const router = useRouter()

  return (
    <div className="card">
      <div className="beer_info">
        <Image src={beer.image_url} alt={beer.name} width={75} height={150} />
        <p>{beer.name}</p>
        <button onClick={() => router.push(`/${beer.id}`)}>View more</button>
      </div>
    </div>
  )
}
