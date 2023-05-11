import './styles.scss'

import { IBeer } from '@/utils/types'

interface ITableProps {
  beer: IBeer
}

export default function Table({ beer }: ITableProps) {
  return (
    <table>
      <tbody>
        <tr>
          <td>ABV (alcohol by volume)</td>
          <td>
            <strong>{beer.abv}</strong>
          </td>
        </tr>
        <tr>
          <td>IBU (international bittering unit)</td>
          <td>
            <strong>{beer.ibu}</strong>
          </td>
        </tr>
        <tr>
          <td>PH</td>
          <td>
            <strong>{beer.ph}</strong>
          </td>
        </tr>
        <tr>
          <td>Attenuation level</td>
          <td>
            <strong>{beer.attenuation_level}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
