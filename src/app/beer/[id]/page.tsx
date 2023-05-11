import './styles.scss'

import Image from 'next/image'
import { getBeerInfo } from '@/requests/getBeerInfo'
import Wrapper from '@/components/Wrapper'
import Table from '@/components/Table'
import HomeButton from '@/components/HomeButton'

interface IBeerProps {
  params: {
    id: number
  }
}

export default async function Beer({ params }: IBeerProps) {
  let beer = await getBeerInfo(params.id)

  return (
    <Wrapper flexColumn>
      <HomeButton />
      <div className="beer_presentation">
        <h3>{beer.name}</h3>
        <Image src={beer.image_url} alt={beer.name} width={100} height={250} />

        <div className="beer_description">
          <p className="title">About:</p>
          <p>{beer.description}</p>
        </div>

        <div className="stats">
          <p className="title">Stats:</p>
          <Table beer={beer} />
        </div>
      </div>
    </Wrapper>
  )
}
