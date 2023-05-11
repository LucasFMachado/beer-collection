import { IBeer } from '@/utils/types'

export async function getBeersList(filter: string): Promise<IBeer[]> {
  const data = await fetch(
    `https://api.punkapi.com/v2/beers?per_page=20${filter}`,
    {
      cache: 'no-cache',
    },
  )
  const beers: IBeer[] = await data.json()
  return beers
}
