import { IBeer } from '@/utils/types'

export async function getBeerInfo(id: number): Promise<IBeer> {
  const data = await fetch(`https://api.punkapi.com/v2/beers/${id}`, {
    cache: 'no-cache',
  })
  const beerArray = await data.json()
  const beer: IBeer = beerArray[0]
  return beer
}
