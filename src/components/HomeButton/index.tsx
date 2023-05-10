'use client'
import './styles.scss'

import { useRouter } from 'next/navigation'
import { FiArrowLeftCircle } from 'react-icons/fi'

export default function HomeButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/')}>
      <FiArrowLeftCircle />
      Go back
    </button>
  )
}
