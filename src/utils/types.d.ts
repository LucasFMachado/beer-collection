export interface IBeer {
  id: number
  name: string
  image_url: string
  description: string
  volume: {
    value: number
    unit: string
  }
  abv: number
  ibu: number
  ph: number
  attenuation_level: number
}
